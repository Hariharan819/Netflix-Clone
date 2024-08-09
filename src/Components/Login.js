import { useRef, useState } from "react";
import Header from ".//Header";
import { Backgrdimg_URL } from "../Utilis/constant";
import { checkvalidation } from "../Utilis/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Utilis/firebase";
import { adduser } from "../ReduxUtils/userslice";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const [signinform, setsigninform] = useState(true);
  const toggledfeature = () => {
    setsigninform(!signinform);
  };
  const [errormsg, seterrormsg] = useState(null);
  const Email = useRef(null);
  const Password = useRef(null);
  const Name = useRef(null);
  const validationcheck = () => {
    const message = checkvalidation(
      Email.current.value,
      Password.current.value
    );
    seterrormsg(message);
    if (message) return;

    if (!signinform) {
      //sigin up
      createUserWithEmailAndPassword(
        auth,
        Email.current.value,
        Password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: Name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              // Profile updated!
              // ...
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                adduser({ uid: uid, email: email, displayName: displayName })
              );
              // navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrormsg(errorMessage);
        });
    } else {
      //sigin

      signInWithEmailAndPassword(
        auth,
        Email.current.value,
        Password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          // navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrormsg(errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
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

        {!signinform ? (
          <input
            type="text"
            ref={Name}
            placeholder="Full Name"
            className="p-3 mx-4 my-4 rounded-md text-white bg-slate-800"
          />
        ) : (
          <p></p>
        )}

        {/* {!signinform && ()} */}

        <input
          ref={Email}
          type="text"
          placeholder="Email"
          autoComplete="on"
          className="p-3 mx-4  my-4 rounded-md text-white bg-slate-800 "
        />
        <input
          ref={Password}
          type="password"
          placeholder="Password"
          autoComplete="on"
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
