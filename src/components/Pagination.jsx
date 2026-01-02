import { ArrowRight } from "lucide-react";
import React from "react";

export default function Pagination() {
  return (
    <div className="flex items-center justify-between text-default">
      <div className="flex items-center gap-1 mt-6">
        <span className=" hover:bg-slate-100 transition-all w-9 h-9 flex items-center justify-center rounded-sm cursor-pointer duration-300 ease-in-out hover:text-black">
          <ArrowRight className="w-4 h-4" />
        </span>
        <span className=" hover:bg-slate-100 transition-all w-9 h-9 flex items-center justify-center rounded-sm cursor-pointer duration-300 ease-in-out hover:text-black">
          1
        </span>
        <span className=" hover:bg-slate-100 transition-all w-9 h-9 flex items-center justify-center rounded-sm cursor-pointer duration-300 ease-in-out hover:text-black">
          2
        </span>
        <span className=" hover:bg-slate-100 transition-all w-9 h-9 flex items-center justify-center rounded-sm cursor-pointer duration-300 ease-in-out hover:text-black">
          3
        </span>
        <span className=" hover:bg-slate-100 transition-all w-9 h-9 flex items-center justify-center rounded-sm cursor-pointer duration-300 ease-in-out hover:text-black">
          4
        </span>
        <span className=" hover:bg-slate-100 transition-all w-9 h-9 flex items-center justify-center rounded-sm cursor-pointer duration-300 ease-in-out hover:text-black">
          5
        </span>
        <span className=" hover:bg-slate-100 transition-all w-9 h-9 flex items-center justify-center rounded-sm cursor-pointer duration-300 ease-in-out hover:text-black">
          6
        </span>
        <span className=" hover:bg-slate-100 transition-all w-9 h-9 flex items-center justify-center rounded-sm cursor-pointer duration-300 ease-in-out hover:text-black">
          ...
        </span>
        <span className=" hover:bg-slate-100 transition-all w-9 h-9 flex items-center justify-center rounded-sm cursor-pointer duration-300 ease-in-out hover:text-black">
          24
        </span>
        <span className=" hover:bg-slate-100 transition-all w-9 h-9 flex items-center justify-center rounded-sm cursor-pointer duration-300 ease-in-out hover:text-black">
          <ArrowRight className="w-4 h-4" />
        </span>
      </div>
      <p>274 Results</p>
    </div>
  );
}
