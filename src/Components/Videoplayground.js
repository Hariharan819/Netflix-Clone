import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../Utilis/constant";
import { addkeyinfo } from "../ReduxUtils/movieslice";

const Videoplayground = (data) => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const ytkeyfromreduxstore = useSelector(
    (store) => store?.movies?.id_data?.[0]
  );
  const keyfromstore = useSelector((store) => store?.movies?.keydata);
  const movieid = ytkeyfromreduxstore?.id;

  // setkeyvalue(ytkeyfromreduxstore?.id);

  const moviefetchapi = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieid}/videos?language=en-US`,
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
    }
    // state.items.push(action.payload);
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
