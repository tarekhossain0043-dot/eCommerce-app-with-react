import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isOpen: false,
  content: null,
};
const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModel: (state, action) => {
      (state.isOpen = true), (state.content = action.payload);
    },
    closeModal: (state) => {
      (state.isOpen = false), (state.content = null);
    },
  },
});

export const { openModel, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
