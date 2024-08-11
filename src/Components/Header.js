import React, { useEffect } from "react";
import { Logo_URL, profile_url } from "../Utilis/constant";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utilis/firebase";
import { adduser, removeuser } from "../ReduxUtils/userslice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addgptinfo } from "../ReduxUtils/Gptslice";
import { removekeyinfo } from "../ReduxUtils/movieslice";
import { removesearchresult } from "../ReduxUtils/searchslice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const gptdatafromreduxstore = useSelector((store) => store.gptdata.gptinfos);
  const userdata = useSelector((store) => store.user);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = auth.currentUser;
        dispatch(adduser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeuser());
        navigate("/");
      }
    });
    return () => unsubscribe();
    // eslint-disable-next-line
  }, []);
  const sigoutfn = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const gptsearchevnt = () => {
    dispatch(addgptinfo());
    dispatch(removesearchresult());
  };
 
  return (
    <div className="absolute w-[100%] px-16 py-3 bg-gradient-to-b from-gray-900 z-50   flex justify-between no-scrollbar">
      <img src={Logo_URL} alt="logo" className="w-40" />

      {userdata && (
        <div className="flex">
          <button
            className="bg-green-400 px-4  my-4 rounded-sm -mx-10  text-black font-serif "
            onClick={gptsearchevnt}
          >
            {gptdatafromreduxstore ? "HomePage" : "SearchPage"}
          </button>
          <img
            src={profile_url}
            alt=""
            className="h-10 mx-14 my-3 rounded-sm"
          />
          <button
            onClick={sigoutfn}
            className="text-white text-xl py-3 -mx-12 font-serif"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

// {gptdatafromreduxstore && (<div className="flex">
//   <img src={profile_url} alt=""  className="h-10 mx-14 my-3"/>
//  <button onClick={sigoutfn} className="text-white text-xl py-3 -mx-12 font-serif">Sign out</button>
// </div>)}
export default Header;
