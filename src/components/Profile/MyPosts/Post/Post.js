import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.posts}>
      <h4>
        {props.message}
        <span className={s.post}>{props.likes}</span>
      </h4>
    </div>
  );
};

export default Post;
