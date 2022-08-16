import axios from "axios";
export const account = async (email) => {
  const result = await axios.get(
    `${import.meta.env.VITE_BACKEND_SITE}/accounts/${email}`
  );
  return result.data;
};
