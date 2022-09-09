import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

export default function FeedbackComponentAdmin() {
  const [feedback, setFeedback] = useState([]);
  useEffect(() => {
    getAllFeedback().then((feedbacks) => {
      setFeedback(feedbacks);
    });
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
            <td>{feedback?.account?.username}</td>
            <td>{feedback?.rate}</td>
            <td>{feedback?.feedback}</td>
          </tr>
        );
      });
    }
  };
  return (
    <div>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <table class="table table-hover">
            <thead>
              <tr>
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
