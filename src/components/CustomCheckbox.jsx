import React, { useState } from "react";

export default function CustomCheckbox() {
  const [enableSwitch, setEnableSwitch] = useState(false);
  return (
    <label className="flex items-center gap-3 cursor-pointer transition-all duration-300 ease-in-out select-none">
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={enableSwitch}
          onChange={() => setEnableSwitch(!enableSwitch)}
        />
        <div
          className={`block w-10 h-6 rounded-full transition-colors ${
            enableSwitch ? "bg-indigo-600" : "bg-indigo-100"
          }`}
        ></div>
        {/* Dot */}
        <div
          className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ${
            enableSwitch ? "translate-x-4" : "translate-x-0"
          }`}
        ></div>
      </div>
      {/* <span className="text-gray-700 font-medium">
        Add tax for this product
      </span> */}
    </label>
  );
}
