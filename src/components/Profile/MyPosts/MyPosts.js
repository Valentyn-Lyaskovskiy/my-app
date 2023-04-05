import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  const postElements = props.posts.map((post) => (
    <Post message={post.message} likes={post.likes} />
  ));

  const newPostEl = React.createRef();

  const addPost = () => {
    const text = newPostEl.current.value;
    props.addPost(text);
  };

  return (
    <div className={s.posts}>
      <div className={s.posts__wrapper}>
        <textarea ref={newPostEl}></textarea>
        <button onClick={addPost} className={s.posts__btn}>
          Add a Post
        </button>
      </div>
      <div>{postElements}</div>
    </div>
  );
};

export default MyPosts;
