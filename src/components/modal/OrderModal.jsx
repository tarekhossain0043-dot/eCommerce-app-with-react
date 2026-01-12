import { ArrowLeft, ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import { addRecord } from "../../features/add-product-slice/addProductSlice";
// import { addOrders } from "../../features/add-product-slice/addProductSlice";

export default function OrderModal() {
  const [isLoading, setIsLoading] = useState(false);

  const navigete = useNavigate();

  // order from data data
  const [formData, setFormData] = useState({
    date: "",
    customer: "",
    paymentStatus: "",
    orderStatus: "",
    price: "",
  });
  // console.log(typeof formData);
  // const handleInputChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };
  const dispatch = useDispatch();
  // // useEffect(() => {
  // //   dispatch(addOrders(formData));
  // // }, [dispatch, formData]);
  const handleSubmit = () => {
    dispatch(addRecord(formData));
    setIsLoading((prev) => !prev);
    navigete("/orders");
  };

  const navigate = useNavigate();

  return (
    <div>
      <div>
        <div>
          <Link
            to="/orders"
            className="text-default cursor-pointer capitalize cursor-pointer flex items-center gap-1 transition-all duration-300 ease-in-out hover:pr-1 hover:text-blue-clr"
          >
            <ArrowLeft className="w-4 h-4" /> back
          </Link>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[24px] font-bold leading-9 text-black">
            Add Orders
          </span>
          <div className="flex items-center gap-3">
            <button className="text-blue-clr px-5 py-2.5 leading-6 capitalize border border-slate-100 text-center rounded-sm cursor-pointer transition-all duration-300 ease-in-out hover:bg-blue-clr px-3 hover:text-white">
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="text-white px-5 py-2.5 text-[16px] leading-6 font-normal rounded-sm bg-blue-2 border border-transparent hover:border-slate-100 capitalize cursor-pointer transition-all duration-300 ease-in-out hover:bg-white hover:text-blue-2 text-[16px] font-normal leading-6"
            >
              {!isLoading ? "save" : "saving ...."}
            </button>
          </div>
        </div>
      </div>
      <div className="p-7 bg-white rounded-sm shadow-sm drop-shadow-sm mt-7.5">
        <span className="block text-[16px] leading-6 text-black font-bold capitalize">
          Order Information
        </span>
        <span className="mb-6 block text-[14px] leading-5 font-normal text-default">
          Most common order from the customer
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              name="date"
              placeholder="Date"
              value={formData.date.toWellFormed()}
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
              className="w-full rounded-sm border px-4 py-3 border-slate-100 transition-all duration-500 ease-in-out outline-none focus:ring-1 focus:ring-blue-clr text-default"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="customer_name">Customer Name</label>
            <input
              type="text"
              name="customer"
              value={formData.customer}
              onChange={(e) =>
                setFormData({ ...formData, customer: e.target.value })
              }
              placeholder="Customer Name"
              className="w-full rounded-sm border px-4 py-3 border-slate-100 transition-all duration-500 ease-in-out outline-none focus:ring-1 focus:ring-blue-clr text-default"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="Payment status">Payment status</label>
            {/* filter area */}
            <select
              name="orderData"
              id="orderData"
              value={formData.paymentStatus}
              onChange={(e) =>
                setFormData({ ...formData, paymentStatus: e.target.value })
              }
            >
              <option value="paid">paid</option>
              <option value="unpaid">unpaid</option>
            </select>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="Order Status">Order Status</label>
            {/* order area */}
            <select
              name="orderStatus"
              id="orderStatus"
              value={formData.orderStatus}
              onChange={(e) =>
                setFormData({ ...formData, orderStatus: e.target.value })
              }
            >
              <option value="ready">ready</option>
              <option value="unready">unready</option>
            </select>
          </div>
        </div>
        <hr className="w-full h-px bg-slate-100 my-7.5" />
        <span className="block text-[16px] leading-6 text-black font-bold capitalize">
          Customer Address
        </span>
        <span className="mb-6 block text-[14px] leading-5 font-normal text-default">
          Shipping address information
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="price">price</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              }
              placeholder="price"
              className="w-full rounded-sm border px-4 py-3 border-slate-100 transition-all duration-500 ease-in-out outline-none focus:ring-1 focus:ring-blue-clr text-default"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="Apartment">Apartment</label>
            <input
              type="text"
              placeholder="Apartment"
              className="w-full rounded-sm border px-4 py-3 border-slate-100 transition-all duration-500 ease-in-out outline-none focus:ring-1 focus:ring-blue-clr text-default"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="City">City</label>
            <input
              type="text"
              placeholder="City"
              className="w-full rounded-sm border px-4 py-3 border-slate-100 transition-all duration-500 ease-in-out outline-none focus:ring-1 focus:ring-blue-clr text-default"
            />
          </div>
          <div className="flex items-start gap-6">
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="Postal Code">Postal Code</label>
              <input
                type="number"
                placeholder="Postal Code"
                className="w-full rounded-sm border px-4 py-3 border-slate-100 transition-all duration-500 ease-in-out outline-none focus:ring-1 focus:ring-blue-clr text-default"
              />
            </div>
            <div className="flex w-full flex-col gap-2">
              <label htmlFor="country-select">Country</label>
              <select
                name="country-select"
                id="country-select"
                className="w-full rounded-sm border px-4 py-3 border-slate-100 transition-all duration-500 ease-in-out outline-none focus:ring-1 focus:ring-blue-clr text-default"
              >
                <option defaultValue="Choose">Bangladesh</option>
                <option value="in">India</option>
                <option value="ban">Pakisthan</option>
                <option value="ban">Nederland</option>
                <option value="ban">South Africa</option>
                <option value="ban">England</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="phone">Phone</label>
            <input
              type="number"
              minLength={11}
              maxLength={11}
              placeholder="Phone"
              className="w-full rounded-sm border px-4 py-3 border-slate-100 transition-all duration-500 ease-in-out outline-none focus:ring-1 focus:ring-blue-clr text-default"
            />
          </div>
        </div>
        <hr className="w-full h-px bg-slate-100 my-7.5" />
        <span className="text-[16px] block mb-1 leading-6 text-black font-bold capitalize">
          Customer Notes
        </span>
        <span className="text-[14px] block leading-5 font-normal text-default">
          Shipping address information
        </span>
        <div className="flex flex-col gap-2 w-full mt-6">
          <label htmlFor="customer-Notes" className="text-default">
            Notes
          </label>
          <textarea
            name="customer-Notes"
            id="customer-Notes"
            placeholder="Add notes about customer"
            className="w-full rounded-sm border px-4 py-3 border-slate-100 transition-all duration-500 ease-in-out h-20 outline-none focus:ring-1 focus:ring-blue-clr text-default"
          ></textarea>
        </div>
        <hr className="h-px w-full bg-default my-7" />
        <div className="flex items-center justify-end">
          <div className="flex items-center gap-3">
            <button className="text-blue-clr px-5 py-2.5 leading-6 capitalize border border-slate-100 text-center rounded-sm cursor-pointer transition-all duration-300 ease-in-out hover:bg-blue-clr px-3 hover:text-white">
              Cancel
            </button>
            <button
              onClick={() => navigate("/customers")}
              className="text-white px-5 py-2.5 text-[16px] leading-6 font-normal rounded-sm bg-blue-2 border border-transparent hover:border-slate-100 capitalize cursor-pointer transition-all duration-300 ease-in-out hover:bg-white hover:text-blue-2 text-[16px] font-normal leading-6"
            >
              {isLoading ? "saving..." : "save"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
