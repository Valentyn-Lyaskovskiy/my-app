let rerenderEntireTree = () => {
  console.log("React");
};

const state = {
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
};

window.state = state;

export const addPost = () => {
  const newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likes: 0,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state);
};

export const updatePost = (text) => {
  state.profilePage.newPostText = text;
  rerenderEntireTree(state);
};

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
};

export const addDialogPost = (text) => {
  const newDialogPost = {
    message: text,
    id: 1,
  };
  state.messagePage.messages.push(newDialogPost);
  rerenderEntireTree(state);
};

export default state;
