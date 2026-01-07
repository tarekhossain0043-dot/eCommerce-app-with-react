import { ArrowLeft, X } from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FileDropCompo from "./FileDropCompo";
import CustomCheckbox from "./CustomCheckbox";
import Modal from "./modal";
import NewCategory from "./NewCategory";

export default function AddProduct() {
  // const { setHeaderTitle, setHeaderBtns } = useOutletContext();
  const navigate = useNavigate();
  const category = ["women", "man", "T-Shirt", "Hoodie", "Dress"];
  // const [newCategory, setNewCategory] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [onClose, setOnClose] = useState(true);
  // useEffect(() => {
  //   setHeaderTitle("Add Products");
  //   setHeaderBtns(
  //     <div className="flex items-center gap-3">
  //       <button className="text-blue-clr px-5 py-2.5 capitalize border border-slate-100 text-center rounded-sm cursor-pointer transition-all duration-300 ease-in-out hover:bg-blue-clr px-3 hover:text-white">
  //         Cancel
  //       </button>
  //       <button
  //         onClick={() => navigate("/add-poroduct")}
  //         className="text-white py-2.5 text-[16px] leading-6 font-normal px-5 rounded-sm bg-blue-2 border border-transparent hover:border-slate-100 capitalize cursor-pointer transition-all duration-300 ease-in-out hover:bg-white hover:text-blue-2 text-[16px] font-normal leading-6"
  //       >
  //         Save
  //       </button>
  //     </div>
  //   );
  //   return () => {
  //     setHeaderTitle("");
  //     setHeaderBtns(null);
  //   };
  // }, [navigate, setHeaderTitle, setHeaderBtns]);

  // const options = ["XS", "S", "M", "L", "XL", "XXL"];
  // const [selectedItems, setSelectedItems] = useState([]);
  // const handleSelect = (id) => {
  //   const currentItem = options.filter((item) => item === id);
  //   setSelectedItems(currentItem);
  // };
  return (
    <div>
      <div>
        <Link
          to="/products"
          className="text-default cursor-pointer capitalize cursor-pointer flex items-center gap-1 transition-all duration-300 ease-in-out hover:pr-1 hover:text-blue-clr"
        >
          <ArrowLeft className="w-4 h-4" /> back
        </Link>
      </div>
      <div className="flex items-center justify-between">
        <h3>Add Product</h3>
        <div className="flex items-center gap-3">
          <button className="text-blue-clr px-5 py-2.5 leading-6 capitalize border border-slate-100 text-center rounded-sm cursor-pointer transition-all duration-300 ease-in-out hover:bg-blue-clr px-3 hover:text-white">
            Cancel
          </button>
          <button
            onClick={() => navigate("/add-poroduct")}
            className="text-white px-5 py-2.5 text-[16px] leading-6 font-normal rounded-sm bg-blue-2 border border-transparent hover:border-slate-100 capitalize cursor-pointer transition-all duration-300 ease-in-out hover:bg-white hover:text-blue-2 text-[16px] font-normal leading-6"
          >
            Save
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[7fr_5fr] gap-7.5 mt-6">
        <div className="w-full p-7 rounded-sm bg-white shadow-sm">
          <span className="mb-6 font-bold block text-[16px] leading-6 capitalize text-black">
            Information
          </span>
          <form className="w-full">
            <div className="flex flex-col gap-1 mb-6">
              <label htmlFor="product_name" className="text-default">
                Product Name
              </label>
              <input
                type="text"
                placeholder="Summer T-Shirt"
                className="w-full rounded-sm border px-4 py-3 border-slate-100 transition-all duration-500 ease-in-out outline-none focus:ring-1 focus:ring-blue-clr text-default"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="product_name" className="text-default">
                Product Description
              </label>
              <textarea
                placeholder="Product description"
                className="w-full max-h-24 h-full rounded-sm border px-4 py-3 border-slate-100 transition-all duration-500 ease-in-out outline-none focus:ring-1 focus:ring-blue-clr text-default"
              />
            </div>
            <hr className="mt-10 mb-7 block" />
            <div className="flex flex-col gap-1 mb-6">
              <span className="mb-6 font-bold block text-[16px] leading-6 capitalize text-black">
                Images
              </span>
              <FileDropCompo />
            </div>
            <hr className=" mb-7 block" />
            {/* price tab */}
            <div className="mb-6">
              <span className="mb-6 font-bold block text-[16px] leading-6 capitalize text-black">
                price
              </span>
              <div className="flex items-center gap-7 w-full">
                <div className="flex flex-col gap-1 w-full">
                  <label htmlFor="product-price">Product Price</label>
                  <input
                    type="number"
                    name="price"
                    placeholder="Enter price"
                    id="price"
                    className="w-full rounded-sm border px-4 py-3 border-slate-100 transition-all duration-500 ease-in-out outline-none focus:ring-1 focus:ring-blue-clr text-default"
                  />
                </div>
                <div className="flex w-full flex-col gap-1">
                  <label htmlFor="discount-price">Discount Price</label>
                  <input
                    type="number"
                    name="discount-price"
                    placeholder="Price at Discount"
                    id="discount-price"
                    className="w-full rounded-sm border px-4 py-3 border-slate-100 transition-all duration-500 ease-in-out outline-none focus:ring-1 focus:ring-blue-clr text-default"
                  />
                </div>
              </div>
            </div>
            {/* product tax */}
            <div className="relative flex items-center gap-3">
              <CustomCheckbox />
              <span className="text-[16px] font-normal leading-6 text-black">
                Add tax for this product
              </span>
            </div>
            <hr className="mb-7 mt-10 block" />
            <span className="mb-6 font-bold block text-[16px] leading-6 capitalize text-black">
              Different Options
            </span>
            <div className="relative flex items-center gap-3">
              <CustomCheckbox />
              <span className="text-[16px] font-normal leading-6 text-black">
                Add tax for this product
              </span>
            </div>
            {/* options */}
            <div className="mb-6">
              <span className="mb-6 font-bold block text-[16px] leading-6 capitalize text-black">
                Option 1
              </span>
              <div className="flex items-center gap-7 w-full">
                <div className="flex flex-col gap-1 w-full">
                  <label htmlFor="product-price">Size</label>
                  <select
                    name="size"
                    id="size"
                    className="w-full rounded-sm border px-4 py-3 border-slate-100 transition-all duration-500 ease-in-out outline-none focus:ring-1 focus:ring-blue-clr text-default"
                    defaultValue=""
                    // onChange={handleSelect}
                  >
                    <option value="xs" defaultValue="xs">
                      XS
                    </option>
                    <option value="s" defaultValue="s">
                      S
                    </option>
                    <option value="m" defaultValue="m">
                      M
                    </option>
                    <option value="l" defaultValue="l">
                      L
                    </option>
                    <option value="xl" defaultValue="xl">
                      XL
                    </option>
                    <option value="xxl" defaultValue="xxl">
                      XXL
                    </option>
                  </select>
                </div>
                <div className="flex w-full flex-col gap-1">
                  <label htmlFor="discount-price">Value</label>
                  <div className="w-full rounded-sm border flex items-center gap-2 px-4 py-3 border-slate-100 transition-all duration-500 ease-in-out outline-none focus:ring-1 focus:ring-blue-clr text-default">
                    <span className="flex items-center gap-1 bg-default rounded-sm p-1 text-white leading-1">
                      XL{" "}
                      <X className="w-4 h-4 cursor-pointer transition-all duration-300 ease-in-out hover:text-primary" />
                    </span>
                    <span className="flex items-center gap-1 bg-default rounded-sm p-1 text-white leading-1">
                      XL{" "}
                      <X className="w-4 h-4 cursor-pointer transition-all duration-300 ease-in-out hover:text-primary" />
                    </span>
                    <span className="flex items-center gap-1 bg-default rounded-sm p-1 text-white leading-1">
                      XL{" "}
                      <X className="w-4 h-4 cursor-pointer transition-all duration-300 ease-in-out hover:text-primary" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <hr className="mb-7 mt-10 block" />
            <span className="mb-6 font-bold block text-[16px] leading-6 capitalize text-black">
              Shipping
            </span>
            <div className="flex mb-6 items-center gap-7 w-full">
              <div className="flex flex-col gap-1 w-full">
                <label htmlFor="product-price">Weight</label>
                <input
                  type="text"
                  placeholder="Enter Weight"
                  className="w-full rounded-sm border px-4 py-3 border-slate-100 transition-all duration-500 ease-in-out outline-none focus:ring-1 focus:ring-blue-clr text-default"
                />
              </div>
              <div className="flex w-full flex-col gap-1">
                <label htmlFor="country-select">Country</label>
                <select
                  name="country-select"
                  id="country-select"
                  className="w-full rounded-sm border px-4 py-3 border-slate-100 transition-all duration-500 ease-in-out outline-none focus:ring-1 focus:ring-blue-clr text-default"
                >
                  <option value="ban">Bangladesh</option>
                  <option value="in">India</option>
                  <option value="ban">Pakisthan</option>
                  <option value="ban">Nederland</option>
                  <option value="ban">South Africa</option>
                  <option value="ban">England</option>
                </select>
              </div>
            </div>
            <div className="relative flex items-center gap-3">
              <CustomCheckbox />
              <span className="text-[16px] font-normal leading-6 text-black">
                This is digital item
              </span>
            </div>
          </form>
        </div>
        <div className="flex flex-col gap-7.5">
          <div className="w-full p-7 bg-white rounded-sm text-black">
            <span className="mb-6 font-bold block text-[16px] leading-6 capitalize text-black">
              Categories
            </span>
            <div className="flex flex-col items-start gap-3">
              {category.map((category, index) => (
                <div className="w-full flex items-center gap-1" key={index}>
                  <input
                    type="checkbox"
                    name="category"
                    id={category}
                    className="accent-blue-clr focus:outline-none foucs:ring-1 focus:ring-blue-clr"
                  />
                  <label htmlFor={category}>{category}</label>
                </div>
              ))}
            </div>
            <Link
              to="/modal"
              className="text-[16px] mt-4 block leading-6 text-blue-clr cursor-pointer transition-all duration-300 ease-in-out hover:underline"
            >
              Create New
            </Link>

            <Modal
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              onClose={onClose}
              setOnClose={setOnClose}
            >
              <NewCategory />
            </Modal>
          </div>
          <div className="w-full p-7 bg-white rounded-sm text-black">
            <span className="mb-6 font-bold block text-[16px] leading-6 capitalize text-black">
              Tags
            </span>
            <div className="flex flex-col gap-1 w-full mb-5">
              <label htmlFor="tag">Add Tags</label>
              <input
                type="text"
                name="tag"
                placeholder="Enter tag name"
                id="tag"
                className="w-full rounded-sm border px-4 py-3 border-slate-100 transition-all duration-500 ease-in-out outline-none focus:ring-1 focus:ring-blue-clr text-default"
              />
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-4">
              <div className="py-1 px-3 rounded-sm bg-slate-50 rounded-sm capitalize">
                t-shirt
                <X className="w-4 h-4 cursor-pointer transition-all duration-300 ease-in-out hover:text-blue-clr hover:scale-105" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
