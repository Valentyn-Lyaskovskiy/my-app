import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Profile from "./components/Profile/Profile";
import logo from "./logo.svg";

function App(props) {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Menu />
        <Routes>
          <Route path="/profile" element={<Profile posts={props.appState.posts} />} />
          <Route path="/dialogs/*" element={<Dialogs dialogs={props.appState.dialogs} messages={props.appState.messages} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
debugger;

export default App;
