import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
export const accountStore = createSlice({
  name: "account",
  initialState,
  reducers: {
    setAccount: (state, action) => {
      const { payload } = action;
      state = [...payload];
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { account, setAccount } = accountStore.actions;

export default accountStore.reducer;
