import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
export const workoutStore = createSlice({
  name: "treatment",
  initialState,
  reducers: {
    setWorkoutList: (state, action) => {
      const { payload } = action;
      state = [...payload];
      return state;
    },
  },
});
// Action creators are generated for each case reducer function
export const { setWorkoutList } = workoutStore.actions;

export default workoutStore.reducer;
