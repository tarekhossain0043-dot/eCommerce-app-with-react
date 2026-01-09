import { ArrowLeft, ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function OrderModal() {
  const [isLoading, setIsLoading] = useState(false);
  const [filter_category, setFilter_category] = useState("choose one");
  const [filter_orders, setFilter_orders] = useState("choose one");
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const handleFilter = (filterItem) => {
    setFilter_category(filterItem);
  };
  const handleOrder = (orderStatus) => {
    setFilter_orders(orderStatus);
  };
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <div>
          <Link
            to="/Customers"
            className="text-default cursor-pointer capitalize cursor-pointer flex items-center gap-1 transition-all duration-300 ease-in-out hover:pr-1 hover:text-blue-clr"
          >
            <ArrowLeft className="w-4 h-4" /> back
          </Link>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[24px] font-bold leading-9 text-black">
            Add Orders
          </span>
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
      </div>
      <div className="p-7 bg-white rounded-sm shadow-sm drop-shadow-sm mt-7.5">
        <span className="block text-[16px] leading-6 text-black font-bold capitalize">
          Order Information
        </span>
        <span className="mb-6 block text-[14px] leading-5 font-normal text-default">
          Most common order from the customer
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              placeholder="Date"
              className="w-full rounded-sm border px-4 py-3 border-slate-100 transition-all duration-500 ease-in-out outline-none focus:ring-1 focus:ring-blue-clr text-default"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="customer_name">Customer Name</label>
            <input
              type="text"
              placeholder="Customer Name"
              className="w-full rounded-sm border px-4 py-3 border-slate-100 transition-all duration-500 ease-in-out outline-none focus:ring-1 focus:ring-blue-clr text-default"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="Payment status">Payment status</label>
            {/* filter area */}
            <div
              onClick={() => setIsOpenFilter((prev) => !prev)}
              className="max-w-45 relative w-full py-2 px-3 flex items-center border border-slate-100 rounded-sm cursor-pointer transition-all duration-300 ease-in-out focus:ring-1 focus:ring-blue-clr justify-between"
            >
              <span className="text-[16px] leading-6 text-default capitalize cursor-pointer transition-all duration-300 ease-in-out">
                {filter_category}
              </span>
              <ChevronDown className="w-4 h-4 text-[#979797]" />
              <div
                className={`${
                  isOpenFilter ? "block" : "hidden"
                } absolute top-full left-0 max-w-62.5 bg-slate-50 shadow-sm cursor-pointer transition-all duration-300 ease-in-out w-full`}
              >
                <p
                  onClick={() => handleFilter("paid")}
                  className="mb-2 w-full py-2 rounded-sm transition-all duration-300 ease-in-out hover:bg-slate-100 px-3 hover:text-white"
                >
                  Paid
                </p>
                <p
                  onClick={() => handleFilter("unpaid")}
                  className="mb-2 w-full py-2 rounded-sm transition-all duration-300 ease-in-out hover:bg-slate-100 px-3 hover:text-white"
                >
                  Unpaid
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="Order Status">Order Status</label>
            {/* filter area */}
            <div
              onClick={() => setIsOpenFilter((prev) => !prev)}
              className="max-w-45 relative w-full py-2 px-3 flex items-center border border-slate-100 rounded-sm cursor-pointer transition-all duration-300 ease-in-out focus:ring-1 focus:ring-blue-clr justify-between"
            >
              <span className="text-[16px] leading-6 text-default capitalize cursor-pointer transition-all duration-300 ease-in-out">
                {filter_category}
              </span>
              <ChevronDown className="w-4 h-4 text-[#979797]" />
              <div
                className={`${
                  filter_orders ? "block" : "hidden"
                } absolute top-full left-0 max-w-62.5 bg-slate-50 shadow-sm cursor-pointer transition-all duration-300 ease-in-out w-full`}
              >
                <p
                  onClick={() => handleOrder("Ready")}
                  className="mb-2 w-full py-2 rounded-sm transition-all duration-300 ease-in-out hover:bg-slate-100 px-3 hover:text-white"
                >
                  Ready
                </p>
                <p
                  onClick={() => handleOrder("UnReady")}
                  className="mb-2 w-full py-2 rounded-sm transition-all duration-300 ease-in-out hover:bg-slate-100 px-3 hover:text-white"
                >
                  UnReady
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr className="w-full h-px bg-slate-100 my-7.5" />
        <span className="block text-[16px] leading-6 text-black font-bold capitalize">
          Customer Address
        </span>
        <span className="mb-6 block text-[14px] leading-5 font-normal text-default">
          Shipping address information
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              placeholder="Address"
              className="w-full rounded-sm border px-4 py-3 border-slate-100 transition-all duration-500 ease-in-out outline-none focus:ring-1 focus:ring-blue-clr text-default"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="Apartment">Apartment</label>
            <input
              type="text"
              placeholder="Apartment"
              className="w-full rounded-sm border px-4 py-3 border-slate-100 transition-all duration-500 ease-in-out outline-none focus:ring-1 focus:ring-blue-clr text-default"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="City">City</label>
            <input
              type="text"
              placeholder="City"
              className="w-full rounded-sm border px-4 py-3 border-slate-100 transition-all duration-500 ease-in-out outline-none focus:ring-1 focus:ring-blue-clr text-default"
            />
          </div>
          <div className="flex items-start gap-6">
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="Postal Code">Postal Code</label>
              <input
                type="number"
                placeholder="Postal Code"
                className="w-full rounded-sm border px-4 py-3 border-slate-100 transition-all duration-500 ease-in-out outline-none focus:ring-1 focus:ring-blue-clr text-default"
              />
            </div>
            <div className="flex w-full flex-col gap-2">
              <label htmlFor="country-select">Country</label>
              <select
                name="country-select"
                id="country-select"
                className="w-full rounded-sm border px-4 py-3 border-slate-100 transition-all duration-500 ease-in-out outline-none focus:ring-1 focus:ring-blue-clr text-default"
              >
                <option defaultValue="Choose">Bangladesh</option>
                <option value="in">India</option>
                <option value="ban">Pakisthan</option>
                <option value="ban">Nederland</option>
                <option value="ban">South Africa</option>
                <option value="ban">England</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="phone">Phone</label>
            <input
              type="number"
              minLength={11}
              maxLength={11}
              placeholder="Phone"
              className="w-full rounded-sm border px-4 py-3 border-slate-100 transition-all duration-500 ease-in-out outline-none focus:ring-1 focus:ring-blue-clr text-default"
            />
          </div>
        </div>
        <hr className="w-full h-px bg-slate-100 my-7.5" />
        <span className="text-[16px] block mb-1 leading-6 text-black font-bold capitalize">
          Customer Notes
        </span>
        <span className="text-[14px] block leading-5 font-normal text-default">
          Shipping address information
        </span>
        <div className="flex flex-col gap-2 w-full mt-6">
          <label htmlFor="customer-Notes" className="text-default">
            Notes
          </label>
          <textarea
            name="customer-Notes"
            id="customer-Notes"
            placeholder="Add notes about customer"
            className="w-full rounded-sm border px-4 py-3 border-slate-100 transition-all duration-500 ease-in-out h-20 outline-none focus:ring-1 focus:ring-blue-clr text-default"
          ></textarea>
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
              {isLoading ? "saving..." : "save"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
