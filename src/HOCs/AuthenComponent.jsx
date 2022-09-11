import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../helpers/cookie.helper";

const AuthenComponent = (Component) => (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!getCookie("access_token")) {
      return navigate("/login");
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
  return <Component />;
};
export default AuthenComponent;
