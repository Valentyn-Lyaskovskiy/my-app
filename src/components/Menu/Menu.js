import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Menu.module.css";

const Menu = () => {
  return (
    <nav className={s.menu}>
      <ul>
        <li className={s.item}>
          <NavLink
            className={(navData) => (navData.isActive ? s.active : s.item)}
            to="/profile"
          >
            Profile
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink
            className={(navData) => (navData.isActive ? s.active : s.item)}
            to="/dialogs"
          >
            Messages
          </NavLink>
        </li>
        <li>
          <a href="#">News</a>
        </li>
        <li>
          <a className={s.link} href="#">
            Music
          </a>
        </li>
        <li>
          <a className={s.link} href="#">
            Settings
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
