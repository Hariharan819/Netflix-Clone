import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../Utilis/constant";
import { useDispatch, useSelector } from "react-redux";
import { addmovieinfo } from "../ReduxUtils/movieslice";

const VideoBackgroud = ({ movieid }) => {
  //   const [ytkey, setytkey] = useState(null);
  const dispatch = useDispatch();
  const ytkeyfromreduxstore = useSelector(
    (store) => store?.movies?.trailerinfo
  );
  const moviefetchapi = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieid}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    const trailer = json.results.filter((videos) => videos.type === "Trailer");
    const filtertrailer = trailer.length ? trailer[0] : json.results[0];
    // setytkey(filtertrailer.key);
    dispatch(addmovieinfo(filtertrailer));
  };
  useEffect(() => {
    moviefetchapi();
  }, []);
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + ytkeyfromreduxstore?.key}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackgroud;
