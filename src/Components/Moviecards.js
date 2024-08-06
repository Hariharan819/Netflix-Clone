import React from "react";
import { CDN_IMGurl } from "../Utilis/constant";

const Moviecards = ({ pathofimg }) => {
  return (
    <div className="w-48">
      <img className="rounded-md w-48 h-[100%] pr-2" src={CDN_IMGurl + pathofimg} alt="movie_img" />
    </div>
  );
};

export default Moviecards;
