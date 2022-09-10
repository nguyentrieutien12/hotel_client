import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { exportFile } from "../../../helpers/exportFile";

export default function FeedbackComponentAdmin() {
  const [feedback, setFeedback] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [feedbackList, setFeedbackList] = useState([]);
  useEffect(() => {
    try {
      getAllFeedback().then((feedbackList) => {
        const { feedbacks, hotels } = feedbackList;
        setHotels(hotels);
        setFeedbackList(feedbacks);
        const firstHotel = hotels[0]?.hotels?.id;
        const filterFirstHotel = feedbacks.filter(
          (hotel) => hotel?.hotel?.id == firstHotel
        );
        setFeedback(filterFirstHotel);
      });
    } catch (error) {}
  }, []);
  const getAllFeedback = async () => {
    try {
      const result = await axios.get(
        `${import.meta.env.VITE_BACKEND_SITE}/feedback`
      );
      return result.data;
    } catch (error) {
      console.log(error);
    }
  };
  const showFeedback = () => {
    if (feedback.length > 0) {
      return feedback.map((feedback) => {
        return (
          <tr>
            <td>{feedback?.account?.email}</td>
            <td>{feedback?.hotel?.hotel_name}</td>
            <td>{feedback?.account?.username}</td>
            <td>{feedback?.rate}</td>
            <td>{feedback?.feedback}</td>
          </tr>
        );
      });
    }
  };
  const handleChangeHotel = (e) => {
    const { value } = e.target;
    filterFeedback(value);
  };
  const filterFeedback = (id) => {
    const filterFeedback = feedbackList.filter(
      (hotel) => hotel?.hotel?.id == id
    );
    setFeedback(filterFeedback);
  };
  const showHotels = () => {
    console.log(hotels);
    if (hotels.length) {
      return hotels.map((hotel, index) => {
        return (
          <option selected={index === 0} value={hotel?.hotels?.id}>
            {hotel?.hotels?.hotel_name}
          </option>
        );
      });
    }
  };
  const dowloadPdf = () => {
    const feedback = document.querySelector(".feedback");
    exportFile(feedback, "feedback");
  };
  return (
    <div>
      <div class="row">
        <div class="row">
          <div class="col-xs-1 col-sm-1 col-md-1 col-lg-1 ">
            <button
              onClick={dowloadPdf}
              type="button"
              class="btn btn-danger my-4 "
            >
              EXPORT
            </button>
          </div>
        </div>
        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
          <select
            class="form-control"
            required="required"
            onChange={handleChangeHotel}
          >
            {showHotels()}
          </select>
        </div>
        <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9">
          <table class="table feedback table-hover">
            <thead>
              <tr>
                <th>HOTEL</th>
                <th>EMAIL</th>
                <th>USERNAME</th>
                <th>RATING</th>
                <th>FEEDBACK</th>
              </tr>
            </thead>
            <tbody>{showFeedback()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
