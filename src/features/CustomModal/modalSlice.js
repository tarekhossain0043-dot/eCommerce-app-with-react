import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isOpen: false,
  modalType: null, // delete modal or success modal
  modalProps: {}, // modal dynamic data here
};
const modalSlice = createSlice({
  name: "modalSlice",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.modalType = action.payload.type;
      state.modalProps = action.payload.props || {};
    },
    closeModal: (state) => {
      (state.isOpen = false), (state.modalType = null), (state.modalProps = {});
    },
  },
});
export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
