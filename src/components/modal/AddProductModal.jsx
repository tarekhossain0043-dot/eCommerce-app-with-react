import { X } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../features/product-slice/productSlice";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";

export default function AddProductModal({ isModal, setIsModal }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: nanoid(),
    name: "",
    desc: "",
    image: "",
    invent: "",
    clr: "",
    price: "",
    rating: "",
  });

  const [imrrage, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(formData));
    setFormData({
      id: nanoid(),
      name: "",
      desc: "",
      image: "",
      invent: "",
      clr: "",
      price: "",
      rating: "",
    });
    setIsModal(false);
    navigate("/products");
  };

  // const imgUrl = URL.createObjectURL(imrrage);
  console.log(imrrage);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen inset-1 z-9999 backdrop-blur-sm ${
        isModal ? "flex" : "hidden"
      } items-center justify-center`}
    >
      <div>{/* <img src={imgUrl} alt="" /> */}</div>
      <div className="bg-white max-w-lg w-full shadow-sm rounded-sm p-5">
        <div className="flex items-center mb-5 justify-between">
          <h4 className="mb-0">add new product</h4>
          <X
            size={30}
            onClick={() => setIsModal((prev) => !prev)}
            className="cursor-pointer transition-all duration-300 ease-in-out hover:opacity-100 opacity-50"
          />
        </div>
        <form className="w-full max-h-70 h-full overflow-y-scroll">
          <div className="flex flex-col gap-2 px-2">
            <label
              htmlFor="product_name"
              className=" font-bold block text-[16px] leading-6 capitalize text-black"
            >
              Product Name
            </label>
            <input
              type="text"
              name="name"
              id="product_name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Summer T-Shirt"
              className="w-full rounded-sm border px-4 py-3 border-slate-100 transition-all duration-500 ease-in-out outline-none focus:ring-1 focus:ring-blue-clr text-default"
            />
          </div>
          <div className="flex flex-col gap-2 px-2">
            <label
              htmlFor="product-desc"
              className=" font-bold block text-[16px] leading-6 capitalize text-black"
            >
              Product Description
            </label>
            <textarea
              placeholder="Product description"
              name="desc"
              value={formData.desc}
              onChange={(e) =>
                setFormData({ ...formData, desc: e.target.value })
              }
              className="w-full max-h-24 h-full rounded-sm border px-4 py-3 border-slate-100 transition-all duration-500 ease-in-out outline-none focus:ring-1 focus:ring-blue-clr text-default"
            />
          </div>
          <div className="flex flex-col gap-2 px-2 mb-6">
            <span className="font-bold block text-[16px] leading-6 capitalize text-black">
              Images
            </span>
            {/* <FileDropCompo files="image" /> */}
            <input
              type="file"
              name="image"
              // value={formData.image}
              // onChange={(e) =>
              //   setFormData({ ...formData, image: e.target.files[0] })
              // }

              value={imrrage}
              onChange={(e) => setImage(e.target.files[0])}
              className="w-full rounded-sm border px-4 py-3 border-slate-100 transition-all duration-500 ease-in-out outline-none focus:ring-1 focus:ring-blue-clr text-default"
              id="productImg"
            />
          </div>
          <hr className="my-5 mx-4 block" />
          {/* price tab */}
          <div className="mb-6">
            <div className="flex items-center gap-7 mb-4 w-full">
              <div className="flex flex-col gap-2 px-2 w-full">
                <label
                  htmlFor="Inventory"
                  className="font-bold block text-[16px] leading-6 capitalize text-black"
                >
                  Inventory
                </label>
                <input
                  type="number"
                  name="invent"
                  value={formData.invent}
                  onChange={(e) =>
                    setFormData({ ...formData, invent: e.target.value })
                  }
                  placeholder="Enter Inventory"
                  // onChange={handlePriceChange}
                  // onChange={(e) => handleInputChange(e)}
                  id="Inventory"
                  className="w-full rounded-sm border px-4 py-3 border-slate-100 transition-all duration-500 ease-in-out outline-none focus:ring-1 focus:ring-blue-clr text-default"
                />
              </div>
            </div>
            <div className="flex items-center mb-4 gap-7 w-full">
              <div className="flex flex-col gap-2 px-2 w-full">
                <label
                  htmlFor="Color"
                  className="font-bold block text-[16px] leading-6 capitalize text-black"
                >
                  Color
                </label>
                <select
                  name="clr"
                  value={formData.clr}
                  onChange={(e) =>
                    setFormData({ ...formData, clr: e.target.value })
                  }
                  id="color"
                  className="w-full rounded-sm border px-4 py-3 border-slate-100 transition-all duration-500 ease-in-out outline-none focus:ring-1 focus:ring-blue-clr text-default"
                >
                  <option value="bl">Black</option>
                  <option value="gray">Gray</option>
                  <option value="Purple">Purple</option>
                </select>
              </div>
            </div>
            <div className="flex items-center mb-4 gap-7 w-full">
              <div className="flex flex-col gap-2 px-2 w-full">
                <label
                  htmlFor="product-price"
                  className="font-bold block text-[16px] leading-6 capitalize text-black"
                >
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={(e) =>
                    setFormData({ ...formData, price: e.target.value })
                  }
                  placeholder="Enter price"
                  // onChange={handlePriceChange}
                  // onChange={(e) => handleInputChange(e)}
                  id="price"
                  className="w-full rounded-sm border px-4 py-3 border-slate-100 transition-all duration-500 ease-in-out outline-none focus:ring-1 focus:ring-blue-clr text-default"
                />
              </div>
            </div>
            <div className="flex items-center mb-4 gap-7 w-full">
              <div className="flex flex-col gap-2 px-2 w-full">
                <label
                  htmlFor="Rating"
                  className="font-bold block text-[16px] leading-6 capitalize text-black"
                >
                  Rating
                </label>
                <input
                  type="number"
                  name="rating"
                  value={formData.rating}
                  onChange={(e) =>
                    setFormData({ ...formData, rating: e.target.value })
                  }
                  placeholder="Enter Customer rating.."
                  // onChange={handlePriceChange}
                  // onChange={(e) => handleInputChange(e)}
                  id="Rating"
                  className="w-full rounded-sm border px-4 py-3 border-slate-100 transition-all duration-500 ease-in-out outline-none focus:ring-1 focus:ring-blue-clr text-default"
                />
              </div>
            </div>
          </div>
          {/* product tax */}

          <hr className="my-5 mx-2 block" />
          <div className="flex items-center px-2 gap-5 justify-end">
            <button
              onClick={() => setIsModal((prev) => !prev)}
              className="flex-1 px-5 py-3 font-bold text-[16px] leading-6 capitalize text-black cursor-pointer transition-all duration-300 ease-in-out hover:bg-red-400 bg-red-300  hover:text-white text-black rounded-sm"
            >
              cancel
            </button>
            <button
              onClick={handleSubmit}
              className="flex-1 px-5 py-3 font-bold block text-[16px] leading-6 capitalize text-black cursor-pointer transition-all duration-300 ease-in-out hover:bg-blue-clr hover:text-primary rounded-sm"
            >
              add product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
