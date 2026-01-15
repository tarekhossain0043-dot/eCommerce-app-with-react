import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../features/CustomModal/modalSlice";
import { X } from "lucide-react";
import { useState } from "react";

export default function GlobalModal() {
  const dispatch = useDispatch();
  const { isOpen, content } = useSelector((state) => state.modal);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!isOpen) return null;

  return (
    <div
      className={` ${
        isModalOpen ? "visible" : "invisible"
      } fixed inset-0 z-999 flex items-center justify-center backdrop-blur-sm inset-1`}
    >
      <div className="bg-white p-6 rounded-sm w-full max-w-md relative">
        <button
          onClick={() => dispatch(closeModal())}
          className="absolute top-2 right-2 text-xl"
        >
          <X
            onClick={() => setIsModalOpen((prev) => !prev)}
            className="w-5 h-5 cursor-pointer transition-all duration-300 ease-in-out hover:scale-105"
          />
        </button>

        {/* Dynamic Content */}
        {content}
      </div>
    </div>
  );
}
