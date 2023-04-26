import React from "react";
import {
  addDialogPostActionCreator,
  sendPostActionCreator,
} from "../../Redux/dialog-reducer.js";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  let state = props.store.getState();

  const addPost = () => {
    props.store.dispatch(sendPostActionCreator());
  };

  const changePost = (body) => {
    props.store.dispatch(addDialogPostActionCreator(body));
  };

  return (
    <Dialogs
      addPost={addPost}
      changePost={changePost}
      messagePage={state}
      dialogs={state.messagePage.dialogs}
    />
  );
};

export default DialogsContainer;
