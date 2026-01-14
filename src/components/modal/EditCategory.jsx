import { X } from "lucide-react";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function EditCategory() {
  const [isModal, setIsModal] = useState(true);
  const location = useLocation();
  const editData = location.state;
  //   const [editStateData, setEditStateData] = useState([]);
  const navigate = useNavigate();
  const handleModalOpen = () => {
    navigate("/categories");
    setIsModal((prev) => !prev);
  };
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    desc: "",
  });
  console.log(formData.title);
  return (
    <div>
      <div
        className={`fixed top-0 left-0 w-full h-screen inset-1 z-9999 backdrop-blur-sm ${
          isModal ? "flex" : "hidden"
        } items-center justify-center`}
      >
        <div className="flex flex-col gap-3 bg-slate-100 shadow-sm rounded-sm p-6 relative">
          <h4 className="mb-5">Edit Category</h4>
          <div className="flex flex-col gap-2 mb-2">
            <label htmlFor="editCategory">Category Name</label>
            <input
              type="text"
              onChange={(e) => setFormData(e.target.value)}
              value={editData.title}
              placeholder="Women Clothes"
              className="w-full border border-slate-100 rounded-sm px-4 py-2 ring-1 ring-slate-200 text-default font-medium capitalize transition-all duration-300 ease-in-out outline-none focus:ring-1 focus:ring-blue-clr"
            />
          </div>
          <div className="flex flex-col gap-2 mb-2">
            <label htmlFor="editCategory">Image</label>
            <input
              type="file"
              onChange={(e) => setFormData(e.target.value)}
              placeholder="Women Clothes"
              className="w-full border ring-1 ring-slate-200 h-20 px-5 py-3 rounded-sm text-default font-medium capitalize transition-all duration-300 ease-in-out outline-none focus:ring-1 focus:ring-blue-clr"
            />
          </div>
          <input
            type="text"
            onChange={(e) => setFormData(e.target.value)}
            className="w-full px-3 py-2 bg-slate-100 cursor-pointer transition-all duration-300 ease-in-out ring-1 ring-slate-200 focus:ring-blue-clr"
          />
          <button className="px-5 py-3 bg-transparent ring-1 ring-slate-200 rounded-sm text-blue-clr hover:bg-blue-clr hover:text-white cursor-pointer transition-all duration-300 ease-in-out">
            Edit
          </button>
          <X
            onClick={handleModalOpen}
            className="w-5 h-5 cursor-pointer text-4xl font-medium transition-all duration-300 ease-in-out hover:scale-x-105 hover:text-blue-clr absolute top-5 right-5"
          />
        </div>
      </div>
    </div>
  );
}
