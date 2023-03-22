import React from "react";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className="dialog-items">
        <div className={`${s.dialog} ${s.active}`}>John</div>
        <div className="dialog">Amy</div>
        <div className="dialog">Mike</div>
        <div className="dialog">Greg</div>
      </div>
      <div className="messages">
        <div className="message">Hi, buddy!</div>
        <div className="message">Ping me when you are free.</div>
        <div className="message">Hasta la vista!</div>
        <div className="message">I'm off!</div>
      </div>
    </div>
  );
};

export default Dialogs;
