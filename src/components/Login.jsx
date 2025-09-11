import React, { useState } from "react";
import { BG_URL } from "../utils/constant";
import Header from "./Header";

function Login() {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleHandling = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="relative h-screen w-screen">
      {/* Background Image */}
      <img
        src={BG_URL}
        alt="bg-img"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black/40"></div>{" "}
      {/* optional dark overlay */}
      <Header />
      {/* Login Form */}
      <form className="absolute top-1/2 left-1/2 w-1/3 p-10  rounded-xl  transform-none -translate-x-1/2 -translate-y-1/2 z-10 text-white bg-opacity-80  bg-[#000000] opacity-80">
        <h1 className="text-3xl py-5">{isSignIn ? "Sign In" : "Sign Up"}</h1>

        {!isSignIn && (
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 mb-4 border rounded bg-[#1e2432]"
          ></input>
        )}

        <input
          type="text"
          placeholder="Email Address"
          className="w-full p-2 mb-4 border rounded bg-[#1e2432]"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 border rounded bg-[#1e2432]"
        />
        <button
          className="bg-red-700 w-full p-3 mt-5 text-xl"
          onClick={toggleHandling}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleHandling}>
          {isSignIn
            ? "New to Netflex? Sign Up Now"
            : "Already Registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
}

export default Login;
