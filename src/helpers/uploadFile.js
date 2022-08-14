import axios from "axios";
import { mapImage } from "./mapImage";

export const uploadFile = async (files) => {
  try {
    const { length } = files;
    if (length < 1) {
      return [];
    }
    const form = new FormData();
    for (let i = 0; i < length; i++) {
      form.append("files", files[i]);
    }
    const result = await axios.post(
      `${import.meta.env.VITE_BACKEND_SITE}/file/upload`,
      form
    );
    const data = result.data;
    const images = data.map((d) => {
      return mapImage(d.filename);
    });
    return images;
  } catch (error) {
    console.log(error);
  }
};
