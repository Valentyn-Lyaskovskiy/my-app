import React from "react";
import s from "./MyPosts.module.css";
import Post from ".././Post/Post";

const MyPosts = (props) => {
  return (
    <div>
      My Posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        <Post message="Hi, dear Christine!" likes="23" />
        <Post message="Hope you are fine!" likes="8" />
      </div>
    </div>
  );
};

export default MyPosts;
