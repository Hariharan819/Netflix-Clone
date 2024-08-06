import React, { useEffect } from "react";
import Browseheader from "./Browseheader";
import { API_OPTIONS } from "../Utilis/constant";
import { useDispatch } from "react-redux";
import { addmovieslist, addpopinfo } from "../ReduxUtils/movieslice";
import Maincontainer from "./Maincontainer";
import Secondarycontainer from "./Secondarycontainer";
// import { json } from "react-router-dom";

const Browse = () => {
  const dispatch = useDispatch();
  const api_fetch = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addmovieslist(json.results));
    // console.log(json);
  };

  const apifetchpop = async () => {
    const popular_apifetch = await fetch(
      "https://api.themoviedb.org/3/movie/popular",
      API_OPTIONS
    );
    const popdata = await popular_apifetch.json();
    dispatch(addpopinfo(popdata.results));
  };

  useEffect(() => {
    api_fetch();
    apifetchpop();
  }, []);

  return (
    <div>
      <Browseheader />
      <Maincontainer />
      <Secondarycontainer />
    </div>
  );
};

export default Browse;
