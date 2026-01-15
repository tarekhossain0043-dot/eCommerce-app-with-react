import React from "react";
import orderNotFountImg from "../../assets/not-found-product/order-not-found-img.svg";
import { useNavigate } from "react-router-dom";
import { Plus } from "lucide-react";
export default function Order_not_found() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="bg-white flex items-center justify-center py-4 text-center font-normal capitalize">
        <div className="flex max-w-100 m-auto flex-col gap-6 text-center m-auto">
          <img
            src={orderNotFountImg}
            alt="product-not-found-img"
            className="w-35 h-35 max-w-100 mx-auto"
          />
          <span className="block text-black capitalize font-bold">
            No Orders Yet
          </span>
          <span className="text-[14px] leading-6 text-default font-normal block">
            All the upcoming orders from your store will be visible in this
            page. You can add orders by yourself if you sell offline.
          </span>
          <button
            onClick={() => navigate("/order-modal")}
            // disabled={isLoading}
            className="text-white px-5 flex items-center gap-2 max-w-50 mx-auto truncate py-2.5 text-[16px] leading-6 font-normal rounded-sm bg-blue-2 border border-transparent hover:border-slate-100 capitalize cursor-pointer transition-all duration-300 ease-in-out hover:bg-white hover:text-blue-2 text-[16px] font-normal leading-6"
          >
            {/* {!isLoading ? "save" : "saving ...."} */}
            <Plus className="w-6 h-6" />
            add order
          </button>
          <button className="capitalize transition-all duration-300 ease-in-out text-blue-clr cursor-pointer hover:text-primary">
            read more
          </button>
        </div>
      </div>
    </div>
  );
}
