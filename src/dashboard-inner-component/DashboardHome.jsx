import { Search, Settings } from "lucide-react";
import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import OverviewCards from "../components/OverviewCards";
import MainAnalytsChart from "../components/Chart/MainAnalytsChart";

// import DashboardHeader from "../components/DashboardHeader";

export default function DashboardHome() {
  const { setHeaderTitle, setHeaderBtns } = useOutletContext();

  useEffect(() => {
    setHeaderTitle("Dashboard");
    setHeaderBtns(
      <button className="px-6.25 py-2 rounded-sm border-slate-100 bg-white text-center cursor-pointer transition-all duration-500 ease-in-out hover:shadow-sm text-blue-2">
        <div className="flex items-center gap-1">
          <Settings className="w-5 h-5" />
          <span className="text-[16px] leading-6 text-blue-2 font-normal capitalize">
            Manage
          </span>
        </div>
      </button>
    );
    return () => {
      setHeaderTitle("");
      setHeaderBtns(null);
    };
  }, [setHeaderTitle, setHeaderBtns]);
  return (
    <div className="mb-6">
      <OverviewCards />
      <div className="grid grid-cols-1 lg:grid-cols-[9fr_3fr] gap-7.5 mt-6">
        <div className="bg-white shadow-sm rounded-sm p-7.5">
          <div className="flex items-center mb-6 justify-between">
            <p>Orders Over Time</p>
            <select
              name="ours"
              id="ours"
              className="text-default outline-none cursor-pointer transition-all"
            >
              <option
                value="last-12-ours"
                className="capitalize text-default transition-all duration-300 ease-in-out"
              >
                Last 12 Hours
              </option>
              <option
                value="last-1-days"
                className="capitalize text-default transition-all duration-300 ease-in-out"
              >
                Last 1 days
              </option>
              <option
                value="last-1-week"
                className="capitalize text-default transition-all duration-300 ease-in-out"
              >
                Last 1 Week
              </option>
              <option
                value="last-1-month"
                className="capitalize text-default transition-all duration-300 ease-in-out"
              >
                Last 1 Month
              </option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-10">
              <div className="flex flex-col gap-1">
                <p className="mb-0">645</p>
                <span className="text-default">Orders on May 22</span>
              </div>
              <div className="flex flex-col gap-1">
                <p className="mb-0">472</p>
                <span className="text-default">Orders on May 21</span>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-1">
                <span className="w-4 h-4 rounded-sm bg-[#D9E1EC]"></span>
                <span className="text-default text-[14px] font-normal leading-5">
                  May 21
                </span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-4 h-4 rounded-sm bg-blue-clr"></span>
                <span className="text-default text-[14px] font-normal leading-5"></span>
              </div>
            </div>
          </div>
          <MainAnalytsChart />
        </div>
      </div>
    </div>
  );
}
