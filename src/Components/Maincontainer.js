import React from "react";
import { useSelector } from "react-redux";
import Videotitle from "./Videotitle";
import VideoBackgroud from "./VideoBackgroud";
const Maincontainer = () => {
  const movies = useSelector((store) => store?.movies?.movieslist);
  if (!movies) return;
  const bgvideoplaying = movies[0];
  //   console.log(bgvideoplaying)
  const { title, overview, id } = bgvideoplaying;
  return (
    <div>
      <Videotitle title={title} overview={overview} />
      <VideoBackgroud movieid={id} />
    </div>
  );
};

export default Maincontainer;
