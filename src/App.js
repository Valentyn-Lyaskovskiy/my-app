import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Profile from "./components/Profile/Profile";

function App(props) {
  debugger
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Menu />
        <Routes>
          <Route path="/profile" element={<Profile store={props.state} />} />
          <Route
            path="/dialogs/*"
            element={<DialogsContainer store={props.state} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
