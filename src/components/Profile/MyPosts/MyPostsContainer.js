import React from "react";
import {
  addPostActionCreator,
  updatePostActionCreator,
} from "../../../Redux/profile-reducer.js";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

  function addPost() {
    // props.addPost();
    props.dispatch(addPostActionCreator());
  }

  function postChange(text) {
    // let text = newPostEl.current.value;
    // props.updatePost(text);
    let action = updatePostActionCreator(text);
    props.dispatch(action);
  }

  return (
    <MyPosts updatePost={postChange} addPost={addPost} posts={props.posts} />
  );
};

export default MyPostsContainer;
