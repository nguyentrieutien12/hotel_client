import { configureStore } from "@reduxjs/toolkit";
import accountStore from "../features/account/account";
import hotelStore from "../features/hotel/hotel";
import spaStore from "./../features/spa/spa";
import treatmentStore from "./../features/treatment/treatment";
import restaurantStore from "./../features/restaurant/restaurant";
import dishStore from "./../features/dish/dish";
export const store = configureStore({
  reducer: {
    accounts: accountStore,
    hotels: hotelStore,
    spas: spaStore,
    treatments: treatmentStore,
    restaurants: restaurantStore,
    dishes: dishStore,
  },
});
