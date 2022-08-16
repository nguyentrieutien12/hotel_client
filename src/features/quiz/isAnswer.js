import { createSlice } from "@reduxjs/toolkit";

const initialState = false;
export const isResult = createSlice({
  name: "isAnswer",
  initialState,
  reducers: {
    setIsAnswer: (state, action) => {
      const { payload } = action;
      state = payload;
      return state;
    },
  },
});
// Action creators are generated for each case reducer function
export const { setIsAnswer } = isResult.actions;

export default isResult.reducer;
