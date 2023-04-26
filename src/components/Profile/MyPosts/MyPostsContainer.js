import React from "react";
import {
  addPostActionCreator,
  updatePostActionCreator,
} from "../../../Redux/profile-reducer.js";
import MyPosts from "./MyPosts";

function MyPostsContainer(props) {
  debugger;
  let state = props.store;

  function addPost() {
    props.store.dispatch(addPostActionCreator());
  }

  function postChange(text) {
    let action = updatePostActionCreator(text);
    props.store.dispatch(action);
  }

  return (
    <MyPosts
      updateNewPostText={postChange}
      addPost={addPost}
      posts={props.store.profilePage.posts}
      newPostText={props.store.profilePage.newPostText}
    />
  );
};

export default MyPostsContainer;
