import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, House, Menu, X } from "lucide-react";
import { sidebarData } from "../assets/assets";
import sidebarImg from "../assets/sidebar-img.png";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Sidebar({ isCollapsed, setIsCollapsed }) {
  const [currentMenu, setCurrentMenu] = useState(sidebarData[0].label);
  const handleMenu = (id) => {
    setCurrentMenu(id);
  };
  const orderNum = useSelector((state) => state.records.items);
  console.log(orderNum);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsCollapsed(true);
      } else {
        setIsCollapsed(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setIsCollapsed]);
  return (
    <div
      className={`${!isCollapsed ? "w-20" : "w-62.5"} flex flex-col ${
        window.innerHeight > 530
          ? "min-h-screen h-full"
          : "min-h-screen overflow-y-scroll pb-10"
      }
      transition-all duration-500 pb-25 ease-in-out h-full fixed z-999 overflow-x-hidden top-22.75 left-0 bg-primary p-4 border-r border-slate-100`}
    >
      <div className="flex-1 flex flex-col gap-1">
        {sidebarData.map((menuItem, index) => {
          const hasIcon = !!menuItem.Icon;
          return (
            <NavLink
              to={menuItem.to}
              onClick={() => handleMenu(menuItem.label)}
              key={index}
              className={`flex items-center ${
                hasIcon.Icon
                  ? "cursor-pointer hover:bg-slate-100"
                  : "cursor-default"
              } justify-between py-2.5 w-full hover:text-default hover:bg-slate-100 relative transition-all duration-300 ease-in-out cursor-pointer rounded-sm px-4 ${
                currentMenu === menuItem.label
                  ? "bg-white text-default"
                  : "bg-transparent text-white"
              } bg-transparent  gap-4 transition-all duration-300 ease-in-out `}
            >
              <div className="flex items-center gap-4">
                {!menuItem.Icon ? null : (
                  <menuItem.Icon className="w-5 h-5 text-gray-400 group-hover:text-white" />
                )}
                {isCollapsed && <span className="">{menuItem.label}</span>}
              </div>

              {menuItem.orderNum !== undefined &&
                menuItem.orderNum !== null &&
                isCollapsed && (
                  <span className="text-white font-bold bg-black text-[14px] flex items-center justify-center px-2 py-px rounded-full">
                    {orderNum.length}
                  </span>
                )}
            </NavLink>
          );
        })}
      </div>
      <div
        className={`${
          !isCollapsed && "hidden"
        } p-6 rounded-md mt-10 relative bg-[#1E5EFF] text-white text-[14px] font-normal leading-5`}
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
