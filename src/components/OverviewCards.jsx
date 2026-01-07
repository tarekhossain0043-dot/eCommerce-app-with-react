import { ChevronDown, ChevronUp, DollarSign, ShoppingCart } from "lucide-react";
import React from "react";
import BarChart from "./TiniChart";
import OverviewChart from "./OverviewChart";

export default function OverviewCards() {
  const chart_1 = [
    { value: 30 },
    { value: 50 },
    { value: 70 },
    { value: 90 },
    { value: 50 },
    { value: 70 },
  ];
  const chart_2 = [
    { value: 20 },
    { value: 50 },
    { value: 70 },
    { value: 30 },
    { value: 90 },
    { value: 50 },
  ];
  const chart_3 = [
    { value: 30 },
    { value: 50 },
    { value: 70 },
    { value: 90 },
    { value: 50 },
    { value: 70 },
  ];
  return (
    <div className="flex-1 items-center gap-4.25 w-full mt-6">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4.25">
        <div className="py-6 rounded-sm bg-white shadow-sm flex justify-center items-center gap-10">
          <div>
            <span className="text-[16px] font-bold block mb-0 leading-7 text-black">
              $10.540
            </span>
            <span className="text-[10px] font-normal leading-5 text-default">
              Total Revenue
            </span>
            <span className="text-green-clr text-[10px] leading-5 flex items-center gap-1">
              22.45% <ChevronUp className="pl-1 w-4 h-4" />
            </span>
          </div>
          <span className="w-7 h-7 bg-[#ECF2FF] p-2 rounded-full cursor-pointer transition-all duration-300 ease-in-out text-blue-2 flex items-center justify-center">
            <DollarSign className="w-4 h-4" />
          </span>
        </div>
        <div className="py-6 rounded-sm bg-white shadow-sm flex justify-center items-center gap-10">
          <div>
            <h4 className="mb-0">1,056</h4>
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
            <h4 className="mb-0">5.420</h4>
            <span className="text-[#F0142F] flex items-center gap-1">
              10.24% <ChevronDown className="pl-1 w-4 h-4" />
            </span>
          </div>
          <OverviewChart chartData={chart_1} activeBarIndex={3} />
        </div>
        <div className="py-6 rounded-sm bg-white shadow-sm flex justify-center items-center gap-10">
          <div>
            <h4 className="mb-0">$10.540</h4>
            <span className="text-[10px] font-normal leading-5 text-default">
              Total Revenue
            </span>
            <span className="text-green-clr flex items-center gap-1">
              22.45% <ChevronUp className="pl-1 w-4 h-4" />
            </span>
          </div>
          <OverviewChart
            chartData={chart_2}
            activeBarIndex={5}
            activeColor="#1FD286"
            nonActiveColor="#C4F8E2"
          />
        </div>
        <div className="py-6 rounded-sm bg-white shadow-sm flex justify-center items-center gap-10">
          <div>
            <h4 className="mb-0">$10.540</h4>
            <span className="text-[10px] font-normal leading-5 text-default">
              Total Revenue
            </span>
            <span className="text-green-clr flex items-center gap-1">
              22.45% <ChevronUp className="pl-1 w-4 h-4" />
            </span>
          </div>
          <OverviewChart
            chartData={chart_3}
            activeBarIndex={3}
            activeColor="#1E5EFF"
            nonActiveColor="#D9E4FF"
          />
        </div>
      </div>
    </div>
  );
}
