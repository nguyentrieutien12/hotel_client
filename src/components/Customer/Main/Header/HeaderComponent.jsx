import React from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";
export default function HeaderComponent() {
  const handleShowMenu = () => {
    const menu = document.querySelector(".menu");
    const menu_fake = document.querySelector(".menu_fake");
    menu.classList.add(`${styles.show}`);
    menu.classList.add(`active_menu`);
    menu_fake.classList.add(`${styles.show_fake}`);
    menu.classList.add(`active_menu_fake`);
  };
  const handleCloseMenu = () => {
    const menu = document.querySelector(".menu");
    const menu_fake = document.querySelector(".menu_fake");
    menu.classList.remove(`${styles.show}`);
    menu.classList.remove(`active_menu`);
    menu_fake.classList.remove(`${styles.show_fake}`);
    menu.classList.remove(`active_menu_fake`);
  };
  return (
    <div className={styles.wrapper}>
      <div className="navbar">
        <a style={{ color: "white" }} className="navbar-brand" href="#">
          Logo
        </a>
        <ul className={`nav navbar-nav ${styles.nav}`}>
          <li className="active">
            <Link to="/">Body Constitution</Link>
          </li>
          <li>
            <Link to="/main/body-recovery">Body Recovery </Link>
          </li>
          <li>
            <Link to="/">Guided Practices</Link>
          </li>
          <li onClick={handleShowMenu}>
            <Link to="#">
              <i class="fa-solid fa-bars"></i>
            </Link>
          </li>
        </ul>
      </div>
      <div className={`menu ${styles.menu}`}>
        <ul className={styles.menu_item}>
          <li className="active" onClick={handleCloseMenu}>
            <Link to="#">
              <i class="fa-solid fa-xmark"></i>
            </Link>
          </li>
          <li onClick={handleCloseMenu} className="active">
            <Link to="/">Body Constitution</Link>
          </li>
          <li onClick={handleCloseMenu}>
            <Link to="/main/body-recovery">Body Recovery </Link>
          </li>
          <li onClick={handleCloseMenu}>
            <Link to="/">Guided Practices</Link>
          </li>
          <li onClick={handleCloseMenu}>
            <Link to="/">My Profile</Link>
          </li>
          <li onClick={handleCloseMenu}>
            <Link to="/">About Us</Link>
          </li>
          <li onClick={handleCloseMenu}>
            <Link to="/">Feedback</Link>
          </li>{" "}
          <li>
            <Link to="/">Sign Out</Link>
          </li>
        </ul>
      </div>
      <div
        onClick={handleCloseMenu}
        className={`menu_fake ${styles.menu_fake}`}
      ></div>
    </div>
  );
}
