import React, { useState } from "react";
import { faqCollapse } from "../assets/assets";

export default function Faq() {
  const [openItemId, setOpenItemId] = useState(null);

  const handleIsOpenFaq = (index) => {
    setOpenItemId((prev) => (prev === index ? null : index));
  };

  return (
    <div className="flex flex-col w-full mt-4">
      {faqCollapse.map((faqIte, index) => (
        <div key={index} className="flex flex-col">
          <div
            onClick={() => handleIsOpenFaq(index)}
            className="flex items-center justify-between text-left px-2 py-3 border-b cursor-pointer hover:bg-slate-100"
          >
            <span>{faqIte.label}</span>
            <faqIte.Icon
              className={`w-3 h-3 transition-transform duration-300 ${
                openItemId === index ? "rotate-180" : ""
              }`}
            />
          </div>

          {openItemId === index && (
            <div className="py-4 px-4 bg-slate-100 text-left mb-3 rounded-sm mt-2">
              <span className="block mt-2 text-default font-normal">
                {faqIte.desc}
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
