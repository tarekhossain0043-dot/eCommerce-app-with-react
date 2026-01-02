import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import DashboardHeader from "../components/DashboardHeader";

export default function DashboardLayout() {
  const [headerTitle, setHeaderTitle] = useState("Dashboard");
  const [headerBtns, setHeaderBtns] = useState(null);
  return (
    <div className="">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="py-6.5 flex-1 px-10 py-6 h-screen">
          <DashboardHeader headerTitle={headerTitle} headerBtns={headerBtns} />
          <Outlet context={{ setHeaderTitle, setHeaderBtns }} />
          {/* i think ekhane Dashboard er page gula show korbe default hisabe home page */}
        </main>
      </div>
    </div>
  );
}
