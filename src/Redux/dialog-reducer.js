const ADD_DIALOG_POST = "ADD-DIALOG-POST";
const UPDATE_DIALOG_POST = "UPDATE-DIALOG-POST";

const dialogReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_DIALOG_POST:
      state.newMessageText = action.body;
      return state;
    case ADD_DIALOG_POST:
      let res = state.newMessageText;
      state.newMessageText = '';
      state.messages.push({ message: res })
      return state;
    default:
      return state;
  }
};

export const sendPostActionCreator = () => {
  return {
    type: ADD_DIALOG_POST,
  };
};

export const addDialogPostActionCreator = (postText) => {
  return {
    type: UPDATE_DIALOG_POST,
    body: postText
  };
};

export default dialogReducer;

