import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
export const restaurantStore = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setRestaurantList: (state, action) => {
      const { payload } = action;
      state = [...payload];
      return state;
    },
  },
});
// Action creators are generated for each case reducer function
export const { setRestaurantList } = restaurantStore.actions;

export default restaurantStore.reducer;
