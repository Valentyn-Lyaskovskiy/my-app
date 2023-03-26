import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const DialogItem = (props) => {
  let path = "dialogs/ + props.id";
  return (
    <div className={s.dialog}>
      <NavLink to={path}> {props.name}</NavLink>
    </div>
  );
};
const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className="dialog-items">
        <DialogItem name="John" id="1" />
        <div className={`${s.dialog} ${s.active}`}>
          <NavLink to="dialogs/2">Amy</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="dialogs/3">Mike</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="dialogs/4">Greg</NavLink>
        </div>
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
