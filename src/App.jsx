import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import SignIn from "./components/SignIn";
import ProtectedRoute from "./user-login-status/ProtectedRoute";
import DashboardLayout from "./user-login-status/DashboardLayout";
import DashboardHome from "./dashboard-inner-component/DashboardHome";
import Reset_password from "./components/Reset_password";
import Comfirmation_with_mail from "./components/Comfirmation_with_mail";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { setUser } from "./features/authSlice/authSlice";
import Order from "./components/Order";
import Category from "./components/category/Category";

export default function App() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.authentication);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        dispatch(
          setUser({
            uid: currentUser.uid,
            email: currentUser.email,
            displayName: currentUser.displayName,
            photoUrl: currentUser.photoURL,
          })
        );
      } else {
        dispatch(setUser(null));
      }
    });
    return () => unsubscribe();
  }, [dispatch]);
  if (loading) {
    <p className="text-primary font-medium text-sm cursor-pointer transition-all duration-500 ease-in-out">
      loading....
    </p>;
  }
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
        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />}>
            <Route path="/" element={<DashboardHome />} />
            <Route path="/orders" element={<Order />} />
            <Route Path="/category" element={<Category />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}
