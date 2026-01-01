import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../features/authSlice/authSlice";
import { auth, googleAuthProvider } from "../firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  // google login
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      dispatch(setUser(result.user));
    } catch (error) {
      console.error(error.message);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const user = userCredential.user;

      dispatch(
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        })
      );
    } catch (err) {
      console.log("error :", err);
    }
    dispatch(
      setUser({
        email: formData.email,
        isLoggedin: true,
      })
    );
    console.log("data send to redux store");
  };
  console.log(formData);
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-center h-screen bg-white my-10">
      <div className="max-w-135 w-full p-12 rounded-sm bg-white shadow-sm">
        <div className="mb-10">
          <h3 className="mb-2 text-center">Create an Account</h3>
          <p className="text-center">
            Have an Account?{" "}
            <Link
              to="/signin"
              className="text-blue-clr cursor-pointer transition-all duration-500 ease-in-out hover:underline"
            >
              Sign In
            </Link>
          </p>
        </div>
        <form className="w-full flex flex-col gap-6" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-default">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Email Address"
              id="email"
              onChange={handleChange}
              name="email"
              className="text-gray-700 capitalize px-4 py-3 rounded-sm ring-1 ring-slate-100 outline-none w-full focus:ring-blue-2"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="text-default">
              Password
            </label>
            <input
              type="password"
              onChange={handleChange}
              id="password"
              name="password"
              placeholder="Create Password"
              className="text-gray-700 capitalize px-4 py-3 rounded-sm ring-1 ring-slate-100 outline-none w-full focus:ring-blue-2"
            />
          </div>
          <input
            type="submit"
            className="w-full py-3 bg-primary text-center text-white text-[16px] leading-6 rounded-sm cursor-pointer transition-all duration-500 ease-in-out hover:bg-blue-3 hover:text-primary"
            value="Create Account"
          />
          <div className="flex flex-col gap-1 text-center mb-6 divide-solid divide-slate-100">
            <p className="mb-0">By creating account, you agree to our</p>
            <Link
              to="/terms-service"
              className="text-blue-clr transition-all duration-500 ease-in-out hover:underline cursor-pointer"
            >
              Terms of Service
            </Link>
          </div>
          <p className="mb-6 text-center">Or create an account using:</p>
          <div
            onClick={handleGoogleLogin}
            className="w-full text-center gap-2.5 py-3 border border-slate-100 rounded-sm cursor-pointer transition-all duration-500 ease-in-out hover:ring-blue-2 flex items-center justify-center"
          >
            <img src="./Group.png" alt="google-icon" className="w-6 h-6" />
            <p className="text-blue-clr cursor-pointer mb-0 transition-all duration-300 ease-in-out hover:underline">
              Continue with Google
            </p>
          </div>
          <div className="w-full text-center gap-2.5 py-3 border border-slate-100 rounded-sm cursor-pointer transition-all duration-500 ease-in-out hover:ring-blue-2 flex items-center justify-center">
            <img src="./facebook.png" alt="google-icon" className="w-6 h-6" />
            <p className="text-blue-clr cursor-pointer mb-0 transition-all duration-300 ease-in-out hover:underline">
              Continue with Facebook
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
