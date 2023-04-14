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
    },
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  getState() {
    return this._state;
  },
  // addPost() {
  //   const newPost = {
  //     id: 5,
  //     message: this._state.profilePage.newPostText,
  //     likes: 0,
  //   };
  //   this._state.profilePage.posts.push(newPost);
  //   this._state.profilePage.newPostText = "";
  //   this._callSubscriber(this._state);
  // },
  // updatePost(text) {
  //   this._state.profilePage.newPostText = text;
  //   this._callSubscriber(this._state);
  // },
  // addDialogPost(text) {
  //   const newDialogPost = {
  //     message: text,
  //     id: 0,
  //   };
  //   this._state.messagePage.messages.push(newDialogPost);
  //   this._callSubscriber(this._state);
  // },
  dispatch(action) {
    if (action.type === 'ADD-POST') {
      const newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likes: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-POST') {
      this._state.profilePage.newPostText = action.text;
      this._callSubscriber(this._state);
    } else if (action.type === 'ADD-DIALOG-POST') {
      const newDialogPost = {
        message: action.text,
        id: 0,
      };
      this._state.messagePage.messages.push(newDialogPost);
      this._callSubscriber(this._state);
    }
  }
};

window.store = store;

export default store;