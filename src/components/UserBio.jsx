import React from "react";
import { MessageSquareText, Bell } from "lucide-react";
export default function UserBio() {
  return (
    <div>
      <MessageSquareText className="w-5 h-5" />
      <p className="relative">
        <Bell className="w-5 h-5" />
        <span className="w-5 h-5 absolute -top-4 right-0 rounded-full bg-blue-clr text-center flex items-center justify-center p-2 ring-1 ring-blue-2 text-white font-medium cursor-pointer transition-all duration-500 ease-in-out hover:transform hover:scale-105">
          0
        </span>
      </p>
    </div>
  );
}
