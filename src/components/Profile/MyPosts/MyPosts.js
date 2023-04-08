import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  const postElements = props.posts.map((post) => (
    <Post message={post.message} likes={post.likes} />
  ));

  const newPostEl = React.createRef();

  const addPost = () => {
    props.addPost();
  };
  const postChange = () => {
    const text = newPostEl.current.value;
    props.updatePost(text);
  };

  return (
    <div className={s.posts}>
      <div className={s.posts__wrapper}>
        <textarea
          onChange={postChange}
          ref={newPostEl}
          value={props.newPostText}
        />
        <button onClick={addPost} className={s.posts__btn}>
          Add a Post
        </button>
      </div>
      <div>{postElements}</div>
    </div>
  );
};

export default MyPosts;
