import React, { useEffect } from "react";
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
      // eslint-disable-next-line
  }, []);
  return (
    <div className="w-[100%] no-scrollbar">
      <iframe
        className="aspect-video w-[100%]  "
        src={
          "https://www.youtube.com/embed/" +
          ytkeyfromreduxstore?.key +
          "?&autoplay=1&mute=1"
        }
        // https://www.youtube.com/embed/o17MF9vnabg?si=iY5A5sJSJRXADwP_"
        title="YouTube video player"
        allow="accelerometer;clipboard-write; gyroscope;fullscreen;"
      ></iframe>
    </div>
  );
};

export default VideoBackgroud;
