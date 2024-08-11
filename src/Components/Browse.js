import React, { useEffect } from "react";
import { API_OPTIONS } from "../Utilis/constant";
import { useDispatch, useSelector } from "react-redux";
import {
  addmovieslist,
  addpopinfo,
  addtopinfo,
} from "../ReduxUtils/movieslice";
import Maincontainer from "./Maincontainer";
import Secondarycontainer from "./Secondarycontainer";
import Gptsearchpage from "./Gptsearchpage";
import Header from "./Header";
// import { json } from "react-router-dom";

const Browse = () => {
  const dispatch = useDispatch();
  const gptdatafromreduxstore = useSelector((store) => store.gptdata.gptinfos);
  const api_fetch = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US",
        API_OPTIONS
      );
      const json = await data.json();
      dispatch(addmovieslist(json.results));
    } catch (error) {
      console.log(error);
    }
    // console.log(json);
  };

  const apifetchpop = async () => {
    try {
      const popular_apifetch = await fetch(
        "https://api.themoviedb.org/3/movie/popular",
        API_OPTIONS
      );
      const popdata = await popular_apifetch.json();
      dispatch(addpopinfo(popdata.results));
    } catch (error) {
      console.log(error);
    }
  };

  const apifetchtoprated = async () => {
    try {
      const toprated_apifetch = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated",
        API_OPTIONS
      );
      const toprateddata = await toprated_apifetch.json();
      dispatch(addtopinfo(toprateddata.results));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    api_fetch();
    apifetchpop();
    apifetchtoprated();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="no-scrollbar">
      <Header />
      {gptdatafromreduxstore ? (
        <Gptsearchpage />
      ) : (
        <>
          <Maincontainer />
          <Secondarycontainer />
        </>
      )}
    </div>
  );
};

export default Browse;
