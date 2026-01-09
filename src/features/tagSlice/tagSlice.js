import { createSlice } from "@reduxjs/toolkit";

const tagSlice = createSlice({
  name: "tags",
  initialState: {
    items: ["Men Clothes", "Summer Collection"],
  },
  reducers: {
    addTag: (state, action) => {
      if (!state.items.includes(action.payload)) {
        state.items.push(action.payload);
      }
    },
    removeTag: (state, action) => {
      state.items = state.items.filter((tag) => tag !== action.payload);
    },
  },
});

export const { addTag, removeTag } = tagSlice.actions;
export default tagSlice.reducer;
