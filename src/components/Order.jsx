import { ChevronDown, Edit, Plus, Search, Trash2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import FilterPro from "../components/FilterPro";

export default function Order() {
  const { setHeaderTitle, setHeaderBtns } = useOutletContext();
  useEffect(() => {
    setHeaderTitle("Orders");
    setHeaderBtns(
      <div className="flex items-center gap-3">
        <button className="text-blue-clr px-5 py-2.5 capitalize border border-slate-100 text-center rounded-sm cursor-pointer transition-all duration-300 ease-in-out hover:bg-blue-clr px-3 hover:text-white">
          Export
        </button>
        <button className="text-white py-2.5 text-[16px] leading-6 font-normal px-5 flex items-center gap-2 rounded-sm bg-blue-2 border border-transparent hover:border-slate-100 capitalize cursor-pointer transition-all duration-300 ease-in-out hover:bg-white hover:text-blue-2 text-[16px] font-normal leading-6">
          <Plus className="w-4 h-4 text-white" />
          Add Order
        </button>
      </div>
    );
    return () => {
      setHeaderTitle("");
      setHeaderBtns(null);
    };
  }, [setHeaderTitle, setHeaderBtns]);
  const [filter_category, setFilter_category] = useState("filter");
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const handleFilter = (filterItem) => {
    setFilter_category(filterItem);
  };
  return (
    <div className="p-6 bg-white shadow-sm rounded-sm border border-slate-50 mt-4">
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
      {/* filtered product */}
      <FilterPro />
    </div>
  );
}
