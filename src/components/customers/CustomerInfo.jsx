import { ArrowLeft, Plus, Star } from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Customers from "./Customers";
import Tags from "../Tags";

export default function CustomerInfo() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isOrderCompleate, setIsOrderCompleate] = useState(false);
  const fiveStar = Array(5)
    .fill(0)
    .map((star, index) => (
      <Star key={index} className="w-5 h-5 fill-amber-300 stroke-transparent" />
    ));
  return (
    <div>
      <div>
        <Link
          to="/Customers"
          className="text-default cursor-pointer capitalize cursor-pointer flex items-center gap-1 transition-all duration-300 ease-in-out hover:pr-1 hover:text-blue-clr"
        >
          <ArrowLeft className="w-4 h-4" /> back
        </Link>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-[24px] font-bold leading-9 text-black">
          Customer Information
        </span>
        <div className="flex items-center gap-3">
          <button className="text-blue-clr px-5 py-2.5 leading-6 capitalize border border-slate-100 text-center rounded-sm cursor-pointer transition-all duration-300 ease-in-out hover:bg-blue-clr px-3 hover:text-white">
            Cancel
          </button>
          <button
            onClick={() => setIsLoading((prev) => !prev)}
            disabled={isLoading}
            className="text-white px-5 py-2.5 text-[16px] leading-6 font-normal rounded-sm bg-blue-2 border border-transparent hover:border-slate-100 capitalize cursor-pointer transition-all duration-300 ease-in-out hover:bg-white hover:text-blue-2 text-[16px] font-normal leading-6"
          >
            {!isLoading ? "save" : "saving ...."}
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[8fr_4fr] gap-7.5 rounded-sm mt-7.5">
        {/* left side */}
        <div className="flex flex-col gap-7.5 p-7.5 shadow-sm bg-white">
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-5">
                <span className="mb-0 w-18 h-18 text-[32px] font-bold leading-11 rounded-full bg-[#A1A7C4] text-white flex items-center justify-center font-bold border-slate-100 cursor-pointer transition-all duration-300 ease-in-out">
                  R
                </span>
                <div className="flex flex-col gap-1">
                  <span className="block text-[16px] leading-6 text-black font-bold capitalize">
                    Randhir Kumar
                  </span>
                  <span className="text-default capitalize">
                    India <br /> 5 Orders <br /> Customer for 2 years
                  </span>
                </div>
              </div>
              <span className="flex items-center gap-1">{fiveStar}</span>
            </div>
            <hr className="w-full h-px bg-slate-100 my-7.5" />
            <span className="mb-6 block text-[16px] leading-6 text-black font-bold capitalize">
              Customer Notes
            </span>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="customer-Notes" className="text-default">
                Notes
              </label>
              <textarea
                name="customer-Notes"
                id="customer-Notes"
                placeholder="Add notes about customer"
                className="w-full rounded-sm border px-4 py-3 border-slate-100 transition-all duration-500 ease-in-out h-20 outline-none focus:ring-1 focus:ring-blue-clr text-default"
              ></textarea>
            </div>
          </div>
          {/* product table */}
          <div class="w-full">
            <span className="mb-6 block text-[16px] leading-6 text-black font-bold capitalize">
              Customer Orders
            </span>
            <div class="grid md:grid-cols-12 grid-cols-1 text-[#5A607F] gap-4 border-b py-3 font-semibold text-gray-600">
              {/* <div class="pl-4">Checkbox</div> */}
              <div className="col-span-1 lg:col-span-3 text-[14px] leading-5 font-normal capitalize">
                <label htmlFor="checkbox-label text-[14px] leading-5 font-normal capitalize">
                  Order
                </label>
              </div>
              <div className="md:col-span-3 col-span-1 text-[14px] leading-5 font-normal capitalize">
                Date
              </div>
              <div className="md:col-span-3 col-span-1 text-[14px] leading-5 font-normal capitalize">
                Order Status
              </div>
              <div className="md:col-span-3 col-span-1 text-[14px] leading-5 font-normal capitalize">
                Price
              </div>
            </div>

            <div
              onClick={() => navigate("/customerInfo")}
              class="grid md:grid-cols-12 border-b border-slate-100 cursor-pointer transition-all duration-500 ease-in-out col-span-1 gap-4 last-of-type:border-none py-4 items-center"
            >
              <div class="flex items-center gap-2 md:col-span-3 col-span-1">
                <span className="text-black capitalize font-medium">
                  #23534D
                </span>
              </div>

              <div className="md:col-span-3 col-span-1">May 25, 3:12 PM</div>
              <div
                onClick={() => setIsOrderCompleate((prev) => !prev)}
                className={`md:col-span-3 col-span-1 px-2.5 py-0.5 w-fit capitalize rounded-sm hover:shadow-sm cursor-pointer transition-all duration-300 ease-in-out ${
                  isOrderCompleate
                    ? "bg-[#C4F8E2] text-[#06A561]"
                    : "bg-[#E6E9F4] text-[#5A607F]"
                }`}
              >
                {isOrderCompleate ? "Completed" : "Pending"}
              </div>
              <div class="col-span-1 md:col-span-3">$29.74</div>
            </div>
            <div
              onClick={() => navigate("/customerInfo")}
              class="grid md:grid-cols-12 cursor-pointer transition-all duration-500 ease-in-out col-span-1 gap-4 last-of-type:border-none py-4 items-center"
            >
              <div class="flex items-center gap-2 md:col-span-3 col-span-1">
                <span className="text-black capitalize font-medium">
                  #23534D
                </span>
              </div>

              <div className="md:col-span-3 col-span-1">May 25, 3:12 PM</div>
              <div
                onClick={() => setIsOrderCompleate((prev) => !prev)}
                className={`md:col-span-3 col-span-1 px-2.5 py-0.5 w-fit capitalize rounded-sm hover:shadow-sm cursor-pointer transition-all duration-300 ease-in-out ${
                  isOrderCompleate
                    ? "bg-[#C4F8E2] text-[#06A561]"
                    : "bg-[#E6E9F4] text-[#5A607F]"
                }`}
              >
                {isOrderCompleate ? "Completed" : "Pending"}
              </div>
              <div class="col-span-1 md:col-span-3">$29.74</div>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="flex flex-col gap-7.5">
          <div className="p-7 bg-white rounded-sm shadow-sm">
            {/* head */}
            <div className="flex items-center justify-between mb-6">
              <span className="mb-6 block text-[16px] leading-6 text-black font-bold capitalize">
                Overview
              </span>
              <Link
                to="#"
                className="text-blue-2 cursor-pointer transition-all duration-500 ease-in-out hover:text-blue-3 capitalize"
              >
                Edit
              </Link>
            </div>
            <div className="flex flex-col items-start gap-1.75">
              <span className="text-default capitalize">Address</span>
              <span className="text-[#5A607F] text-[14px] leading-5">
                Panapur langa <br /> Hajipur,vaishali <br /> 844124 India
              </span>
            </div>
            <div className="flex flex-col gap-1 mt-6">
              <span className="text-[14px] leading-5 text-default capitalize">
                Email Address
              </span>
              <a
                href="mailto:randhirppl@gmail.com"
                className=" text-[#5A607F] cursor-pointer transition-all duration-300 ease-in-out hover:text-blue-clr"
              >
                randhirppl@gmail.com
              </a>
            </div>
            <div className="flex flex-col gap-1 mt-6">
              <span className="text-[14px] leading-5 text-default capitalize">
                Phone
              </span>
              <a
                href="telto:+91 8804789764"
                className=" text-[#5A607F] cursor-pointer transition-all duration-300 ease-in-out hover:text-blue-clr"
              >
                +91 8804789764
              </a>
            </div>
            <hr className="w-full h-px bg-slate-100 my-6" />
            <button className="text-red text-[14px] text-start font-normal cursor-pointer transition-all duration-500 ease-in-out w-full transition-all duration-300 ease-in-out hover:text-primary capitalize inline-block">
              Delete Customer
            </button>
          </div>
          <Tags />
        </div>
      </div>
      <hr className="h-px w-full bg-default my-6" />
      <div className="flex items-center justify-end">
        <div className="flex items-center gap-3">
          <button className="text-blue-clr px-5 py-2.5 leading-6 capitalize border border-slate-100 text-center rounded-sm cursor-pointer transition-all duration-300 ease-in-out hover:bg-blue-clr px-3 hover:text-white">
            Cancel
          </button>
          <button
            onClick={() => navigate("/add-poroduct")}
            className="text-white px-5 py-2.5 text-[16px] leading-6 font-normal rounded-sm bg-blue-2 border border-transparent hover:border-slate-100 capitalize cursor-pointer transition-all duration-300 ease-in-out hover:bg-white hover:text-blue-2 text-[16px] font-normal leading-6"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
