import { Edit, Plus } from "lucide-react";
import React, { useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { product_Category } from "../../assets/assets";
import EditCategory from "../modal/EditCategory";
import Category_not_found from "../product-not-found-comopo/Category_not_found";
import { useDispatch } from "react-redux";
import { openModal } from "../../features/CustomModal/modalSlice";

export default function Category() {
  const { setHeaderTitle, setHeaderBtns } = useOutletContext();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    setHeaderTitle("Category");
    setHeaderBtns(
      <div className="flex items-center gap-3">
        <button
          // onClick={() => navigate("/create-category")}
          onClick={() =>
            dispatch(
              openModal({
                type: "Add_Category",
              }),
            )
          }
          className="text-white py-2.5 text-[16px] leading-6 font-normal px-5 flex items-center gap-2 rounded-sm bg-blue-2 border border-transparent hover:border-slate-100 capitalize cursor-pointer transition-all duration-300 ease-in-out hover:bg-white hover:text-blue-2 text-[16px] font-normal leading-6"
        >
          <Plus className="w-4 h-4 text-white" />
          Add Category
        </button>
      </div>,
    );
    return () => {
      setHeaderTitle("");
      setHeaderBtns(null);
    };
  }, [setHeaderTitle, setHeaderBtns, navigate, dispatch]);
  return (
    <div>
      <div className="mt-7">
        {product_Category.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7.5 w-full">
            {product_Category.map((category, index) => {
              const { image, title, desc } = category;

              return (
                <div
                  key={index}
                  onClick={() => navigate("/Add_Category")}
                  className="rounded-sm group relative cursor-pointer cursor-pointer hover:shadow-md transition-all duration-300 ease-in-out"
                >
                  <img
                    src={image}
                    alt="product-img"
                    className="w-full max-h-60 object-cover"
                  />
                  <div className="absolute transform scale-75 transition-all duration-300 ease-in-out group-hover:scale-100 group-hover:opacity-100 opacity-0 top-0 left-0 w-full h-full flex items-center justify-center transform rounded-md backdrop-blur-sm inset-1">
                    <div
                      onClick={() =>
                        navigate("/edit-category", {
                          state: { image, title, desc },
                        })
                      }
                      className="flex items-center gap-2 text-blue-clr bg-white shadow-sm text-[18px] font-medium px-8 py-3 rounded-sm"
                    >
                      <Edit className="w-5 h-5 cursor-pointer transition-all duration-300 ease-in-out hover:text-primary" />
                      Edit
                    </div>
                  </div>
                  <div className="px-7 py-5 bg-white shadow rounded-br-sm rounded-bl-sm">
                    <h4>{title}</h4>
                    <span className="text-default">{desc}</span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <Category_not_found />
        )}
      </div>
    </div>
  );
}
