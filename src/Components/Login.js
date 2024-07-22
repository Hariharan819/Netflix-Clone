import React, { useRef, useState } from "react";
import Header from ".//Header";
import { Backgrdimg_URL } from "../Utilis/constant";
import { checkvalidation } from "../Utilis/validate";
const Login = () => {
  const [signinform, setsigninform] = useState(true);
  const toggledfeature = () => {
    setsigninform(!signinform);
  };

  const [errormsg, seterrormsg] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const validationcheck = () => {
    const message = checkvalidation(
      email.current.value,
      password.current.value,
      name.current.value
    );
    seterrormsg(message);
    console.log(message);
  };
  return (
    <div>
      <Header />
      <div className="absolute" l>
        <img src={Backgrdimg_URL} alt="bgimg" className="w-12/12" />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        action=""
        className="absolute bg-black w-3/12 bg-opacity-80 rounded-md mx-auto right-0 left-0 my-36 flex flex-col "
      >
        <h1 className="text-white my-3 mx-4 text-2xl font-serif">
          {signinform ? "Sign In" : "Sign Up"}
        </h1>

        {!signinform && (
          <input
            ref={name}
            type="text"
            placeholder=" Full Name"
            className="p-3 mx-4  my-4 rounded-md text-white bg-slate-800 "
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="p-3 mx-4  my-4 rounded-md text-white bg-slate-800 "
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 mx-4  my-4 rounded-md text-white bg-slate-800"
        />
        <p className="text-red-700 py-1 font-semibold  mx-4 ">{errormsg}</p>
        <button
          className="p-3 mx-4 rounded-md my-4  bg-red-800 text-white font-mono"
          onClick={validationcheck}
        >
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
