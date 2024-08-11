import React, { useRef } from "react";
import { API_OPTIONS, Backgrdimg_URL } from "../Utilis/constant";
import { useDispatch, useSelector } from "react-redux";
import Searchcointainers from "./Searchcointainers";
import { addsearchmovieinfo } from "../ReduxUtils/searchslice";

const Gptsearchbar = () => {
  const dispatch = useDispatch();
  // const gptdatafromreduxstore = useSelector((store) => store.gptdata.gptinfos);
  const searchresultfromstore = useSelector(
    (store) => store?.searchresult?.searchmovieinfo
  );
  const searchvalue = useRef(null);
  const searchevent = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        searchvalue?.current?.value +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    if (data) {
      const jsondata = await data?.json();
      // console.log(jsondata.results);
      dispatch(addsearchmovieinfo(jsondata?.results));
    }
  };

  return (
    <div className="-mt-40">
      <div className="absolute -z-30 ">
        <img src={Backgrdimg_URL} alt="background img" />
      </div>

      <div className="bg-black w-2/4 rounded-sm absolute z-50 ml-[25%] mt-[6%] bg-opacity-75">
        <input
          ref={searchvalue}
          type="text"
          name="search"
          id="search"
          placeholder="Search Movies Here!"
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
      {searchresultfromstore && <Searchcointainers />}
    </div>
  );
};

export default Gptsearchbar;
