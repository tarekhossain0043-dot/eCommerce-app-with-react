import React from "react";

// import { closeModal } from "./modalSlice";
import { useSelector } from "react-redux";
// import { closeModal } from "./features/modalSlice";

const GlobalModal = () => {
  //   const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.modal);
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-999 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="w-full max-w-md bg-white rounded-lg shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100">
          {/* <h3 className="text-xl font-bold text-[#1e293b]">{title}</h3> */}
          <button
            // onClick={() => dispatch(closeModal())}
            className="text-gray-400 hover:text-gray-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-8"></div>

        {/* Footer */}
        {/* <div className="flex justify-end gap-3 px-6 py-4 bg-gray-50/50">
          <button 
            onClick={() => dispatch(closeModal())}
            className="px-5 py-2 text-[#ef4444] font-medium hover:bg-red-50 rounded-md transition-colors"
          >
            Cancel
          </button>
          <button 
            onClick={() => {
                onConfirm(); 
                dispatch(closeModal());
            }}
            className={`px-6 py-2 rounded-md font-semibold text-white shadow-sm transition-all ${
                type === 'danger' ? 'bg-[#ef4444] hover:bg-[#dc2626]' : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {confirmText || 'Confirm'}
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default GlobalModal;
