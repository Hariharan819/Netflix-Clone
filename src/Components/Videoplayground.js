import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../Utilis/constant";
import { addkeyinfo, removekeyinfo } from "../ReduxUtils/movieslice";

const Videoplayground = () => {
  const dispatch = useDispatch();
  const [keyvalue, setkeyvalue] = useState(0);
  const [keyvalue2, setkeyvalue2] = useState(0);

  const ytkeyfromreduxstore = useSelector((store) => store?.movies?.id_data);
  const keyfromstore = useSelector((store) => store?.movies?.keydata);
  const movieid = ytkeyfromreduxstore?.id;

  // setkeyvalue(ytkeyfromreduxstore?.id);

  const moviefetchapi = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieid}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    if (json.results) {
      const trailer = json.results.filter(
        (videos) => videos.type === "Trailer"
      );
      const filtertrailer = trailer.length ? trailer[0] : json.results[0];
      dispatch(addkeyinfo(filtertrailer));
    } else {
      dispatch(removekeyinfo());
    }

    // console.log(filtertrailer);
    // setkeyvalue2(keyfromstore?.data);
  };
  useEffect(() => {
    moviefetchapi();
  }, []);
  return (
    <div>
      <div className="">
        <iframe
          className="aspect-video w-screen h-screen overflow-y-scroll no-scrollbar "
          src={
            "https://www.youtube.com/embed/" +
            keyfromstore?.key +
            "?&autoplay=1&mute=1"
          }
          title="YouTube video player"
          allow="accelerometer;clipboard-write; gyroscope;fullscreen;"
        ></iframe>
      </div>
    </div>
  );
};

export default Videoplayground;
