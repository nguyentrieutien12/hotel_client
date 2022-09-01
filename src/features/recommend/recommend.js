import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
export const recommendStore = createSlice({
  name: "recommend",
  initialState,
  reducers: {
    setRecommendList: (state, action) => {
      const { payload } = action;
      state = [...payload];
      return state;
    },
  },
});
// Action creators are generated for each case reducer function
export const { setRecommendList } = recommendStore.actions;

export default recommendStore.reducer;
