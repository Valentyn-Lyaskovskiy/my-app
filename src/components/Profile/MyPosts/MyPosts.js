import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const posts = [
  {
    id: 1,
    message: "Hi, dear Christine!",
    likes: 23
  },
  {
    id: 2,
    message: "Hope you are fine!",
    likes: 8
  },
  {
    id: 3,
    message: "I got my salary today!",
    likes: 11
  }
]

const postElements = posts.map(post => < Post message={post.message} likes={post.likes} />)
console.log(postElements);
const MyPosts = (props) => {
  return (
    <div>
      My Posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        {postElements}
        {/* <Post message={posts[0].message} likes={posts[0].likes} />
        <Post message={posts[1].message} likes={posts[1].likes} /> */}
      </div>
    </div>
  );
};

export default MyPosts;
