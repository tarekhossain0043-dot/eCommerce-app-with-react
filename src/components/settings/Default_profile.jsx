import React from "react";
import FileDropCompo from "../FileDropCompo";

export default function Default_profile() {
  return (
    <div>
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
    </div>
  );
}
