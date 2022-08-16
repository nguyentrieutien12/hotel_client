import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
export const quizStore = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setQuizList: (state, action) => {
      const { payload } = action;
      state = [...payload];
      return state;
    },
  },
});
// Action creators are generated for each case reducer function
export const { setQuizList } = quizStore.actions;

export default quizStore.reducer;
