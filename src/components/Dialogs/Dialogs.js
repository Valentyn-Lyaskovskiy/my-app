import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const dialogs = [
  {
    name: "John",
    id: 1
  },
  {
    name: "Amy",
    id: 2
  },
  {
    name: "Mike",
    id: 3
  },
  {
    name: "Greg",
    id: 4
  },
]

const dialogEl = dialogs.map(d => <DialogItem name={d.name} id={d.id} />)

const messages = [
  {
    message: "Hi, buddy!"
  },
  {
    message: "Ping me when you are free."
  },
  {
    message: "Hasta la vista!"
  },
  {
    message: "Bye for now!"
  }
]

const messageEl = messages.map(m => <Message message={m.message} />)

const Dialogs = (props) => {
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
