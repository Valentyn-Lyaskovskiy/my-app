import React from "react";
import "./App.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import logo from "./logo.svg";
const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Menu />
      <div className="content">
        <img src={logo} />
      </div>
      <div>
        <img src={logo} />
      </div>
    </div>
  );
};

export default App;
