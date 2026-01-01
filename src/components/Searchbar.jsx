import React from "react";
import { Search } from "lucide-react";
export default function Searchbar() {
  return (
    <div className="flex-1 w-full px-10 hidden md:block">
      <form className="relative">
        <input
          type="text"
          name="search"
          placeholder="search anything.."
          id="search"
          className="px-4 text-sm pl-12 w-full py-3 bg-transparent text-slate-100 cursor-pointer outline-none ring-1 ring-slate-100 focus:ring-primary rounded-sm transition-all duration-300 ease-in-out"
        />
        <Search className="w-4 h-4 absolute top-1/2 left-5 text-white transform -translate-y-1/2 cursor-pointer" />
      </form>
    </div>
  );
}
