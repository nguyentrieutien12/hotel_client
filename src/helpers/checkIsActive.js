export const isCheckActive = (list, type, id) => {
  console.log(list);
  const x = list.filter((item) => {
    console.log(item);
    console.log(type);
    return item.type == type;
  });
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
