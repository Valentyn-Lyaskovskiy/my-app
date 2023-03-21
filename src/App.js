import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Post from "./components/Profile/Post";
import logo from "./logo.svg";

const App = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Menu />
        <Route Component={Dialogs} />
        <Route Component={Profile} />
      </div>
    </BrowserRouter>
  );
};

export default App;
