import { X } from "lucide-react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTag, removeTag } from "../features/tagSlice/tagSlice";

export default function Tags() {
  const dispatch = useDispatch();
  const tags = useSelector((state) => state.tags.items);
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim()) {
      dispatch(addTag(inputValue.trim()));
      setInputValue(""); // clear the input field
    }
  };

  return (
    <div className="w-full p-7 bg-white rounded-sm text-black">
      <span className="mb-6 font-bold block text-[16px] leading-6 capitalize text-default">
        Tags
      </span>
      <div className="flex flex-col gap-1 w-full mb-5">
        <label htmlFor="tag">Add Tags</label>
        <input
          type="text"
          name="tag"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter tag name"
          id="tag"
          className="w-full rounded-sm border px-4 py-3 border-slate-100 transition-all duration-500 ease-in-out outline-none focus:ring-1 focus:ring-blue-clr text-default"
        />
      </div>
      <div className="flex flex-wrap items-center gap-4">
        {tags.length <= 0 ? (
          <span className="text-center block text-default text-[14px] capitalize py-4">
            Nothing Following any tags.. add one tag
          </span>
        ) : (
          tags.map((tag, index) => (
            <div
              key={index}
              className="py-1 px-4 rounded-sm truncate bg-slate-50 flex items-center gap-1 rounded-sm capitalize"
            >
              {tag}
              <X
                onClick={() => dispatch(removeTag(tag))}
                className="w-4 h-4 cursor-pointer transition-all duration-300 ease-in-out hover:text-blue-clr hover:scale-105"
              />
            </div>
          ))
        )}
        {/* <div className="py-1 px-4 truncate rounded-sm bg-slate-50 flex items-center gap-1 rounded-sm capitalize">
          Men Clothes
          <X className="w-4 h-4 cursor-pointer transition-all duration-300 ease-in-out hover:text-blue-clr hover:scale-105" />
        </div>
        <div className="py-1 px-4 truncate rounded-sm bg-slate-50 flex items-center gap-1 rounded-sm capitalize">
          Summer Collection
          <X className="w-4 h-4 cursor-pointer transition-all duration-300 ease-in-out hover:text-blue-clr hover:scale-105" />
        </div> */}
      </div>
    </div>
  );
}
