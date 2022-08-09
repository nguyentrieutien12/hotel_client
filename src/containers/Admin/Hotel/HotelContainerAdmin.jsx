import React, { useEffect, useRef, useState } from "react";
import HotelComponentdmin from "../../../components/Admin/Hotel/HotelComponentdmin";
import axios from "axios";
import { mapImage } from "../../../helpers/mapImage";
import { useAlert } from "react-alert";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setHotelList } from "../../../features/hotel/hotel";
export default function HotelContainerAdmin() {
  const alert = useAlert();
  const inputElement = useRef();
  const hotels = useSelector((state) => state.hotels);
  const dispatch = useDispatch();
  const [hotel, setHotel] = useState({});
  useEffect(() => {
    getAllHotel().then((hotels) => {
      dispatch(setHotelList(hotels));
    });
  }, []);
  const getAllHotel = async () => {
    const result = await axios.get(
      `${import.meta.env.VITE_BACKEND_SITE}/hotels`
    );
    return result.data;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setHotel((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  const handleCreateHotel = async (e) => {
    try {
      e.preventDefault();
      const { length } = inputElement.current.files;
      const form = new FormData();
      for (let i = 0; i < length; i++) {
        form.append("files", inputElement.current.files[i]);
      }
      const result = await axios.post(
        `${import.meta.env.VITE_BACKEND_SITE}/file/upload`,
        form
      );
      const data = result.data;
      const images = data.map((d) => {
        return mapImage(d.filename);
      });

      const hotelResult = await axios.post(
        `${import.meta.env.VITE_BACKEND_SITE}/hotels`,
        { ...hotel, images }
      );
    } catch (error) {
      console.log(error);
      if (error.response) {
        const { message } = error.response.data;
        alert.error(message[0]);
      }
    }
  };
  const handleDeleteHotel = (id) => {
    console.log(id);
  };
  return (
    <div>
      <HotelComponentdmin
        inputElement={inputElement}
        handleChange={handleChange}
        handleCreateHotel={handleCreateHotel}
        hotels={hotels}
        handleDeleteHotel={handleDeleteHotel}
      />
    </div>
  );
}
