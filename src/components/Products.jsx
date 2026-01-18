import { Edit, Plus, Search, Trash2 } from "lucide-react";
import React, { useEffect, useState } from "react";

import Pagination from "./Pagination";
import { useDispatch, useSelector } from "react-redux";
import AddProductModal from "./modal/AddProductModal";

import {
  getTotalPage,
  selectFilterProducts,
  setCurrentPage,
  setSearchTerm,
  toggleSelect, // deleteProduct,
  // selectAllProducts,
  // setSearchTerm,
  // toggleSelect,
} from "../features/product-slice/productSlice";
import { PiRocket } from "react-icons/pi";
import { useNavigate, useOutletContext } from "react-router-dom";
// import { toast } from "react-toastify";
import Product_not_found from "./product-not-found-comopo/Product_not_found";
import { openModal } from "../features/CustomModal/modalSlice";
// import { selectFilterRecords } from "../features/add-product-slice/addProductSlice";
// import Order_not_found from "./product-not-found-comopo/Order_not_found";

// import pro_1 from "../assets/products/Image-1.png";
// import { useSelector } from "react-redux";

export default function Products() {
  const selectedIds = useSelector((state) => state.products.selectedIds || []);
  // const { items } = useSelector((state) => state.products);
  // pagination
  const { currentPage, itemsPerPage, items } = useSelector(
    (state) => state.products,
  );

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
    setHeaderTitle("Products");
    setHeaderBtns(
      <div className="flex items-center gap-3">
        <button className="text-blue-clr px-5 py-2.5 leading-6 capitalize border border-slate-100 text-center rounded-sm cursor-pointer transition-all duration-300 ease-in-out hover:bg-blue-clr px-3 hover:text-white">
          Export
        </button>
        <button
          onClick={() => navigate("/add-poroduct")}
          className="text-white py-2.5 text-[16px] truncate leading-6 font-normal px-5 flex items-center gap-2 rounded-sm bg-blue-2 border border-transparent hover:border-slate-100 capitalize cursor-pointer transition-all duration-300 ease-in-out hover:bg-white hover:text-blue-2 text-[16px] font-normal leading-6"
        >
          <Plus className="w-4 h-4 text-white" />
          Add products
        </button>
      </div>,
    );
    return () => {
      setHeaderTitle("");
      setHeaderBtns(null);
    };
  }, [setHeaderTitle, setHeaderBtns, navigate]);

  const [filter_category, setFilter_category] = useState("Filter");
  console.log(filter_category);
  // const [isOpenFilter, setIsOpenFilter] = useState(false);
  // const handleFilter = (filterItem) => {
  //   setFilter_category(filterItem);
  // };

  // order conditional rendering

  const dispatch = useDispatch();
  const filterProducts = useSelector(selectFilterProducts);
  const storeProductRecord = [...filterProducts].sort((a, b) => b.id - a.id);
  const filterProductData = storeProductRecord.filter((filterPro) => {
    if (filter_category === "Filter") return filterProducts;
    return (
      // filterPro.paymentStatus.toLowerCase() === filter_category.toLowerCase(),
      // filterPro.orderStatus.toLowerCase() &&
      // filterPro.paymentStatus.toLowerCase() === filter_category.toLowerCase()
      filterPro.invent.toLowerCase() === filter_category.toLowerCase() ||
      filterPro.clr.toLowerCase() === filter_category.toLowerCase()
    );
  });
  const searchTerms = useSelector((state) => state.products.searchTerms);

  // console.log(selectedId);

  // delete
  // const handleDelete = (id) => {
  //   dispatch(deleteRecord(id));
  // };

  // const getStatusColor = (status) => {
  //   switch (status) {
  //     case "Shipped":
  //       return "bg-[#5A607F]";
  //     case "Received":
  //       return "bg-[#1E5EFF]";
  //     default:
  //       return "bg-[#F99600]";
  //   }
  // };

  // -----------x---------------------------
  // const [isModal, setIsModal] = useState(false);

  // // const newPro = useSelector((state) => state.addProducts.products);
  // // const handleModalShow = () => {
  // //   setIsModal((prev) => !prev);
  // // };

  // const orderNumbers = useSelector(selectAllProducts);
  // const navigate = useNavigate();

  // const dispatch = useDispatch();

  // const handleDelProduct = (id) => {
  //   dispatch(deleteProduct(id));
  //   toast("product deleted successfully!");
  // };

  // get product from api

  return (
    // <div className="mt-4">
    //   <div className="flex items-center justify-between mb-6">
    //     <h4 className="mb-0">Product</h4>
    //     <div className="flex items-center gap-3">
    //       <button className="text-blue-clr px-5 py-2.5 leading-6 capitalize border border-slate-100 text-center rounded-sm cursor-pointer transition-all duration-300 ease-in-out hover:bg-blue-clr px-3 hover:text-white">
    //         Export
    //       </button>
    //       <button
    //         onClick={() => setIsModal((prev) => !prev)}
    //         // disabled={isLoading}
    //         className="text-white px-5 flex items-center gap-2 truncate py-2.5 text-[16px] leading-6 font-normal rounded-sm bg-blue-2 border border-transparent hover:border-slate-100 capitalize cursor-pointer transition-all duration-300 ease-in-out hover:bg-white hover:text-blue-2 text-[16px] font-normal leading-6"
    //       >
    //         {/* {!isLoading ? "save" : "saving ...."} */}
    //         <Plus className="w-6 h-6" />
    //         add product
    //       </button>
    //     </div>
    //   </div>

    //   <div className="w-full">
    //     <div className="grid md:grid-cols-12 grid-cols-1 gap-4 border-b py-3 font-semibold text-gray-600">
    //       {/* <div class="pl-4">Checkbox</div> */}
    //       <div className="col-span-1 lg:col-span-3">
    //         <input
    //           type="checkbox"
    //           name="checkbox-label"
    //           id="checkbox-label"
    //           className="w-3 h-3 mr-4 rounded cursor-pointer transition-all duration-300 ease-in-out accent-blue-2 text-white font-medium focus:ring-1 focus:ring-offset-1 focus:ring-purple-500 outline-none"
    //         />
    //         <label htmlFor="checkbox-label">Product</label>
    //       </div>
    //       <div className="md:col-span-2 col-span-1">Inventory</div>
    //       <div className="md:col-span-2 col-span-1">Color</div>
    //       <div className="md:col-span-2 col-span-1">Price</div>
    //       <div className="md:col-span-2 col-span-1">Rating</div>
    //       <div className="col-span-1 flex items-center gap-2">
    //         <Trash2 className="w-4 h-4" />
    //         delete
    //       </div>
    //     </div>
    //     {orderNumbers.length !== 0 ? (
    //       orderNumbers.map((proData, index) => (
    //         <div
    //           // onClick={() => navigate(`/products/${proData.id}`)}
    //           key={index}
    //           className="grid md:grid-cols-12 col-span-1 gap-4 border-b py-4 items-center"
    //         >
    //           <div className="flex items-center gap-2 md:col-span-3 col-span-1">
    //             <div>
    //               <input
    //                 type="checkbox"
    //                 className="w-3 h-3 rounded cursor-pointer transition-all duration-300 ease-in-out accent-blue-2 text-white font-medium focus:ring-1 focus:ring-offset-1 focus:ring-purple-500 outline-none"
    //               />
    //             </div>
    //             <img
    //               src={proData.image}
    //               alt="product image.."
    //               className="w-10 h-10 rounded-full border border-slate-300"
    //             />
    //             <div>
    //               {proData.productName ? (
    //                 <p>{proData.productName}</p>
    //               ) : (
    //                 <p>{proData.name}</p>
    //               )}

    //               {proData.product_desc ? (
    //                 <p>{proData.product_desc}</p>
    //               ) : (
    //                 <p>{proData.desc}</p>
    //               )}
    //             </div>
    //           </div>
    //           {proData.inventory ? (
    //             <div className="md:col-span-2 col-span-1">
    //               {proData.inventory} In Stock
    //             </div>
    //           ) : (
    //             <div className="md:col-span-2 col-span-1">
    //               {proData.invent} In Stock
    //             </div>
    //           )}

    //           {proData.color ? (
    //             <div className="md:col-span-2 col-span-1">{proData.color}</div>
    //           ) : (
    //             <div className="md:col-span-2 col-span-1">{proData.clr}</div>
    //           )}

    //           <div className="bg-green-100 col-span-1 md:col-span-2 text-green-700 px-2 py-1 rounded w-fit">
    //             $ {proData.price}
    //           </div>
    //           <div className="bg-orange-500 col-span-1 md:col-span-2 text-white px-3 py-1 rounded w-fit text-sm">
    //             5.0 ({proData.rating} Votes)
    //           </div>

    //           <button
    //             onClick={() => handleDelProduct(proData.id)}
    //             className="bg-orange-500 text-white col-span-1 px-2 py-1 rounded w-fit text-sm flex items-center gap-2 cursor-pointer transition-all duration-300 ease-in-out hover:bg-primary"
    //           >
    //             <Trash2 className="w-4 h-4" />
    //             delete
    //           </button>
    //         </div>
    //       ))
    //     ) : (
    //       <Product_not_found />
    //     )}
    //   </div>
    //   {/* add product modal */}
    //   <AddProductModal isModal={isModal} setIsModal={setIsModal} />
    //   {/* pagination area */}
    //   <Pagination orderNumbers={orderNumbers} />
    // </div>

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
            className="max-w-45 w-full px-2 rounded-sm py-3 ring-slate-100 ring-1 cursor-pointer text-slate-400 cursor-pointer transition-all duration-500 ease-in-out outline-none focus:ring-blue-clr"
          >
            <option value="Filter">Filter</option>
            <option value="in stock">In Stock</option>
            <option value="Out Stock">Out Stock</option>
            <option value="Black">Black</option>
            <option value="White">White</option>
            <option value="Gray">Gray</option>
            <option value="Purple">Purple</option>
          </select>
          <div className="max-w-87.5 flex-1 w-full hidden md:block">
            <form className="relative">
              <input
                type="text"
                name="search"
                value={searchTerms}
                onChange={(e) => dispatch(setSearchTerm(e.target.value))}
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
            disabled={selectedIds.length !== 1} // only 1 item selectable
            onClick={() => {
              const itemId = selectedIds[0];
              dispatch(
                openModal({
                  type: "Edit_Item",
                  props: { id: itemId },
                }),
              );
            }}
            className={`w-10 h-10 rounded-sm ${
              selectedIds.length !== 1 ? "cursor-not-allowed" : "cursor-pointer"
            } border-slate-200 border hover:bg-blue-clr hover:text-white cursor-pointer flex items-center justify-center text-blue-clr font-bold`}
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
        <Product_not_found />
      ) : (
        <div className="w-full mt-3">
          {/* order head */}
          <div className="grid md:grid-cols-12 grid-cols-1 gap-4 border-b py-3 font-semibold text-gray-600">
            <div className="col-span-1 md:col-span-4">
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
          {/* order body */}
          {filterProductData.map((record, index) => {
            return (
              <div
                key={index}
                className="grid md:grid-cols-12 cursor-pointer transition-all duration-500 ease-in-out col-span-1 gap-4 last-of-type:border-none py-4 items-center"
              >
                <div className="flex items-center gap-2 md:col-span-4 col-span-1">
                  <div className="flex items-center gap-2 justify-start cursor-pointer transition-all duration-500 ease-in-out hover:text-primary">
                    <input
                      type="checkbox"
                      checked={selectedIds.includes(record.id)}
                      onChange={() => dispatch(toggleSelect(record.id))}
                      className="w-3 h-3 rounded cursor-pointer transition-all duration-300 ease-in-out accent-blue-2 text-white font-medium focus:ring-1 focus:ring-offset-1 focus:ring-purple-500 outline-none"
                    />
                    <div className="w-20 h-20 rounded-md object-cover">
                      <img src={record.image} alt="" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="font-semibold text-black mb-1 transition-all duration-300 ease-in-out ">
                        {record.name}
                      </span>
                      <span
                        className="text-default capitalize text-[14px] block
                    "
                      >
                        {record.desc}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2 col-span-1">
                  <span className="text-default font-semibold capitalize  font-normal text-[14px] leading-5">
                    {record.invent}
                  </span>
                </div>
                <div className="md:col-span-2 col-span-1">
                  <span className="text-default font-semibold capitalize  font-normal text-[14px] leading-5">
                    {record.clr}
                    {/* Black */}
                  </span>
                </div>

                {/* <div
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
              </div> */}
                <div className="md:col-span-2 col-span-1">
                  <span className="text-default font-bold capitalize  font-semibold text-[14px] leading-5">
                    {record.price}
                    {/* $49.90 */}
                  </span>
                </div>
                <div className="md:col-span-2 col-span-1">
                  <span className="text-default font-bold capitalize  font-semibold text-[14px] leading-5">
                    {/* {record.price} */}
                    5.0 ({record.rating} Votes)
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
      {/* <Pagination orderNumbers={storeRecords} /> */}
    </div>
  );
}
