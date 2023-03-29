import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.posts}>
      <p>{props.message}<span className={s.post}>{props.likes}</span>
      </p>
    </div>
  )
}

export default Post;
