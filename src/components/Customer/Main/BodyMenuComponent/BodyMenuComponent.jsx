import React, { useEffect } from "react";
import styles from "./body.module.css";
import { Link, useNavigate } from "react-router-dom";
import { getCookie } from "../../../../helpers/cookie.helper";
export default function BodyMenuComponent() {
  const navigate = useNavigate();
  useEffect(() => {
    if (getCookie("isAnswer")) {
      return navigate(`/main/hotel/${getCookie("hotelId")}`);
    }
  }, []);
  return (
    <div>
      <div className={styles.body_container}>
        <div className={styles.body_welcome}>
          <h1>Welcome!</h1>
          <h3>How would you like to get started?</h3>
        </div>
        <div className="body_main">
          <div className="row">
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              <div className={`card ${styles.card}`}>
                <Link to="quiz">
                  <img
                    className="card-img-top"
                    src="image 22.png"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h1 className="card-title">Body Constitution</h1>
                    <p className="card-text">
                      Discover your unique body through our assessment. Learn
                      how to attend to its needs for greater wellbeing!
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              <div className={`card ${styles.card}`}>
                <Link to="body-recovery/type/body">
                  <img
                    className="card-img-top"
                    src="image 4.png"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h1 className="card-title">Body Recovery</h1>
                    <p className="card-text">
                      Discover your unique body through our assessment. Learn
                      how to attend to its needs for greater wellbeing!
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              <div className={`card ${styles.card}`}>
                <Link to="guided-practices/type/guided">
                  <img
                    className="card-img-top"
                    src="image5.png"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h1 className="card-title">Guided Practices</h1>
                    <p className="card-text">
                      Discover your unique body through our assessment. Learn
                      how to attend to its needs for greater wellbeing!
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
