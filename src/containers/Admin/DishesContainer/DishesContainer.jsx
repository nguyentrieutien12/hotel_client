import React, { useEffect, useRef, useState } from "react";
import DishesComponent from "../../../components/Admin/Dishes/DishesComponent";
import { useParams } from "react-router-dom";
import { uploadFile } from "../../../helpers/uploadFile";
import axios from "axios";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { setDishList } from "./../../../features/dish/dish";
export default function DishesContainer() {
  const { restaurantId } = useParams();
  const alert = useAlert();
  const inputElement = useRef();
  const [isUpdate, setIsUpdate] = useState(false);
  const dispatch = useDispatch();
  const dishes = useSelector((state) => state.dishes);
  const [dish, setDish] = useState({
    dishe_name: "",
    dishe_description: "",
    dish_price: "",
    restaurant: restaurantId,
  });
  useEffect(() => {
    getDisheByRestaurantId().then((dishes) => {
      dispatch(setDishList(dishes));
    });
  }, []);
  console.log(dishes);
  const handleChange = (e) => {
    const { value, name } = e.target;
    setDish((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  const createOrUpdateSuccess = (message) => {
    alert.success(message);

    setDish({
      dishe_name: "",
      dishe_description: "",
      dishe_price: "",
      restaurant: restaurantId,
    });
  };
  const getDisheByRestaurantId = async () => {
    const result = await axios.get(
      `${import.meta.env.VITE_BACKEND_SITE}/dishes/${restaurantId}`
    );
    return result.data;
  };
  const handeClick = async (e) => {
    e.preventDefault();
    try {
      if (!isUpdate) {
        const images = await uploadFile(inputElement.current.files);
        const reuslt = await axios.post(
          `${import.meta.env.VITE_BACKEND_SITE}/dishes`,
          { ...dish, images }
        );
        const { message, statusCode } = reuslt.data;
        if (statusCode === 201) {
          return createOrUpdateSuccess(message);
        }
        return createOrUpdateFail(message);
      } else {
        // const images = await uploadFile(inputElement.current.files);
        // const result = await axios.patch(
        //   `${import.meta.env.VITE_BACKEND_SITE}/spas/${idUpdate}`,
        //   { ...spa, images }
        // );
        // const { message, statusCode } = result.data;
        // if (statusCode === 202) {
        //   return createOrUpdateSuccess(message);
        // }
        // return createOrUpdateFail(message);
      }
    } catch (error) {
      if (error.response) {
        const { message } = error.response.data;
        alert.error(message[0]);
      }
    }
  };
  return (
    <div>
      <DishesComponent
        handleChange={handleChange}
        inputElement={inputElement}
        handeClick={handeClick}
        dish={dish}
        dishes={dishes}
      />
    </div>
  );
}
