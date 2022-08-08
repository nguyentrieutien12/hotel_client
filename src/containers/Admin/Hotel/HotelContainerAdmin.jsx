import React, { useRef, useState } from "react";
import HotelComponentdmin from "../../../components/Admin/Hotel/HotelComponentdmin";
import axios from "axios";
import { mapImage } from "../../../helpers/mapImage";
export default function HotelContainerAdmin() {
  const [hotel, setHotel] = useState({});
  const inputElement = useRef();
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
    console.log(hotelResult.data);
  };
  return (
    <div>
      <HotelComponentdmin
        inputElement={inputElement}
        handleChange={handleChange}
        handleCreateHotel={handleCreateHotel}
      />
    </div>
  );
}
