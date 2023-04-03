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
  },
  messagePage: {
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
  },
};

export default state;
