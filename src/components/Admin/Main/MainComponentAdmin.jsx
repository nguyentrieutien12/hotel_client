import React, { useState } from "react";
import styles from "./main.module.css";
import { Link } from "react-router-dom";
import { Chart } from "react-google-charts";
import { useEffect } from "react";
import { getCookie } from "../../../helpers/cookie.helper";
import axios from "axios";
export default function MainComponentAdmin() {
  const [accounts, set_accounts] = useState([]);
  const [hotels, set_hotels] = useState([]);
  const [orders, set_orders] = useState([]);
  const [feedbacks, set_feedbacks] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_SITE}/accounts`, {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          email: getCookie("email"),
          Authorization: `Bearer ${getCookie("access_token")}`,
        },
      })
      .then((r) => r.data)
      .then((d) => {
        set_accounts(d);
      });
  }, []);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_SITE}/hotels`, {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          email: getCookie("email"),
          Authorization: `Bearer ${getCookie("access_token")}`,
        },
      })
      .then((r) => r.data)
      .then((d) => {
        set_hotels(d);
      });
  }, []);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_SITE}/order/all`, {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          email: getCookie("email"),
          Authorization: `Bearer ${getCookie("access_token")}`,
        },
      })
      .then((r) => r.data)
      .then((d) => {
        set_orders(d);
      });
  }, []);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_SITE}/feedback/all`, {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          email: getCookie("email"),
          Authorization: `Bearer ${getCookie("access_token")}`,
        },
      })
      .then((r) => r.data)
      .then((d) => {
        set_feedbacks(d);
      });
  }, []);
  const data = [
    ["Month", "Sales", "Expenses"],
    ["1", 1000, 400],
    ["2", 1170, 460],
    ["3", 660, 1120],
    ["4", 1030, 540],
    ["5", 1030, 540],
    ["6", 1030, 540],
    ["7", 1030, 540],
    ["8", 1030, 540],
    ["9", 1030, 540],
    ["10", 1030, 540],
    ["11", 1030, 540],
    ["12", 1030, 540],
  ];
  const options = {
    title: "Company Performance",
    hAxis: { title: "Month", titleTextStyle: { color: "#333" } },
    vAxis: { minValue: 0 },
    chartArea: { width: "90%", height: "70%" },
  };
  return (
    <div>
      <div className="row">
        <div
          className={`col-xs-3 col-sm-3 col-md-3 col-lg-3 ${styles.card} ${styles.account}`}
        >
          <Link className={`${styles.item}`} to="#">
            {" "}
            <div className="content d-flex justify-content-between align-items-center ">
              <h5>Accounts</h5>
              <i className="fa-regular fa-user"></i>
            </div>
            <div className="number py-4">
              <h5>{accounts?.length}</h5>
            </div>
          </Link>
        </div>

        <div
          className={`col-xs-3 col-sm-3 col-md-3 col-lg-3 ${styles.card} ${styles.hotel}`}
        >
          <Link className={`${styles.item}`} to="#">
            {" "}
            <div className="content d-flex justify-content-between align-items-center ">
              <h5>Hotels</h5>
              <i className="fa-solid fa-hotel"></i>
            </div>
            <div className="number py-4">
              <h5>{hotels?.length}</h5>
            </div>
          </Link>
        </div>
        <div
          className={`col-xs-3 col-sm-3 col-md-3 col-lg-3  ${styles.card} ${styles.order}`}
        >
          <Link className={`${styles.item}`} to="#">
            {" "}
            <div className="content d-flex justify-content-between align-items-center ">
              <h5>Orders</h5>
              <i className="fa-solid fa-hotel"></i>
            </div>
            <div className="number py-4">
              <h5>{orders?.length}</h5>
            </div>
          </Link>
        </div>
        <div
          className={`col-xs-3 col-sm-3 col-md-3 col-lg-3 ${styles.card} ${styles.feedback}`}
        >
          <Link className={`${styles.item}`} to="#">
            {" "}
            <div className="content d-flex justify-content-between align-items-center ">
              <h5>Feedbacks</h5>
              <i className="fa-solid fa-hotel"></i>
            </div>
            <div className="number py-4">
              <h5>{feedbacks?.length}</h5>
            </div>
          </Link>
        </div>
      </div>

      <div className="row my-5">
        <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 p-0">
          <Chart
            chartType="AreaChart"
            width="100%"
            height="400px"
            data={data}
            options={options}
          />
        </div>

        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
          <h1>Top Hotel</h1>
        </div>
      </div>
    </div>
  );
}
