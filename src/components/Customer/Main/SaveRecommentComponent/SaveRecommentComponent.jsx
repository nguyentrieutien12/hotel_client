import axios from "axios";
import React from "react";
import { useAlert } from "react-alert";
import { isCheckActive } from "./../../../../helpers/checkIsActive";
export default function SaveRecommentComponent(props) {
  const alert = useAlert();
  const handleSaveRecomment = async () => {
    try {
      const result = await axios.post(
        `${import.meta.env.VITE_BACKEND_SITE}/recommend/${props.type}`,
        { id: props?.id, type: props?.type }
      );
      const { message, statusCode } = result.data;
      if (statusCode === 201) {
        alert.success(message);
        return setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
      return alert.error(message);
    } catch (error) {
      console.log(error);
    }
  };
  let result = isCheckActive(props.recommend, props.type, props.data[0]?.id);
  return (
    <div className="restaurant_detail_header_option">
      {" "}
      <i
        class="fa-solid fa-heart"
        onClick={handleSaveRecomment}
        style={{ color: result ? "rgb(7, 163, 28)" : "white" }}
      ></i>
      <button type="button" class="btn btn-warning">
        RESERVE A TABLE
      </button>
    </div>
  );
}
