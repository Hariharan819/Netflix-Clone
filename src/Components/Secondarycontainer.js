import React from "react";
import Movielist from "./Movielist";
import { useSelector } from "react-redux";

const Secondarycontainer = () => {
  const moviedatafromreduxstore = useSelector((store) => store.movies);
  // console.log(moviedatafromreduxstore);
  return (
    <div className="bg-stone-950">
      <div className="-mt-40 relative z-20">
        <Movielist
          title={"Now playing"}
          moviedata={moviedatafromreduxstore.movieslist}
        />
      </div>
    </div>
  );
};

export default Secondarycontainer;
