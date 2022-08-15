import React from "react";
import HeaderComponent from "./Header/HeaderComponent";
import FooterComponent from "./Footer/FooterComponent";
import { Outlet } from "react-router-dom";
import styles from "./main.module.css";
export default function MainComponent() {
  return (
    <div className={`${styles.main_container}`}>
      <div className="header">
        <HeaderComponent />
      </div>
      <Outlet />
      <div className={styles.footer}>
        <FooterComponent />
      </div>
    </div>
  );
}
