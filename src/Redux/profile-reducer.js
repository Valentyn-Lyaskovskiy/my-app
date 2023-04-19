const ADD_POST = "ADD-POST";
const UPDATE_POST = "UPDATE-POST";

const profileReducer = (state, action) => {
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

export const updatePostActionCreator = (text) => ({
  type: UPDATE_POST,
  text,
});

export default profileReducer;
