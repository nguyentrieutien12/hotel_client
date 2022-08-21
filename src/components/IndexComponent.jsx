import axios from "axios";
import React, { memo, useEffect, useState } from "react";
import { getCookie } from "../helpers/cookie.helper";
import HomeContainerCus from "./../containers/Customer/HomeContainerCus";
import { useNavigate } from "react-router-dom";
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
        return navigate("/dashboard");
      }
      if (getCookie("isAnswer")) {
        return navigate(`/main/hotel/${getCookie("hotelId")}`);
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
  // KAKAKA
  return <>{account && <HomeContainerCus />}</>;
}
export default memo(IndexComponent);
