import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Reset_password() {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center h-screen bg-white my-10">
      <div className="max-w-135 w-full p-12 rounded-sm bg-white shadow-sm">
        <div className="mb-10">
          <h3 className="mb-2 text-center">Password Reset</h3>
          <p className="text-center">We Will Help You Reset your Password</p>
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

          <input
            type="submit"
            className="w-full py-3 bg-primary text-center text-white text-[16px] leading-6 rounded-sm cursor-pointer transition-all duration-500 ease-in-out hover:bg-blue-3 hover:text-primary"
            value="Reset Password"
          />
          {/* <div className="flex flex-col gap-1 text-center mb-6 divide-solid divide-slate-100"></div> */}
          <p className="mb-6 text-center">Remembered your Password? </p>
          <div
            onClick={() => navigate("/login")}
            className="w-full text-center gap-2.5 py-3 border border-slate-100 rounded-sm cursor-pointer transition-all duration-500 ease-in-out hover:ring-blue-2 ring-1 flex items-center justify-center"
          >
            <p className="text-blue-clr cursor-pointer mb-0 transition-all duration-300 ease-in-out hover:underline">
              Back to Sign In
            </p>
          </div>
          {/* <div className="w-full text-center gap-2.5 py-3 border border-slate-100 rounded-sm cursor-pointer transition-all duration-500 ease-in-out hover:ring-blue-2 flex items-center justify-center">
            <img src="./facebook.png" alt="google-icon" className="w-6 h-6" />
            <p className="text-blue-clr cursor-pointer mb-0 transition-all duration-300 ease-in-out hover:underline">
              Continue with Facebook
            </p>
          </div> */}
        </form>
      </div>
    </div>
  );
}
