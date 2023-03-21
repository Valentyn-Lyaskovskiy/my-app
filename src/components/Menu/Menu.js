import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Menu.module.css";

const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink activeclassname={s.active} to="/profile">
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink className={s.link} activeclassname={s.active} to="/dialogs">
            Messages
          </NavLink>
        </li>
        <li>
          <a className={`${s.link} ${s.active}`} href="#">
            News
          </a>
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
