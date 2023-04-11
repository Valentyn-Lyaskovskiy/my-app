import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { addDialogPost, addPost, subscribe, updatePost } from "./Redux/state";
import state from "./Redux/state";

const root = ReactDOM.createRoot(document.getElementById("root"));

let rerenderEntireTree = () => {
  root.render(
    <App
      state={state}
      addPost={addPost}
      updatePost={updatePost}
      addDialogPost={addDialogPost}
    />
  );
};

rerenderEntireTree(state);

subscribe(rerenderEntireTree);
