import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
  addDialogPostActionCreator,
  sendPostActionCreator,
} from "../../Redux/dialog-reducer.js";

const Dialogs = (props) => {
  const dialogEl = props.state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  const messageEl = props.state.messages.map((m) => (
    <Message message={m.message} />
  ));

  let newMessageText = props.state.newMessageText;

  const newPost = React.createRef();

  const addPost = () => {
    props.dispatch(sendPostActionCreator());
  };

  const changePost = () => {
    const text = newPost.current.value;
    let action = addDialogPostActionCreator(text);
    props.dispatch(action);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>{dialogEl}</div>
      <div>
        <div>{messageEl}</div>
      </div>
      <div className={s.posts}>
        <textarea
          className={s.textarea}
          placeholder="Enter your message"
          onChange={changePost}
          ref={newPost}
          value={newMessageText}
        />
        <button className={s.posts__btn} onClick={addPost}>
          Add a Post
        </button>
      </div>
    </div>
  );
};

export default Dialogs;
