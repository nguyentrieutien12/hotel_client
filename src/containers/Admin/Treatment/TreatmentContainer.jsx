import { UploadFile } from "@mui/icons-material";
import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { uploadFile } from "../../../helpers/uploadFile";
import TreatmentComponent from "../../../components/Admin/Treatment/TreatmentComponent";
import axios from "axios";
import { useAlert } from "react-alert";
export default function TreatmentContainer() {
  const { spaId } = useParams();
  const alert = useAlert();
  const inputElement = useRef();
  const [treatment, setTreatment] = useState({
    treatment_name: "",
    treatment_description: "",
    treatment_price: "",
    spa: spaId,
  });
  const createOrUpdateSuccess = (message) => {
    alert.success(message);
    //  getSpaByHotelId().then((spas) => {
    //    dispatch(setSpaList(spas));
    //  });
    setTreatment({
      treatment_name: "",
      treatment_description: "",
      treatment_price: "",
      spa: spaId,
    });
  };
  const createOrUpdateFail = (message) => {
    return alert.error(message);
  };
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setTreatment((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  const handleOnCreateTreatment = async (e) => {
    e.preventDefault();
    try {
      const images = await uploadFile(inputElement.current.files);
      const result = await axios.post(
        `${import.meta.env.VITE_BACKEND_SITE}/treatments`,
        { ...treatment, images }
      );
      const { statusCode, message } = result.data;
      console.log(statusCode);
      if (statusCode === 201) {
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
      <TreatmentComponent
        handleOnChange={handleOnChange}
        handleOnCreateTreatment={handleOnCreateTreatment}
        inputElement={inputElement}
      />
    </div>
  );
}
