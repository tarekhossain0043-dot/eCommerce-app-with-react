import { ArrowLeft } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export default function AddProduct() {
  return (
    <div>
      <Link
        to="/products"
        className="text-default cursor-pointer capitalize cursor-pointer flex items-center gap-1 transition-all duration-300 ease-in-out hover:pr-1 hover:text-blue-clr"
      >
        <ArrowLeft className="w-4 h-4" /> back
      </Link>
    </div>
  );
}
