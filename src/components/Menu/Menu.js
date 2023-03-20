import React from "react";
import s from "./Menu.module.css";
const Menu = () => {
  return (
    <nav className="menu">
      <ul>
        <li>
          <a className={s.link} href="#">
            Profile
          </a>
        </li>
        <li>
          <a className={s.link} href="#">
            Messages
          </a>
        </li>
        <li>
          <a className={s.link} href="#">
            News
          </a>
        </li>
        <li>
          <a className={`${s.link} ${s.blue}`} href="#">
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
