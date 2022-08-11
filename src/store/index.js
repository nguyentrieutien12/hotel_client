import { configureStore } from "@reduxjs/toolkit";
import accountStore from "../features/account/account";
import hotelStore from "../features/hotel/hotel";
import spaStore from "./../features/spa/spa";
export const store = configureStore({
  reducer: {
    accounts: accountStore,
    hotels: hotelStore,
    spas: spaStore,
  },
});
