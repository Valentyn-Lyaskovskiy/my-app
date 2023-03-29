import React from "react";
import "./DialogItem.module.css";
import { NavLink } from "react-router-dom";
import s from "./../Dialogs.module.css";

const DialogItem = (props) => {

  let path = "/dialogs/" + props.id;

  return (
    <div className={s.dialogItems}>
      <NavLink className={(navData) => (navData.isActive ? s.active : s.dialog)} to={path}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;