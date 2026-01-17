import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../features/add-product-slice/addProductSlice";

export default function Pagination({ orderNumbers }) {
  const dispatch = useDispatch();
  const { currentPage, itemsPerPage } = useSelector((state) => state.records);
  const totalPage = Math.ceil(itemsPerPage.length / 5);
  return (
    <div className="flex items-center justify-between gap-5 text-default">
      <div className="flex items-center gap-1 mt-6">
        <button
          disabled={currentPage === 1}
          onClick={() => dispatch(setCurrentPage(currentPage - 1))}
          className=" hover:bg-[#ECF2FF] disabled:cursor-not-allowed disabled:bg-gray-100 hover:text-blue-clr transition-all w-9 h-9 flex items-center justify-center rounded-sm cursor-pointer duration-300 ease-in-out hover:text-black"
        >
          <ArrowRight className="w-4 h-4" />
        </button>
        {Array.from({ length: totalPage }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            className={` ${currentPage === page ? "bg-[#ECF2FF] text-blue-clr" : "hover:bg-[#ECF2FF] hover:text-blue-clr"} transition-all w-9 h-9 flex items-center justify-center rounded-sm cursor-pointer duration-300 ease-in-out hover:text-black`}
          >
            {page}
          </button>
        ))}

        <button
          disabled={currentPage === totalPage}
          onClick={() => dispatch(setCurrentPage(currentPage + 1))}
          className=" hover:bg-[#ECF2FF] hover:text-blue-clr disabled:cursor-not-allowed disabled:bg-gray-100 transition-all w-9 h-9 flex items-center justify-center rounded-sm cursor-pointer duration-300 ease-in-out hover:text-black"
        >
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
      <span className="mb-0 block">{orderNumbers.length} Results</span>
    </div>
  );
}
