import { Search, Settings } from "lucide-react";
import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

// import DashboardHeader from "../components/DashboardHeader";

export default function DashboardHome() {
  const { setHeaderTitle, setHeaderBtns } = useOutletContext();
  useEffect(() => {
    setHeaderTitle(<h4 className="mb-0">Dashboard</h4>);
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
  return <div className="mb-6"></div>;
}
