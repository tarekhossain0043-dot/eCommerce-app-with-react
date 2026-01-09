import { configureStore } from "@reduxjs/toolkit";
import getAuthSlice from "./authSlice/authSlice";
import getTagSlice from "./tagSlice/tagSlice";
import { apiSlice } from "./api/apiSlice";
const store = configureStore({
  reducer: {
    authentication: getAuthSlice,
    tags: getTagSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  // casing , invalidation, poling
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
