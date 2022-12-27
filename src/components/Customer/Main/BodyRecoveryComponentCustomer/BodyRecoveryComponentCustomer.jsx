import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { getCookie } from "../../../../helpers/cookie.helper";
import { account as accountPrivate } from "./../../../../helpers/account.helper";
import styles from "./recovery.module.css";
import { Link } from "react-router-dom";
export default function BodyRecoveryComponentCustomer(props) {
  const [account, setAccount] = useState(null);
  const [bodyRecovery, setBodyRecovery] = useState([]);
  const [recovery, setRecovery] = useState([]);
  const email = getCookie("email");
  useEffect(() => {
    accountPrivate(email).then((account) => {
      setAccount(account);
    });
  }, []);
  useEffect(() => {
    getRecovery().then((recovery) => {
      setRecovery(recovery);
    });
    getBodyRecovery().then((bodyRecovery) => {
      setBodyRecovery(bodyRecovery);
    });
  }, []);

  const getBodyRecovery = async () => {
    try {
      const result = await axios.get(
        `${import.meta.env.VITE_BACKEND_SITE}/body-recovery`
      );
      return result.data;
    } catch (error) {
      console.log(error);
    }
  };

  const getRecovery = async () => {
    try {
      const result = await axios.get(
        `${import.meta.env.VITE_BACKEND_SITE}/recovery`
      );
      return result.data;
    } catch (error) {}
  };
  const showBodyRecovery = () => {
    if (props.bodyRecovery.length > 0) {
      return props.bodyRecovery.map((recovery) => {
        return (
          <div
            key={recovery?.id}
            className={`col-xs-${props.col2} col-sm-${props.col2} col-md-${props.col2} col-lg-${props.col2}`}
          >
            <Link to={`/main/body-recovery/${recovery?.id}`}>
              <div className={`card ${styles.card} my-3`}>
                <img
                  className="card-img-top"
                  src={recovery?.image?.image_url}
                  alt="Card image cap"
                />
                <h4 className="card-title">
                  {recovery?.recovery?.recovery_name.charAt(0).toUpperCase() +
                    recovery?.recovery?.recovery_name.slice(1)}
                </h4>
                <h2>{recovery?.body_recovery_name}</h2>
                <p
                  className={`card-text ${styles.text}`}
                  style={{ color: "black", float: "right" }}
                >
                  {recovery?.body_recovery_description}
                </p>
              </div>
            </Link>
          </div>
        );
      });
    }
  };
  const handleClick = (e) => {
    props.handleClick(e);
    const itemsElement = document.querySelectorAll(".item");
    itemsElement.forEach((item) => {
      item.classList.remove(`${styles.bgColor}`);
    });
    e.target.classList.add(`${styles.bgColor}`);
  };
  if (props.isMain) {
    return (
      <div>
        <div className="row text-white">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <h1>Welcome back, {account?.username}!</h1>
            <h4 className="my-5">
              {props?.type === "body"
                ? "What is your current wellness recovery goal? "
                : "Herer'e some guided practices to support your wellness journey!"}
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
            <ul style={{ padding: "0px" }}>
              <li
                className={`${styles.item} ${styles.bgColor} item`}
                onClick={handleClick}
              >
                All
              </li>
            </ul>
          </div>

          <div
            className={`col-xs-${props.col1} col-sm-${props.col1} col-md-${props.col1} col-lg-${props.col1}`}
          >
            <div className="row">{showBodyRecovery()}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className={`col-xs-${props.col1} col-sm-${props.col1} col-md-${props.col1} col-lg-${props.col1}`}
      >
        <div className="row">{showBodyRecovery()}</div>
      </div>
    );
  }
}
