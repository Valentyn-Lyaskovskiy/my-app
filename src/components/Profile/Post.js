import React from "react";
import s from "./Post.module.css";
// import logo from "./logo.svg";


const Post = (props) => {
  return (
    <div className={s.like}>
      <img src='https://www.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg' alt="image" />
      <span> 23 Like 👍</span>
    </div>
  );
};

export default Post;
