import React, { useState } from "react";
import styles from "./main.module.css";
import { Link } from "react-router-dom";
import { Chart } from "react-google-charts";
import { useEffect } from "react";
import { getCookie } from "../../../helpers/cookie.helper";
import axios from "axios";
export default function MainComponentAdmin() {
  const [account, set_account] = useState([]);
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
        set_account(d);
      });
  }, []);
  const data = [
    ["Year", "Sales", "Expenses"],
    ["2013", 1000, 400],
    ["2014", 1170, 460],
    ["2015", 660, 1120],
    ["2016", 1030, 540],
  ];
  const options = {
    title: "Company Performance",
    hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
    vAxis: { minValue: 0 },
    chartArea: { width: "90%", height: "70%" },
  };
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
            <div className="number py-4">
              <h5>{account?.length}</h5>
            </div>
          </Link>
        </div>

        <div
          class={`col-xs-3 col-sm-3 col-md-3 col-lg-3 mx-1 ${styles.card} ${styles.hotel}`}
        >
          <Link className={`${styles.item}`} to="ss">
            {" "}
            <div className="content d-flex justify-content-between align-items-center ">
              <h5>Hotel</h5>
              <i class="fa-solid fa-hotel"></i>
            </div>
            <div className="number py-4">
              <h5>{account?.length}</h5>
            </div>
          </Link>
        </div>
      </div>

      <div class="row my-5">
        <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9 p-0">
          <Chart
            chartType="AreaChart"
            width="100%"
            height="400px"
            data={data}
            options={options}
          />
        </div>

        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
          <h1>RIGHT SIDEBAR</h1>
        </div>
      </div>
    </div>
  );
}
