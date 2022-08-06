import axios from "axios";
import React, { useEffect, useState } from "react";
import HomeContainerAdmin from "../containers/Admin/HomeContainerAdmin";
import LoginContainer from "../containers/LoginContainer/LoginContainer";
import { getCookie } from "../helpers/cookie.helper";
import HomeContainerCus from "./../containers/Customer/HomeContainerCus";
import { useNavigate } from "react-router-dom";
export default function IndexComponent() {
  const getEmail = getCookie("email") || null;
  const navigate = useNavigate();
  const [account, setAccount] = useState(null);
  const [email, setEmail] = useState(getEmail);
  useEffect(() => {
    getAccount(email).then((account) => {
      if (!account) {
        return navigate("/login");
      }
      setAccount(account);
    });
  }, [email]);

  const getAccount = async (email) => {
    const result = await axios.get(
      `${import.meta.env.VITE_BACKEND_SITE}/accounts/${email}`
    );
    return result.data;
  };
  if (account) {
    if (account?.role?.role_name === "ADMIN") {
      return <HomeContainerAdmin />;
    }
    return <HomeContainerCus />;
  }
  return <></>;
}
