import { Settings } from "lucide-react";
import React from "react";

export default function DashboardHeader({ headerTitle, headerBtns }) {
  return (
    <div>
      <div className="flex items-center justify-between gap-1">
        <h4 className="mb-0">{headerTitle}</h4>
        <button className="px-6.25 py-2 rounded-sm shadow-sm flex items-center gap-1 border-slate-100 bg-white transition-all duration-300 ease-in-out text-blue-2 hover:shadow-sm cursor-pointer">
          {headerBtns}
        </button>
      </div>
    </div>
  );
}
