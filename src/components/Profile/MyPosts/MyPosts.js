import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

  const postElements = props.posts.map((post) => (
    <Post message={post.message} likes={post.likes} />
  ));

  return (
    <div className={s.posts}>
      <div className={s.posts__wrapper}>
        <textarea></textarea>
        <button className={s.posts__btn}>Add a Post</button>
      </div>
      <div>
        {postElements}
      </div>
    </div>
  );
};

export default MyPosts;
