import React from "react";
import { logOut } from "../../../helpers/logout";
import styles from "./header.module.css";
export default function HeaderComponentAdmin() {
  const handleLogout = () => {
    logOut();
  };
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img
          src="https://img.freepik.com/vecteurs-libre/identite-entreprise-vecteur-logo-hotel-modifiable-texte-hotel-cache_53876-111556.jpg?w=2000"
          alt="Logo"
        />
      </div>
      <div className={styles.option}>
        <i className="fa-regular fa-bell"></i>
        <i className={`fa-regular fa-user ${styles.account}`}></i>
        <div className={styles.setting}>
          <div className="item_container">
            <div onClick={handleLogout} className={styles.item}>
              <h5>Logout</h5>
              <i className="fa-solid fa-right-from-bracket"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
