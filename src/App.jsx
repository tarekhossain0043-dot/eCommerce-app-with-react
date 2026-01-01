import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import SignIn from "./components/SignIn";
import ProtectedRoute from "./user-login-status/ProtectedRoute";
import DashboardLayout from "./user-login-status/DashboardLayout";
import DashboardHome from "./dashboard-inner-component/DashboardHome";
import Reset_password from "./components/Reset_password";
import Comfirmation_with_mail from "./components/Comfirmation_with_mail";

export default function App() {
  return (
    <>
      <Routes>
        {/* default user can show this login page */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<Reset_password />} />
        <Route
          path="/confirmation_with_mail"
          element={<Comfirmation_with_mail />}
        />
        {/* protected routes for user login or not */}
        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />}>
            <Route path="/" element={<DashboardHome />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}
