import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import DashboardHeader from "../components/DashboardHeader";

export default function DashboardLayout() {
  const [headerTitle, setHeaderTitle] = useState("Dashboard");
  const [headerBtns, setHeaderBtns] = useState(null);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const handleSidebarToggle = () => {
    setIsCollapsed((prev) => !prev);
  };
  return (
    <div className="min-h-screen h-full">
      <Header
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
        handleSidebarToggle={handleSidebarToggle}
      />
      <div className={`${!isCollapsed ? "ml-20" : "ml-62.5"} flex`}>
        <Sidebar
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
          handleSidebarToggle={handleSidebarToggle}
        />
        <main className="py-6.5 px-10 py-6 flex-1 mt-22.75 max-[600px]:w-130 bg-slate-100">
          <DashboardHeader headerTitle={headerTitle} headerBtns={headerBtns} />
          <Outlet context={{ setHeaderTitle, setHeaderBtns }} />
          {/* i think ekhane Dashboard er page gula show korbe default hisabe home page */}
        </main>
      </div>
    </div>
  );
}
