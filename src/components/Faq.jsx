import React, { useState } from "react";
import { faqCollapse } from "../assets/assets";

export default function Faq() {
  const [openItemId, setOpenItemId] = useState([]);
  const handleIsOpenFaq = (id) => {
    setOpenItemId(id);
  };
  console.log(openItemId);
  return (
    <div>
      <div className="flex flex-col">
        {faqCollapse.map((faqIte, index) => (
          <div
            onClick={() => handleIsOpenFaq(faqIte.id)}
            key={index}
            className="flex items-center justify-between px-2 py-3 border-b border-b-slate-200 cursor-pointer transition-all duration-300 ease-in-out hover:bg-slate-300 text-black capitalize cursor-pointer w-full"
          >
            <span>{faqIte.label}</span>
            <span>
              <faqIte.Icon
                className={`w-3 h-3 cursor-pointer ${faqCollapse.find((ids) =>
                  ids === openItemId ? "rotate-180" : ""
                )}`}
              />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
