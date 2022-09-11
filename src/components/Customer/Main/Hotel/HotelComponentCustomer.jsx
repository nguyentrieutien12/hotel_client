import React, { useEffect, useState } from "react";
import { account } from "../../../../helpers/account.helper";
import { Link } from "react-router-dom";
import { getCookie } from "../../../../helpers/cookie.helper";
import styles from "./hotel.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import LoadingComponent from "../../../Loading/LoadingComponent";
import AuthenComponent from "../../../../HOCs/AuthenComponent";
function HotelComponentCustomer() {
  const [acc, setAcc] = useState({});
  const { hotelId } = useParams();
  const [hotels, setHotel] = useState([]);
  useEffect(() => {
    account(getCookie("email")).then((account) => {
      setAcc(account);
    });
    axios
      .get(`${import.meta.env.VITE_BACKEND_SITE}/hotels/${hotelId}`)
      .then((res) => res.data)
      .then((hotels) => {
        if (hotels?.length === 0) {
          setHotel(null);
          return;
        }
        setHotel(hotels);
      });
  }, [hotelId]);
  if (hotels?.length === 0) {
    return <LoadingComponent />;
  }
  if (hotels?.length > 0) {
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
                  src="../../../public/food.jpg"
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
            <Link to={`gym`}>
              {" "}
              <div className={`card ${styles.card}`}>
                <img
                  className="card-img-top"
                  src="../../../public/gym.jpg"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h1>
                    Fitness <br></br>&<br></br>Movement
                  </h1>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <Link to={`spa`}>
              {" "}
              <div className={`card ${styles.card}`}>
                <img
                  className="card-img-top"
                  src="../../../public/spa.jpg"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h1>
                    Spa <br></br> & <br></br>Bodywork
                  </h1>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  return (
    <h1
      className="text-center"
      style={{ height: "400px", lineHeight: "400px" }}
    >
      Hotel Not Found ~~
    </h1>
  );
}
export default AuthenComponent(HotelComponentCustomer);
