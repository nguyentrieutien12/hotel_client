import { UploadFile } from "@mui/icons-material";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { uploadFile } from "../../../helpers/uploadFile";
import TreatmentComponent from "../../../components/Admin/Treatment/TreatmentComponent";
import axios from "axios";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { setTreatmentStore } from "../../../features/treatment/treatment";
export default function TreatmentContainer() {
  const { spaId } = useParams();
  const dispatch = useDispatch();
  const treatments = useSelector((state) => state.treatments);
  const alert = useAlert();
  const inputElement = useRef();
  const [treatmentId, setTreatmentId] = useState(null);
  const [isUpdate, setIsUpdate] = useState(false);
  const [treatment, setTreatment] = useState({
    treatment_name: "",
    treatment_description: "",
    treatment_price: "",
    spa: spaId,
  });
  useEffect(() => {
    getTreatmentByIdSpa().then((treatments) => {
      dispatch(setTreatmentStore(treatments));
    });
  }, []);
  const getTreatmentByIdSpa = async () => {
    const result = await axios.get(
      `${import.meta.env.VITE_BACKEND_SITE}/spas/${spaId}`
    );
    return result.data;
  };
  const createOrUpdateSuccess = (message) => {
    alert.success(message);
    getTreatmentByIdSpa().then((treatment) => {
      dispatch(setTreatmentStore(treatment));
    });
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
      if (!isUpdate) {
        const images = await uploadFile(inputElement.current.files);
        const result = await axios.post(
          `${import.meta.env.VITE_BACKEND_SITE}/treatments`,
          { ...treatment, images }
        );
        const { statusCode, message } = result.data;
        console.log(statusCode);
        if (statusCode === 201) {
          return createOrUpdatepuccess(message);
        }
        return createOrUpdateFail(message);
      } else {
        const images = await uploadFile(inputElement.current.files);
        const result = await axios.patch(
          `${import.meta.env.VITE_BACKEND_SITE}/treatments/${treatmentId}`,
          { ...treatment, images }
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
  const handleDeleteTreatment = async (id) => {
    if (window.confirm("Are you sure delete this ?")) {
      const result = await axios.delete(
        `${import.meta.env.VITE_BACKEND_SITE}/treatments/${id}`
      );
      const { message, statusCode } = result.data;
      if (statusCode === 202) {
        return createOrUpdateSuccess(message);
      }
      return createOrUpdateFail(message);
    }
  };
  const handleUpdateTreatment = (treatment) => {
    const { treatment_name, treatment_description, treatment_price, id } =
      treatment;
    setTreatment({ treatment_name, treatment_description, treatment_price });
    setTreatmentId(id);
    setIsUpdate(true);
  };
  return (
    <div>
      <TreatmentComponent
        handleOnChange={handleOnChange}
        handleOnCreateTreatment={handleOnCreateTreatment}
        inputElement={inputElement}
        treatment={treatment}
        treatments={treatments}
        handleDeleteTreatment={handleDeleteTreatment}
        handleUpdateTreatment={handleUpdateTreatment}
      />
    </div>
  );
}
