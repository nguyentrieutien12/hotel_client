import React from "react";
import HotelComponentCustomer from "../../../components/Customer/Main/Hotel/HotelComponentCustomer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCookie, setCookie } from "../../../helpers/cookie.helper";
export default function HotelCustomerContainer() {
  const navigate = useNavigate();
  const { hotelId } = useParams();
  useEffect(() => {
    setCookie("hotelId", hotelId);
    if (!getCookie("isAnswer")) {
      navigate("/main");
    } else if (!getCookie("access_token")) {
      navigate("/login");
    }
  }, []);
  return (
    <div>
      <HotelComponentCustomer />
    </div>
  );
}
