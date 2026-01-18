import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../features/CustomModal/modalSlice";
import ModalDeleteToast from "../Modal_delete_toast";
import OrderDeleteSuccessMsg from "../modal/OrderDeleteSuccessMsg";
import AddCategory from "../category/AddCategory";
import Export_modal from "../modal/Export_modal";
import DeleteProducts from "../modal/DeleteProducts";
import { X } from "lucide-react";

export default function GlobalModal() {
  const {
    isOpen,
    // delete modal or success modal
    modalType,
    modalProps,
  } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  // const renderContent = () => {
  //   switch (modalType) {
  //     case "Delete_Confirm":
  //       return <ModalDeleteToast {...modalProps} />;
  //     case "Add_Category":
  //       return <AddCategory {...modalProps} />;
  //     case "Delete_Confirm_Message":
  //       return <OrderDeleteSuccessMsg {...modalProps} />;
  //     default:
  //       return null;
  //   }
  // };
  if (!isOpen) return null;
  let content = null;

  if (modalType === "Delete_Confirm") {
    content = <ModalDeleteToast {...modalProps} />;
  }
  if (modalType === "Add_Category") {
    content = <AddCategory {...modalProps} />;
  }
  if (modalType === "Delete_Confirm_Message") {
    content = <OrderDeleteSuccessMsg {...modalProps} />;
  }
  if (modalType === "Export_Success") {
    content = <Export_modal {...modalProps} />;
  }
  if (modalType === "Product_Delete_Confirm") {
    content = <DeleteProducts {...modalProps} />;
  }
  return (
    <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center backdrop-blur-sm inset-1 z-99999">
      {content}
      <button
        className="text-sm text-gray-500 absolute top-5 right-5"
        onClick={() => dispatch(closeModal())}
      >
        <X className="w-8 h-8 cursor-pointer transition-all duration-300 ease-in-out" />
      </button>
    </div>
  );
}
