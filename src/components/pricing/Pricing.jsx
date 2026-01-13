import React, { useState } from "react";
import { pricingTable } from "../../assets/assets";
import Faq from "../Faq";

export default function Pricing() {
  const [activeBillingInfo, setActiveBillingInfo] = useState("");

  console.log(activeBillingInfo);
  return (
    <div>
      <h4 className="mb-7.5">Choose a Plan</h4>
      <div className="flex flex-col gap-7.5">
        <div className="py-10 px-7 bg-slate-50 shadow-sm text-center">
          <div className="py-10 mx-auto max-w-100">
            <h4>Pricing Plans</h4>
            <span className="text-default leading-6 block mb-6">
              Familiarize yourself with the payment plans below. Pick best
              pracing plan to fit your needs.
            </span>
            <div className="border w-fit space-x-1 cursor-pointer m-auto border-slate-200 rounded-sm text-[#5A607F] capitalize cursor-pointer transition-all duration-300 ease-in-out">
              <button
                onClick={() => setActiveBillingInfo("Bill Monthly")}
                className={`p-2 transition-all ${
                  activeBillingInfo === "Bill Monthly"
                    ? "ring-1 ring-blue-2"
                    : ""
                } duration-300 ease-in-out hover:ring-1 cursor-pointer rounded-sm hover:ring-blue-2`}
              >
                Bill Monthly
              </button>
              <button
                onClick={() => setActiveBillingInfo("Bill Annually")}
                className={`p-2 transition-all ${
                  activeBillingInfo === "Bill Annually"
                    ? "ring-1 ring-blue-2"
                    : ""
                } duration-300 ease-in-out hover:ring-1 cursor-pointer rounded-sm hover:ring-blue-2`}
              >
                Bill Annually
              </button>
            </div>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
            {pricingTable.map((table, index) => (
              <div
                key={index}
                className="p-7 border relative border-slate-200 text-left rounded-sm"
              >
                {table.recomended && (
                  <span className="text-white bg-blue-2 text-center px-2 py-1 rounded-sm capitalize cursor-pointer transition-all duration-300 ease-in-out absolute -top-3.5 z-999 left-1/2 transform -translate-x-1/2">
                    {table.recomended}
                  </span>
                )}
                <span className="block mb-5 text-default text-[12px]">
                  <strong className="text-black text-[32px] leading-11">
                    {activeBillingInfo === "Bill Monthly"
                      ? table.price_m
                      : table.price_y}
                  </strong>
                  /month
                </span>
                <span className="block mb-2 text-[20px]">{table.category}</span>
                <span className="text-[14px] leading-6 text-default block">
                  {table.categoryDesc}
                </span>
                <hr className="bg-slate-200 w-full h-px my-7" />
                <ul className="flex items-start gap-3 flex-col">
                  {table?.listCategory.map((list) => (
                    <li key={list.id} className="relative pl-8">
                      {list.Icon2 ? (
                        <list.Icon2 className="absolute top-1/2 w-4 h-4 left-0 transform -translate-y-1/2 text-[#7E84A3]" />
                      ) : (
                        <list.Icon className="absolute top-1/2 w-4 h-4 left-0 transform -translate-y-1/2 text-[#1FD286]" />
                      )}
                      <span className="text-[16px] leading-6 text-black font-normal">
                        {list.label}
                      </span>
                    </li>
                  ))}
                </ul>
                <button className="flex items-center justify-center w-full text-center mt-7 text-blue-2 capitalize rounded-sm cursor-pointer transition-all border border-slate-200 py-3 duration-300 ease-in-out hover:bg-blue-2 hover:text-white leading-5">
                  Select Plan
                </button>
              </div>
            ))}
          </div>
          <span className="block mt-7 text-center text-[16px] font-normal text-default">
            Cancel or upgrade your plan anytime
          </span>
        </div>
        <div className="py-10 px-7 bg-slate-50 shadow-sm text-center">
          <div className="py-10 mx-auto max-w-100">
            <h4>Frequently Asked Questions</h4>
            <Faq />
          </div>
        </div>
      </div>
    </div>
  );
}
