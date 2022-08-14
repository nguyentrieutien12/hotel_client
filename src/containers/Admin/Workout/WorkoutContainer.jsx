import React, { useState } from "react";
import { useRef } from "react";
import { useParams } from "react-router-dom";
import WorkoutComponent from "../../../components/Admin/Workout/WorkoutComponent";
import { uploadFile } from "../../../helpers/uploadFile";
import axios from "axios";
import { useAlert } from "react-alert";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setWorkoutList } from "../../../features/workout/workout";
export default function WorkoutContainer() {
  const { gymId } = useParams();
  const inputElement = useRef();
  const dispatch = useDispatch();
  const workouts = useSelector((state) => state.workouts);
  const [isUpdate, setIsUpdate] = useState(false);
  const [idUpdate, setIdUpdate] = useState(null);
  const [workout, setWorkout] = useState({
    workout_name: "",
    workout_description: "",
    workout_price: "",
    gym: gymId,
  });
  const alert = useAlert();
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setWorkout((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  useEffect(() => {
    getWorkoutByGymId().then((workouts) => {
      dispatch(setWorkoutList(workouts));
    });
  }, []);
  const getWorkoutByGymId = async () => {
    const result = await axios.get(
      `${import.meta.env.VITE_BACKEND_SITE}/gyms/${gymId}`
    );
    return result.data;
  };
  const createOrUpdateSuccess = (message) => {
    alert.success(message);
    getWorkoutByGymId().then((workouts) => {
      dispatch(setWorkoutList(workouts));
    });
    setWorkout({
      workout_name: "",
      workout_description: "",
      workout_price: "",
      gym: gymId,
    });
  };
  const handleOnClick = async (e) => {
    e.preventDefault();
    try {
      if (!isUpdate) {
        const images = await uploadFile(inputElement.current.files);
        const reuslt = await axios.post(
          `${import.meta.env.VITE_BACKEND_SITE}/workouts`,
          { ...workout, images }
        );
        const { message, statusCode } = reuslt.data;
        if (statusCode === 201) {
          return createOrUpdateSuccess(message);
        }
        return createOrUpdateFail(message);
      } else {
        const images = await uploadFile(inputElement.current.files);
        const result = await axios.patch(
          `${import.meta.env.VITE_BACKEND_SITE}/workouts/${idUpdate}`,
          { ...workout, images }
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
  const handleOnDelete = async (id) => {
    if (window.confirm("Are you sure delete this ?")) {
      const result = await axios.delete(
        `${import.meta.env.VITE_BACKEND_SITE}/workouts/${id}`
      );
      const { message, statusCode } = result.data;
      if (statusCode === 202) {
        return createOrUpdateSuccess(message);
      }
      return createOrUpdateFail(message);
    }
  };
  const handleUpdate = (workout) => {
    const { workout_name, workout_description, workout_price, id } = workout;
    setWorkout({
      workout_name,
      workout_description,
      workout_price,
      gym: gymId,
    });
    setIsUpdate(true);
    setIdUpdate(id);
  };
  const createOrUpdateFail = (message) => {
    return alert.error(message);
  };
  return (
    <div>
      <WorkoutComponent
        handleOnChange={handleOnChange}
        inputElement={inputElement}
        handleOnClick={handleOnClick}
        workouts={workouts}
        workout={workout}
        handleOnDelete={handleOnDelete}
        handleUpdate={handleUpdate}
      />
    </div>
  );
}
