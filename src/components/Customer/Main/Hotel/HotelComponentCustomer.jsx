import React, { useEffect, useState } from "react";
import { account } from "../../../../helpers/account.helper";
import { Link } from "react-router-dom";
import { getCookie } from "../../../../helpers/cookie.helper";
import styles from "./hotel.module.css";
export default function HotelComponentCustomer() {
  const [acc, setAcc] = useState({});
  useEffect(() => {
    account(getCookie("email")).then((account) => {
      setAcc(account);
    });
  }, []);
  console.log(acc);
  return (
    <div className={`${styles.wrapper}`}>
      <div className={`${styles.hello_text}`}>
        <h1>Hello, {acc?.username} !</h1>
        <p>
          Ready to expand your wellness journey? Here are our recommendations{" "}
          <br></br>
          carefully curated for the unique needs of your body!
        </p>
      </div>
      <div className="row">
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <Link to={`restaurant`}>
            <div className={`card ${styles.card}`}>
              <img
                className="card-img-top"
                src="../../../public/cugung.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <h1>
                  Food <br></br> &<br></br> Drinks
                </h1>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <div className={`card ${styles.card}`}>
            <img
              className="card-img-top"
              src="../../../public/cugung.png"
              alt="Card image cap"
            />
            <div className="card-body">
              <h1>
                Fitness <br></br>&<br></br>Movement
              </h1>
            </div>
          </div>
        </div>
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <div className={`card ${styles.card}`}>
            <img
              className="card-img-top"
              src="../../../public/cugung.png"
              alt="Card image cap"
            />
            <div className="card-body">
              <h1>
                Spa <br></br> & <br></br>Bodywork
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
