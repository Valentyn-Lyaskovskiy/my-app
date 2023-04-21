const ADD_DIALOG_POST = "ADD-DIALOG-POST";
const UPDATE_DIALOG_POST = "UPDATE-DIALOG-POST";

let initialState = {
  messages: [
    {
      message: "Hi, buddy!",
    },
    {
      message: "Ping me when you are free.",
    },
    {
      message: "Hasta la vista!",
    },
    {
      message: "Bye for now!",
    },
  ],
  dialogs: [
    {
      name: "John",
      id: 1,
    },
    {
      name: "Amy",
      id: 2,
    },
    {
      name: "Mike",
      id: 3,
    },
    {
      name: "Greg",
      id: 4,
    },
  ],
  newMessageText: "",
}

const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DIALOG_POST:
      let body = state.newMessageText;
      state.newMessageText = "";
      state.messages.push({ message: body });
      return state;
    case UPDATE_DIALOG_POST:
      state.newMessageText = action.body;
      return state;
    default:
      return state;
  }
};

export const sendPostActionCreator = () => ({ type: ADD_DIALOG_POST, });

export const addDialogPostActionCreator = (body) => ({ type: UPDATE_DIALOG_POST, body });

export default dialogReducer;
