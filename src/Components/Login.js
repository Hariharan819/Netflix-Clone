import React, { useState } from "react";
import Header from ".//Header";
import { Backgrdimg_URL } from "../Utilis/constant";
const Login = () => {
  const [signinform, setsigninform] = useState(true);
  const toggledfeature = () => {
    setsigninform(!signinform);
  };

  return (
    <div>
      <Header />
      <div className="absolute" l>
        <img src={Backgrdimg_URL} alt="bgimg" className="w-12/12" />
      </div>

      <form
        action=""
        className="absolute bg-black w-3/12 bg-opacity-80 rounded-md mx-auto right-0 left-0 my-36 flex flex-col "
      >
        <h1 className="text-white my-3 mx-4 text-2xl font-serif">
          {signinform ? "Sign In" : "Sign Up"}
        </h1>

        {!signinform && (
          <input
            type="text"
            placeholder=" Full Name"
            className="p-3 mx-4  my-4 rounded-md text-white bg-slate-800 "
          />
        )}
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
        <button className="p-3 mx-4 rounded-md my-4  bg-red-800 text-white font-mono">
          {signinform ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="text-white p-3 mx-4 cursor-pointer"
          onClick={toggledfeature}
        >
          {!signinform
            ? "Already Registered ? Sign In Now "
            : "New to Netflix? Sign Up Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
