import React from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";
export default function HeaderComponent() {
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
            <Link to="/">Body Recovery </Link>
          </li>
          <li>
            <Link to="/">Guided Practices</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
