import React from "react";
import Pagination from "./Pagination";
import Order from "./Order";

// import { useSelector } from "react-redux";

export default function FilterPro({ orderDatas }) {
  console.log(typeof orderDatas);
  // order conditional rendering
  const orderNumbers = orderDatas;
  return (
    <table className="mt-4 w-full max-[600px]:overflow-x-scroll max-[600px]:w-100">
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
      {orderDatas.length === 0 ? (
        <p className="text-center py-4 bg-slate-50">
          there haven't any orders yeat
        </p>
      ) : (
        <tbody className="w-full flex flex-col items-center justify-between w-full">
          {orderDatas.map((record) => (
            <>
              <tr
                key={record.id}
                className="py-3.5 border-b border-slate-100 flex items-center justify-between text-center w-full"
              >
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
                    {record.id}
                  </label>
                </td>
                <td className="flex items-center gap-2 justify-start cursor-pointer transition-all duration-500 ease-in-out hover:text-primary">
                  <span className="text-default capitalize  font-normal text-[14px] leading-5">
                    {record.date}
                  </span>
                </td>
                <td className="flex items-center gap-2 justify-start cursor-pointer transition-all duration-500 ease-in-out hover:text-primary">
                  <span className="text-default capitalize  font-normal text-[14px] leading-5">
                    {record.customer}
                  </span>
                </td>
                <td className="flex items-center gap-2 justify-start cursor-pointer transition-all duration-500 ease-in-out hover:text-primary">
                  <span className="text-default capitalize  font-normal text-[14px] leading-5 bg-[#C4F8E2] px-2 py-2 capitalize cursor-pointer transition-all duration-500 ease-in-out rounded-sm text-[#06A561]">
                    {record.paymentStatus}
                  </span>
                </td>
                <td className="flex items-center gap-2 justify-start cursor-pointer transition-all duration-500 ease-in-out hover:text-primary">
                  <span className="text-default capitalize  font-normal text-[14px] leading-5 bg-[#F99600] px-2 py-2 capitalize cursor-pointer transition-all duration-500 ease-in-out rounded-sm text-white">
                    {record.orderStatus}
                  </span>
                </td>
                <td className="flex items-center gap-2 justify-start cursor-pointer transition-all duration-500 ease-in-out hover:text-primary">
                  <span className="text-default capitalize  font-normal text-[14px] leading-5">
                    {record.price}
                  </span>
                </td>
              </tr>
              <Order orders={record.id} />
            </>
          ))}
        </tbody>
      )}

      {/* pagination area */}
      <Pagination orderNumbers={orderNumbers} />
    </table>
  );
}
