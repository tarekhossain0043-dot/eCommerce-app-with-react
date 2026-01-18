import { ChevronDown, Edit, Plus, Search, Trash2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import FilterPro from "../components/FilterPro";
import { useDispatch, useSelector } from "react-redux";
import {
  // deleteRecord,
  setSearchTerm,
  toggleSelect,
  selectFilterRecords,
  editingProduct,
  getTotalPage,
} from "../features/add-product-slice/addProductSlice";
import Pagination from "./Pagination";
// import { toast } from "react-toastify";
import Order_not_found from "./product-not-found-comopo/Order_not_found";
import { openModal } from "../features/CustomModal/modalSlice";
import { setCurrentPage } from "../features/add-product-slice/addProductSlice";

export default function Order() {
  // const [selectedOrderId, setSelectedOrderId] = useState([]);
  // const handleSelect = (id) => {
  //   if (selectedOrderId.includes(id)) {
  //     setSelectedOrderId(selectedOrderId.filter((itemId) => itemId !== id));
  //   } else {
  //     setSelectedOrderId(...selectedOrderId, id);
  //   }
  // };
  // const { selectedIds } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const selectedIds = useSelector((state) => state.records.selectedIds || []);

  // edit btn disable when user select multiple item
  const isEditEnabled = selectedIds.length === 1;

  const isExportPermission = selectedIds.length === 1;

  // const confirmMessage = `Are you sure you want to delete these ${selectedIds.length} item(s)?`;

  //   if (window.confirm(confirmMessage)) {
  //     // Filter kore selected items gulo bad deya
  //     const remainingProducts = products.filter(
  //       (product) => !selectedIds.includes(product.id)
  //     );
  //     setProducts(remainingProducts);
  //     setSelectedIds([]); // Selection clear kora
  //     alert("Items deleted successfully!");
  //   }

  // const handleDelete = () => {
  //   if (selectedOrderId.length === 0) {
  //     alert("Please select at least one item!");
  //     return;
  //   } else {
  //     dispatch(deleteRecord(selectedOrderId));
  //     toast("order item deleted successfully!");
  //   }
  // };
  // console.log(selectedOrderId);

  const { setHeaderTitle, setHeaderBtns } = useOutletContext();
  const navigate = useNavigate();
  useEffect(() => {
    setHeaderTitle("Orders");
    setHeaderBtns(
      <div className="flex items-center gap-3">
        <button
          disabled={!isExportPermission}
          onClick={() => dispatch(openModal({ type: "Export_Success" }))}
          className="text-blue-clr px-5 py-2.5 leading-6 disabled:cursor-not-allowed capitalize border border-slate-100 text-center rounded-sm cursor-pointer transition-all duration-300 ease-in-out hover:bg-blue-clr px-3 hover:text-white"
        >
          Export
        </button>
        <button
          onClick={() => navigate("/order-modal")}
          className="text-white py-2.5 text-[16px] truncate leading-6 font-normal px-5 flex items-center gap-2 rounded-sm bg-blue-2 border border-transparent hover:border-slate-100 capitalize cursor-pointer transition-all duration-300 ease-in-out hover:bg-white hover:text-blue-2 text-[16px] font-normal leading-6"
        >
          <Plus className="w-4 h-4 text-white" />
          Add Order
        </button>
      </div>,
    );
    return () => {
      setHeaderTitle("");
      setHeaderBtns(null);
    };
  }, [setHeaderTitle, setHeaderBtns, navigate, dispatch, isExportPermission]);

  const [filter_category, setFilter_category] = useState("Filter");
  console.log(filter_category);
  // const [isOpenFilter, setIsOpenFilter] = useState(false);
  // const handleFilter = (filterItem) => {
  //   setFilter_category(filterItem);
  // };

  // order conditional rendering

  const filterRecords = useSelector(selectFilterRecords);

  const searchTerms = useSelector((state) => state.products.searchTerms);
  console.log(searchTerms);
  const [searchField, setSearchField] = useState("");

  const storeRecords = [...filterRecords].sort((a, b) => b.id - a.id);
  const filterProductData = storeRecords.filter((filterPro) => {
    if (filter_category === "Filter") return filterRecords;
    return (
      // filterPro.paymentStatus.toLowerCase() === filter_category.toLowerCase(),
      // filterPro.orderStatus.toLowerCase() &&
      // filterPro.paymentStatus.toLowerCase() === filter_category.toLowerCase()
      filterPro.orderStatus.toLowerCase() === filter_category.toLowerCase() ||
      filterPro.paymentStatus.toLowerCase() === filter_category.toLowerCase()
    );
  });

  // pagination
  const { currentPage, itemsPerPage, items } = useSelector(
    (state) => state.records,
  );
  const paginationStart = (currentPage - 1) * itemsPerPage;
  const paginationNext = paginationStart + itemsPerPage;
  const paginationFilteredProduct = filterProductData.slice(
    paginationStart,
    paginationNext,
  );

  // isEditEnabled
  const editEnable = () => {
    const editProdcut = filterProductData.find(
      (clickedPro) => clickedPro.id === selectedIds[0],
    );
    dispatch(editingProduct(editProdcut));
    navigate("/order-modal");
  };
  // console.log(selectedId);
  const searchFieldData = (e) => {
    setSearchField(e.target.value);
    dispatch(setSearchTerm(searchField));
  };
  // delete
  // const handleDelete = (id) => {
  //   dispatch(deleteRecord(id));
  // };

  const getStatusColor = (status) => {
    switch (status) {
      case "Shipped":
        return "bg-[#5A607F]";
      case "Received":
        return "bg-[#1E5EFF]";
      default:
        return "bg-[#F99600]";
    }
  };

  return (
    <div className="p-6 bg-white shadow-sm rounded-sm border border-slate-50 mt-4">
      {/* head of order */}
      <div className="flex items-center gap-3 justify-between">
        <div className="flex items-center gap-3 max-w-[80%] w-full">
          {/* filter area */}
          <select
            name="category"
            id="category"
            value={filter_category}
            onChange={(e) => setFilter_category(e.target.value)}
            className="max-w-45 w-full px-2 rounded-sm py-3 ring-slate-100 ring-1 text-slate-400 cursor-pointer transition-all duration-500 ease-in-out outline-none focus:ring-blue-clr"
          >
            <option value="Filter">Filter</option>
            <option value="Paid">Paid</option>
            <option value="Pending">Pending</option>
            <option value="Ready">Ready</option>
            <option value="Shipped">Shipped</option>
            <option value="Received">Received</option>
          </select>
          <div className="max-w-87.5 flex-1 w-full hidden md:block">
            <form className="relative">
              <input
                type="text"
                name="search"
                // value={searchTerms}
                // onChange={(e) => dispatch(setSearchTerm(e.target.value))}
                onChange={(e) => searchFieldData(e)}
                placeholder="search anything.."
                id="search"
                className="px-4 text-sm pl-12 w-full py-3 bg-transparent text-default cursor-pointer outline-none ring-1 ring-slate-100 rounded-sm focus:blue-clrrounded-sm transition-all duration-300 ease-in-out"
              />
              <Search className="w-4 h-4 absolute top-1/2 left-5 text-slate-400 transform -translate-y-1/2 cursor-pointer" />
            </form>
          </div>
        </div>
        {/* {storeRecords.map((record) => ( */}
        <div className="flex items-center gap-3">
          <button
            disabled={!isEditEnabled} // only 1 item selectable
            // onClick={() => {
            //   const itemId = selectedIds[0];
            //   dispatch(
            //     openModal({
            //       type: "Edit_Item",
            //       props: { id: itemId },
            //     }),
            //   );
            // }}
            onClick={editEnable}
            className={`w-10 h-10 rounded-sm 
             
            border-slate-200 border disabled:bg-slate-300 disabled:cursor-not-allowed hover:bg-blue-clr hover:text-white cursor-pointer flex items-center justify-center text-blue-clr font-bold`}
          >
            <Edit className="w-6 h-6" />
          </button>
          <button
            disabled={!selectedIds?.length}
            onClick={() =>
              dispatch(
                openModal({
                  type: "Delete_Confirm",
                  props: { count: selectedIds.length },
                }),
              )
            }
            className={`w-10 h-10
                
              rounded-sm border-slate-200 border hover:bg-blue-clr hover:text-white disabled:bg-slate-300 disabled:cursor-not-allowed cursor-pointer transition-all duration-300 ease-in-out flex items-center justify-center text-blue-clr font-bold`}
          >
            <Trash2 className="w-6 h-6" />
          </button>
        </div>
        {/* ))} */}
      </div>
      {/* filtered product */}
      {filterProductData.length === 0 ? (
        <Order_not_found />
      ) : (
        <div className="w-full mt-3">
          {/* order head */}
          <div className="grid md:grid-cols-12 grid-cols-1 gap-4 border-b py-3 font-semibold text-gray-600">
            <div className="col-span-1 md:col-span-2">
              <input
                type="checkbox"
                name="checkbox-label"
                id="checkbox-label"
                className="w-3 h-3 mr-4 rounded cursor-pointer transition-all duration-300 ease-in-out accent-blue-2 text-white font-medium focus:ring-1 focus:ring-offset-1 focus:ring-purple-500 outline-none"
              />
              <label htmlFor="checkbox-label">Order</label>
            </div>
            <div className="md:col-span-2 col-span-1">Date</div>
            <div className="md:col-span-2 col-span-1">Customer</div>
            <div className="md:col-span-2 col-span-1">Payment status</div>
            <div className="md:col-span-2 col-span-1">Order Status</div>
            <div className="md:col-span-2 col-span-1">Total</div>
          </div>
          {/* order body */}
          {paginationFilteredProduct.map((record) => {
            return (
              <div
                key={record.id}
                className="grid md:grid-cols-12 cursor-pointer transition-all duration-500 ease-in-out col-span-1 gap-4 last-of-type:border-none py-4 items-center"
              >
                <div className="flex items-center gap-2 md:col-span-2 col-span-1">
                  <div className="flex items-center gap-2 justify-start cursor-pointer transition-all duration-500 ease-in-out hover:text-primary">
                    <input
                      type="checkbox"
                      checked={selectedIds.includes(record.id)}
                      onChange={() => dispatch(toggleSelect(record.id))}
                      className="w-3 h-3 rounded cursor-pointer transition-all duration-300 ease-in-out accent-blue-2 text-white font-medium focus:ring-1 focus:ring-offset-1 focus:ring-purple-500 outline-none"
                    />
                    <span className="font-semibold text-default mb-0 transition-all duration-300 ease-in-out hover:text-primary">
                      {record.id}
                    </span>
                  </div>
                </div>

                <div className="md:col-span-2 col-span-1">
                  <span className="text-default font-semibold capitalize  font-normal text-[14px] leading-5">
                    {record.dates}
                  </span>
                </div>
                <div className="md:col-span-2 col-span-1">
                  <span className="text-default font-semibold capitalize  font-normal text-[14px] leading-5">
                    {record.customer}
                  </span>
                </div>

                <div
                  className={`${
                    record.paymentStatus === "Pending"
                      ? "bg-[#E6E9F4] text-[#5A607F]"
                      : "bg-green-100 text-green-700"
                  } >  font-semibold col-span-1 md:col-span-2  px-2 py-1 rounded w-fit`}
                >
                  {record?.paymentStatus}
                </div>
                <div
                  className={`${getStatusColor(
                    record?.orderStatus,
                  )} col-span-1 md:col-span-2 text-white px-2 py-1 font-semibold rounded w-fit`}
                >
                  {record?.orderStatus}
                </div>
                <div>
                  <span className="text-default font-bold capitalize  font-semibold text-[14px] leading-5">
                    {record.price}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
      {getTotalPage > 1 && (
        <Pagination
          pagination_num={items}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
}
