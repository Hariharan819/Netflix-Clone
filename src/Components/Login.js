import React from "react";
import Header from ".//Header";
import { Backgrdimg_URL } from "../Utilis/constant";

const Login = () => {
  return (
    <div>
        <Header />
        <div className="absolute"l>
        <img src={Backgrdimg_URL} alt="bgimg" />
        </div>

        <form action="" className="absolute bg-black w-3/12 bg-opacity-80 rounded-md mx-auto right-0 left-0 my-36 flex flex-col h-80">
        <h1 className="text-white my-3 mx-4 text-2xl">Sign In</h1>
        <input
          type="text"
          placeholder="Email"
          className="p-3 mx-4  my-4 rounded-md text-white bg-slate-800 "
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 mx-4  my-4 rounded-md text-white bg-slate-800"
        />
        <button className="p-3 mx-4 rounded-md my-4  bg-red-800 text-white">
          sign in
        </button>

        </form>
      
    </div>
  );
};

export default Login;
