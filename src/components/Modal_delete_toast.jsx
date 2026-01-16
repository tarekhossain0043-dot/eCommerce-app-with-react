import { X } from "lucide-react";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteSelected } from "../features/add-product-slice/addProductSlice";
import { closeModal, openModal } from "../features/CustomModal/modalSlice";

export default function Modal_delete_toast({ count }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteSelected());
    dispatch(closeModal());
    dispatch(
      openModal({
        type: "Delete_Confirm_Message",
        props: { message: "product deleted successfully!" },
      })
    );
    // dispatch(openModal({
    // //   type : "Delete_Confirm_Message",

    // // }))
  };

  return (
    <div className="bg-white p-7 relative shadow-black/19 shadow-sm rounded-sm">
      <X
        onClick={() => dispatch(closeModal())}
        className="w-5 h-5 cursor-pointer transition-all duration-500 ease-in-out hover:scale-105 hover:text-primary text-default absolute top-3 right-3"
      />
      <span className="text-[20px] leading-7 font-bold capitalize text-left block mb-5">
        Delete Items
      </span>
      <span className="text-[16px] leading-6 text-black font-normal block mb-10">
        Are you sure you want to delete {count} selected items?
      </span>
      <div className="flex items-center justify-end gap-2">
        <button
          onClick={() => dispatch(closeModal())}
          className="px-6.5 py-2 ruonded-sm cursor-pointer transition-all duration-300 ease-in-out font-normal capitalize rounded-sm text-[16px] leading-6 text-[#F0142F] hover:bg-[#F0142F] hover:text-white"
        >
          cancel
        </button>
        <button
          onClick={handleDelete}
          className="px-6.5 py-2 ruonded-sm cursor-pointer transition-all duration-300 ease-in-out font-normal rounded-sm capitalize text-[16px] leading-6 bg-[#F0142F] text-white"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
