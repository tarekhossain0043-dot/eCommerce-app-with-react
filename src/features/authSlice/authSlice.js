import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    user: null,
    isLoggedin: false,
    loading: true,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isLoggedin = !!action.payload;
      state.loading = false;
    },
    logout: (state) => {
      state.user = null;
      state.isLoggedin = false;
      state.loading = false;
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
