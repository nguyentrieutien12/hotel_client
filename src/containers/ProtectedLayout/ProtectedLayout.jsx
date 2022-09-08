import { Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import FooterComponent from "../../components/Customer/Main/Footer/FooterComponent";
import { getCookie } from "../../helpers/cookie.helper";
import HeaderContainerAdmin from "../Admin/Header/HeaderContainerAdmin";
import SideBarContainerAdmin from "../Admin/SideBar/SideBarContainerAdmin";
import styles from "./protected.module.css";
export default function ProtectedLayout() {
  const navigate = useNavigate();
  const getEmail = getCookie("email") || null;
  const [account, setAccount] = useState(null);
  const [email] = useState(getEmail);
  useEffect(() => {
    getAccount(email).then((account) => {
      if (!account || account?.role?.role_name !== "ADMIN") {
        return navigate("/");
      }
      setAccount(account);
    });
  }, [email]);
  const getAccount = async (email) => {
    const result = await axios.get(
      `${import.meta.env.VITE_BACKEND_SITE}/accounts/${email}`,
      {
        headers: {
          email: "1@gmail.com",
        },
      }
    );
    return result.data;
  };
  return (
    <>
      {account && (
        <>
          {" "}
          <Grid className={styles.header} item xs={10}>
            <HeaderContainerAdmin />
          </Grid>
          <Grid className={styles.main_container} container spacing={0}>
            {/* SIDEBAR */}
            <Grid className={styles.sidebar} item xs={2}>
              <SideBarContainerAdmin />
            </Grid>
            {/* MAIN CONTENT */}
            <Grid className={styles.main} item xs={10}>
              <Outlet />
            </Grid>
          </Grid>
          <Grid className={styles.header} item xs={10}>
            <FooterComponent />
          </Grid>
        </>
      )}
    </>
  );
}
