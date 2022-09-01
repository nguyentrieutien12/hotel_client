export const isCheckActive = (list, type, id) => {
  const x = list.filter((item) => {
    return item.type == type;
  });
  console.log(x);
  let result = false;
  if (x?.length > 0) {
    x.forEach((item) => {
      if (item[`${type}s`]["id"] == id) {
        result = true;
      }
    });
  }
  return result;
};
