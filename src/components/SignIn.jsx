import React from "react";
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <div className="flex items-center justify-center h-screen bg-white my-10">
      <div className="max-w-135 w-full p-12 rounded-sm bg-white shadow-sm">
        <div className="mb-10">
          <h3 className="mb-2 text-center">Sign In</h3>
          <p className="text-center">
            New to Our Product?
            <Link
              to="/login"
              className="text-blue-clr cursor-pointer transition-all duration-500 ease-in-out hover:underline"
            >
              Create an Account
            </Link>
          </p>
        </div>
        <form className="w-full flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-default">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Email Address"
              id="email"
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
              id="password"
              name="password"
              placeholder="Create Password"
              className="text-gray-700 capitalize px-4 py-3 rounded-sm ring-1 ring-slate-100 outline-none w-full focus:ring-blue-2"
            />
          </div>
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              className="border-slate-300 rounded-md checked:ring-blue-clr w-5 h-5 outline-none checked:text-white"
              name="checkbox"
              id="checkbox"
            />
            <label
              htmlFor="checkbox"
              className="text-default cursor-pointer transition-all duration-500 ease-in-out hover:text-blue-clr"
            >
              Keep me signed in
            </label>
          </div>
          <input
            type="submit"
            className="w-full py-3 bg-primary text-center text-white text-[16px] leading-6 rounded-sm cursor-pointer transition-all duration-500 ease-in-out hover:bg-blue-3 hover:text-primary"
            value="Create Account"
          />
          <div className="flex flex-col gap-1 text-center mb-6 divide-solid divide-slate-100">
            <p className="mb-0">By creating account, you agree to our</p>
            <Link
              to="/reset-password"
              className="text-blue-clr transition-all duration-500 ease-in-out hover:underline cursor-pointer"
            >
              Forgot your password?
            </Link>
          </div>
          <p className="mb-6 text-center">Or sign in using:</p>
          <div className="w-full ring-1 hover:ring-blue-2 text-center gap-2.5 py-3 border border-slate-100 rounded-sm cursor-pointer transition-all duration-500 ease-in-out hover:ring-blue-2 flex items-center justify-center">
            <img src="./Group.png" alt="google-icon" className="w-6 h-6" />
            <p className="text-blue-clr cursor-pointer mb-0 transition-all duration-300 ease-in-out hover:underline">
              Continue with Google
            </p>
          </div>
          <div className="w-full ring-1 hover:ring-blue-2 text-center gap-2.5 py-3 border border-slate-100 rounded-sm cursor-pointer transition-all duration-500 ease-in-out hover:ring-blue-2 flex items-center justify-center">
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
