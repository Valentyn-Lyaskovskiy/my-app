import profileReducer from "./profile-reducer.js";
import dialogReducer from "./dialog-reducer.js";

let store = {
  _callSubscriber() {
    console.log("React");
  },
  _state: {
    profilePage: {
      posts: [
        {
          id: 1,
          message: "Hi, dear Christine!",
          likes: 23,
        },
        {
          id: 2,
          message: "Hope you are fine!",
          likes: 8,
        },
        {
          id: 3,
          message: "I got my salary today!",
          likes: 11,
        },
      ],
      newPostText: "",
    },
    messagePage: {
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
    },
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  getState() {
    return this._state;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagePage = dialogReducer(this._state.messagePage, action);
  },
};

window.store = store;

export default store;
