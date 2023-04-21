const ADD_POST = "ADD-POST";
const UPDATE_POST = "UPDATE-POST";

let initialState = {
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
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: 5,
        message: state.newPostText,
        likes: 0,
      };
      state.newPostText = "";
      state.posts.push(newPost);
      return state;
    case UPDATE_POST:
      state.newPostText = action.text;
      return state;
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updatePostActionCreator = (text) => ({ type: UPDATE_POST, text, });

export default profileReducer;
