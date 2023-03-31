import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

  const dialogEl = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
  const messageEl = props.messages.map(m => <Message message={m.message} />)

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        {dialogEl}
      </div>
      <div className={s.messages}>
        {messageEl}
      </div>
    </div>
  );
};

export default Dialogs;
