import { X } from "lucide-react";
import React from "react";
import { product_Category } from "../../assets/assets";
import { useDispatch } from "react-redux";
import { closeModal } from "../../features/CustomModal/modalSlice";
// import { useNavigate } from "react-router-dom";

export default function AddCategory() {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  return (
    <div className="bg-white shadow-sm rounded-sm p-5 relative max-w-md mx-auto w-full">
      <span className="text-[20px] leading-7 text-black capitalize text-left">
        Add Category
      </span>
      <X
        onClick={() => dispatch(closeModal())}
        className="w-5 h-5 cursor-pointer transition-all duration-300 ease-in-out hover:text-primary hover:scale-105 hover:rotate-180 absolute top-3 right-3"
      />
      <div className="mt-7 flex flex-col gap-2">
        <span className="text-default capitalize text-[14px] leading-5">
          Category Name
        </span>
        <input
          type="text"
          placeholder="Women Clothes"
          className="w-full px-4 py-2 rounded-sm text-[#A1A7C4] outline-none ring-1 ring-slate-100 focus:ring-blue-clr transition-all duration-300 ease-in-out"
        />
      </div>
      <div className="mt-6 flex flex-col gap-2">
        <span className="text-default capitalize text-[14px] leading-5">
          Add Products
        </span>
        <select
          name="choose-product"
          id="choose-product"
          className="w-full px-4 py-2 rounded-sm text-[#A1A7C4] outline-none ring-1 ring-slate-100 focus:ring-blue-clr transition-all duration-300 ease-in-out"
        >
          {product_Category.map((pro, index) => (
            <option key={index} value={pro.title}>
              <div className="flex items-center gap-3">
                <img
                  src={pro.image}
                  className="w-5 h-5 rounded-full object-cover"
                  alt="product-category"
                />
                <span>{pro.title}</span>
              </div>
            </option>
          ))}
        </select>
        <div className="mt-6 flex items-center justify-end gap-1">
          <button
            onClick={() => dispatch(closeModal())}
            className="px-6 py-2 rounded-sm cursor-pointer transition-all duration-500 ease-in-out text-blue-clr hover:text-primary hover:bg-blue-clr capitalize"
          >
            cancel
          </button>
          <button
            onClick={() => dispatch(closeModal())}
            className="px-6 py-2  bg-blue-clr text-white rounded-sm cursor-pointer transition-all duration-500 ease-in-out hover:text-primary capitalize"
          >
            Create Category
          </button>
        </div>
      </div>
    </div>
  );
}
