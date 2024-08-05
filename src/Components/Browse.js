import React, { useEffect } from "react";
import Browseheader from "./Browseheader";
import { API_OPTIONS } from "../Utilis/constant";
import { useDispatch } from "react-redux";
import { addmovieslist } from "../ReduxUtils/movieslice";
import Maincontainer from "./Maincontainer";
import Secondarycontainer from "./Secondarycontainer";
// import { json } from "react-router-dom";

const Browse = () => {
  const dispatch = useDispatch();
  const api_fetch = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addmovieslist(json.results));
    // console.log(json);
  };
  useEffect(() => {
    api_fetch();
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
