import React from "react";
import { Link } from "react-router-dom";

export default function NewCategory() {
  return (
    <div>
      <Link
        to="/add-poroduct"
        className="text-black hover:text-blue-clr transition-colors duration-300 ease-in-out capitalize block mb-6"
      >
        Back to Add Product
      </Link>
      <form>
        <input
          type="text"
          placeholder="Enter New category...."
          className="w-full max-w-lg rounded-sm border px-4 py-3 border-slate-100 transition-all duration-500 ease-in-out outline-none focus:ring-1 focus:ring-blue-clr text-default"
        />
        <input
          type="submit"
          value="add category"
          className="capitalize cursor-pointer transition-all duration-300 ease-in-out px-5 py-2 bg-slate-200 text-black capitalize rounded-sm hover:text-blue-clr hover:bg-slate-300"
        />
      </form>
    </div>
  );
}
