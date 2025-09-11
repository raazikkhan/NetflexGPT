import React from "react";
import { LOGO_URL } from "../utils/constant";

function Header() {
  return (
    <div className="absolute py-8 px-2 bg-gradient-to-b from-black z-50">
      <img src={LOGO_URL} alt="logo-img" className="w-50" />
    </div>
  );
}

export default Header;
