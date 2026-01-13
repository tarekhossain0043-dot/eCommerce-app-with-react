import React, { useState } from "react";
import FileDropCompo from "../FileDropCompo";
import { Link } from "react-router-dom";
import { settingMenuOrder } from "../../assets/assets";

export default function Profile() {
  const [activeMenuItem, setActiveMenuItem] = useState("");
  console.log(activeMenuItem);

  // menu linking
  const handleMenuLinked = (id) => {
    const currentLinkedMenu = settingMenuOrder.find((ids) => ids === id);
    setActiveMenuItem(currentLinkedMenu);
  };
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
              onClick={() => handleMenuLinked(settingMenu.id)}
              className={`inline-block relative after:absolute after:-bottom-5.25 after:transition-all after:duration-300 after:ease-in-out after:left-0 after:w-0 after:content-[''] after:h-px after:bg-primary transition-all duration-300 ease-in-out hover:after:w-full ${
                activeMenuItem === settingMenu.id
                  ? "after:w-full after:bg-primary"
                  : ""
              } cursor-pointer transition-all duration-300 ease-in-out hover:text-primary transition-all duration-300 ease-in-out hover:text-primary capitalize text-default`}
            >
              {settingMenu.label}
            </Link>
          ))}
        </div>
        <hr className="w-full h-px w-full bg-slate-100 mb-5" />
        {/* head of Profile */}
        {/* profile details */}
        <div className="flex flex-col gap-1">
          <span className="block text-[16px] leading-6 text-black font-bold capitalize">
            Profile Details
          </span>
          <span className="mb-6 block text-[14px] leading-5 font-normal text-default">
            Enter your profile information
          </span>
        </div>
        <div className="m6-6">
          <span className="block text-[14px] leading-5 font-normal text-default">
            Profile Image
          </span>
          <FileDropCompo />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="pro-fastName">First Name</label>
            <input
              type="text"
              placeholder="first name .."
              className="w-full rounded-sm border px-4 py-3 border-slate-100 transition-all duration-500 ease-in-out outline-none focus:ring-1 focus:ring-blue-clr text-default"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="pro_Last Name">Last Name</label>
            <input
              type="text"
              placeholder="last name"
              className="w-full rounded-sm border px-4 py-3 border-slate-100 transition-all duration-500 ease-in-out outline-none focus:ring-1 focus:ring-blue-clr text-default"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="emil">Email</label>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-sm border px-4 py-3 border-slate-100 transition-all duration-500 ease-in-out outline-none focus:ring-1 focus:ring-blue-clr text-default"
            />
          </div>
          <div className="flex items-start gap-6">
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="Postal Code">Phone Number</label>
              <input
                type="number"
                placeholder="Phone Number"
                className="w-full rounded-sm border px-4 py-3 border-slate-100 transition-all duration-500 ease-in-out outline-none focus:ring-1 focus:ring-blue-clr text-default"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="phone">Phone</label>
            <input
              type="number"
              minLength={11}
              maxLength={11}
              placeholder="Phone"
              className="w-full rounded-sm border px-4 py-3 border-slate-100 transition-all duration-500 ease-in-out outline-none focus:ring-1 focus:ring-blue-clr text-default"
            />
          </div>
        </div>
        <hr className="w-full h-px w-full bg-slate-100 my-6" />
        <div className="flex flex-col gap-1">
          <span className="block text-[16px] leading-6 text-black font-bold capitalize">
            Regional Settings
          </span>
          <span className="mb-6 block text-[14px] leading-5 font-normal text-default">
            Set your language and timezone
          </span>
        </div>
        <div className="grid grid-cols-1 md: grid-cols-2 gap-6 w-full">
          <div className="flex flex-col gap-1">
            <label
              htmlFor="language"
              className="block text-[14px] leading-5 font-normal text-default"
            >
              Language
            </label>
            <select
              name="language"
              id="language"
              className="w-full rounded-sm border px-4 py-3 border-slate-100 transition-all duration-500 ease-in-out outline-none focus:ring-1 focus:ring-blue-clr text-default"
            >
              <option value="english">English</option>
              <option value="english">Bangla</option>
              <option value="english">Spanish</option>
              <option value="english">Jarman</option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="Timezone"
              className="block text-[14px] leading-5 font-normal text-default"
            >
              Choose your timezone:
            </label>
            <select
              id="timezone-picker"
              name="Choose your timezone:"
              className="w-full rounded-sm border px-4 py-3 border-slate-100 transition-all duration-500 ease-in-out outline-none focus:ring-1 focus:ring-blue-clr text-default"
            >
              <option value="UTC">UTC (Universal Coordinated Time)</option>
              <option value="America/New_York">Eastern Time (ET)</option>
              <option value="Europe/London">London (GMT/BST)</option>
              <option value="Asia/Tokyo">Tokyo (JST)</option>
            </select>
          </div>
        </div>
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
