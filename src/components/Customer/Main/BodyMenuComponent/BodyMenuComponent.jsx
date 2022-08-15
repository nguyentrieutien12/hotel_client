import React from "react";
import styles from "./body.module.css";
import { Link } from "react-router-dom";
export default function BodyMenuComponent() {
  return (
    <div>
      <div className={styles.body_container}>
        <div className={styles.body_welcome}>
          <h1>Welcome!</h1>
          <h3>How would you like to get started?</h3>
        </div>
        <div className="body_main">
          <div class="row">
            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              <div class={`card ${styles.card}`}>
                <Link to="quiz">
                  <img
                    class="card-img-top"
                    src="image 22.png"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h1 class="card-title">Body Constitution</h1>
                    <p class="card-text">
                      Discover your unique body through our assessment. Learn
                      how to attend to its needs for greater wellbeing!
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              <div class={`card ${styles.card}`}>
                <img
                  class="card-img-top"
                  src="image 4.png"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h1 class="card-title">Body Recovery</h1>
                </div>
              </div>
            </div>
            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              <div class={`card ${styles.card}`}>
                <img
                  class="card-img-top"
                  src="image5.png"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h1 class="card-title">Guided Practices</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
