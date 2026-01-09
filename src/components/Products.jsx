import { Plus } from "lucide-react";
import React, { useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import Pagination from "./Pagination";
import pro_1 from "../assets/products/Image-1.png";
import { useGetProductQuery } from "../features/api/apiSlice";

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

  // get product from api
  const { data: products, isLoading, isError } = useGetProductQuery();

  if (isLoading) return <p>Loading Products...</p>;
  if (isError) return <p>Error loading data!</p>;
  return (
    <div className="mt-4">
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
        {products.map((product, index) => (
          <div
            key={index}
            class="grid md:grid-cols-12 col-span-1 gap-4 border-b py-4 items-center"
          >
            <div class="flex items-center gap-2 md:col-span-4 col-span-1">
              <div>
                <input
                  type="checkbox"
                  className="w-3 h-3 rounded cursor-pointer transition-all duration-300 ease-in-out accent-blue-2 text-white font-medium focus:ring-1 focus:ring-offset-1 focus:ring-purple-500 outline-none"
                />
              </div>
              <img src={pro_1} class="w-10 h-10 rounded" />
              <div>
                <p class="font-bold">{product.name}</p>
                <p class="text-sm text-gray-400">{product.category}</p>
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
        ))}
      </div>
      {/* pagination area */}
      <Pagination />
    </div>
  );
}
