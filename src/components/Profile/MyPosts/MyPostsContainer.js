import React from "react";
import {
  addPostActionCreator,
  updatePostActionCreator,
} from "../../../Redux/profile-reducer.js";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  let state = props.store.getState();

  function addPost() {
    props.store.dispatch(addPostActionCreator());
  }

  function postChange(text) {
    let action = updatePostActionCreator(text);
    props.store.dispatch(action);
  }

  return (
    <MyPosts updateNewPostText={postChange}
      addPost={addPost}
      posts={state.profilePage.posts}
      newPostText={state.profilePage.newPostText}
    />
  );
};

export default MyPostsContainer;
