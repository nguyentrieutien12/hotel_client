import { configureStore } from "@reduxjs/toolkit";
import accountStore from "../features/account/account";

export const store = configureStore({
  reducer: {
    accounts: accountStore,
  },
});
