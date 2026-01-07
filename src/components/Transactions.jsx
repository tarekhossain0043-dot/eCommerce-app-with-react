import React, { useState } from "react";

export default function Transactions() {
  const [isPayment, setIsPayment] = useState(false);
  const payment = setTimeout(() => {
    setIsPayment(true);
    return () => clearTimeout(payment);
  }, 10000);
  return (
    <div class="w-full">
      <div class="grid md:grid-cols-12 grid-cols-1 gap-4 border-b py-3 font-semibold text-gray-600">
        {/* <div class="pl-4">Checkbox</div> */}
        {/* <div className="col-span-1 lg:col-span-4">
          <input
            type="checkbox"
            name="checkbox-label"
            id="checkbox-label"
            className="w-3 h-3 mr-4 rounded cursor-pointer transition-all duration-300 ease-in-out accent-blue-2 text-white font-medium focus:ring-1 focus:ring-offset-1 focus:ring-purple-500 outline-none"
          />
          <label htmlFor="checkbox-label">Product</label>
        </div> */}
        <div className="md:col-span-3 col-span-1 text-[14px] font-normal leading-5 text-default">
          Name
        </div>
        <div className="md:col-span-3 col-span-1 text-[14px] font-normal leading-5 text-default">
          Date
        </div>
        <div className="md:col-span-3 col-span-1 text-[14px] font-normal leading-5 text-default">
          Amount
        </div>
        <div className="md:col-span-3 col-span-1 text-[14px] font-normal leading-5 text-default">
          Status
        </div>
      </div>

      <div class="grid md:grid-cols-12 col-span-1 w-full border-b py-4 items-center">
        {/* <div class="flex items-center gap-2 md:col-span-4 col-span-1">
          <div>
            <input
              type="checkbox"
              className="w-3 h-3 rounded cursor-pointer transition-all duration-300 ease-in-out accent-blue-2 text-white font-medium focus:ring-1 focus:ring-offset-1 focus:ring-purple-500 outline-none"
            />
          </div>
          <img src={pro_1} class="w-10 h-10 rounded" />
          <div>
            <p class="font-bold">Men Grey Hoodie</p>
            <p class="text-sm text-gray-400">Hoodies</p>
          </div>
        </div> */}

        <div className="md:col-span-3 col-span-1 text-black">Jagarnath S.</div>
        <div className="md:col-span-3 col-span-1 text-black">24.05.2023</div>
        <div className="md:col-span-3 col-span-1 text-black">$124.97</div>
        <div
          class={`${
            isPayment
              ? "bg-green-100 text-green-700"
              : "bg-default/80 text-default/90"
          } col-span-1 md:col-span-3 px-2 py-1 rounded w-fit`}
        >
          {isPayment ? "Paid" : "Pending"}
        </div>
      </div>
      <div class="grid md:grid-cols-12 col-span-1 w-full border-b py-4 items-center">
        {/* <div class="flex items-center gap-2 md:col-span-4 col-span-1">
          <div>
            <input
              type="checkbox"
              className="w-3 h-3 rounded cursor-pointer transition-all duration-300 ease-in-out accent-blue-2 text-white font-medium focus:ring-1 focus:ring-offset-1 focus:ring-purple-500 outline-none"
            />
          </div>
          <img src={pro_1} class="w-10 h-10 rounded" />
          <div>
            <p class="font-bold">Men Grey Hoodie</p>
            <p class="text-sm text-gray-400">Hoodies</p>
          </div>
        </div> */}

        <div className="md:col-span-3 col-span-1 text-black">Jagarnath S.</div>
        <div className="md:col-span-3 col-span-1 text-black">24.05.2023</div>
        <div className="md:col-span-3 col-span-1 text-black">$124.97</div>
        <div
          class={`${
            isPayment
              ? "bg-green-100 text-green-700"
              : "bg-default/80 text-default/90"
          } col-span-1 md:col-span-3 px-2 py-1 rounded w-fit`}
        >
          {isPayment ? "Paid" : "Pending"}
        </div>
      </div>
    </div>
  );
}
