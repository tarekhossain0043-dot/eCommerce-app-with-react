import { ArrowLeft, X, XCircle } from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FileDropCompo from "./FileDropCompo";
import CustomCheckbox from "./CustomCheckbox";
import Tags from "./Tags";
import Seo_settings from "./Seo_settings";

export default function AddProduct() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  // const [newCategory, setNewCategory] = useState([]);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const size = ["xs", "s", "m", "l", "xl", "xxl"];
  const [currentSize, setCurrentSize] = useState("");
  const [discountPrice] = useState({
    price: 0,
    discount: 40,
  });

  // product add,edit,delete,update,filtering,sorting and more

  // new category
  // const [current, setCurrent] = useState("");
  // const dispatch = useDispatch();
  // const productCate = useSelector((state) => state.newCategory.items);

  // const handleSubmit = () => {
  //   dispatch(selectAllProducts(current));
  //   setCurrent("");
  // };
  // console.log(newCategories);
  // const handleSubmit = () => {
  //   if (newCategory.trim()) {
  //     dispatch(addCategory(newCategory.trim()));
  //   }
  // };

  const [productData, setProductData] = useState({
    name: "",
    description: "",
    productImg: "",
    discountPrice: "",
    size: "",
    category: "",
    country: "",
    weight: "",
  });
  const imgUrl = URL.createObjectURL(productData.productImg);
  console.log(imgUrl);
  // console.log(productData);

  // const handleProductsFun = () => {
  //   dispatch(selectAllProducts(productData));
  //   setProductData("");
  // };

  // const handleInputChange = (e) => {
  //   setProductData({ ...productData, [e.target.name]: e.target.value });
  // };

  // const handleSave = async () => {
  //   if (!productData.name) return toast("Name and desctioption is required!");

  //   try {
  //     // POST data to api
  //     await addProduct(productData).unwrap();
  //     setProductData({
  //       name: "",
  //       description: "",
  //       productImg: "",
  //       discountPrice: "",
  //       size: "",
  //       category: "",
  //     }); // input form for clear
  //     toast("product added successfully!");
  //   } catch (error) {
  //     console.error("Failed to add products on apis:", error);
  //   }
  // };

  const discount_price =
    discountPrice.price - (discountPrice.price * discountPrice.discount) / 100;

  const handleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <>
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
              // onClick={handleProductsFun}
              // disabled={isLoading}
              className="text-white px-5 py-2.5 text-[16px] leading-6 font-normal rounded-sm bg-blue-2 border border-transparent hover:border-slate-100 capitalize cursor-pointer transition-all duration-300 ease-in-out hover:bg-white hover:text-blue-2 text-[16px] font-normal leading-6"
            >
              {/* {!isLoading ? "save" : "saving ...."} */}
              save
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
                  name="name"
                  id="product_name"
                  value={productData.name}
                  onChange={(e) =>
                    setProductData({ ...productData, name: e.target.value })
                  }
                  placeholder="Summer T-Shirt"
                  className="w-full rounded-sm border px-4 py-3 border-slate-100 transition-all duration-500 ease-in-out outline-none focus:ring-1 focus:ring-blue-clr text-default"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="product-desc" className="text-default">
                  Product Description
                </label>
                <textarea
                  placeholder="Product description"
                  name="description"
                  value={productData.description}
                  onChange={(e) =>
                    setProductData({
                      ...productData,
                      description: e.target.value,
                    })
                  }
                  className="w-full max-h-24 h-full rounded-sm border px-4 py-3 border-slate-100 transition-all duration-500 ease-in-out outline-none focus:ring-1 focus:ring-blue-clr text-default"
                />
              </div>
              <hr className="mt-10 mb-7 block" />
              <div className="flex flex-col gap-1 mb-6">
                <span className="mb-6 font-bold block text-[16px] leading-6 capitalize text-black">
                  Images
                </span>
                <FileDropCompo files="image" />
                <input
                  type="file"
                  name="productImg"
                  value={productData.productImg}
                  onChange={(e) =>
                    setProductData({
                      ...productData,
                      productImg: e.target.files[0],
                    })
                  }
                  id="productImg"
                />
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
                      // value={discountPrice.price}
                      // value={productData.discountPrice}
                      placeholder="Enter price"
                      // onChange={handlePriceChange}
                      // onChange={(e) => setProductData({...productData, name : e.target.value})}
                      id="price"
                      className="w-full rounded-sm border px-4 py-3 border-slate-100 transition-all duration-500 ease-in-out outline-none focus:ring-1 focus:ring-blue-clr text-default"
                    />
                  </div>
                  <div className="flex w-full flex-col gap-1">
                    <label htmlFor="discount-price">Discount Price</label>
                    <input
                      type="number"
                      name="discountPrice"
                      disabled
                      placeholder="discount price.."
                      value={discount_price}
                      id="discount-price"
                      className="w-full rounded-sm border px-4 py-3 border-slate-100 transition-all duration-500 ease-in-out outline-none focus:ring-1 focus:ring-blue-clr text-default"
                    />
                    {/* <span>{discount_price}</span> */}
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
                      // value={productData.size}
                      className="w-full rounded-sm border px-4 py-3 border-slate-100 transition-all duration-500 ease-in-out outline-none focus:ring-1 focus:ring-blue-clr text-default"
                      defaultValue=""
                      // onChange={(e) => setCurrentSize(e.target.value)}
                      // onChange={(e) => setProductData({...productData, name : e.target.value})}
                    >
                      {size.map((size, index) => (
                        <option key={index} value={size}>
                          {size}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex w-full flex-col gap-1">
                    <label htmlFor="discount-price">Value</label>
                    <div className="w-full rounded-sm border flex items-center gap-2 px-4 py-3 border-slate-100 transition-all duration-500 ease-in-out outline-none focus:ring-1 focus:ring-blue-clr text-default">
                      {currentSize && (
                        <span className="flex items-center gap-1 bg-default rounded-sm p-1 text-white leading-1">
                          {currentSize}
                          <X
                            onClick={() => setCurrentSize("")}
                            className="w-4 h-4 cursor-pointer transition-all duration-300 ease-in-out hover:text-primary"
                          />
                        </span>
                      )}
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
                    // value={productData.weight}
                    // onChange={(e) => setProductData({...productData, name : e.target.value})}
                    className="w-full rounded-sm border px-4 py-3 border-slate-100 transition-all duration-500 ease-in-out outline-none focus:ring-1 focus:ring-blue-clr text-default"
                  />
                </div>
                <div className="flex w-full flex-col gap-1">
                  <label htmlFor="country-select">Country</label>
                  <select
                    name="country-select"
                    id="country-select"
                    // value={productData.country}
                    // onChange={(e) => setProductData({...productData, name : e.target.value})}
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
                {/* {productCate.map((cats, index) => (
                  <div className="w-full flex items-center gap-1" key={index}>
                    <input
                      type="checkbox"
                      name="category"
                      value={productData.category}
                      onChange={(e) => setProductData({...productData, name : e.target.value})}
                      // id={newCategory}
                      className="accent-blue-clr focus:outline-none foucs:ring-1 focus:ring-blue-clr"
                    />
                    <label htmlFor="category">{cats}</label>
                  </div>
                ))} */}
                {/* <div className="w-full flex items-center gap-1">
                  <input
                    type="checkbox"
                    name="category"
                    // id={newCategory}
                    className="accent-blue-clr focus:outline-none foucs:ring-1 focus:ring-blue-clr"
                  />
                  <label htmlFor="category">shoes</label>
                </div> */}
              </div>
              <button
                onClick={handleModal}
                className="text-[16px] mt-4 block leading-6 text-blue-clr cursor-pointer transition-all duration-300 ease-in-out hover:underline"
              >
                Create New
              </button>
            </div>
            <Tags />
            <Seo_settings />
          </div>
        </div>
        <hr className="h-px w-full bg-default my-7" />
        <div className="flex items-center justify-end">
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
      </div>

      <div
        className={`${
          isModalOpen ? "flex" : "hidden"
        } fixed z-9999 top-1/2 left-1/2 -translate-1/2 w-full h-screen bg-linear-to-r from-indigo-200 to-indigo-300 opacity-70 backdrop-blur-5xl items-center justify-center`}
      >
        <div className="max-w-lg relative w-full max-h-40 h-full bg-green-200 flex items-center p-10 rounded-sm shadow-sm">
          <div className="flex flex-col items-center gap-4 w-full">
            <input
              type="text"
              minLength={50}
              maxLength={70}
              placeholder="Enter Your Category.."
              // onChange={(e) => setCurrent(e.target.value)}
              name="category"
              className="w-full px-4 py-2 bg-white border-slate-100 rounded-sm cursor-pointer transition-all duration-300 ease-in-out outline-none focus:ring-1 focus:ring-blue-400"
            />
            <div className="flex items-center gap-3 justify-end absolute bottom-5 right-10">
              <input
                type="submit"
                // onClick={handleSubmit}
                value="add category"
                className="bg-blue-3 text-primary cursor-pointer hover:bg-primary hover:text-blue-3 transition-all duration-300 ease-in-out rounded-sm px-3 py-1.5"
              />
              <button
                onClick={() => setIsModalOpen((prev) => !prev)}
                className="bg-red-300 text-primary cursor-pointer hover:bg-primary hover:text-red-300 transition-all duration-300 ease-in-out rounded-sm px-3 py-1.5"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
        <XCircle
          onClick={() => setIsModalOpen((prev) => !prev)}
          size={20}
          className="cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:text-red absolute right-10 top-10"
        />
      </div>
    </>
  );
}
