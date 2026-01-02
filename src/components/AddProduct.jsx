import { ArrowLeft } from "lucide-react";
import React, { useEffect } from "react";
import { Link, useNavigate, useOutletContext } from "react-router-dom";

export default function AddProduct() {
  const { setHeaderTitle, setHeaderBtns } = useOutletContext();
  const navigate = useNavigate();
  useEffect(() => {
    setHeaderTitle("Add Products");
    setHeaderBtns(
      <div className="flex items-center gap-3">
        <button className="text-blue-clr px-5 py-2.5 capitalize border border-slate-100 text-center rounded-sm cursor-pointer transition-all duration-300 ease-in-out hover:bg-blue-clr px-3 hover:text-white">
          Cancel
        </button>
        <button
          onClick={() => navigate("/add-poroduct")}
          className="text-white py-2.5 text-[16px] leading-6 font-normal px-5 rounded-sm bg-blue-2 border border-transparent hover:border-slate-100 capitalize cursor-pointer transition-all duration-300 ease-in-out hover:bg-white hover:text-blue-2 text-[16px] font-normal leading-6"
        >
          Save
        </button>
      </div>
    );
    return () => {
      setHeaderTitle("");
      setHeaderBtns(null);
    };
  }, [navigate, setHeaderTitle, setHeaderBtns]);
  return (
    <div>
      <div>
        <Link
          to="/products"
          className="text-default cursor-pointer capitalize cursor-pointer flex items-center gap-1 transition-all duration-300 ease-in-out hover:pr-1 hover:text-blue-clr"
        >
          <ArrowLeft className="w-4 h-4" /> back
        </Link>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[7fr_5fr] gap-7.5 mt-6">
        <div className="w-full p-7 rounded-sm bg-white shadow-sm">
          <p className="mb-6">Information</p>
          <form className="w-full">
            <div className="flex flex-col gap-1 mb-6">
              <label htmlFor="product_name" className="text-default">
                Product Name
              </label>
              <input
                type="text"
                placeholder="Summer T-Shirt"
                className="w-full rounded-sm border px-4 py-3 border-slate-100 transition-all duration-500 ease-in-out outline-none focus:ring-1 focus:ring-blue-clr text-default"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="product_name" className="text-default">
                Product Description
              </label>
              <textarea
                placeholder="Product description"
                className="w-full max-h-24 h-full rounded-sm border px-4 py-3 border-slate-100 transition-all duration-500 ease-in-out outline-none focus:ring-1 focus:ring-blue-clr text-default"
              />
            </div>
            <hr className="mt-10 mb-7" />
            <div className="flex flex-col gap-1 mb-6">
              <label htmlFor="product_name" className="text-default">
                Product Name
              </label>
              <input
                type="file"
                className="w-full rounded-sm border px-4 py-3 border-slate-100 transition-all duration-500 ease-in-out outline-none focus:ring-1 focus:ring-blue-clr text-default"
              />
            </div>
            {/* price tab */}
            <div>
              <p className="mb-6">Price</p>
              <div className="flex items-center gap-7 w-full">
                <div className="flex flex-col gap-1 w-full">
                  <label htmlFor="product-price">Product Price</label>
                  <input
                    type="number"
                    name="price"
                    placeholder="Enter price"
                    id="price"
                    className="w-full rounded-sm border px-4 py-3 border-slate-100 transition-all duration-500 ease-in-out outline-none focus:ring-1 focus:ring-blue-clr text-default"
                  />
                </div>
                <div className="flex w-full flex-col gap-1">
                  <label htmlFor="discount-price">Discount Price</label>
                  <input
                    type="number"
                    name="discount-price"
                    placeholder="Price at Discount"
                    id="discount-price"
                    className="w-full rounded-sm border px-4 py-3 border-slate-100 transition-all duration-500 ease-in-out outline-none focus:ring-1 focus:ring-blue-clr text-default"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
