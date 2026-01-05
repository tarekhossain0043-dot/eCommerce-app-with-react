import { Plus } from "lucide-react";
import React, { useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import Pagination from "./Pagination";
import pro_1 from "../assets/products/Image-1.png";

export default function Products() {
  const { setHeaderTitle, setHeaderBtns } = useOutletContext();
  const navigate = useNavigate();
  useEffect(() => {
    setHeaderTitle("Products");
    setHeaderBtns(
      <div className="flex items-center gap-3">
        <button className="text-blue-clr px-5 py-2.5 capitalize border border-slate-100 text-center rounded-sm cursor-pointer transition-all duration-300 ease-in-out hover:bg-blue-clr px-3 hover:text-white">
          Export
        </button>
        <button
          onClick={() => navigate("/add-poroduct")}
          className="text-white py-2.5 text-[16px] leading-6 font-normal px-5 flex items-center gap-2 rounded-sm bg-blue-2 border border-transparent hover:border-slate-100 capitalize cursor-pointer transition-all duration-300 ease-in-out hover:bg-white hover:text-blue-2 text-[16px] font-normal leading-6"
        >
          <Plus className="w-4 h-4 text-white" />
          Add Product
        </button>
      </div>
    );
    return () => {
      setHeaderTitle("");
      setHeaderBtns(null);
    };
  }, [navigate, setHeaderTitle, setHeaderBtns]);
  return (
    <div className="mt-4">
      {/* <thead className="flex items-center justify-between border-b-2 border-slate-100 py-3">
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
            Product
          </label>
        </th>
        <th className="flex items-center gap-2 justify-start cursor-pointer transition-all duration-500 ease-in-out hover:text-primary">
          <span className="text-default capitalize  font-normal text-[14px] leading-5">
            Inventory
          </span>
        </th>
        <th className="flex items-center gap-2 justify-start cursor-pointer transition-all duration-500 ease-in-out hover:text-primary">
          <span className="text-default capitalize  font-normal text-[14px] leading-5">
            Color
          </span>
        </th>
        <th className="flex items-center gap-2 justify-start cursor-pointer transition-all duration-500 ease-in-out hover:text-primary">
          <span className="text-default capitalize  font-normal text-[14px] leading-5">
            Price
          </span>
        </th>
        <th className="flex items-center gap-2 justify-start cursor-pointer transition-all duration-500 ease-in-out hover:text-primary">
          <span className="text-default capitalize  font-normal text-[14px] leading-5">
            Rating
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
              className="text-default capitalize flex items-center gap-4  font-normal text-[14px] leading-5"
            >
              <img src={pro_1} alt="pro_1" className="w-12 h-12 rounded-sm" />
              <div className="flex items-start flex-col gap-1">
                <span className="text-[14px] font-medium mb-0 text-black">
                  Men Grey Hoodie
                </span>
                <span className="text-[14px] mb-0 text-default">Hoodies</span>
              </div>
            </label>
          </td>
          <td className="cursor-pointer flex justify-start transition-all duration-500 ease-in-out hover:text-primary">
            <span className="text-default capitalize  font-normal text-[14px] leading-5">
              96 in stock
            </span>
          </td>
          <td className="flex items-center gap-2 justify-start cursor-pointer transition-all duration-500 ease-in-out hover:text-primary">
            <span className="text-default capitalize  font-normal text-[14px] leading-5">
              Black
            </span>
          </td>
          <td className="flex items-center gap-2 justify-start cursor-pointer transition-all duration-500 ease-in-out hover:text-primary">
            <span className="text-default capitalize  font-normal text-[14px] leading-5 bg-[#C4F8E2] px-2 py-2 capitalize cursor-pointer transition-all duration-500 ease-in-out rounded-sm text-[#06A561]">
              $49.90
            </span>
          </td>
          <td className="flex items-center gap-2 justify-start cursor-pointer transition-all duration-500 ease-in-out hover:text-primary">
            <span className="text-default capitalize  font-normal text-[14px] leading-5 bg-[#F99600] px-2 py-2 capitalize cursor-pointer transition-all duration-500 ease-in-out rounded-sm text-white">
              5.0 (32 Votes)
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
              className="text-default capitalize flex items-center gap-4  font-normal text-[14px] leading-5"
            >
              <img src={pro_1} alt="pro_1" className="w-12 h-12 rounded-sm" />
              <div className="flex items-start flex-col gap-1">
                <span className="text-[14px] font-medium mb-0 text-black">
                  Men Grey Hoodie
                </span>
                <span className="text-[14px] mb-0 text-default">Hoodies</span>
              </div>
            </label>
          </td>
          <td className="cursor-pointer flex justify-start transition-all duration-500 ease-in-out hover:text-primary">
            <span className="text-default capitalize  font-normal text-[14px] leading-5">
              96 in stock
            </span>
          </td>
          <td className="flex items-center gap-2 justify-start cursor-pointer transition-all duration-500 ease-in-out hover:text-primary">
            <span className="text-default capitalize  font-normal text-[14px] leading-5">
              Black
            </span>
          </td>
          <td className="flex items-center gap-2 justify-start cursor-pointer transition-all duration-500 ease-in-out hover:text-primary">
            <span className="text-default capitalize  font-normal text-[14px] leading-5 bg-[#C4F8E2] px-2 py-2 capitalize cursor-pointer transition-all duration-500 ease-in-out rounded-sm text-[#06A561]">
              $49.90
            </span>
          </td>
          <td className="flex items-center gap-2 justify-start cursor-pointer transition-all duration-500 ease-in-out hover:text-primary">
            <span className="text-default capitalize  font-normal text-[14px] leading-5 bg-[#F99600] px-2 py-2 capitalize cursor-pointer transition-all duration-500 ease-in-out rounded-sm text-white">
              5.0 (32 Votes)
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
              className="text-default capitalize flex items-center gap-4  font-normal text-[14px] leading-5"
            >
              <img src={pro_1} alt="pro_1" className="w-12 h-12 rounded-sm" />
              <div className="flex items-start flex-col gap-1">
                <span className="text-[14px] font-medium mb-0 text-black">
                  Men Grey Hoodie
                </span>
                <span className="text-[14px] mb-0 text-default">Hoodies</span>
              </div>
            </label>
          </td>
          <td className="cursor-pointer flex justify-start transition-all duration-500 ease-in-out hover:text-primary">
            <span className="text-default capitalize  font-normal text-[14px] leading-5">
              96 in stock
            </span>
          </td>
          <td className="flex items-center gap-2 justify-start cursor-pointer transition-all duration-500 ease-in-out hover:text-primary">
            <span className="text-default capitalize  font-normal text-[14px] leading-5">
              Black
            </span>
          </td>
          <td className="flex items-center gap-2 justify-start cursor-pointer transition-all duration-500 ease-in-out hover:text-primary">
            <span className="text-default capitalize  font-normal text-[14px] leading-5 bg-[#C4F8E2] px-2 py-2 capitalize cursor-pointer transition-all duration-500 ease-in-out rounded-sm text-[#06A561]">
              $49.90
            </span>
          </td>
          <td className="flex items-center gap-2 justify-start cursor-pointer transition-all duration-500 ease-in-out hover:text-primary">
            <span className="text-default capitalize  font-normal text-[14px] leading-5 bg-[#F99600] px-2 py-2 capitalize cursor-pointer transition-all duration-500 ease-in-out rounded-sm text-white">
              5.0 (32 Votes)
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
              className="text-default capitalize flex items-center gap-4  font-normal text-[14px] leading-5"
            >
              <img src={pro_1} alt="pro_1" className="w-12 h-12 rounded-sm" />
              <div className="flex items-start flex-col gap-1">
                <span className="text-[14px] font-medium mb-0 text-black">
                  Men Grey Hoodie
                </span>
                <span className="text-[14px] mb-0 text-default">Hoodies</span>
              </div>
            </label>
          </td>
          <td className="cursor-pointer flex justify-start transition-all duration-500 ease-in-out hover:text-primary">
            <span className="text-default capitalize  font-normal text-[14px] leading-5">
              96 in stock
            </span>
          </td>
          <td className="flex items-center gap-2 justify-start cursor-pointer transition-all duration-500 ease-in-out hover:text-primary">
            <span className="text-default capitalize  font-normal text-[14px] leading-5">
              Black
            </span>
          </td>
          <td className="flex items-center gap-2 justify-start cursor-pointer transition-all duration-500 ease-in-out hover:text-primary">
            <span className="text-default capitalize  font-normal text-[14px] leading-5 bg-[#C4F8E2] px-2 py-2 capitalize cursor-pointer transition-all duration-500 ease-in-out rounded-sm text-[#06A561]">
              $49.90
            </span>
          </td>
          <td className="flex items-center gap-2 justify-start cursor-pointer transition-all duration-500 ease-in-out hover:text-primary">
            <span className="text-default capitalize  font-normal text-[14px] leading-5 bg-[#F99600] px-2 py-2 capitalize cursor-pointer transition-all duration-500 ease-in-out rounded-sm text-white">
              5.0 (32 Votes)
            </span>
          </td>
        </tr>
      </tbody> */}
      <div class="w-full">
        <div class="grid md:grid-cols-12 grid-cols-1 gap-4 border-b py-3 font-semibold text-gray-600">
          {/* <div class="pl-4">Checkbox</div> */}
          <div className="col-span-1 lg:col-span-4">
            <input
              type="checkbox"
              name="checkbox-label"
              id="checkbox-label"
              className="w-3 h-3 mr-4 rounded cursor-pointer transition-all duration-300 ease-in-out accent-blue-2 text-white font-medium focus:ring-1 focus:ring-offset-1 focus:ring-purple-500 outline-none"
            />
            <label htmlFor="checkbox-label">Product</label>
          </div>
          <div className="md:col-span-2 col-span-1">Inventory</div>
          <div className="md:col-span-2 col-span-1">Color</div>
          <div className="md:col-span-2 col-span-1">Price</div>
          <div className="md:col-span-2 col-span-1">Rating</div>
        </div>

        <div class="grid md:grid-cols-12 col-span-1 gap-4 border-b py-4 items-center">
          <div class="flex items-center gap-2 md:col-span-4 col-span-1">
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
          </div>

          <div className="md:col-span-2 col-span-1">96 In Stock</div>
          <div className="md:col-span-2 col-span-1">Black</div>
          <div class="bg-green-100 col-span-1 md:col-span-2 text-green-700 px-2 py-1 rounded w-fit">
            $49.90
          </div>
          <div class="bg-orange-500 col-span-1 md:col-span-2 text-white px-3 py-1 rounded w-fit text-sm">
            5.0 (32 Votes)
          </div>
        </div>
        <div class="grid md:grid-cols-12 col-span-1 gap-4 border-b py-4 items-center">
          <div class="flex items-center gap-2 md:col-span-4 col-span-1">
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
          </div>

          <div className="md:col-span-2 col-span-1">96 In Stock</div>
          <div className="md:col-span-2 col-span-1">Black</div>
          <div class="bg-green-100 col-span-1 md:col-span-2 text-green-700 px-2 py-1 rounded w-fit">
            $49.90
          </div>
          <div class="bg-orange-500 col-span-1 md:col-span-2 text-white px-3 py-1 rounded w-fit text-sm">
            5.0 (32 Votes)
          </div>
        </div>
      </div>
      {/* pagination area */}
      <Pagination />
    </div>
  );
}
