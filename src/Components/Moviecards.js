import { CDN_IMGurl } from "../Utilis/constant";
import { Link } from "react-router-dom";
// import { useState } from "react";

const Moviecards = ({ pathofimg, data }) => {
  // const [data1, setdata1] = useState(null);

  return (
    <div className="w-48 hover:-translate-y-4 cursor-pointer transition-transform">
      <Link to={"/videoplayground/" + data?.id}>
        <img
          className="rounded-md w-48 h-[100%] pr-2"
          src={CDN_IMGurl + pathofimg}
          alt="movie_img"
        />
      </Link>
    </div>
  );
};

export default Moviecards;
