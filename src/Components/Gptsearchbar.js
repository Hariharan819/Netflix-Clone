import React, { useRef } from "react";
import { API_OPTIONS, Backgrdimg_URL } from "../Utilis/constant";
import { useDispatch } from "react-redux";
import { addmovieinfo, addsearchmovieinfo } from "../ReduxUtils/movieslice";

const Gptsearchbar = () => {
  const dispatch = useDispatch();
  const searchvalue = useRef(null);

  const searchevent = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        searchvalue?.current?.value +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const jsondata = await data?.json();
    // console.log(jsondata.results);
    dispatch(addsearchmovieinfo(jsondata?.results));
  };

  return (
    <div className="-mt-40">
      <div className="absolute -z-30">
        <img src={Backgrdimg_URL} alt="background img" />
      </div>

      <div className="bg-black w-2/4 rounded-sm absolute z-50 ml-[25%] mt-[6%] bg-opacity-75">
        <input
          ref={searchvalue}
          type="text"
          name="search"
          id="search"
          placeholder="What's  On Your Mind Search Here!"
          className="p-3 rounded-md w-3/4 mx-4"
        />
        <button
          onSubmit={(e) => e.preventDefault()}
          className="bg-red-600 px-10 py-3 mx-1 my-4 rounded-md text-white"
          onClick={searchevent}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Gptsearchbar;
