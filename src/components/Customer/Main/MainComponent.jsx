import React, { useEffect } from "react";
import HeaderComponent from "./Header/HeaderComponent";
import FooterComponent from "./Footer/FooterComponent";
import { Outlet, useNavigate } from "react-router-dom";
import styles from "./main.module.css";
import { getCookie } from "../../../helpers/cookie.helper";
import axios from "axios";
export default function MainComponent() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!getCookie("access_token")) {
      navigate("/login");
    } else {
      axios
        .get(`${import.meta.env.VITE_BACKEND_SITE}/accounts/auth_token`, {
          headers: {
            Authorization: `Bearer ${getCookie("access_token")}`,
          },
        })
        .then((r) => r.data)
        .then((d) => {
          console.log(d);
        })
        .catch((err) => {
          navigate("/login");
        });
    }
  }, []);
  return (
    <div className={`${styles.main_container}`}>
      <div className={`${styles.main_header}`}>
        <div className="header">
          <HeaderComponent />
        </div>
        <Outlet />
      </div>
      <div className={styles.footer}>
        <FooterComponent />
      </div>
    </div>
  );
}
