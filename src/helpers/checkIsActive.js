export const isCheckActive = (list, type, id) => {
  if (list?.length > 0) {
    const x = list.filter((item) => {
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
  }
};
