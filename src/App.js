import React from "react";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Post from "./components/Post";
import logo from "./logo.svg";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Menu />
      <Dialogs />
      {/* <div className="content">
        <img src={logo} />
        <Post message='React is cool!' />
        <Post message='No pains no gains!' />
        <Post message='Unlike!' />
      </div>
      <div>
        <img src={logo} />
      </div> */}
    </div>
  );
};

export default App;
