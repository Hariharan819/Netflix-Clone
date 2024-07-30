import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../Utilis/firebase";
import { signOut } from "firebase/auth";
import { Logo_URL, profile_url } from "../Utilis/constant";

const Browseheader = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
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
      <div className="flex">
        <img src={profile_url} alt="" className="h-10 mx-14 my-3" />
        <button
          onClick={sigoutfn}
          className="text-white text-xl py-3 -mx-12 font-serif"
        >
          Sign out
        </button>
      </div>
    </div>
  );
};

export default Browseheader
;
