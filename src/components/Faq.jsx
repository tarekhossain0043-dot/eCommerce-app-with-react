import React, { useState } from "react";
import { faqCollapse } from "../assets/assets";

export default function Faq() {
  const [openItemId, setOpenItemId] = useState([]);
  const handleIsOpenFaq = (id) => {
    setOpenItemId(id);
    faqCollapse.find((item) => item.id === faqIte.id);
  };
  console.log(openItemId);
  return (
    <div>
      <div className="flex flex-col w-full mt-4">
        {faqCollapse.map((faqIte, index) => (
          <div
            onClick={() => handleIsOpenFaq(faqIte.id)}
            key={index}
            className="flex flex-col"
          >
            <div className="flex items-center justify-between rounded-sm px-2 py-3 border-b border-b-slate-200 cursor-pointer transition-all duration-300 ease-in-out hover:bg-slate-100 text-default capitalize cursor-pointer w-full">
              <span>{faqIte.label}</span>
              <faqIte.Icon
                className={`w-3 h-3 cursor-pointer ${faqCollapse.find((ids) =>
                  ids === openItemId ? "rotate-180" : ""
                )}`}
              />
            </div>
            <span className="text-start py-4 px-3 bg-slate-100">
              {faqIte?.desc && (
                <span className="block mt-2 text-default">{faqIte.desc}</span>
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
