import { ArrowLeft, Camera } from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function CreateCoupons() {
  const [isLoading, setIsLoading] = useState(false);
  const [couponsData, setCouponsData] = useState({
    code: "",
    shipping: "",
  });
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <Link
          to="/coupons"
          className="text-default cursor-pointer capitalize cursor-pointer flex items-center gap-1 transition-all duration-300 ease-in-out hover:pr-1 hover:text-blue-clr"
        >
          <ArrowLeft className="w-4 h-4" /> back
        </Link>
      </div>
      <div className="flex items-center justify-between">
        <h4>Coupon Information</h4>
        <div className="flex items-center gap-3">
          <button className="text-blue-clr px-5 py-2.5 leading-6 capitalize border border-slate-100 text-center rounded-sm cursor-pointer transition-all duration-300 ease-in-out hover:bg-blue-clr px-3 hover:text-white">
            Cancel
          </button>
          <button
            onClick={() => setIsLoading((prev) => !prev)}
            disabled={isLoading}
            className="text-white px-5 py-2.5 text-[16px] leading-6 font-normal rounded-sm bg-blue-2 border border-transparent hover:border-slate-100 capitalize cursor-pointer transition-all duration-300 ease-in-out hover:bg-white hover:text-blue-2 text-[16px] font-normal leading-6"
          >
            {!isLoading ? "save" : "saving ...."}
          </button>
        </div>
      </div>
      <div className="p-7 bg-white rounded-sm shadow-sm drop-shadow-sm mt-7.5">
        <span className="block text-[16px] leading-6 text-black font-bold capitalize">
          Coupon Information
        </span>
        <span className="mb-6 block text-[14px] leading-5 font-normal text-default">
          Code will be used by users in checkout
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="coupon_code">Coupon Code</label>
            <input
              type="text"
              placeholder="Shipfree20"
              className="w-full rounded-sm border px-4 py-3 border-slate-100 transition-all duration-500 ease-in-out outline-none focus:ring-1 focus:ring-blue-clr text-default"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="Coupon_Name">Free Shipping</label>
            <input
              type="text"
              placeholder="Coupon_Name"
              className="w-full rounded-sm border px-4 py-3 border-slate-100 transition-all duration-500 ease-in-out outline-none focus:ring-1 focus:ring-blue-clr text-default"
            />
          </div>
        </div>
        <hr className="w-full h-px bg-slate-100 my-7.5" />
        <span className="block text-[16px] leading-6 text-black font-bold capitalize">
          Coupon Type
        </span>
        <span className="mb-6 block text-[14px] leading-5 font-normal text-default">
          Type of coupon you want to create
        </span>
        <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
          {Array(4)
            .fill()
            .map((_, i) => (
              <div
                key={i}
                className="group text-default gap-3 hover:ring-primary ring-1 p-7.5 hover:text-primary flex flex-col gap-3 w-full items-center justify-center rounded-sm ring-slate-200 shadow-sm hover:backdrop-blur-sm"
              >
                <Camera className="w-5 h-5" />
                <span className="block mb-0 text-center text-[14px] leading-5 font-normal">
                  Type of coupon you want to create
                </span>
              </div>
            ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2 w-full mt-6">
            <label htmlFor="Discount_Value" className="text-default">
              Discount Value
            </label>
            <input
              type="text"
              placeholder="Amount"
              className="w-full rounded-sm border px-4 py-3 border-slate-100 transition-all duration-500 ease-in-out outline-none focus:ring-1 focus:ring-blue-clr text-default"
            />
            {/* <textarea
            name="customer-Notes"
            id="customer-Notes"
            placeholder="Add notes about customer"
            className="w-full rounded-sm border px-4 py-3 border-slate-100 transition-all duration-500 ease-in-out h-20 outline-none focus:ring-1 focus:ring-blue-clr text-default"
          ></textarea> */}
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label
              htmlFor="Coupon_Name"
              className="block text-[14px] leading-5 font-normal text-default"
            >
              Applies to
            </label>
            <select
              name="applys"
              id="applys"
              className="w-full rounded-sm border px-4 py-3 border-slate-100 transition-all duration-500 ease-in-out outline-none focus:ring-1 focus:ring-blue-clr text-default"
            >
              <option value="choose">Choose</option>
              <option value="selling">selling</option>
              <option value="buying">buying</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2 w-full mt-6">
            <label htmlFor="Duration" className="text-default">
              Set Duration
            </label>
            <input
              type="date"
              placeholder="Set Duration"
              className="w-full rounded-sm border px-4 py-3 border-slate-100 transition-all duration-500 ease-in-out outline-none focus:ring-1 focus:ring-blue-clr text-default"
            />
            <div className="flex items-center gap-1">
              <input type="checkbox" name="duration" id="duration" />
              <span className=" text-[14px] leading-5 font-normal text-default">
                Don't set duration
              </span>
            </div>
            {/* <textarea
            name="customer-Notes"
            id="customer-Notes"
            placeholder="Add notes about customer"
            className="w-full rounded-sm border px-4 py-3 border-slate-100 transition-all duration-500 ease-in-out h-20 outline-none focus:ring-1 focus:ring-blue-clr text-default"
          ></textarea> */}
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label
              htmlFor="Coupon_Name"
              className="block text-[14px] leading-5 font-normal text-default"
            >
              Applies to
            </label>
            <select
              name="applys"
              id="applys"
              className="w-full rounded-sm border px-4 py-3 border-slate-100 transition-all duration-500 ease-in-out outline-none focus:ring-1 focus:ring-blue-clr text-default"
            >
              <option value="choose">Choose</option>
              <option value="selling">selling</option>
              <option value="buying">buying</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2 w-full mt-6">
            <label htmlFor="Usage Limits" className="text-default">
              Usage Limits
            </label>
            <input
              type="number"
              placeholder="Amount of uses"
              className="w-full rounded-sm border px-4 py-3 border-slate-100 transition-all duration-500 ease-in-out outline-none focus:ring-1 focus:ring-blue-clr text-default"
            />
            <div className="flex items-center gap-1">
              <input type="checkbox" name="duration" id="duration" />
              <span className=" text-[14px] leading-5 font-normal text-default">
                Don't limit amout of uses
              </span>
            </div>
            {/* <textarea
            name="customer-Notes"
            id="customer-Notes"
            placeholder="Add notes about customer"
            className="w-full rounded-sm border px-4 py-3 border-slate-100 transition-all duration-500 ease-in-out h-20 outline-none focus:ring-1 focus:ring-blue-clr text-default"
          ></textarea> */}
          </div>
        </div>

        <hr className="h-px w-full bg-default my-7" />
        <div className="flex items-center justify-end">
          <div className="flex items-center gap-3">
            <button className="text-blue-clr px-5 py-2.5 leading-6 capitalize border border-slate-100 text-center rounded-sm cursor-pointer transition-all duration-300 ease-in-out hover:bg-blue-clr px-3 hover:text-white">
              Cancel
            </button>
            <button
              onClick={() => navigate("/customers")}
              className="text-white px-5 py-2.5 text-[16px] leading-6 font-normal rounded-sm bg-blue-2 border border-transparent hover:border-slate-100 capitalize cursor-pointer transition-all duration-300 ease-in-out hover:bg-white hover:text-blue-2 text-[16px] font-normal leading-6"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
