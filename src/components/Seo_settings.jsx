import React from "react";

export default function Seo_settings() {
  return (
    <div className="w-full p-7 bg-white rounded-sm text-black">
      <h4 className="mb-6 font-bold block text-[16px] leading-6 capitalize text-default">
        SEO Settings
      </h4>
      <div className="flex flex-col gap-2 w-full mb-5">
        <label htmlFor="tag" className="text-default">
          title
        </label>
        <input
          type="text"
          name="seo"
          placeholder="seo settings"
          id="seo"
          className="w-full rounded-sm border px-4 py-3 border-slate-100 transition-all duration-500 ease-in-out outline-none focus:ring-1 focus:ring-blue-clr text-default"
        />
      </div>
      <div className="flex flex-col gap-2 w-full mb-5">
        <label htmlFor="tag" className="text-default">
          Description
        </label>

        <textarea
          name="seo-description"
          id="seo-description"
          className="w-full rounded-sm border px-4 py-3 h-20 border-slate-100 transition-all duration-500 ease-in-out outline-none focus:ring-1 focus:ring-blue-clr text-default"
          placeholder="SEO desc.."
        ></textarea>
      </div>
    </div>
  );
}
