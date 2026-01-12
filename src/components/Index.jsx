import React from "react";

export default function Index() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h4 className="mb-0">Product</h4>
        <div className="flex items-center gap-3">
          <button className="text-blue-clr px-5 py-2.5 leading-6 capitalize border border-slate-100 text-center rounded-sm cursor-pointer transition-all duration-300 ease-in-out hover:bg-blue-clr px-3 hover:text-white">
            Export
          </button>
          <button
            // disabled={isLoading}
            className="text-white px-5 flex items-center gap-2 truncate py-2.5 text-[16px] leading-6 font-normal rounded-sm bg-blue-2 border border-transparent hover:border-slate-100 capitalize cursor-pointer transition-all duration-300 ease-in-out hover:bg-white hover:text-blue-2 text-[16px] font-normal leading-6"
          >
            {/* {!isLoading ? "save" : "saving ...."} */}
            <Plus className="w-6 h-6" />
            add product
          </button>
        </div>
      </div>
    </div>
  );
}
