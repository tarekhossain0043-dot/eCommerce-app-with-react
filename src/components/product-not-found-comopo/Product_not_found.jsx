import React from "react";
import notFoundProImg from "../../assets/not-found-product/product-not-found-image.png";
import { useNavigate } from "react-router-dom";
import { Plus } from "lucide-react";

export default function Product_not_found() {
  const navigate = useNavigate();
  return (
    <div className="bg-white flex items-center justify-center py-4 text-center font-normal capitalize">
      <div className="flex max-w-100 m-auto flex-col gap-6 text-center m-auto">
        <img
          src={notFoundProImg}
          alt="product-not-found-img"
          className="w-35 h-35 max-w-100 mx-auto"
        />
        <span className="block text-black capitalize font-bold">
          Add Products
        </span>
        <span className="text-[14px] leading-6 text-default font-normal block">
          Start making sales by adding your products. You can import and manage
          your products at any time.
        </span>
        <button
          onClick={() => navigate("/add-poroduct")}
          // disabled={isLoading}
          className="text-white px-5 flex items-center gap-2 max-w-50 mx-auto truncate py-2.5 text-[16px] leading-6 font-normal rounded-sm bg-blue-2 border border-transparent hover:border-slate-100 capitalize cursor-pointer transition-all duration-300 ease-in-out hover:bg-white hover:text-blue-2 text-[16px] font-normal leading-6"
        >
          {/* {!isLoading ? "save" : "saving ...."} */}
          <Plus className="w-6 h-6" />
          add product
        </button>
        <button className="capitalize transition-all duration-300 ease-in-out text-blue-clr cursor-pointer hover:text-primary">
          read more
        </button>
      </div>
    </div>
  );
}
