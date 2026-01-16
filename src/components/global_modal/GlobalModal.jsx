import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../features/CustomModal/modalSlice";
import ModalDeleteToast from "../Modal_delete_toast";
import OrderDeleteSuccessMsg from "../modal/OrderDeleteSuccessMsg";

export default function GlobalModal() {
  const {
    isOpen,
    modalType, // delete modal or success modal
    modalProps,
  } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  if (!isOpen) return null;
  let content = null;

  if (modalType === "Delete_Confirm") {
    content = <ModalDeleteToast {...modalProps} />;
  }
  if (modalType === "Delete_Confirm_Message") {
    content = <OrderDeleteSuccessMsg {...modalProps} />;
  }
  return (
    <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center backdrop-blur-sm inset-1 z-99999">
      {content}
      <button
        className="mt-4 text-sm text-gray-500"
        onClick={() => dispatch(closeModal())}
      >
        Close
      </button>
    </div>
  );
}
