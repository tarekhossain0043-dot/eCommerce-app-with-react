import { ChevronDown, Edit, Plus, Search, Trash2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import FilterPro from "../components/FilterPro";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteRecord,
  setSearchTerm,
  selectSearchTerms,
  selectFilterRecords,
} from "../features/add-product-slice/addProductSlice";
import Pagination from "./Pagination";

export default function Order() {
  const [selectedOrderId, setSelectedOrderId] = useState("");
  const { setHeaderTitle, setHeaderBtns } = useOutletContext();
  const navigate = useNavigate();
  useEffect(() => {
    setHeaderTitle("Orders");
    setHeaderBtns(
      <div className="flex items-center gap-3">
        <button className="text-blue-clr px-5 py-2.5 leading-6 capitalize border border-slate-100 text-center rounded-sm cursor-pointer transition-all duration-300 ease-in-out hover:bg-blue-clr px-3 hover:text-white">
          Export
        </button>
        <button
          onClick={() => navigate("/order-modal")}
          className="text-white py-2.5 text-[16px] leading-6 font-normal px-5 flex items-center gap-2 rounded-sm bg-blue-2 border border-transparent hover:border-slate-100 capitalize cursor-pointer transition-all duration-300 ease-in-out hover:bg-white hover:text-blue-2 text-[16px] font-normal leading-6"
        >
          <Plus className="w-4 h-4 text-white" />
          Add Order
        </button>
      </div>
    );
    return () => {
      setHeaderTitle("");
      setHeaderBtns(null);
    };
  }, [setHeaderTitle, setHeaderBtns, navigate]);
  const [filter_category, setFilter_category] = useState("All");
  console.log(filter_category);
  // const [isOpenFilter, setIsOpenFilter] = useState(false);
  // const handleFilter = (filterItem) => {
  //   setFilter_category(filterItem);
  // };

  // order conditional rendering

  const dispatch = useDispatch();
  const filterRecords = useSelector(selectFilterRecords);
  // const allRecords = useSelector(selectAllRecords);
  const searchTerms = useSelector(selectSearchTerms);

  const storeRecords = [...filterRecords].sort((a, b) => b.id - a.id);
  // console.log(selectedId);

  // delete
  const handleDelete = (id) => {
    dispatch(deleteRecord(id));
    // setSelectedOrderId([]);
    //   const handleBulkDelete = () => {
    // dispatch(deleteRecords(selectedIds));
    // setSelectedIds([]); // reset selection
  };

  //  const handleSelectA llProduct = () => {
  //     storeRecords.length === selectedOrderId.length
  //       ? setSelectedOrderId([])
  //       : setSelectedOrderId(storeRecords.map((selectedpro) => selectedpro.id));
  //   };
  const filteredProducts =
    filter_category === "All"
      ? storeRecords
      : storeRecords.filter(
          (product) =>
            product.paymentStatus || product.orderStatus === filter_category
        );
  return (
    <div className="p-6 bg-white shadow-sm rounded-sm border border-slate-50 mt-4">
      {/* head of order */}
      <div className="flex items-center justify-between">
        {/* filter area */}
        <select
          name="category"
          id="category"
          value={filter_category}
          onChange={(e) => setFilter_category(e.target.value)}
          className="w-fit px-4 py-2 ring-slate-100 text-slate-400 cursor-pointer transition-all duration-500 ease-in-out outline-none focus:ring-1 focus:ring-slate-100"
        >
          <option value="all">All</option>
          <option value="paid">Paid</option>
          <option value="unpaid">Unpaid</option>
          <option value="teady">teady</option>
          <option value="seady">seady</option>
          <option value="ready">Ready</option>
          <option value="navi">navi</option>
          <option value="unready">Unready</option>
        </select>
        <div className="flex-1 w-full px-10 hidden md:block">
          <form className="relative">
            <input
              type="text"
              name="search"
              value={searchTerms}
              onChange={(e) => dispatch(setSearchTerm(e.target.value))}
              placeholder="search anything.."
              id="search"
              className="px-4 text-sm pl-12 w-full py-3 bg-transparent text-default cursor-pointer outline-none ring-1 ring-blue-clr focus:ring-primary rounded-sm transition-all duration-300 ease-in-out"
            />
            <Search className="w-4 h-4 absolute top-1/2 left-5 text-slate-400 transform -translate-y-1/2 cursor-pointer" />
          </form>
        </div>
        {/* {storeRecords.map((record) => ( */}
        <div className="flex items-center gap-3">
          <button
            // onClick={() => openEditModal()}
            // disabled={}
            className="w-10 h-10 rounded-sm bg- border-slate-200 border hover:bg-blue-clr hover:text-white cursor-pointer flex items-center justify-center text-blue-clr font-bold"
          >
            <Edit className="w-6 h-6" />
          </button>
          <button
            // disabled={isCheckboxIsChecked}
            onClick={() => handleDelete(selectedOrderId)}
            className={`w-10 h-10
                
              rounded-sm border-slate-200 border hover:bg-blue-clr hover:text-white cursor-pointer transition-all duration-300 ease-in-out flex items-center justify-center text-blue-clr font-bold`}
          >
            <Trash2 className="w-6 h-6" />
          </button>
        </div>
        {/* ))} */}
      </div>

      <table className="mt-4 w-full max-[600px]:overflow-x-scroll max-[600px]:w-100">
        <thead>
          <tr className="flex items-center justify-between border-b-2 border-slate-100 py-3">
            <th className="flex items-center gap-2 justify-start cursor-pointer transition-all duration-500 ease-in-out hover:text-primary">
              <input
                type="checkbox"
                // onChange={handleSelectAllProduct}
                // checked={
                //   storeRecords.length > 0 &&
                //   storeRecords.length === selectedOrderId.length
                // }
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
          </tr>
        </thead>
        {filteredProducts.length === 0 ? (
          <p className="text-center py-4 bg-slate-50">
            there haven't any orders yeat
          </p>
        ) : (
          <tbody className="w-full flex flex-col items-center justify-between w-full">
            {filteredProducts.map((record) => (
              <tr
                key={record.id}
                className="py-3.5 border-b border-slate-100 flex items-center justify-between text-center w-full"
              >
                <td className="flex items-center gap-2 justify-start cursor-pointer transition-all duration-500 ease-in-out hover:text-primary">
                  <input
                    type="checkbox"
                    // onChange={() =>
                    //   setSelectedOrderId((prev) =>
                    //     prev.includes(selectedOrderId)
                    //       ? prev.filter((id) => id !== selectedOrderId)
                    //       : [...prev, selectedOrderId]
                    //   )
                    // }
                    // checked={handleSelectAllProduct}
                    value={selectedOrderId}
                    onChange={() => setSelectedOrderId(record.id)}
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
            ))}
          </tbody>
        )}

        {/* pagination area */}
        <Pagination orderNumbers={storeRecords} />
      </table>
    </div>
  );
}
