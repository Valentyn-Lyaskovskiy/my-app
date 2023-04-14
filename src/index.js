import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from './Redux/state';

const root = ReactDOM.createRoot(document.getElementById("root"));

let rerenderEntireTree = (state) => {
  root.render(<App
    state={state}
    dispatch={store.dispatch.bind(store)}
  // addPost={store.addPost.bind(store)}
  // updatePost={store.updatePost.bind(store)}
  // addDialogPost={store.addDialogPost.bind(store)}
  />);
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
