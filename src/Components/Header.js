import React, { useEffect } from "react";
import { Logo_URL } from "../Utilis/constant";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Utilis/firebase";
import { adduser, removeuser } from "../ReduxUtils/userslice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = auth.currentUser;
        dispatch(adduser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeuser);
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute px-16 py-2 bg-gradient-to-b from-gray-900 z-30">
      <img src={Logo_URL} alt="logo" className="w-40" />

      {/* {user && (<div className="flex">
        <img src={profile_url} alt=""  className="h-10 mx-14 my-3"/>
       <button onClick={sigoutfn} className="text-white text-xl py-3 -mx-12 font-serif">Sign out</button>
    </div>)}   */}
    </div>
  );
};

export default Header;
