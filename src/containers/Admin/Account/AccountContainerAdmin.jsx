import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import AccountComponentAdmin from "../../../components/Admin/Account/AccountComponentAdmin";
import { setAccount } from "../../../features/account/account";
import { getCookie } from "../../../helpers/cookie.helper";
import { useNavigate } from "react-router-dom";
import { redirectError } from "../../../helpers/redirectError";
export const ObjContext = createContext();
export default function AccountContainerAdmin() {
  const navigate = useNavigate();
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
  const [isUpdate, setIsUpdate] = useState(false);
  const [idUpdate, setIdUpdate] = useState(null);
  const accounts = useSelector((state) => {
    return state?.accounts;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    getAllAccount().then((accounts) => {
      dispatch(setAccount(accounts));
    });
  }, []);
  // Kkkk
  const getAllAccount = async () => {
    try {
      const result = await axios.get(
        `${import.meta.env.VITE_BACKEND_SITE}/accounts`,
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            email: getCookie("email"),
            Authorization: `Bearer ${getCookie("access_token")}`,
          },
        }
      );
      return result.data;
    } catch (error) {
      const { status } = error.response;
      if (status === 401) {
        return navigate("/login");
      }
    }
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
    if (!isUpdate) {
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
          getAllAccount().then((accounts) => {
            dispatch(setAccount(accounts));
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
    } else {
      try {
        const result = await axios.patch(
          `${import.meta.env.VITE_BACKEND_SITE}/accounts/${idUpdate}`,
          accountRegister
        );
        const { message, statusCode } = result.data;
        if (statusCode === 202) {
          getAllAccount().then((accounts) => {
            dispatch(setAccount(accounts));
          });
          setAccountRegister({
            username: "",
            email: "",
            address: "",
            sex: "female",
            password: "",
            comfirmPassword: "",
            role: 2,
          });
          setIsUpdate(false);
          return alert.success(message);
        }
        return alert.error(message);
      } catch (error) {
        if (error.response) {
          const { message } = error.response.data;
          alert.error(message);
        }
      }
    }
  };
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure delete this ?")) {
      try {
        const result = await axios.delete(
          `${import.meta.env.VITE_BACKEND_SITE}/accounts/${id}`
        );
        const { message, statusCode } = result.data;
        if (statusCode === 202) {
          getAllAccount().then((accounts) => {
            dispatch(setAccount(accounts));
          });
          return alert.success(message);
        }
        return alert.error(message);
      } catch (error) {
        console.log(error);
      }
    }
  };
  const handleUpdate = (account) => {
    const { username, email, address, sex, role, id } = account;
    setAccountRegister({
      username,
      email,
      address,
      sex,
      role: role.id,
    });
    setIsUpdate(true);
    setIdUpdate(id);
  };
  return (
    <div>
      <AccountComponentAdmin
        isUpdate={isUpdate}
        accountRegister={accountRegister}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        accounts={accounts}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
      />
    </div>
  );
}
