import React from "react";
import { Logo_URL } from "../Utilis/constant";
import { signOut } from "firebase/auth";
import { auth } from "../Utilis/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate=useNavigate();
  const user=useSelector((store)=>store.user);
  const sigoutfn = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="absolute w-screen px-16 py-2 bg-gradient-to-b from-gray-900 z-30 flex justify-between">
      <img src={Logo_URL} alt="logo" className="w-40" />

      {user && (<div className="">
       <button onClick={sigoutfn} className="text-white text-xl py-3 -mx-8 font-serif">Sign out</button>
    </div>)}
    
    </div>
    
  );
};

export default Header;
