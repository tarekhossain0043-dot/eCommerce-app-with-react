import { Plus, Trash2 } from "lucide-react";
import React, { useState } from "react";

import Pagination from "./Pagination";
import { useDispatch, useSelector } from "react-redux";
import AddProductModal from "./modal/AddProductModal";

import {
  deleteProduct,
  selectAllProducts,
} from "../features/product-slice/productSlice";
import { PiRocket } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Product_not_found from "./product-not-found-comopo/Product_not_found";

// import pro_1 from "../assets/products/Image-1.png";
// import { useSelector } from "react-redux";

export default function Products() {
  const [isModal, setIsModal] = useState(false);

  // const newPro = useSelector((state) => state.addProducts.products);
  // const handleModalShow = () => {
  //   setIsModal((prev) => !prev);
  // };

  const orderNumbers = useSelector(selectAllProducts);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleDelProduct = (id) => {
    dispatch(deleteProduct(id));
    toast("product deleted successfully!");
  };

  // get product from api

  return (
    <div className="mt-4">
      <div className="flex items-center justify-between mb-6">
        <h4 className="mb-0">Product</h4>
        <div className="flex items-center gap-3">
          <button className="text-blue-clr px-5 py-2.5 leading-6 capitalize border border-slate-100 text-center rounded-sm cursor-pointer transition-all duration-300 ease-in-out hover:bg-blue-clr px-3 hover:text-white">
            Export
          </button>
          <button
            onClick={() => setIsModal((prev) => !prev)}
            // disabled={isLoading}
            className="text-white px-5 flex items-center gap-2 truncate py-2.5 text-[16px] leading-6 font-normal rounded-sm bg-blue-2 border border-transparent hover:border-slate-100 capitalize cursor-pointer transition-all duration-300 ease-in-out hover:bg-white hover:text-blue-2 text-[16px] font-normal leading-6"
          >
            {/* {!isLoading ? "save" : "saving ...."} */}
            <Plus className="w-6 h-6" />
            add product
          </button>
        </div>
      </div>

      <div className="w-full">
        <div className="grid md:grid-cols-12 grid-cols-1 gap-4 border-b py-3 font-semibold text-gray-600">
          {/* <div class="pl-4">Checkbox</div> */}
          <div className="col-span-1 lg:col-span-3">
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
          <div className="col-span-1 flex items-center gap-2">
            <Trash2 className="w-4 h-4" />
            delete
          </div>
        </div>
        {orderNumbers.length !== 0 ? (
          orderNumbers.map((proData, index) => (
            <div
              onClick={() => navigate(`/products/${proData.id}`)}
              key={index}
              className="grid md:grid-cols-12 col-span-1 gap-4 border-b py-4 items-center"
            >
              <div className="flex items-center gap-2 md:col-span-3 col-span-1">
                <div>
                  <input
                    type="checkbox"
                    className="w-3 h-3 rounded cursor-pointer transition-all duration-300 ease-in-out accent-blue-2 text-white font-medium focus:ring-1 focus:ring-offset-1 focus:ring-purple-500 outline-none"
                  />
                </div>
                <img
                  src={proData.image}
                  alt="product image.."
                  className="w-10 h-10 rounded-full border border-slate-300"
                />
                <div>
                  {proData.productName ? (
                    <p>{proData.productName}</p>
                  ) : (
                    <p>{proData.name}</p>
                  )}

                  {proData.product_desc ? (
                    <p>{proData.product_desc}</p>
                  ) : (
                    <p>{proData.desc}</p>
                  )}
                </div>
              </div>
              {proData.inventory ? (
                <div className="md:col-span-2 col-span-1">
                  {proData.inventory} In Stock
                </div>
              ) : (
                <div className="md:col-span-2 col-span-1">
                  {proData.invent} In Stock
                </div>
              )}

              {proData.color ? (
                <div className="md:col-span-2 col-span-1">{proData.color}</div>
              ) : (
                <div className="md:col-span-2 col-span-1">{proData.clr}</div>
              )}

              <div className="bg-green-100 col-span-1 md:col-span-2 text-green-700 px-2 py-1 rounded w-fit">
                $ {proData.price}
              </div>
              <div className="bg-orange-500 col-span-1 md:col-span-2 text-white px-3 py-1 rounded w-fit text-sm">
                5.0 ({proData.rating} Votes)
              </div>

              <button
                onClick={() => handleDelProduct(proData.id)}
                className="bg-orange-500 text-white col-span-1 px-2 py-1 rounded w-fit text-sm flex items-center gap-2 cursor-pointer transition-all duration-300 ease-in-out hover:bg-primary"
              >
                <Trash2 className="w-4 h-4" />
                delete
              </button>
            </div>
          ))
        ) : (
          <Product_not_found />
        )}
      </div>
      {/* add product modal */}
      <AddProductModal isModal={isModal} setIsModal={setIsModal} />
      {/* pagination area */}
      <Pagination orderNumbers={orderNumbers} />
    </div>
  );
}
