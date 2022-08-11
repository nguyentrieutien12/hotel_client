import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
export const spaStore = createSlice({
  name: "spa",
  initialState,
  reducers: {
    setSpaList: (state, action) => {
      const { payload } = action;
      state = [...payload];
      return state;
    },
  },
});
// Action creators are generated for each case reducer function
export const { setSpaList } = spaStore.actions;

export default spaStore.reducer;
