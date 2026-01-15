import React, { useState } from "react";
import FileDropCompo from "../FileDropCompo";
import { Link, Outlet } from "react-router-dom";
import { settingMenuOrder } from "../../assets/assets";

export default function Profile() {
  const [activeMenuItem, setActiveMenuItem] = useState("");
  console.log(activeMenuItem);

  // menu linking

  return (
    <div>
      <div className="flex items-center justify-between">
        <h4>Settings</h4>
        <div className="flex items-center gap-3">
          <button className="text-blue-clr px-5 py-2.5 leading-6 capitalize border border-slate-100 text-center rounded-sm cursor-pointer transition-all duration-300 ease-in-out hover:bg-blue-clr px-3 hover:text-white">
            Cancel
          </button>
          <button
            // onClick={() => navigate("/add-poroduct")}
            className="text-white px-5 py-2.5 text-[16px] leading-6 font-normal rounded-sm bg-blue-2 border border-transparent hover:border-slate-100 capitalize cursor-pointer transition-all duration-300 ease-in-out hover:bg-white hover:text-blue-2 text-[16px] font-normal leading-6"
          >
            Save
          </button>
        </div>
      </div>
      <div className="bg-white p-7.5 rounded-sm mt-7">
        <div className="py-2 bg-white rounded-sm bg-white flex items-center gap-6 mb-3">
          {settingMenuOrder.map((settingMenu, index) => (
            <Link
              to={settingMenu.to}
              key={index}
              onClick={() => setActiveMenuItem(settingMenu.label)}
              className={`inline-block relative after:absolute after:-bottom-5.25 after:transition-all after:duration-300 after:ease-in-out after:left-0 after:w-0 after:content-[''] after:h-px after:bg-primary transition-all duration-300 ease-in-out hover:after:w-full ${
                activeMenuItem !== settingMenu.label
                  ? "text-default"
                  : "text-blue-clr after:w-full"
              } cursor-pointer transition-all duration-300 ease-in-out hover:text-primary transition-all duration-300 ease-in-out hover:text-primary capitalize text-default`}
            >
              {settingMenu.label}
            </Link>
          ))}
        </div>
        <hr className="w-full h-px w-full bg-slate-100 mb-5" />
        {/* head of Profile */}
        {/* profile details */}
        <Outlet />

        <hr className="h-px w-full bg-default my-7" />
        <div className="flex items-center justify-end">
          <div className="flex items-center gap-3">
            <button className="text-blue-clr px-5 py-2.5 leading-6 capitalize border border-slate-100 text-center rounded-sm cursor-pointer transition-all duration-300 ease-in-out hover:bg-blue-clr px-3 hover:text-white">
              Cancel
            </button>
            <button
              //   onClick={() => navigate("/customers")}
              className="text-white px-5 py-2.5 text-[16px] leading-6 font-normal rounded-sm bg-blue-2 border border-transparent hover:border-slate-100 capitalize cursor-pointer transition-all duration-300 ease-in-out hover:bg-white hover:text-blue-2 text-[16px] font-normal leading-6"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
