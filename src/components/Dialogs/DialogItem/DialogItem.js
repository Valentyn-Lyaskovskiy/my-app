import React from "react";
import "./DialogItem.module.css";
import { NavLink } from "react-router-dom";
import s from "./../Dialogs.module.css";
import styles from "./DialogItem.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  const newPost = React.createRef();
  const addPost = () => {
    const text = newPost.current.value;
    alert(text);
  };

  return (
    <div className={s.dialogItems}>
      <NavLink
        className={(navData) => (navData.isActive ? s.active : s.dialog)}
        to={path}>{props.name}
      </NavLink>
      <div className={styles.posts}>
        <textarea ref={newPost}></textarea>
        <button className={styles.posts__btn} onClick={addPost}>
          Add a Post
        </button>
      </div>
    </div>
  );
};

export default DialogItem;
