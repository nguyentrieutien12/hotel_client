import React from "react";
import styles from "./header.module.css";
export default function HeaderComponentAdmin() {
  return (
    <div className={styles.header}>
      <div className="logo">HeaderComponentAdmin</div>
      <div className={styles.option}>
        <i class="fa-regular fa-bell"></i>
        <i class={`fa-regular fa-user ${styles.account}`}></i>
        <div className={styles.setting}>
          <h4>Setting</h4>
        </div>
      </div>
    </div>
  );
}
