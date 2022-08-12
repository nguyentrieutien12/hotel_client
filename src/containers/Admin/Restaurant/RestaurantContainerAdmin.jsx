import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import RestaurantComponentAdmin from "../../../components/Admin/Restaurant/RestaurantComponentAdmin";
import { uploadFile } from "../../../helpers/uploadFile";
import { setRestaurantList } from "./../../../features/restaurant/restaurant";
export default function RestaurantContainerAdmin() {
  const alert = useAlert();
  const { id } = useParams();
  const dispatch = useDispatch();
  const restaurants = useSelector((state) => state.restaurants);
  const inputElement = useRef();
  const [restaurant, setRestaurant] = useState({
    restaurant_name: "",
    restaurant_description: "",
    hotel: id,
  });
  console.log(restaurants);
  const handleChangeRestaurant = (e) => {
    const { name, value } = e.target;
    setRestaurant((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  useEffect(() => {
    getAllRestaurantByHotelId().then((restaurants) => {
      dispatch(setRestaurantList(restaurants));
    });
  }, []);
  const getAllRestaurantByHotelId = async () => {
    const result = await axios.get(
      `${import.meta.env.VITE_BACKEND_SITE}/hotels/restaurant/${id}`
    );
    return result.data;
  };
  const createOrUpdateSuccess = (message) => {
    alert.success(message);
    //  getSpaByHotelId().then((spas) => {
    //    dispatch(setSpaList(spas));
    //  });
    setSpa({
      restaurant_name: "",
      restaurant_description: "",
      hotel: id,
    });
  };
  const handleCreateRes = async (e) => {
    e.preventDefault();
    try {
      const images = await uploadFile(inputElement.current.files);
      const result = await axios.post(
        `${import.meta.env.VITE_BACKEND_SITE}/restaurants`,
        { ...restaurant, images }
      );
      const { message, statusCode } = result.data;
      if (statusCode === 202) {
        return createOrUpdateSuccess(message);
      }
      return createOrUpdateFail(message);
    } catch (error) {
      if (error.response) {
        const { message } = error.response.data;
        alert.error(message[0]);
      }
    }
  };
  return (
    <div>
      <RestaurantComponentAdmin
        handleChangeRestaurant={handleChangeRestaurant}
        inputElement={inputElement}
        handleCreateRes={handleCreateRes}
      />
    </div>
  );
}
