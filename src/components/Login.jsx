import React from "react";
import { BG_URL } from "../utils/constant";
import Header from "./Header";

function Login() {
  return (
    <div>
      <Header />
      <img src={BG_URL} alt="bg-img" className="h-screen w-full" />
    </div>
  );
}

export default Login;
