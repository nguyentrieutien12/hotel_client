import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
export const gymStore = createSlice({
  name: "gym",
  initialState,
  reducers: {
    setGymList: (state, action) => {
      const { payload } = action;
      state = [...payload];
      return state;
    },
  },
});
// Action creators are generated for each case reducer function
export const { setGymList } = gymStore.actions;

export default gymStore.reducer;
