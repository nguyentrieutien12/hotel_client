import axios from "axios";
import React, { memo, useEffect, useState } from "react";
import { getCookie } from "../helpers/cookie.helper";
import HomeContainerCus from "./../containers/Customer/HomeContainerCus";
import { useNavigate } from "react-router-dom";
import ProtectedLayout from "../containers/ProtectedLayout/ProtectedLayout";
function IndexComponent() {
  const getEmail = getCookie("email") || null;
  const navigate = useNavigate();
  const [email] = useState(getEmail);
  const [account, setAccount] = useState(null);
  useEffect(() => {
    getAccount(email).then((account) => {
      if (!account) {
        return navigate("/login");
      } else if (account.role.role_name === "ADMIN") {
        navigate("/dashboard");
      }
      setAccount(account);
    });
  }, [email]);

  const getAccount = async (email) => {
    const result = await axios.get(
      `${import.meta.env.VITE_BACKEND_SITE}/accounts/${email}`,
      {
        headers: {
          email,
        },
      }
    );
    return result.data;
  };
  return <>{account && <HomeContainerCus />}</>;
}
export default memo(IndexComponent);