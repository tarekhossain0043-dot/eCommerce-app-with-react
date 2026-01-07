import { X } from "lucide-react";
import React from "react";

export default function modal({ children, isModalOpen, onClose, setOnClose }) {
  if (!isModalOpen) return null;
  return (
    <div
      className={`absolute ${
        isModalOpen && onClose ? "flex" : "hidden"
      } top-0 left-0 w-full h-screen bg-slate-200 items-center relative justify-center max-w-md w-full shadow-sm rounded-sm shadow-sm p-5`}
    >
      <X
        className="w-5 h-5 absolute top-5 right-5 cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer transition-all duration-300 ease-in-out"
        onClick={() => setOnClose((prev) => !prev)}
      />
      {children}
    </div>
  );
}
