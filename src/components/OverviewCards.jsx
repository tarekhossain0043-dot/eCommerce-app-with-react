import { ChevronDown, ChevronUp, DollarSign, ShoppingCart } from "lucide-react";
import React from "react";
import BarChart from "./TiniChart";

export default function OverviewCards() {
  return (
    <div className="flex-1 items-center gap-4.25 w-full mt-6">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4.25">
        <div className="py-6 rounded-sm bg-white shadow-sm flex justify-center items-center gap-10">
          <div>
            <p className="mb-0">$10.540</p>
            <span className="text-[10px] font-normal leading-5 text-default">
              Total Revenue
            </span>
            <span className="text-green-clr flex items-center gap-1">
              22.45% <ChevronUp className="pl-1 w-4 h-4" />
            </span>
          </div>
          <span className="w-7 h-7 bg-[#ECF2FF] p-2 rounded-full cursor-pointer transition-all duration-300 ease-in-out text-blue-2 flex items-center justify-center">
            <DollarSign className="w-4 h-4" />
          </span>
        </div>
        <div className="py-6 rounded-sm bg-white shadow-sm flex justify-center items-center gap-10">
          <div>
            <p className="mb-0">1,056</p>
            <span className="text-[10px] font-normal leading-5 text-default">
              Orders
            </span>
            <span className="text-green-clr flex items-center gap-1">
              15.34% <ChevronUp className="pl-1 w-4 h-4" />
            </span>
          </div>
          <span className="w-7 h-7 bg-[#ECF2FF] p-2 rounded-full cursor-pointer transition-all duration-300 ease-in-out text-blue-2 flex items-center justify-center">
            <ShoppingCart className="w-4 h-4" />
          </span>
        </div>
        <div className="py-6 rounded-sm bg-white shadow-sm flex justify-center items-center gap-10">
          <div>
            <span className="text-[10px] font-normal leading-5 text-default">
              Unique Visits
            </span>
            <p className="mb-0">5.420</p>
            <span className="text-green-clr flex items-center gap-1">
              10.24% <ChevronDown className="pl-1 w-4 h-4" />
            </span>
          </div>
          <span className="w-7 h-7 bg-[#ECF2FF] p-2 rounded-full cursor-pointer transition-all duration-300 ease-in-out text-blue-2 flex items-center justify-center">
            {/* <DollarSign className="w-4 h-4" /> */}
            <BarChart />
          </span>
        </div>
        <div className="py-6 rounded-sm bg-white shadow-sm flex justify-center items-center gap-10">
          <div>
            <p className="mb-0">$10.540</p>
            <span className="text-[10px] font-normal leading-5 text-default">
              Total Revenue
            </span>
            <span className="text-green-clr flex items-center gap-1">
              22.45% <ChevronUp className="pl-1 w-4 h-4" />
            </span>
          </div>
          <span className="w-7 h-7 bg-[#ECF2FF] p-2 rounded-full cursor-pointer transition-all duration-300 ease-in-out text-blue-2 flex items-center justify-center">
            <DollarSign className="w-4 h-4" />
          </span>
        </div>
        <div className="py-6 rounded-sm bg-white shadow-sm flex justify-center items-center gap-10">
          <div>
            <p className="mb-0">$10.540</p>
            <span className="text-[10px] font-normal leading-5 text-default">
              Total Revenue
            </span>
            <span className="text-green-clr flex items-center gap-1">
              22.45% <ChevronUp className="pl-1 w-4 h-4" />
            </span>
          </div>
          <span className="w-7 h-7 bg-[#ECF2FF] p-2 rounded-full cursor-pointer transition-all duration-300 ease-in-out text-blue-2 flex items-center justify-center">
            <DollarSign className="w-4 h-4" />
          </span>
        </div>
        <div className="py-6 rounded-sm bg-white shadow-sm flex justify-center items-center gap-10">
          <div>
            <p className="mb-0">$10.540</p>
            <span className="text-[10px] font-normal leading-5 text-default">
              Total Revenue
            </span>
            <span className="text-green-clr flex items-center gap-1">
              22.45% <ChevronUp className="pl-1 w-4 h-4" />
            </span>
          </div>
          <span className="w-7 h-7 bg-[#ECF2FF] p-2 rounded-full cursor-pointer transition-all duration-300 ease-in-out text-blue-2 flex items-center justify-center">
            <DollarSign className="w-4 h-4" />
          </span>
        </div>
      </div>
    </div>
  );
}
