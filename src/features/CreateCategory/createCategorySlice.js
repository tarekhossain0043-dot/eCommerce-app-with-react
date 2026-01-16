import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  category: [],
  filterCategory: "",
};
const categorySlice = createSlice({
  name: "add category",
  initialState,
  reducers: {
    addCategory: (state, action) => {
      state.category = action.payload;
    },
    editCategory: (state, action) => {},
  },
});
export const { addCategory } = categorySlice.actions;
export default categorySlice.reducer;
