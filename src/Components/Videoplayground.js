import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../Utilis/constant";
import { addkeyinfo } from "../ReduxUtils/movieslice";
import { useNavigate, useParams } from "react-router-dom";

const Videoplayground = () => {
  const { id } = useParams();
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const keyfromstore = useSelector((store) => store?.movies?.keydata);
  const moviefetchapi = async () => {

    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data?.json();
    if (json?.results) {
      const trailer = json?.results?.filter(
        (videos) => videos?.type === "Trailer"
      );
      const filtertrailer = trailer?.length ? trailer[0] : json?.results[0];
      dispatch(addkeyinfo(filtertrailer));
    } else {
      navigate("/browse");
    }

    // state.items.push(action.payload);
    // console.log(filtertrailer);
    // setkeyvalue2(keyfromstore?.data);
  };
  useEffect(() => {
    moviefetchapi();
      // eslint-disable-next-line
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
