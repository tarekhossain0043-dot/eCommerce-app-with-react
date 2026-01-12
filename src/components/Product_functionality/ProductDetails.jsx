import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  deleteProduct,
  selectAllProducts,
  updateProduct,
} from "../../features/product-slice/productSlice";
import { Edit, Trash2 } from "lucide-react";
import { toast } from "react-toastify";

export default function ProductDetails() {
  const { id } = useParams();
  console.log(id);
  console.log(typeof id);
  const proData = useSelector(selectAllProducts);
  console.log(proData);
  let pppro = proData.find((pro) => pro.id === id);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelProduct = (id) => {
    dispatch(deleteProduct(id));
    toast("product deleted successfully!");
    navigate("/products");
  };

  const handleEdit = (id) => {
    dispatch(updateProduct(id));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-6 col-span-1 w-full bg-slate-100 rounded-sm flex flex-col items-center gap-5 p-30 bg-slate-200 justify-center">
        <img src={pppro.image} alt="product img" className="w-full" />
        <div>
          {pppro.productName ? (
            <h4>{pppro.productName}</h4>
          ) : (
            <h4>{pppro.name}</h4>
          )}

          {pppro.product_desc ? (
            <p>{pppro.product_desc}</p>
          ) : (
            <p>{pppro.desc}</p>
          )}
        </div>
      </div>
      <div className="lg:col-span-6 col-span-1 w-full backdrop-blur-sm inset-1 rounded-sm flex flex-col items-start gap-5 p-10 bg-slate-100 shadow-sm justify-center">
        {pppro.inventory ? (
          <div className="md:col-span-2 col-span-1">
            {pppro.inventory} In Stock
          </div>
        ) : (
          <div className="md:col-span-2 col-span-1">
            {pppro.invent} In Stock
          </div>
        )}

        {pppro.color ? (
          <div className="md:col-span-2 col-span-1">{pppro.color}</div>
        ) : (
          <div className="md:col-span-2 col-span-1">{pppro.clr}</div>
        )}

        <div className="bg-green-100 col-span-1 md:col-span-2 text-green-700 px-2 py-1 rounded w-fit">
          $ {pppro.price}
        </div>
        <div className="bg-orange-500 col-span-1 md:col-span-2 text-white px-3 py-1 rounded w-fit text-sm">
          5.0 ({pppro.rating} Votes)
        </div>
        <div className="flex items-center gap-5">
          <button
            onClick={() => handleEdit(pppro.id)}
            className="bg-blue-2 text-white px-3 py-2 rounded w-fit text-sm flex items-center gap-2 cursor-pointer transition-all duration-300 ease-in-out hover:bg-primary"
          >
            <Edit className="w-6 h-6" />
            Edit
          </button>
          <button
            onClick={() => handleDelProduct(pppro.id)}
            className="bg-orange-500 text-white px-3 py-2 rounded w-fit text-sm flex items-center gap-2 cursor-pointer transition-all duration-300 ease-in-out hover:bg-primary"
          >
            <Trash2 className="w-6 h-6" />
            delete
          </button>
        </div>
      </div>
    </div>
  );
}
