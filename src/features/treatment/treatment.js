import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
export const treatmentStore = createSlice({
  name: "treatment",
  initialState,
  reducers: {
    setTreatmentStore: (state, action) => {
      const { payload } = action;
      state = [...payload];
      return state;
    },
  },
});
// Action creators are generated for each case reducer function
export const { setTreatmentStore } = treatmentStore.actions;

export default treatmentStore.reducer;
