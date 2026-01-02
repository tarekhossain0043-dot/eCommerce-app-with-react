import React from "react";
import Pagination from "./Pagination";

export default function FilterPro() {
  return (
    <div className="mt-4">
      <thead className="flex items-center justify-between border-b-2 border-slate-100 py-3">
        <th className="flex items-center gap-2 justify-start cursor-pointer transition-all duration-500 ease-in-out hover:text-primary">
          <input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            className="border border-slate-100 accent-blue-clr cursor-pointer transition-all duration-300 ease-in-out rounded-sm"
          />
          <label
            htmlFor="checkbox"
            className="text-default capitalize  font-normal text-[14px] leading-5"
          >
            Order
          </label>
        </th>
        <th className="flex items-center gap-2 justify-start cursor-pointer transition-all duration-500 ease-in-out hover:text-primary">
          <span className="text-default capitalize  font-normal text-[14px] leading-5">
            Date
          </span>
        </th>
        <th className="flex items-center gap-2 justify-start cursor-pointer transition-all duration-500 ease-in-out hover:text-primary">
          <span className="text-default capitalize  font-normal text-[14px] leading-5">
            Customer
          </span>
        </th>
        <th className="flex items-center gap-2 justify-start cursor-pointer transition-all duration-500 ease-in-out hover:text-primary">
          <span className="text-default capitalize  font-normal text-[14px] leading-5">
            Payment status
          </span>
        </th>
        <th className="flex items-center gap-2 justify-start cursor-pointer transition-all duration-500 ease-in-out hover:text-primary">
          <span className="text-default capitalize  font-normal text-[14px] leading-5">
            Order Status
          </span>
        </th>
        <th className="flex items-center gap-2 justify-start cursor-pointer transition-all duration-500 ease-in-out hover:text-primary">
          <span className="text-default capitalize  font-normal text-[14px] leading-5">
            Total
          </span>
        </th>
      </thead>
      <tbody className="w-full flex flex-col items-center justify-between w-full">
        <tr className="py-3.5 border-b border-slate-100 flex items-center justify-between text-center w-full">
          <td className="flex items-center gap-2 justify-start cursor-pointer transition-all duration-500 ease-in-out hover:text-primary">
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              className="border border-slate-100 accent-blue-clr cursor-pointer transition-all duration-300 ease-in-out rounded-sm"
            />
            <label
              htmlFor="checkbox"
              className="text-default capitalize  font-normal text-[14px] leading-5"
            >
              #12512B
            </label>
          </td>
          <td className="flex items-center gap-2 justify-start cursor-pointer transition-all duration-500 ease-in-out hover:text-primary">
            <span className="text-default capitalize  font-normal text-[14px] leading-5">
              May 5, 4:20 PM
            </span>
          </td>
          <td className="flex items-center gap-2 justify-start cursor-pointer transition-all duration-500 ease-in-out hover:text-primary">
            <span className="text-default capitalize  font-normal text-[14px] leading-5">
              Tom Anderson
            </span>
          </td>
          <td className="flex items-center gap-2 justify-start cursor-pointer transition-all duration-500 ease-in-out hover:text-primary">
            <span className="text-default capitalize  font-normal text-[14px] leading-5 bg-[#C4F8E2] px-2 py-2 capitalize cursor-pointer transition-all duration-500 ease-in-out rounded-sm text-[#06A561]">
              Paid
            </span>
          </td>
          <td className="flex items-center gap-2 justify-start cursor-pointer transition-all duration-500 ease-in-out hover:text-primary">
            <span className="text-default capitalize  font-normal text-[14px] leading-5 bg-[#F99600] px-2 py-2 capitalize cursor-pointer transition-all duration-500 ease-in-out rounded-sm text-white">
              Ready
            </span>
          </td>
          <td className="flex items-center gap-2 justify-start cursor-pointer transition-all duration-500 ease-in-out hover:text-primary">
            <span className="text-default capitalize  font-normal text-[14px] leading-5">
              $49.90
            </span>
          </td>
        </tr>
        <tr className="py-3.5 border-b border-slate-100 flex items-center justify-between text-center w-full">
          <td className="flex items-center gap-2 justify-start cursor-pointer transition-all duration-500 ease-in-out hover:text-primary">
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              className="border border-slate-100 accent-blue-clr cursor-pointer transition-all duration-300 ease-in-out rounded-sm"
            />
            <label
              htmlFor="checkbox"
              className="text-default capitalize  font-normal text-[14px] leading-5"
            >
              #12512B
            </label>
          </td>
          <td className="flex items-center gap-2 justify-start cursor-pointer transition-all duration-500 ease-in-out hover:text-primary">
            <span className="text-default capitalize  font-normal text-[14px] leading-5">
              May 5, 4:20 PM
            </span>
          </td>
          <td className="flex items-center gap-2 justify-start cursor-pointer transition-all duration-500 ease-in-out hover:text-primary">
            <span className="text-default capitalize  font-normal text-[14px] leading-5">
              Tom Anderson
            </span>
          </td>
          <td className="flex items-center gap-2 justify-start cursor-pointer transition-all duration-500 ease-in-out hover:text-primary">
            <span className="text-default capitalize  font-normal text-[14px] leading-5 bg-[#C4F8E2] px-2 py-2 capitalize cursor-pointer transition-all duration-500 ease-in-out rounded-sm text-[#06A561]">
              Paid
            </span>
          </td>
          <td className="flex items-center gap-2 justify-start cursor-pointer transition-all duration-500 ease-in-out hover:text-primary">
            <span className="text-default capitalize  font-normal text-[14px] leading-5 bg-[#F99600] px-2 py-2 capitalize cursor-pointer transition-all duration-500 ease-in-out rounded-sm text-white">
              Ready
            </span>
          </td>
          <td className="flex items-center gap-2 justify-start cursor-pointer transition-all duration-500 ease-in-out hover:text-primary">
            <span className="text-default capitalize  font-normal text-[14px] leading-5">
              $49.90
            </span>
          </td>
        </tr>
        <tr className="py-3.5 border-b border-slate-100 flex items-center justify-between text-center w-full">
          <td className="flex items-center gap-2 justify-start cursor-pointer transition-all duration-500 ease-in-out hover:text-primary">
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              className="border border-slate-100 accent-blue-clr cursor-pointer transition-all duration-300 ease-in-out rounded-sm"
            />
            <label
              htmlFor="checkbox"
              className="text-default capitalize  font-normal text-[14px] leading-5"
            >
              #12512B
            </label>
          </td>
          <td className="flex items-center gap-2 justify-start cursor-pointer transition-all duration-500 ease-in-out hover:text-primary">
            <span className="text-default capitalize  font-normal text-[14px] leading-5">
              May 5, 4:20 PM
            </span>
          </td>
          <td className="flex items-center gap-2 justify-start cursor-pointer transition-all duration-500 ease-in-out hover:text-primary">
            <span className="text-default capitalize  font-normal text-[14px] leading-5">
              Tom Anderson
            </span>
          </td>
          <td className="flex items-center gap-2 justify-start cursor-pointer transition-all duration-500 ease-in-out hover:text-primary">
            <span className="text-default capitalize  font-normal text-[14px] leading-5 bg-[#C4F8E2] px-2 py-2 capitalize cursor-pointer transition-all duration-500 ease-in-out rounded-sm text-[#06A561]">
              Paid
            </span>
          </td>
          <td className="flex items-center gap-2 justify-start cursor-pointer transition-all duration-500 ease-in-out hover:text-primary">
            <span className="text-default capitalize  font-normal text-[14px] leading-5 bg-[#F99600] px-2 py-2 capitalize cursor-pointer transition-all duration-500 ease-in-out rounded-sm text-white">
              Ready
            </span>
          </td>
          <td className="flex items-center gap-2 justify-start cursor-pointer transition-all duration-500 ease-in-out hover:text-primary">
            <span className="text-default capitalize  font-normal text-[14px] leading-5">
              $49.90
            </span>
          </td>
        </tr>
        <tr className="py-3.5 border-b border-slate-100 flex items-center justify-between text-center w-full">
          <td className="flex items-center gap-2 justify-start cursor-pointer transition-all duration-500 ease-in-out hover:text-primary">
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              className="border border-slate-100 accent-blue-clr cursor-pointer transition-all duration-300 ease-in-out rounded-sm"
            />
            <label
              htmlFor="checkbox"
              className="text-default capitalize  font-normal text-[14px] leading-5"
            >
              #12512B
            </label>
          </td>
          <td className="flex items-center gap-2 justify-start cursor-pointer transition-all duration-500 ease-in-out hover:text-primary">
            <span className="text-default capitalize  font-normal text-[14px] leading-5">
              May 5, 4:20 PM
            </span>
          </td>
          <td className="flex items-center gap-2 justify-start cursor-pointer transition-all duration-500 ease-in-out hover:text-primary">
            <span className="text-default capitalize  font-normal text-[14px] leading-5">
              Tom Anderson
            </span>
          </td>
          <td className="flex items-center gap-2 justify-start cursor-pointer transition-all duration-500 ease-in-out hover:text-primary">
            <span className="text-default capitalize  font-normal text-[14px] leading-5 bg-[#C4F8E2] px-2 py-2 capitalize cursor-pointer transition-all duration-500 ease-in-out rounded-sm text-[#06A561]">
              Paid
            </span>
          </td>
          <td className="flex items-center gap-2 justify-start cursor-pointer transition-all duration-500 ease-in-out hover:text-primary">
            <span className="text-default capitalize  font-normal text-[14px] leading-5 bg-[#F99600] px-2 py-2 capitalize cursor-pointer transition-all duration-500 ease-in-out rounded-sm text-white">
              Ready
            </span>
          </td>
          <td className="flex items-center gap-2 justify-start cursor-pointer transition-all duration-500 ease-in-out hover:text-primary">
            <span className="text-default capitalize  font-normal text-[14px] leading-5">
              $49.90
            </span>
          </td>
        </tr>
      </tbody>
      {/* pagination area */}
      <Pagination />
    </div>
  );
}
