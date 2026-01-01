import React from "react";
import Login from "../components/Login";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const { isLoggedin } = useSelector((state) => state.authentication);
  return (
    <div>{isLoggedin ? <Outlet /> : <Login />}</div>
    // ekhane check kora hobe user jodi login kore ba thake tale dashboardLayout page ar na thakle login page show korbo
  );
}
