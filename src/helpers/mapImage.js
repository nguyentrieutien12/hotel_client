export const mapImage = (image) => {
  return `${import.meta.env.VITE_BACKEND_SITE}/${
    import.meta.env.VITE_STORE_IMAGE
  }/${image}`;
};
