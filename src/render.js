import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { addPost, updatePost } from "./Redux/state";

const root = ReactDOM.createRoot(document.getElementById("root"));
export const rerenderEntireTree = (state) => {
  root.render(<App state={state} addPost={addPost} updatePost={updatePost} />);
};
