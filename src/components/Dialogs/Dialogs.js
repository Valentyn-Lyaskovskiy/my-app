import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const DialogItem = (props) => {
  let path = "dialogs/ + props.id";
  return (
    <div>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};
const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogItem}>
        <DialogItem name="John" id="1" />
        <DialogItem name="Amy" id="2" />
        <DialogItem name="Mike" id="3" />
        <DialogItem name="Greg" id="4" />
      </div>
      <div className="messages">
        <div className={s.message}>Hi, buddy!</div>
        <div className={s.message}>Ping me when you are free.</div>
        <div className={s.message}>Hasta la vista!</div>
        <div className={s.message}>I'm off!</div>
      </div>
    </div>
  );
};

export default Dialogs;
