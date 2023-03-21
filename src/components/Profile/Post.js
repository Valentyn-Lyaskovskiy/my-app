import React from "react";

const Post = (props) => {
  return (
    <div className="header">
      {props.message}
      <div>
        <span>Like 👍</span>
      </div>
    </div>
  );
};

export default Post;
