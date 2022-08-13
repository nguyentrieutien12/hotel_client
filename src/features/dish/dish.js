import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
export const dishStore = createSlice({
  name: "dish",
  initialState,
  reducers: {
    setDishList: (state, action) => {
      const { payload } = action;
      state = [...payload];
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setDishList } = dishStore.actions;

export default dishStore.reducer;
