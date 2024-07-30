import React from "react";
import { Logo_URL } from "../Utilis/constant";

const Header = () => {
  // const navigate=useNavigate();
  // const user=useSelector((store)=>store.user);
  // const sigoutfn = () => {
  //   signOut(auth)
  //     .then(() => {
  //       // Sign-out successful.
  //       navigate("/");
  //     })
  //     .catch((error) => {
  //       // An error happened.
  //     });
  // };
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
