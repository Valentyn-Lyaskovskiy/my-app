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

  const changePost = (text) => {
    let action = addDialogPostActionCreator(text);
    props.store.dispatch(action);
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
