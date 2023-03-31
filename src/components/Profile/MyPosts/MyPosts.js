import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  const postElements = props.posts.map((post) => (
    <Post message={post.message} likes={post.likes} />
  ));
  return (
    <div>
      My Posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        {/* <Post message={posts[0].message} likes={posts[0].likes} />
        <Post message={posts[1].message} likes={posts[1].likes} /> */}
        {postElements}
      </div>
    </div>
  );
};

export default MyPosts;
