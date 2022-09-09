import React from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import ReactStars from "react-rating-stars-component";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { account as Account } from "../../../../helpers/account.helper";
import { getCookie } from "../../../../helpers/cookie.helper";
export default function HeaderComponent() {
  const [rate, setRate] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [account, setAccount] = useState(null);
  const secondExample = {
    size: 50,
    count: 5,
    color: "#a56c50f8",
    activeColor: "#a56c50f8",
    value: rate,
    a11y: true,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" />,
    onChange: (newValue) => {
      setRate(newValue);
    },
  };
  useEffect(() => {
    Account(getCookie("email")).then((account) => {
      setAccount(account);
    });
  }, []);
  const handleCreateFeedback = async () => {
    try {
      const result = await axios.post(
        `${import.meta.env.VITE_BACKEND_SITE}/feedback`,
        { account: account?.id, feedback, rate }
      );
      const { message, statusCode } = result.data;
      if (statusCode === 201) {
        setRate(0);
        setFeedback("");
        return window.alert(message);
      }
      return window.alert(message);
    } catch (error) {
      const { message } = error?.response?.data;
      window.alert(message[0]);
    }
  };
  const handleChangeFeedback = (e) => {
    const { value } = e.target;
    setFeedback(value);
  };
  const handleShowMenu = () => {
    const menu = document.querySelector(".menu");
    const menu_fake = document.querySelector(".menu_fake");
    menu.classList.add(`${styles.show}`);
    menu.classList.add(`active_menu`);
    menu_fake.classList.add(`${styles.show_fake}`);
    menu.classList.add(`active_menu_fake`);
  };
  const handleCloseMenu = () => {
    const menu = document.querySelector(".menu");
    const menu_fake = document.querySelector(".menu_fake");
    menu.classList.remove(`${styles.show}`);
    menu.classList.remove(`active_menu`);
    menu_fake.classList.remove(`${styles.show_fake}`);
    menu.classList.remove(`active_menu_fake`);
  };
  const handleSignOut = () => {
    const cookies = document.cookie.split(";");
    const key = [];
    for (const cookie of cookies) {
      const eqPos = cookie.indexOf("=");
      key.push(cookie.slice(0, eqPos).trim());
    }
    key.forEach((cookie) => {
      Cookies.remove(cookie); // removed!
    });
    document.location.reload(true);
  };
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
            <Link to="/main/body-recovery">Body Recovery </Link>
          </li>
          <li>
            <Link to="/">Guided Practices</Link>
          </li>
          <li onClick={handleShowMenu}>
            <Link to="#">
              <i class="fa-solid fa-bars"></i>
            </Link>
          </li>
        </ul>
      </div>
      <div className={`menu ${styles.menu}`}>
        <ul className={styles.menu_item}>
          <li className="active" onClick={handleCloseMenu}>
            <Link to="#">
              <i class="fa-solid fa-xmark"></i>
            </Link>
          </li>
          <li onClick={handleCloseMenu} className="active">
            <Link to="/">Body Constitution</Link>
          </li>
          <li onClick={handleCloseMenu}>
            <Link to="/main/body-recovery">Body Recovery </Link>
          </li>
          <li onClick={handleCloseMenu}>
            <Link to="/main/profile">My Profile</Link>
          </li>
          <li onClick={handleCloseMenu}>
            <Link to="/">About Us</Link>
          </li>
          <li data-toggle="modal" data-target=".bd-example-modal-lg">
            <Link to="#">Feedback</Link>
          </li>{" "}
          <li onClick={handleSignOut}>
            <Link to="#">Sign Out</Link>
          </li>
        </ul>
      </div>
      <div
        onClick={handleCloseMenu}
        className={`menu_fake ${styles.menu_fake}`}
      ></div>
      <div
        class="modal fade bd-example-modal-lg "
        tabindex="-1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg ">
          <div style={{ padding: "50px" }} class="modal-content">
            <div className="title">
              <h1>Your feedback is important to us !!!</h1>
            </div>
            <div className="rate">
              <span>
                How would you rate your experience taking the TCM wellness
                assessments?
              </span>
              <ReactStars {...secondExample} />
            </div>
            <div className="express my-5">
              <span>
                How would you rate your experience using personalized wellness
                tips & recommendations?
              </span>
              <ReactStars {...secondExample} />
            </div>

            <div className="box">
              <textarea
                onChange={handleChangeFeedback}
                id="input"
                class="form-control"
                rows="3"
                required="required"
                value={feedback}
              ></textarea>
            </div>

            <button
              onClick={handleCreateFeedback}
              type="button"
              class="btn btn-success my-4"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
