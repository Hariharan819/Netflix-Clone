import React from "react";
import { Backgrdimg_URL } from "../Utilis/constant";

const Gptsearchbar = () => {
  return (
    <div className="-mt-40">
      <div className="absolute -z-30">
        <img src={Backgrdimg_URL} alt="background img" />
      </div>

      <div className="bg-black w-2/4 rounded-sm absolute z-50 ml-[25%] mt-[6%] bg-opacity-75">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="What's  On Your Mind Search Here!"
          className="p-3 rounded-md w-3/4 mx-4"
        />
        <button className="bg-red-600 px-10 py-3 mx-1 my-4 rounded-md text-white">
          Search
        </button>
      </div>


    </div>
  );
};

export default Gptsearchbar;
