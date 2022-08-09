import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
export const hotelStore = createSlice({
  name: "hotel",
  initialState,
  reducers: {
    setHotelList: (state, action) => {
      const { payload } = action;
      state = [...payload];
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setHotelList } = hotelStore.actions;

export default hotelStore.reducer;
