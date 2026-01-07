import { configureStore } from "@reduxjs/toolkit";
import getAuthSlice from "./authSlice/authSlice";
import getModalSlice from "./modalSlice";

const store = configureStore({
  reducer: {
    authentication: getAuthSlice,
    modal: getModalSlice,
  },
});

export default store;
