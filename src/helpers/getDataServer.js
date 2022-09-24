import axios from "axios";
import { getCookie } from "./cookie.helper";

export const getDataFromServer = async (endpoint) => {
  try {
    const result = await axios.get(
      `${import.meta.env.VITE_BACKEND_SITE}/${endpoint}`,
      {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          email: getCookie("email"),
          Authorization: `Bearer ${getCookie("access_token")}`,
        },
      }
    );
    return result.data;
  } catch (error) {}
};
