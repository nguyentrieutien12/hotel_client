import { uploadFile } from "./../../../helpers/uploadFile";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useParams } from "react-router-dom";
import GymComponentAdmin from "../../../components/Admin/Gym/GymComponentAdmin";
import axios from "axios";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { setGymList } from "../../../features/gym/gym";
export default function GymContainerAdmin() {
  const { id } = useParams();
  const alert = useAlert();
  const inputElement = useRef();
  const [isUpdate, setIsUpdate] = useState(false);
  const [idUpdate, setIdUpdate] = useState(null);
  const [gym, setGym] = useState({
    gym_name: "",
    gym_description: "",
    hotel: id,
  });
  const gyms = useSelector((state) => state.gyms);
  const dispatch = useDispatch();
  useEffect(() => {
    getSpaByHotelId().then((gyms) => {
      dispatch(setGymList(gyms));
    });
  }, []);
  const getSpaByHotelId = async () => {
    const result = await axios.get(
      `${import.meta.env.VITE_BACKEND_SITE}/hotels/gym/${id}`
    );
    return result.data;
  };
  const handleChange = (e) => {
    const { value, name } = e.target;
    setGym((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const createOrUpdateSuccess = (message) => {
    alert.success(message);
    getSpaByHotelId().then((gyms) => {
      dispatch(setGymList(gyms));
    });
    setGym({
      gym_name: "",
      gym_description: "",
      hotel: id,
    });
  };
  const createOrUpdateFail = (message) => {
    return alert.error(message);
  };
  const handleCreateGym = async (e) => {
    e.preventDefault();
    try {
      if (!isUpdate) {
        const images = await uploadFile(inputElement.current.files);
        const reuslt = await axios.post(
          `${import.meta.env.VITE_BACKEND_SITE}/gyms`,
          { ...gym, images }
        );
        const { message, statusCode } = reuslt.data;
        if (statusCode === 201) {
          return createOrUpdateSuccess(message);
        }
        return createOrUpdateFail(message);
      } else {
        const images = await uploadFile(inputElement.current.files);
        const result = await axios.patch(
          `${import.meta.env.VITE_BACKEND_SITE}/gyms/${idUpdate}`,
          { ...gym, images }
        );
        const { message, statusCode } = result.data;
        if (statusCode === 202) {
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
  const handleDeleteGym = async (id) => {
    try {
      if (window.confirm("Are you sure delete spa ?")) {
        const result = await axios.delete(
          `${import.meta.env.VITE_BACKEND_SITE}/gyms/${id}`
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
  const handleUpdate = (gym) => {
    const { gym_name, gym_description, id } = gym;
    setGym({
      gym_name,
      gym_description,
    });
    setIsUpdate(true);
    setIdUpdate(id);
  };
  return (
    <div>
      <GymComponentAdmin
        handleChange={handleChange}
        inputElement={inputElement}
        handleCreateGym={handleCreateGym}
        gyms={gyms}
        handleDeleteGym={handleDeleteGym}
        gym={gym}
        handleUpdate={handleUpdate}
      />
    </div>
  );
}
