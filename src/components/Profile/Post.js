import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.like}>
      <span> 23 Like 👍</span>
    </div>
  );
};

export default Post;
