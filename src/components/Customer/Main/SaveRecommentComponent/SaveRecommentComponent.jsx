import axios from "axios";
import React from "react";
import { useState } from "react";
import { useAlert } from "react-alert";
import { useParams } from "react-router-dom";
import { isCheckActive } from "./../../../../helpers/checkIsActive";
import { getCookie } from "../../../../helpers/cookie.helper";
import { useEffect } from "react";
import styles from "./save.recomment.module.css";
function SaveRecommentComponent(props) {
  const alert = useAlert();
  const params = useParams();
  const { hotelId, detailId, type } = props;
  const [account, setAccount] = useState(null);
  const [time, setTime] = useState(new Date());
  const handleSaveRecomment = async () => {
    try {
      const result = await axios.post(
        `${import.meta.env.VITE_BACKEND_SITE}/recommend/${props.type}`,
        { id: props?.id, type: props?.type, hotel: params?.hotelId }
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
  let result = isCheckActive(props.recommend, props.type, props.data?.[0]?.id);
  const handleOrder = async () => {
    try {
      const result = await axios.post(
        `${import.meta.env.VITE_BACKEND_SITE}/order/${type}`,
        {
          hotelId,
          [`${type}Id`]: detailId,
          time,
          account,
          type,
        }
      );
      const { statusCode, message } = result.data;
      if (statusCode === 201) {
        const modal = document.querySelector(".modal");
        const bg = document.querySelector(".modal-backdrop");
        if (bg) {
          bg.parentNode.removeChild(bg);
        }
        modal.style.display = "none";
        return alert.success(message);
      }
      return alert.error(message);
    } catch (error) {
      console.log(error);
    }
  };
  const handleGetDate = (e) => {
    setTime(e.target.value);
  };
  useEffect(() => {
    getAccount().then((account) => {
      setAccount(account?.id);
    });
  }, []);
  const getAccount = async () => {
    try {
      const result = await axios.get(
        `${import.meta.env.VITE_BACKEND_SITE}/accounts/${getCookie("email")}`
      );
      return result.data;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="restaurant_detail_header_option">
      <i
        class="fa-solid fa-heart"
        onClick={handleSaveRecomment}
        style={{ color: result ? "rgb(7, 163, 28)" : "white" }}
      ></i>
      {props.isShow ? (
        <button
          type="button"
          class={`btn ${styles.book_table}`}
          data-toggle="modal"
          data-target="#exampleModal"
        >
          RESERVE A TABLE
        </button>
      ) : (
        ""
      )}
      {/* TIME PICKER */}
      <div class="modal fade" id="exampleModal" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5
                style={{ color: "black" }}
                class="modal-title"
                id="exampleModalLabel"
              >
                Pick Date To Order
              </h5>
            </div>
            <div class="modal-body">
              <div class="col-sm-10">
                <input
                  onChange={handleGetDate}
                  type="date"
                  name=""
                  class="form-control"
                  required="required"
                />
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                onClick={handleOrder}
                type="button"
                class="btn btn-primary"
              >
                Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SaveRecommentComponent;
