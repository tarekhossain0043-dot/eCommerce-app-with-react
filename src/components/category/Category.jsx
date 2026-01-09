import { Plus } from "lucide-react";
import React, { useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { product_Category } from "../../assets/assets";

export default function Category() {
  const { setHeaderTitle, setHeaderBtns } = useOutletContext();
  const navigate = useNavigate();
  useEffect(() => {
    setHeaderTitle("Category");
    setHeaderBtns(
      <div className="flex items-center gap-3">
        <button
          onClick={() => navigate("/crate-category")}
          className="text-white py-2.5 text-[16px] leading-6 font-normal px-5 flex items-center gap-2 rounded-sm bg-blue-2 border border-transparent hover:border-slate-100 capitalize cursor-pointer transition-all duration-300 ease-in-out hover:bg-white hover:text-blue-2 text-[16px] font-normal leading-6"
        >
          <Plus className="w-4 h-4 text-white" />
          Add Category
        </button>
      </div>
    );
    return () => {
      setHeaderTitle("");
      setHeaderBtns(null);
    };
  }, [setHeaderTitle, setHeaderBtns, navigate]);
  return (
    <div className="mt-7">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-7.5">
        {product_Category.map((category, index) => (
          <div
            key={index}
            className="rounded-sm cursor-pointer cursor-pointer hover:shadow-md transition-all duration-300 ease-in-out"
          >
            <img
              src={category.image}
              alt="product-img"
              className="w-full max-h-60 object-cover"
            />
            <div className="px-7 py-5 bg-white shadow rounded-br-sm rounded-bl-sm">
              <h4>{category.title}</h4>
              <span className="text-default">{category.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
