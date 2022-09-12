import React from "react";
import styles from "./main.module.css";
import { Link } from "react-router-dom";
export default function MainComponentAdmin() {
  return (
    <div>
      <div class="row">
        <div
          class={`col-xs-3 col-sm-3 col-md-3 col-lg-3 ${styles.card} ${styles.account}`}
        >
          <Link className={`${styles.item}`} to="ss">
            {" "}
            <div className="content d-flex justify-content-between align-items-center ">
              <h5>Account</h5>
              <i class="fa-regular fa-user"></i>
            </div>
            <div className="number py-4">100</div>
          </Link>
        </div>
        <div
          class={`col-xs-3 col-sm-3 col-md-3 col-lg-3 ${styles.card} ${styles.account}`}
        >
          <h4>Hehe</h4>
          <a href="#" class="thumbnail"></a>
        </div>
        <div
          class={`col-xs-3 col-sm-3 col-md-3 col-lg-3 ${styles.card} ${styles.account}`}
        >
          <h4>Hehe</h4>
          <a href="#" class="thumbnail"></a>
        </div>
        <div
          class={`col-xs-3 col-sm-3 col-md-3 col-lg-3 ${styles.card} ${styles.account}`}
        >
          <h4>Hehe</h4>
          <a href="#" class="thumbnail"></a>
        </div>
      </div>
    </div>
  );
}
