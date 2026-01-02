import { Settings } from "lucide-react";
import React from "react";

export default function DashboardHeader({ headerTitle, headerBtns }) {
  return (
    <div>
      <div className="flex items-center justify-between gap-1">
        <h4 className="mb-0">{headerTitle}</h4>
        <div>{headerBtns}</div>
      </div>
    </div>
  );
}
