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
  useEffect(() => {
    getSpaByHotelId().then((spas) => {
      dispatch(setSpaList(spas));
    });
  }, []);
  const getSpaByHotelId = async () => {
    const result = await axios.get(
      `${import.meta.env.VITE_BACKEND_SITE}/hotels/${id}`
    );
    return result.data;
  };
  const createOrUpdateFail = (message) => {
    return alert.error(message);
  };
  const createOrUpdateSuccess = (message) => {
    alert.success(message);
    // getAllHotel().then((hotels) => {
    //   dispatch(setHotelList(hotels));
    // });
    return setSpa({
      spa_name: "",
      spa_description: "",
      hotel: id,
    });
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
    } catch (error) {
      console.log(error);
      if (error.response) {
        const { message } = error.response.data;
        alert.error(message[0]);
      }
    }
  };
  return (
    <div>
      <SpaComponentAdmin
        handleChangeSpa={handleChangeSpa}
        handleCreateSpa={handleCreateSpa}
        inputElement={inputElement}
        spas={spas}
      />
    </div>
  );
}
