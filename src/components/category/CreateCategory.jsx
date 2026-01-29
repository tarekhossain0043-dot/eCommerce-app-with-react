import { ArrowLeft, Edit, EllipsisVertical, Plus, Trash2 } from "lucide-react";
import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import product_img from "../../assets/features/image-1.png";
import CustomCheckbox from "../CustomCheckbox";
import FileDropCompo from "../FileDropCompo";
import { product_Category } from "../../assets/assets";

export default function CreateCategory() {
  const { id } = useParams();
  const current_category = product_Category.find(
    (category) => category.id.toString() === id,
  );
  console.log(current_category);
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <Link
          to="/categories"
          className="text-default cursor-pointer capitalize cursor-pointer flex items-center gap-1 transition-all duration-300 ease-in-out hover:pr-1 hover:text-blue-clr"
        >
          <ArrowLeft className="w-4 h-4" /> back
        </Link>
      </div>
      <div className="flex items-center justify-between">
        <h3>
          {current_category?.title
            ? current_category.title
            : "Category not found!"}
        </h3>
        <div className="flex items-center gap-3">
          <button className="text-blue-clr px-5 py-2.5 leading-6 capitalize border border-slate-100 text-center rounded-sm cursor-pointer transition-all duration-300 ease-in-out hover:bg-blue-clr px-3 hover:text-white">
            Cancel
          </button>
          <button
            onClick={() => navigate("/categories")}
            className="text-white px-5 py-2.5 text-[16px] leading-6 font-normal rounded-sm bg-blue-2 border border-transparent hover:border-slate-100 capitalize cursor-pointer transition-all duration-300 ease-in-out hover:bg-white hover:text-blue-2 text-[16px] font-normal leading-6"
          >
            Save
          </button>
        </div>
      </div>
      <div className="grid grid-cols-[8fr_4fr] gap-7.5 mt-6">
        {/* left area */}
        <div className="p-7 bg-white rounded-sm drop-shadow-sm border-none shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <h4 className="mb-0">Products</h4>
            <p className="text-default mb-0">12</p>
          </div>
          <ul className="flex flex-col gap-3">
            <li className="p-4 rounded-sm border hover:shadow-sm cursor-pointer transition-all duration-300 ease-in-out group border-slate-100 relative w-full flex items-center gap-4">
              <EllipsisVertical className="w-4 h-4 text-default transition-all duration-300 ease-in-out hover:text-primary" />
              <img
                src={product_img}
                alt="product-img"
                className="w-12 h-12 rounded-sm"
              />
              <h6 className="mb-0 text-[14px] leading-5 font-medium text-black capitalize">
                Women Striped T-Shirt
              </h6>
              <div className="absolute right-7 hidden group-hover:flex top-1/2 flex items-center gap-5 transform -translate-y-1/2 text-6 text-[#7E84A3]">
                <span className="w-10 h-10 p-2 rounded-sm cursor-pointer transition-all duration-300 ease-in-out hover:bg-blue-400 hover:text-blue-clr">
                  <Edit className="w-6 h-6" />
                </span>
                <span className="w-10 h-10 p-2 rounded-sm cursor-pointer transition-all duration-300 ease-in-out hover:bg-slate-300 hover:text-blue-clr">
                  <Trash2 className="w-6 h-6" />
                </span>
              </div>
            </li>
            <li className="p-4 rounded-sm border hover:shadow-sm cursor-pointer transition-all duration-300 ease-in-out group border-slate-100 relative w-full flex items-center gap-4">
              <EllipsisVertical className="w-4 h-4 text-default transition-all duration-300 ease-in-out hover:text-primary" />
              <img
                src={product_img}
                alt="product-img"
                className="w-12 h-12 rounded-sm"
              />
              <h6 className="mb-0 text-[14px] leading-5 font-medium text-black capitalize">
                Women Striped T-Shirt
              </h6>
              <div className="absolute right-7 hidden group-hover:flex top-1/2 flex items-center gap-5 transform -translate-y-1/2 text-6 text-[#7E84A3]">
                <span className="w-10 h-10 p-2 rounded-sm cursor-pointer transition-all duration-300 ease-in-out hover:bg-blue-400 hover:text-blue-clr">
                  <Edit className="w-6 h-6" />
                </span>
                <span className="w-10 h-10 p-2 rounded-sm cursor-pointer transition-all duration-300 ease-in-out hover:bg-slate-300 hover:text-blue-clr">
                  <Trash2 className="w-6 h-6" />
                </span>
              </div>
            </li>
            <li className="p-4 rounded-sm border hover:shadow-sm cursor-pointer transition-all duration-300 ease-in-out group border-slate-100 relative w-full flex items-center gap-4">
              <EllipsisVertical className="w-4 h-4 text-default transition-all duration-300 ease-in-out hover:text-primary" />
              <img
                src={product_img}
                alt="product-img"
                className="w-12 h-12 rounded-sm"
              />
              <h6 className="mb-0 text-[14px] leading-5 font-medium text-black capitalize">
                Women Striped T-Shirt
              </h6>
              <div className="absolute right-7 hidden group-hover:flex top-1/2 flex items-center gap-5 transform -translate-y-1/2 text-6 text-[#7E84A3]">
                <span className="w-10 h-10 p-2 rounded-sm cursor-pointer transition-all duration-300 ease-in-out hover:bg-blue-400 hover:text-blue-clr">
                  <Edit className="w-6 h-6" />
                </span>
                <span className="w-10 h-10 p-2 rounded-sm cursor-pointer transition-all duration-300 ease-in-out hover:bg-slate-300 hover:text-blue-clr">
                  <Trash2 className="w-6 h-6" />
                </span>
              </div>
            </li>
            <li className="p-4 rounded-sm border hover:shadow-sm cursor-pointer transition-all duration-300 ease-in-out group border-slate-100 relative w-full flex items-center gap-4">
              <EllipsisVertical className="w-4 h-4 text-default transition-all duration-300 ease-in-out hover:text-primary" />
              <img
                src={product_img}
                alt="product-img"
                className="w-12 h-12 rounded-sm"
              />
              <h6 className="mb-0 text-[14px] leading-5 font-medium text-black capitalize">
                Women Striped T-Shirt
              </h6>
              <div className="absolute right-7 hidden group-hover:flex top-1/2 flex items-center gap-5 transform -translate-y-1/2 text-6 text-[#7E84A3]">
                <span className="w-10 h-10 p-2 rounded-sm cursor-pointer transition-all duration-300 ease-in-out hover:bg-blue-400 hover:text-blue-clr">
                  <Edit className="w-6 h-6" />
                </span>
                <span className="w-10 h-10 p-2 rounded-sm cursor-pointer transition-all duration-300 ease-in-out hover:bg-slate-300 hover:text-blue-clr">
                  <Trash2 className="w-6 h-6" />
                </span>
              </div>
            </li>
            <li className="p-4 rounded-sm border hover:shadow-sm cursor-pointer transition-all duration-300 ease-in-out group border-slate-100 relative w-full flex items-center gap-4">
              <EllipsisVertical className="w-4 h-4 text-default transition-all duration-300 ease-in-out hover:text-primary" />
              <img
                src={product_img}
                alt="product-img"
                className="w-12 h-12 rounded-sm"
              />
              <h6 className="mb-0 text-[14px] leading-5 font-medium text-black capitalize">
                Women Striped T-Shirt
              </h6>
              <div className="absolute right-7 hidden group-hover:flex top-1/2 flex items-center gap-5 transform -translate-y-1/2 text-6 text-[#7E84A3]">
                <span className="w-10 h-10 p-2 rounded-sm cursor-pointer transition-all duration-300 ease-in-out hover:bg-blue-400 hover:text-blue-clr">
                  <Edit className="w-6 h-6" />
                </span>
                <span className="w-10 h-10 p-2 rounded-sm cursor-pointer transition-all duration-300 ease-in-out hover:bg-slate-300 hover:text-blue-clr">
                  <Trash2 className="w-6 h-6" />
                </span>
              </div>
            </li>
          </ul>
          <button className="w-full py-2 mt-4 cursor-pointer transition-all duration-300 hover:text-[#1E5EFF] rounded-sm border-slate-100 border text-center text-primary capitalize transition-all duration-300 ease-in-out hover:shadow-sm flex items-center justify-center gap-1">
            <Plus className="w-4 h-4" />
            add product
          </button>
        </div>
        {/* right area */}
        <div className="flex flex-col gap-7.5">
          <div className="p-7 rounded-sm bg-white shadow-sm drop-shadow-sm">
            <h6 className="mb-6 text-[16px] leading-6 text-black font-bold">
              Category Visibility
            </h6>
            <div className="flex items-center gap-2">
              <CustomCheckbox />
              <span className="text-[16px] font-normal leading-6 text-black">
                Visible on site
              </span>
            </div>
          </div>
          <div className="p-7 rounded-sm bg-white shadow-sm drop-shadow-sm">
            <h6 className="mb-6 text-[16px] leading-6 text-black font-bold">
              Category Info
            </h6>
            <div className="flex w-full flex-col gap-2 mb-6">
              <label htmlFor="discount-price">Category Name</label>
              <input
                type="text"
                name="Women Clothes"
                placeholder="Women Clothes"
                id="Women Clothes"
                className="w-full rounded-sm border px-4 py-3 border-slate-100 transition-all duration-500 ease-in-out outline-none focus:ring-1 focus:ring-blue-clr text-default"
              />
              {/* <span>{discount_price}</span> */}
            </div>
            <div className="flex flex-col gap-1">
              <span className="mb-6 font-bold block text-[16px] leading-6 capitalize text-black">
                Images
              </span>
              <FileDropCompo />
            </div>
          </div>
        </div>
      </div>
      <hr className="h-px w-full bg-default my-7" />
      <div className="flex items-center justify-end">
        <div className="flex items-center gap-3">
          <button className="text-blue-clr px-5 py-2.5 leading-6 capitalize border border-slate-100 text-center rounded-sm cursor-pointer transition-all duration-300 ease-in-out hover:bg-blue-clr px-3 hover:text-white">
            Cancel
          </button>
          <button
            onClick={() => navigate("/add-poroduct")}
            className="text-white px-5 py-2.5 text-[16px] leading-6 font-normal rounded-sm bg-blue-2 border border-transparent hover:border-slate-100 capitalize cursor-pointer transition-all duration-300 ease-in-out hover:bg-white hover:text-blue-2 text-[16px] font-normal leading-6"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
