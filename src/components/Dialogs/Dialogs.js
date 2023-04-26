import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let state = props.messagePage;

  const messageEl = state.messages.map((m) => <Message message={m.message} />);

  const dialogEl = state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let newMessageText = state.newMessageText;

  const addPost = () => {
    props.addPost();
  };

  const changePost = (e) => {
    let body = e.target.value;
    props.changePost(body);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>{dialogEl}</div>
      <div className={s.messages}>{messageEl}</div>
      <div className={s.posts}>
        <textarea
          className={s.textarea}
          placeholder="Enter your message"
          onChange={changePost}
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
