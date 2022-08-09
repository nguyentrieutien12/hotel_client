import { configureStore } from "@reduxjs/toolkit";
import accountStore from "../features/account/account";
import hotelStore from "../features/hotel/hotel";

export const store = configureStore({
  reducer: {
    accounts: accountStore,
    hotels: hotelStore,
  },
});
