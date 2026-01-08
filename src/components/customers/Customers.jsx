import { ChevronDown, Edit, Plus, Search, Trash2 } from "lucide-react";
import React, { useState } from "react";

import Pagination from "../Pagination";
import { useNavigate } from "react-router-dom";
// import pro_1 from "../../assets/features/image-1.png";

export default function Customers() {
  const [filter_category, setFilter_category] = useState("filter");
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const navigate = useNavigate();
  const handleFilter = (filterItem) => {
    setFilter_category(filterItem);
  };
  return (
    <div>
      <div className="flex items-center justify-between mb-7.5">
        <h3>Customers</h3>
        <div className="flex items-center gap-3">
          <button className="text-blue-clr px-5 py-2.5 leading-6 capitalize border border-slate-100 text-center rounded-sm cursor-pointer transition-all duration-300 ease-in-out hover:bg-blue-clr px-3 hover:text-white">
            exports
          </button>
          <button
            onClick={() => navigate("/add_customers")}
            className="text-white flex items-center gap-2 px-5 py-2.5 text-[16px] leading-6 font-normal rounded-sm bg-blue-2 border border-transparent hover:border-slate-100 capitalize cursor-pointer transition-all duration-300 ease-in-out hover:bg-white hover:text-blue-2 text-[16px] font-normal leading-6"
          >
            <Plus className="w-4 h-4" /> Add Customer
          </button>
        </div>
      </div>
      <div className="bg-white p-7.5 rounded-sm">
        <div className="py-7 bg-white rounded-sm bg-white flex items-center gap-6 mb-5">
          <button className="inline-block cursor-pointer transition-all duration-300 ease-in-out hover:text-primary transition-all duration-300 ease-in-out hover:text-primary capitalize text-default">
            All Customers
          </button>
          <button className="inline-block cursor-pointer transition-all duration-300 ease-in-out hover:text-primary transition-all duration-300 ease-in-out hover:text-primary capitalize text-default">
            New Customers
          </button>
          <button className="inline-block cursor-pointer transition-all duration-300 ease-in-out hover:text-primary transition-all duration-300 ease-in-out hover:text-primary capitalize text-default">
            From Europe
          </button>
          <button className="inline-block cursor-pointer transition-all duration-300 ease-in-out hover:text-primary transition-all duration-300 ease-in-out hover:text-primary capitalize text-default">
            Returning Customers
          </button>
        </div>
        {/* head of order */}
        <div className="flex items-center justify-between">
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
                onClick={() => handleFilter("price")}
                className="mb-2 w-full py-2 rounded-sm transition-all duration-300 ease-in-out hover:bg-slate-100 px-3 hover:text-white"
              >
                price
              </p>
              <p
                onClick={() => handleFilter(" order number")}
                className="mb-2 w-full py-2 rounded-sm transition-all duration-300 ease-in-out hover:bg-slate-100 px-3 hover:text-white"
              >
                order number
              </p>
              <p
                onClick={() => handleFilter("customer")}
                className="mb-2 w-full py-2 rounded-sm transition-all duration-300 ease-in-out hover:bg-slate-100 px-3 hover:text-white"
              >
                customer
              </p>
              <p
                onClick={() => handleFilter("paid")}
                className="mb-2 w-full py-2 rounded-sm transition-all duration-300 ease-in-out hover:bg-slate-100 px-3 hover:text-white"
              >
                paid
              </p>
              <p
                onClick={() => handleFilter("unpaid")}
                className="mb-2 w-full py-2 rounded-sm transition-all duration-300 ease-in-out hover:bg-slate-100 px-3 hover:text-white"
              >
                unpaid
              </p>
              <p
                onClick={() => handleFilter("ready")}
                className="mb-2 w-full py-2 rounded-sm transition-all duration-300 ease-in-out hover:bg-slate-100 px-3 hover:text-white"
              >
                ready
              </p>
              <p
                onClick={() => handleFilter("shipped")}
                className="mb-2 w-full py-2 rounded-sm transition-all duration-300 ease-in-out hover:bg-slate-100 px-3 hover:text-white"
              >
                shipped
              </p>
              <p
                onClick={() => handleFilter("Recive")}
                className="mb-2 w-full py-2 rounded-sm transition-all duration-300 ease-in-out hover:bg-slate-100 px-3 hover:text-white"
              >
                Recive
              </p>
            </div>
          </div>
          <div className="flex-1 w-full px-10 hidden md:block">
            <form className="relative">
              <input
                type="text"
                name="search"
                placeholder="search anything.."
                id="search"
                className="px-4 text-sm pl-12 w-full py-3 bg-transparent text-default cursor-pointer outline-none ring-1 ring-blue-clr focus:ring-primary rounded-sm transition-all duration-300 ease-in-out"
              />
              <Search className="w-4 h-4 absolute top-1/2 left-5 text-slate-400 transform -translate-y-1/2 cursor-pointer" />
            </form>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-sm bg- border-slate-200 border hover:bg-blue-clr hover:text-white cursor-pointer flex items-center justify-center text-blue-clr font-bold">
              <Edit className="w-6 h-6" />
            </span>
            <span className="w-10 h-10 rounded-sm border-slate-200 border hover:bg-blue-clr hover:text-white cursor-pointer transition-all duration-300 ease-in-out flex items-center justify-center text-blue-clr font-bold">
              <Trash2 className="w-6 h-6" />
            </span>
          </div>
        </div>
        {/* filterable products */}
        <div class="w-full">
          <div class="grid md:grid-cols-12 grid-cols-1 gap-4 border-b py-3 font-semibold text-gray-600">
            {/* <div class="pl-4">Checkbox</div> */}
            <div className="col-span-1 lg:col-span-6">
              <input
                type="checkbox"
                name="checkbox-label"
                id="checkbox-label"
                className="w-3 h-3 mr-4 rounded cursor-pointer transition-all duration-300 ease-in-out accent-blue-2 text-white font-medium focus:ring-1 focus:ring-offset-1 focus:ring-purple-500 outline-none"
              />
              <label htmlFor="checkbox-label">Name</label>
            </div>
            <div className="md:col-span-2 col-span-1">Location</div>
            <div className="md:col-span-2 col-span-1">Orders</div>
            <div className="md:col-span-2 col-span-1">Spent</div>
          </div>

          <div
            onClick={() => navigate("/customerInfo")}
            class="grid md:grid-cols-12 cursor-pointer transition-all duration-500 ease-in-out col-span-1 gap-4 last-of-type:border-none py-4 items-center"
          >
            <div class="flex items-center gap-2 md:col-span-6 col-span-1">
              <div>
                <input
                  type="checkbox"
                  className="w-3 h-3 rounded cursor-pointer transition-all duration-300 ease-in-out accent-blue-2 text-white font-medium focus:ring-1 focus:ring-offset-1 focus:ring-purple-500 outline-none"
                />
              </div>
              <h4 className="w-12 h-12 rounded-full bg-[#A1A7C4] text-white capitalize flex items-center justify-center font-bold">
                r
              </h4>
              <div>
                <span class="font-bold mb-0 transition-all duration-300 ease-in-out hover:text-primary">
                  Rakesh Mishra
                </span>
              </div>
            </div>

            <div className="md:col-span-2 col-span-1">Sawaynchester</div>
            <div className="md:col-span-2 col-span-1">5</div>
            <div class="bg-green-100 col-span-1 md:col-span-2 text-green-700 px-2 py-1 rounded w-fit">
              $96.14
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
