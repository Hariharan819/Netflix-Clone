import React from "react";
import { Logo_URL } from "../Utilis/constant";

const Header = () => {
  return (
    <div className="absolute px-16 py-2 bg-gradient-to-b from-gray-900 z-30">
      <img src={Logo_URL} alt="logo" className="w-40" />
    </div>
  );
};

export default Header;
