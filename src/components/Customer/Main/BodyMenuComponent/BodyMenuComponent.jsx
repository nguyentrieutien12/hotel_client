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
                      TCM (Traditional Chinese Medicine) is an individualized
                      health and wellbeing system, based on the principle that
                      different body constitutions, i.e., types, respond
                      differently to the same lifestyle choices or environmental
                      factors. Your body constitution is made up of your body's
                      structural and functional characteristics, your
                      temperament, your body's adaptability to environmental
                      changes and susceptibility to disease. It is partly
                      genetically determined and partly acquired based on your
                      lifestyle and environment. By understanding your body
                      constitution, you can learn how to make the right
                      lifestyle choices for your own body, to restore balance
                      within and with the surrounding environment
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              <div className={`card ${styles.card}`}>
                <Link to="body-recovery">
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
                <Link to="guided-practices">
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
