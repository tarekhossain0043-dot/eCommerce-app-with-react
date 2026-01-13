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
import Products from "./components/Products";
import AddProduct from "./components/AddProduct";
import Category from "./components/category/Category";
import Customers from "./components/customers/Customers";
import CustomerInfo from "./components/customers/CustomerInfo";
import AddCustomers from "./components/customers/AddCustomers";
import Coupons from "./components/coupones/Coupons";
import OrderModal from "./components/modal/OrderModal";
// import CreateCategory from "./components/category/CreateCategory";
import { ToastContainer } from "react-toastify";
import ProductDetails from "./components/Product_functionality/ProductDetails";
import CreateCategory from "./components/category/CreateCategory";
import CreateCoupons from "./components/coupones/CreateCoupons";
import Profile from "./components/settings/Profile";
import Notification from "./components/settings/Nitification";
import Accounts from "./components/settings/Accounts";
import Security from "./components/settings/Security";
import Pricing from "./components/pricing/Pricing";
import Inbox from "./components/Inbox";

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
  // modal
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
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/add-poroduct" element={<AddProduct />} />
            <Route path="/categories" element={<Category />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/customerInfo" element={<CustomerInfo />} />
            <Route path="/add_customers" element={<AddCustomers />} />
            <Route path="/coupons" element={<Coupons />} />
            <Route path="/create-coupons" element={<CreateCoupons />} />
            <Route path="/order-modal" element={<OrderModal />} />
            <Route path="/create-category" element={<CreateCoupons />} />
            <Route path="/setting" element={<Profile />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/accounts" element={<Accounts />} />
            <Route path="/security" element={<Security />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/inbox" element={<Inbox />} />
          </Route>
        </Route>
      </Routes>

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        // theme="dark" // Options: "light", "dark", "colored"
      />
    </>
  );
}
