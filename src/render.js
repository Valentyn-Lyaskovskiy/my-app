import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { addPost } from "./Redux/state";

export const rerenderEntireTree = (state) => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App state={state} addPost={addPost} />);
};
