import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../../features/CustomModal/modalSlice";
import { Check, X } from "lucide-react";

export default function Export_modal() {
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
        <span className="w-15 h-15 rounded-full flex items-center justify-center text-[#1E5EFF] bg-[#ECF2FF] block">
          <Check className="w-6 h-6" />
        </span>
        <span className="block text-20 leading-7 text-black">
          Export Successfull
        </span>
        <button className="block w-fit py-2 px-4 rounded-sm cursor-pointer bg-blue-clr text-white font-normal capitalize cursor-pointer transition-all duration-300 ease-in-out hover:text-primary hover:shadow-sm">
          Continue
        </button>
      </div>
    </div>
  );
}
