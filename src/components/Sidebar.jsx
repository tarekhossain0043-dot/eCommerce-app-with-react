import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, House, Menu, X } from "lucide-react";
import { sidebarData } from "../assets/assets";
import sidebarImg from "../assets/sidebar-img.png";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [currentMenu, setCurrentMenu] = useState(sidebarData[0].label);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const handleMenu = (id) => {
    setCurrentMenu(id);
  };
  const handleSidebarToggle = () => {
    setIsCollapsed((prev) => !prev);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setIsCollapsed(true);
      } else {
        setIsCollapsed(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div
      className={`${!isCollapsed ? "w-62.5" : "w-20"} flex flex-col pb-10 
      } transition-all duration-500 ease-in-out overflow-y-scroll bg-primary h-screen p-4 border-r border-slate-100 relative`}
    >
      <span
        onClick={handleSidebarToggle}
        className="absolute top-2 right-0 z-999 w-5 h-5 shadow-sm bg-blue-2 rounded-full flex items-center justify-center text-[16px] cursor-pointer"
      >
        {!isCollapsed ? (
          <ChevronRight className="w-4 h-4 cursor-pointer text-white" />
        ) : (
          <ChevronLeft className="w-4 h-4 cursor-pointer text-white" />
        )}
      </span>
      <div className="flex-1 flex flex-col gap-1 mt-4">
        {sidebarData.map((menuItem, index) => (
          <Link
            to={menuItem.to}
            onClick={() => handleMenu(menuItem.label)}
            key={index}
            className={`flex items-center justify-between py-2.5 w-full hover:text-default relative transition-all duration-300 ease-in-out cursor-pointer rounded-sm px-4 ${
              currentMenu === menuItem.label
                ? "bg-white text-default"
                : "bg-transparent text-white"
            } bg-transparent  gap-4 transition-all duration-300 ease-in-out hover:bg-slate-200`}
          >
            <div className="flex items-center gap-4">
              {!menuItem.Icon ? null : (
                <menuItem.Icon className="w-5 h-5 text-gray-400 group-hover:text-white" />
              )}
              {!isCollapsed && <span className="">{menuItem.label}</span>}
            </div>

            {menuItem.orderNum !== undefined &&
              menuItem.orderNum !== null &&
              !isCollapsed && (
                <span className="text-white font-bold bg-black text-[14px] flex items-center justify-center px-3 py-1 rounded-full">
                  {menuItem.orderNum}
                </span>
              )}
          </Link>
        ))}
      </div>
      <div
        className={`${
          isCollapsed && "hidden"
        } p-6 rounded-md relative bg-[#1E5EFF] text-white text-[14px] font-normal leading-5`}
      >
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
