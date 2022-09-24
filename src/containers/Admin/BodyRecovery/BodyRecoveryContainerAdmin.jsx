import React, { useEffect, useState } from "react";
import BodyRecoveryComponentAdmin from "../../../components/Admin/BodyRecovery/BodyRecoveryComponentAdmin";
import axios from "axios";
import { uploadFile } from "./../../../helpers/uploadFile";
import { useRef } from "react";
import { useAlert } from "react-alert";
import { getDataFromServer } from "../../../helpers/getDataServer";
import { useNavigate } from "react-router-dom";
export default function BodyRecoveryContainerAdmin() {
  const alert = useAlert();
  const navigate = useNavigate();
  const [bodyRecoverys, setBodyRecovery] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [idUpdate, setIdUpdate] = useState(null);
  const [recovery, setRecovery] = useState({
    body_recovery_name: "",
    body_recovery_description: "",
    video_url: "",
    recovery: 1,
  });
  const [recoveryList, setRecoveryList] = useState([]);
  const inputElement = useRef();
  useEffect(() => {
    getAllBodyRecovery().then((recoverys) => {
      setBodyRecovery(recoverys);
    });
    getAllRecovery().then((recoveryList) => {
      setRecoveryList(recoveryList);
    });
  }, []);

  const getAllBodyRecovery = async () => {
    try {
      return getDataFromServer("body-recovery");
    } catch (error) {
      return navigate("/login");
    }
  };
  const getAllRecovery = async () => {
    try {
      const result = await axios.get(
        `${import.meta.env.VITE_BACKEND_SITE}/recovery`
      );
      return await result.data;
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    const { value, name } = e.target;
    setRecovery((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  const createOrUpdateSuccess = (message) => {
    alert.success(message);
    getAllBodyRecovery().then((recoverys) => {
      setBodyRecovery(recoverys);
    });
    setRecovery({
      body_recovery_name: "",
      body_recovery_description: "",
      video_url: "",
    });
    setIsUpdate(false);
  };
  const createOrUpdateFail = (message) => {
    return alert.error(message);
  };
  const handleOnClick = async (e) => {
    e.preventDefault();
    try {
      if (!isUpdate) {
        const images = await uploadFile(inputElement.current.files);
        const reuslt = await axios.post(
          `${import.meta.env.VITE_BACKEND_SITE}/body-recovery`,
          { ...recovery, images }
        );
        const { message, statusCode } = reuslt.data;
        if (statusCode === 201) {
          return createOrUpdateSuccess(message);
        }
        return createOrUpdateFail(message);
      } else {
        const images = await uploadFile(inputElement.current.files);
        const result = await axios.patch(
          `${import.meta.env.VITE_BACKEND_SITE}/body-recovery/${idUpdate}`,
          { ...recovery, images }
        );
        const { message, statusCode } = result.data;
        if (statusCode === 202) {
          setIsUpdate(false);
          return createOrUpdateSuccess(message);
        }
        return createOrUpdateFail(message);
      }
    } catch (error) {
      console.log(error);
      if (error.response) {
        const { message } = error.response.data;
        alert.error(message[0]);
      }
    }
  };
  const handleDelete = async (id) => {
    try {
      if (window.confirm("Are you sure delete body recovery ?")) {
        const result = await axios.delete(
          `${import.meta.env.VITE_BACKEND_SITE}/body-recovery/${id}`
        );
        const data = result.data;
        const { message, statusCode } = data;
        if (statusCode === 202) {
          return createOrUpdateSuccess(message);
        }
        return createOrUpdateFail(message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleUpdate = (recoveryObj) => {
    const {
      id,
      body_recovery_name,
      body_recovery_description,
      video,
      recovery,
    } = recoveryObj;

    setRecovery({
      body_recovery_name,
      body_recovery_description,
      video_url: video.video_url,
      recovery: recovery.id,
    });
    setIsUpdate(true);
    setIdUpdate(id);
  };
  return (
    <div>
      <BodyRecoveryComponentAdmin
        bodyRecoverys={bodyRecoverys}
        recoveryList={recoveryList}
        recovery={recovery}
        handleChange={handleChange}
        inputElement={inputElement}
        handleOnClick={handleOnClick}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
        isUpdate={isUpdate}
      />
    </div>
  );
}
