import axios from "axios";
import React, { useState } from "react";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";
import LoginComponent from "../../components/Login/LoginComponent";

export default function LoginContainer() {
  const alert = useAlert();
  const navigate = useNavigate();
  const [accountLogin, setAccountLogin] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAccountLogin((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  const handleSubmit = async () => {
    try {
      const result = await axios.post(
        `${import.meta.env.VITE_BACKEND_SITE}/accounts/login`,
        accountLogin
      );
      const { message, statusCode } = result.data;
      if (statusCode === 202) {
        alert.success(message);
        return navigate("/");
      }
    } catch (error) {
      if (error.response) {
        const { message } = error.response.data;
        alert.error(message);
      }
    }
  };
  return (
    <div>
      <LoginComponent
        handleChange={handleChange}
        accountLogin={accountLogin}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
