import React from "react";
import pro_1 from "../assets/features/image-1.png";
export default function TopSoldProduct() {
  return (
    <div className="w-full">
      <div className="grid md:grid-cols-12 grid-cols-1 gap-4 border-b last-of-type:border-b-0 py-2.5 font-semibold text-gray-600">
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
        <div className="md:col-span-6 col-span-1 text-[14px] font-normal leading-5 text-default">
          Name
        </div>
        <div className="md:col-span-3 col-span-1 text-[14px] font-normal leading-5 text-default">
          Price
        </div>
        <div className="md:col-span-3 col-span-1 text-[14px] font-normal leading-5 text-default">
          Units Sold
        </div>
      </div>

      <div className="grid md:grid-cols-12 col-cols-1 gap-4 w-full border-b py-2.5 items-center">
        <div className="flex items-center gap-2 md:col-span-6 col-span-1">
          <img src={pro_1} className="w-10 h-10 rounded" />
          <div>
            <p className="font-bold">Men Grey Hoodie</p>
            {/* <p className="text-sm text-gray-400">Hoodies</p> */}
          </div>
        </div>

        <div className="md:col-span-3 col-span-1 text-black">24.05.2023</div>
        <div className="md:col-span-3 col-span-1 text-black">$124.97</div>
      </div>
      <div className="grid md:grid-cols-12 gap-4 col-cols-1 w-full border-b py-2.5 items-center">
        <div className="flex items-center gap-2 md:col-span-6 col-span-1">
          <img src={pro_1} className="w-10 h-10 rounded" />
          <div>
            <p className="font-bold">Men Grey Hoodie</p>
            {/* <p className="text-sm text-gray-400">Hoodies</p> */}
          </div>
        </div>

        <div className="md:col-span-3 col-span-1 text-black">24.05.2023</div>
        <div className="md:col-span-3 col-span-1 text-black">$124.97</div>
      </div>
      <div className="grid md:grid-cols-12 col-cols-1 gap-4 w-full border-b py-2.5 items-center">
        <div className="flex items-center gap-2 md:col-span-6 col-span-1">
          <img src={pro_1} className="w-10 h-10 rounded" />
          <div>
            <p className="font-bold">Men Grey Hoodie</p>
            {/* <p className="text-sm text-gray-400">Hoodies</p> */}
          </div>
        </div>

        <div className="md:col-span-3 col-span-1 text-black">24.05.2023</div>
        <div className="md:col-span-3 col-span-1 text-black">$124.97</div>
      </div>
      <div className="grid md:grid-cols-12 grid-cols-1 gap-4 w-full py-2.5 items-center">
        <div className="flex items-center gap-2 md:col-span-6 col-span-1 text-black">
          <img src={pro_1} className="w-10 h-10 rounded" />
          <div>
            <p className="font-bold">Men Grey Hoodie</p>
          </div>
        </div>

        <div className="md:col-span-3 col-span-1 text-black">24.05.2023</div>
        <div className="md:col-span-3 col-span-1 text-black">$124.97</div>
      </div>
    </div>
  );
}
