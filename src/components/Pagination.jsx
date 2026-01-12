import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";
import { selectFilterRecords } from "../features/add-product-slice/addProductSlice";

export default function Pagination() {
  const orderNumbers = selectFilterRecords;
  return (
    <div className="flex items-center justify-between gap-5 text-default">
      {orderNumbers.length > 5 ? (
        <div className="flex items-center gap-1 mt-6">
          <span className=" hover:bg-[#ECF2FF] hover:text-blue-clr transition-all w-9 h-9 flex items-center justify-center rounded-sm cursor-pointer duration-300 ease-in-out hover:text-black">
            <ArrowRight className="w-4 h-4" />
          </span>
          <span className=" hover:bg-[#ECF2FF] hover:text-blue-clr transition-all w-9 h-9 flex items-center justify-center rounded-sm cursor-pointer duration-300 ease-in-out hover:text-black">
            1
          </span>
          <span className=" hover:bg-[#ECF2FF] hover:text-blue-clr transition-all w-9 h-9 flex items-center justify-center rounded-sm cursor-pointer duration-300 ease-in-out hover:text-black">
            2
          </span>
          <span className=" hover:bg-[#ECF2FF] hover:text-blue-clr transition-all w-9 h-9 flex items-center justify-center rounded-sm cursor-pointer duration-300 ease-in-out hover:text-black">
            3
          </span>
          <span className=" hover:bg-[#ECF2FF] hover:text-blue-clr transition-all w-9 h-9 flex items-center justify-center rounded-sm cursor-pointer duration-300 ease-in-out hover:text-black">
            4
          </span>
          <span className=" hover:bg-[#ECF2FF] hover:text-blue-clr transition-all w-9 h-9 flex items-center justify-center rounded-sm cursor-pointer duration-300 ease-in-out hover:text-black">
            5
          </span>
          <span className=" hover:bg-[#ECF2FF] hover:text-blue-clr transition-all w-9 h-9 flex items-center justify-center rounded-sm cursor-pointer duration-300 ease-in-out hover:text-black">
            6
          </span>
          <span className=" hover:bg-[#ECF2FF] hover:text-blue-clr transition-all w-9 h-9 flex items-center justify-center rounded-sm cursor-pointer duration-300 ease-in-out hover:text-black">
            ...
          </span>
          <span className=" hover:bg-[#ECF2FF] hover:text-blue-clr transition-all w-9 h-9 flex items-center justify-center rounded-sm cursor-pointer duration-300 ease-in-out hover:text-black">
            24
          </span>
          <span className=" hover:bg-[#ECF2FF] hover:text-blue-clr transition-all w-9 h-9 flex items-center justify-center rounded-sm cursor-pointer duration-300 ease-in-out hover:text-black">
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      ) : (
        <div className="flex items-center gap-1 mt-6">
          <span className=" hover:bg-[#ECF2FF] hover:text-blue-clr transition-all w-9 h-9 flex items-center justify-center rounded-sm cursor-pointer duration-300 ease-in-out hover:text-black">
            <ArrowRight className="w-4 h-4" />
          </span>
          <span className=" hover:bg-[#ECF2FF] hover:text-blue-clr transition-all w-9 h-9 flex items-center justify-center rounded-sm cursor-pointer duration-300 ease-in-out hover:text-black">
            1
          </span>
          <span className=" hover:bg-[#ECF2FF] hover:text-blue-clr transition-all w-9 h-9 flex items-center justify-center rounded-sm cursor-pointer duration-300 ease-in-out hover:text-black">
            2
          </span>

          <span className=" hover:bg-[#ECF2FF] hover:text-blue-clr transition-all w-9 h-9 flex items-center justify-center rounded-sm cursor-pointer duration-300 ease-in-out hover:text-black">
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      )}

      <span className="mb-0 block">{orderNumbers.length} Results</span>
    </div>
  );
}
