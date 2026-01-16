import { Check, X } from "lucide-react";
import React, { useEffect } from "react";
import { closeModal } from "../../features/CustomModal/modalSlice";
import { useDispatch } from "react-redux";

export default function OrderDeleteSuccessMsg({ count }) {
  const dispatch = useDispatch();
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(closeModal());
    }, 2000);
    return () => clearTimeout(timer);
  }, [dispatch]);
  return (
    <div className="bg-white p-7 relative shadow-black/19 shadow-sm rounded-sm max-w-md w-full">
      <X
        onClick={() => dispatch(closeModal())}
        className="w-5 h-5 cursor-pointer transition-all duration-500 ease-in-out hover:scale-105 hover:text-primary text-default absolute top-3 right-3"
      />
      <div className="flex items-center justify-center flex-col gap-4">
        <span className="w-15 h-15 rounded-full flex items-center justify-center text-white bg-[#FFA8B3] block">
          <Check className="w-6 h-6" />
        </span>
        <span className="block text-20 leading-7 text-black">
          Deleted {count} item Successfully
        </span>
      </div>
    </div>
  );
}
