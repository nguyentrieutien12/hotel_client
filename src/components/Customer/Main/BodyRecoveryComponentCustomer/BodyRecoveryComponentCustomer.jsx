import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { getCookie } from "../../../../helpers/cookie.helper";
import { account as accountPrivate } from "./../../../../helpers/account.helper";
import styles from "./recovery.module.css";
import { Link } from "react-router-dom";
export default function BodyRecoveryComponentCustomer() {
  const [account, setAccount] = useState(null);
  const [bodyRecovery, setBodyRecovery] = useState([]);
  const [recovery, setRecovery] = useState([]);
  const [newRecovery, setNewRecovery] = useState([]);
  const email = getCookie("email");
  useEffect(() => {
    accountPrivate(email).then((account) => {
      setAccount(account);
    });
    getBodyRecovery().then((bodyRecovery) => {
      setBodyRecovery(bodyRecovery);
      setNewRecovery(bodyRecovery);
    });
  }, []);
  useEffect(() => {
    getRecovery().then((recovery) => {
      setRecovery(recovery);
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
    if (bodyRecovery.length > 0) {
      return bodyRecovery.map((recovery) => {
        return (
          <div
            key={recovery?.id}
            className="col-xs-4 col-sm-4 col-md-4 col-lg-4"
          >
            <Link to={`${recovery?.id}`}>
              <div className={`card ${styles.card} my-3`}>
                <img
                  className="card-img-top"
                  src={recovery?.image?.image_url}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h3 className="card-title">
                    {recovery?.recovery?.recovery_name.charAt(0).toUpperCase() +
                      recovery?.recovery?.recovery_name.slice(1)}
                  </h3>
                  <h2>{recovery?.body_recovery_name}</h2>
                  <p
                    className="card-text"
                    style={{ color: "black", float: "right" }}
                  >
                    Some quick
                  </p>
                </div>
              </div>
            </Link>
          </div>
        );
      });
    }
  };
  const handleClick = (e) => {
    const { id } = e.target;
    if (id) {
      const recoverFilter = newRecovery.filter((recovery) => {
        console.log(recovery);
        return recovery?.recovery?.id == id;
      });
      setBodyRecovery(recoverFilter);
    } else {
      setBodyRecovery(newRecovery);
    }
  };
  return (
    <div>
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <h1>Welcome back, {account?.username}!</h1>
          <h4 className="my-5">
            Here're some guided practices to support your wellness journey!
          </h4>
        </div>
      </div>

      <div className="row">
        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
          <ul>
            {recovery.map((recovery) => {
              return (
                <li id={recovery.id} onClick={handleClick}>
                  {" "}
                  {recovery?.recovery_name?.charAt(0).toUpperCase() +
                    recovery?.recovery_name?.slice(1)}
                </li>
              );
            })}
            <li onClick={handleClick}>All</li>
          </ul>
        </div>

        <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
          <div className="row">{showBodyRecovery()}</div>
        </div>
      </div>
    </div>
  );
}
