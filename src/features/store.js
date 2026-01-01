import { configureStore } from "@reduxjs/toolkit";
import getAuthSlice from "./authSlice/authSlice";
const store = configureStore({
  reducer: {
    authentication: getAuthSlice,
  },
});

export default store;
