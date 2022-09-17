import Cookies from "js-cookie";

export const logOut = () => {
  const cookies = document.cookie.split(";");
  const key = [];
  for (const cookie of cookies) {
    const eqPos = cookie.indexOf("=");
    key.push(cookie.slice(0, eqPos).trim());
  }
  key.forEach((cookie) => {
    Cookies.remove(cookie); // removed!
  });
  document.location.reload(true);
};
