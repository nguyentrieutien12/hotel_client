import React, { useEffect, useRef, useState } from "react";
import SpaComponentAdmin from "../../../components/Admin/Spa/SpaComponentAdmin";
import { useParams } from "react-router-dom";
import { uploadFile } from "../../../helpers/uploadFile";
import axios from "axios";
import { useAlert } from "react-alert";
import { useSelector, useDispatch } from "react-redux";
import { setSpaList } from "../../../features/spa/spa";
export default function SpaContainerAdmin() {
  let { id } = useParams();
  const inputElement = useRef();
  const alert = useAlert();
  const spas = useSelector((state) => state.spas);
  const dispatch = useDispatch();
  const [spa, setSpa] = useState({
    spa_name: "",
    spa_description: "",
    hotel: id,
  });
  const [isUpdate, setIsUpdate] = useState(false);
  const [idUpdate, setIdUpdate] = useState(null);
  useEffect(() => {
    getSpaByHotelId().then((spas) => {
      dispatch(setSpaList(spas));
    });
  }, []);
  const getSpaByHotelId = async () => {
    const result = await axios.get(
      `${import.meta.env.VITE_BACKEND_SITE}/hotels/spa/${id}`
    );
    return result.data;
  };
  const createOrUpdateFail = (message) => {
    return alert.error(message);
  };
  const createOrUpdateSuccess = (message) => {
    alert.success(message);
    getSpaByHotelId().then((spas) => {
      dispatch(setSpaList(spas));
    });
    setSpa({
      spa_name: "",
      spa_description: "",
      hotel: id,
    });
    setIsUpdate(false);
  };
  const handleChangeSpa = (e) => {
    const { name, value } = e.target;
    setSpa((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  const handleCreateSpa = async (e) => {
    e.preventDefault();
    try {
      if (!isUpdate) {
        const images = await uploadFile(inputElement.current.files);
        const reuslt = await axios.post(
          `${import.meta.env.VITE_BACKEND_SITE}/spas`,
          { ...spa, images }
        );
        const { message, statusCode } = reuslt.data;
        if (statusCode === 201) {
          return createOrUpdateSuccess(message);
        }
        return createOrUpdateFail(message);
      } else {
        const images = await uploadFile(inputElement.current.files);
        const result = await axios.patch(
          `${import.meta.env.VITE_BACKEND_SITE}/spas/${idUpdate}`,
          { ...spa, images }
        );
        const { message, statusCode } = result.data;
        if (statusCode === 202) {
          return createOrUpdateSuccess(message);
        }
        return createOrUpdateFail(message);
      }
    } catch (error) {
      if (error.response) {
        const { message } = error.response.data;
        alert.error(message[0]);
      }
    }
  };
  const handleDeleteSpa = async (id) => {
    try {
      if (window.confirm("Are you sure delete spa ?")) {
        const result = await axios.delete(
          `${import.meta.env.VITE_BACKEND_SITE}/spas/${id}`
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
  const handleUpdateSpa = (spa) => {
    const { spa_name, spa_description, id } = spa;
    setSpa({ spa_name, spa_description });
    setIdUpdate(id);
    setIsUpdate(true);
  };
  return (
    <div>
      <SpaComponentAdmin
        handleChangeSpa={handleChangeSpa}
        handleCreateSpa={handleCreateSpa}
        inputElement={inputElement}
        spas={spas}
        spa={spa}
        isUpdate={isUpdate}
        handleDeleteSpa={handleDeleteSpa}
        handleUpdateSpa={handleUpdateSpa}
      />
    </div>
  );
}
