import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Bell, ChevronDown, Settings, User2, LogOut } from "lucide-react";
import { Link } from "react-router-dom";

export default function User() {
  const { user } = useSelector((state) => state.authentication);
  const [openProfile, setOpenProfile] = useState(false);
  const handleProfileDropdown = () => {
    setOpenProfile((prev) => !prev);
  };
  return (
    <div className="max-w-47 flex items-center gap-3">
      <span className="w-9 h-9 flex items-center justify-center uppercase rounded-full text-[18px] leading-7 text-white capitalize font-bold">
        <img
          src={user?.photoUrl || "https://via.placeholder.com/40"}
          alt="user-img"
          className="w-full h-full object-cover rounded-full"
        />
      </span>
      <div
        onClick={handleProfileDropdown}
        className="flex items-center cursor-pointer transition-all duration-300 ease-in-out gap-4 relative z-999 text-white"
      >
        <p className="mb-0 text-white">{user?.displayName}</p>
        <ChevronDown className="w-4 h-4 cursor-pointer transition-all duration-300 ease-in-out" />
        <div
          className={`absolute ${
            openProfile
              ? "flex transform translate-y-0 transition-all duration-500 ease-in-out"
              : "hidden"
          } top-10 flex flex-col p-4 translte-y-5 items-start gap-4 right-0 rounded-sm max-w-62.5 w-full text-slate-900 z-99999 bg-slate-100 shadow-sm shadow-sm`}
        >
          <Link to="/profile" className="flex items-center gap-3">
            <User2 />
            <span>User profile</span>
          </Link>
          <Link to="/profile" className="flex items-center gap-3">
            <Settings />
            <span>User settings</span>
          </Link>
          <Link to="/account-setting" className="flex items-center gap-3">
            <Bell />
            <span>Notifications</span>
          </Link>
          <Link to="logout" className="flex items-center gap-3">
            <LogOut />
            <span>Logout</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
