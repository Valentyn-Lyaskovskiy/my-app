import React from "react";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <img
        src="https://cdn.worldvectorlogo.com/logos/react-1.svg"
        alt="react logo"
      />
    </header>
  );
};

export default Header;
