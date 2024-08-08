import React from "react";
import Moviecards from "./Moviecards";
import { Link } from "react-router-dom";

const Movielist = ({ title, moviedata }) => {
  return (
    <div className="py-4 px-1 ">
      <h2 className="px-2 font-serif font-semibold text-xl text-white">
        {title}
      </h2>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex px-2">
          {moviedata?.map((movie) => (
            <Moviecards
              key={movie?.id}
              pathofimg={movie.poster_path}
              data={movie}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movielist;
