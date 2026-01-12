import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: {
    items: ["Men Clothes", "Summer Collection"],
  },
  reducers: {
    addCat: (state, action) => {
      if (!state.items.includes(action.payload)) {
        state.items.push(action.payload);
      }
    },
    removeCat: (state, action) => {
      state.items = state.items.filter((tag) => tag !== action.payload);
    },
  },
});

export const { addCat, removeCat } = categorySlice.actions;
export default categorySlice.reducer;
