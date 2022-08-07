import axios from "axios";
import React, { createContext, useEffect } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import AccountComponentAdmin from "../../../components/Admin/Account/AccountComponentAdmin";
import { setAccount } from "../../../features/account/account";
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
  const accounts = useSelector((state) => {
    return state?.accounts;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    getAllAccount().then((accounts) => {
      dispatch(setAccount(accounts));
    });
  }, []);

  const getAllAccount = async () => {
    const result = await axios.get(
      `${import.meta.env.VITE_BACKEND_SITE}/accounts`
    );
    return result.data;
  };
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
        value={{ accountRegister, handleChange, handleSubmit, accounts }}
      >
        <AccountComponentAdmin />
      </ObjContext.Provider>
    </div>
  );
}
