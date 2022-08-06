import axios from "axios";
import React from "react";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";
import RegisterComponent from "../../components/Register/RegisterComponent";

export default function RegisterContainer() {
  const alert = useAlert();
  const navigate = useNavigate();
  const [accountRegister, setAccountRegister] = React.useState({
    username: "",
    email: "",
    address: "",
    sex: "",
    password: "",
    comfirmPassword: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAccountRegister((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  const handleSubmit = async () => {
    try {
      const result = await axios.post(
        `${import.meta.env.VITE_BACKEND_SITE}/accounts`,
        accountRegister
      );
      const data = result.data;
      const { statusCode, message } = data;
      console.log(statusCode);
      if (statusCode === 201) {
        alert.success(message);
        setAccountRegister({
          username: "",
          email: "",
          address: "",
          sex: "",
          password: "",
          comfirmPassword: "",
        });
        navigate("/login");
        return void 0;
      }
      alert.info(message);
    } catch (error) {
      if (error.response) {
        const { message } = error.response.data;
        alert.error(message[0]);
      }
    }
  };
  return (
    <div>
      <RegisterComponent
        accountRegister={accountRegister}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
