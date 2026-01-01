import React, { useState } from "react";
import { House } from "lucide-react";
import { sidebarData } from "../assets/assets";
import sidebarImg from "../assets/sidebar-img.png";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [currentMenu, setCurrentMenu] = useState(sidebarData[0].label);
  const handleMenu = (id) => {
    setCurrentMenu(id);
  };
  return (
    <div className="w-62.5 flex flex-col pb-10 overflow-y-scroll bg-primary h-screen p-4 border-r border-slate-100">
      <div className="flex-1">
        {sidebarData.map((menuItem, index) => (
          <Link
            to={menuItem.to}
            onClick={() => handleMenu(menuItem.label)}
            key={index}
            className={`flex items-center py-2.5 w-full hover:text-default transition-all duration-300 ease-in-out cursor-pointer rounded-sm px-4 ${
              currentMenu === menuItem.label
                ? "bg-white text-default"
                : "bg-transparent text-white"
            } bg-transparent  gap-4 transition-all duration-300 ease-in-out hover:bg-slate-200`}
          >
            {!menuItem.Icon ? null : (
              <menuItem.Icon className="w-5 h-5 text-gray-400 group-hover:text-white" />
            )}
            <span className="text-[14px] leading-5">{menuItem.label}</span>
          </Link>
        ))}
      </div>
      <div className="p-6 rounded-md relative bg-[#1E5EFF] text-white text-[14px] font-normal leading-5">
        <span className="mb-1 text-white text-[16px] block font-bold leading-6">
          Grow Business
        </span>
        <span className="text-[14px] font-normal leading-5 text-white">
          Explore our marketing solutions
        </span>
        <button className="py-2 px-6 rounded-sm bg-white text-blue-clr capitalize cursor-pointer transition-all duration-500 ease-in-out hover:bg-slate-300 hover:text-primary text-center block mt-3">
          Read More
        </button>
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
          <img src={sidebarImg} alt="sidebar-img" />
        </div>
      </div>
    </div>
  );
}
