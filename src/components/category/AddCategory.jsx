import { X } from "lucide-react";
import React from "react";
import { product_Category } from "../../assets/assets";
import { useDispatch } from "react-redux";
import { openModal } from "../../features/CustomModal/modalSlice";

export default function AddCategory() {
  const dispatch = useDispatch();
  const handleAddCategoryModal = () => {
    dispatch(
      openModal({
        type: "AddCategory",
        // props : category: selectedIds
      })
    );
  };
  return (
    <div className="bg-white shadow-sm rounded-sm p-7 relative">
      <span className="text-[20px] leading-7 text-black capitalize text-left">
        Add Category
      </span>
      <X
        onClick={() => handleAddCategoryModal()}
        className="w-5 h-5 cursor-pointer transition-all duration-300 ease-in-out hover:text-primary hover:scale-105 hover:rotate-180 absolute top-0 right-0"
      />
      <div className="mt-7 flex flex-col gap-2">
        <span className="text-default capitalize text-[14px] leading-5">
          Category Name
        </span>
        <input
          type="text"
          placeholder="Women Clothes"
          className="w-full px-4 py-2 rounded-sm text-[#A1A7C4] focus:ring-1 focus:ring-blue-clr transition-all duration-300 ease-in-out"
        />
      </div>
      <div className="mt-6 flex flex-col gap-2">
        <span className="text-default capitalize text-[14px] leading-5">
          Add Products
        </span>
        <select name="choose-product" id="choose-product">
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
      </div>
    </div>
  );
}
