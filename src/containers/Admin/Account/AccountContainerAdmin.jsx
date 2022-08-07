import axios from "axios";
import React, { createContext } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import AccountComponentAdmin from "../../../components/Admin/Account/AccountComponentAdmin";
export const ObjContext = createContext();
export default function AccountContainerAdmin() {
  const alert = useAlert();
  const [accountRegister, setAccountRegister] = React.useState({
    username: "",
    email: "",
    address: "",
    sex: "female",
    password: "",
    comfirmPassword: "",
    role: 2,
  });
  const account = useSelector((state) => {
    console.log(state);
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
      if (statusCode === 201) {
        alert.success(message);
        setAccountRegister({
          username: "",
          email: "",
          address: "",
          sex: "female",
          password: "",
          comfirmPassword: "",
          role: 2,
        });
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
      <ObjContext.Provider
        value={{ accountRegister, handleChange, handleSubmit }}
      >
        <AccountComponentAdmin />
      </ObjContext.Provider>
    </div>
  );
}
