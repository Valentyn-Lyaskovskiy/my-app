import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Post from "./components/Profile/Post";
import logo from "./logo.svg";

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Menu />
        <Routes>
          <Route path="/profile" element={<Post />} />
          <Route path="/dialogs" element={<Dialogs />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
