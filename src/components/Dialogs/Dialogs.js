import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialogItems}>
      <NavLink className={(navData) => (navData.isActive ? s.active : s.dialog)} to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return (
    <div className={s.message}>
      {props.message}
    </div>
  )
}

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        <DialogItem name="John" id="1" />
        <DialogItem name="Amy" id="2" />
        <DialogItem name="Mike" id="3" />
        <DialogItem name="Greg" id="4" />
      </div>

      <div className={s.messages}>
        <Message message='Hi, buddy!' />
        <Message message='Ping me when you are free.' />
        <Message message='Hasta la vista!' />
        <Message message="I'm off!" />
      </div>
    </div>
  );
};

export default Dialogs;
