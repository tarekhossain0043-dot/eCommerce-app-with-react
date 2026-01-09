import React from "react";
import logo from "../assets/logo.png";
import SearchBar from "../components/Searchbar";
import Searchbar from "../components/Searchbar";
import UserBio from "./UserBio";
import User from "./User";
import { Menu, X } from "lucide-react";
export default function Header({ isCollapsed, handleSidebarToggle }) {
  return (
    <div className="flex fixed top-0 left-0 w-full z-9999 items-center gap-5 px-4 justify-between xl:gap-x-10 bg-header-bg py-5.5">
      {/* logo area */}
      <div className="max-w-41.5">
        <img src={logo} alt="logo" />
      </div>
      <span
        onClick={handleSidebarToggle}
        className="z-999 w-8 h-8 shadow-sm bg-blue-2 rounded-sm flex items-center justify-center text-[16px] cursor-pointer"
      >
        {!isCollapsed ? (
          <Menu className="w-6 h-6 cursor-pointer text-white" />
        ) : (
          <X className="w-6 h-6 cursor-pointer text-white" />
        )}
      </span>
      <Searchbar />
      <div className="flex items-center gap-5">
        <UserBio />
        <User />
      </div>
    </div>
  );
}
