import axios from "axios";
import { getCookie } from "./cookie.helper";
export const account = async (email = getCookie("email")) => {
  const result = await axios.get(
    `${import.meta.env.VITE_BACKEND_SITE}/accounts/${email}`
  );
  return result.data;
};
