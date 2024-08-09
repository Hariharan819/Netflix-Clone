import { useDispatch } from "react-redux";
import { CDN_IMGurl } from "../Utilis/constant";
import { addidinfo } from "../ReduxUtils/movieslice";
import { Link } from "react-router-dom";

const Moviecards = ({ pathofimg, data }) => {
  const dispatch = useDispatch();
  const eachmoviedata = data;
  const clickfunction = () => {
    dispatch(addidinfo(eachmoviedata));
  };

  // console.log(data)
  return (
    <div className="w-48 hover:-translate-y-4 cursor-pointer transition-transform">
      <Link to={"/videoplayground"}>
        <img
          onClick={clickfunction}
          className="rounded-md w-48 h-[100%] pr-2"
          src={CDN_IMGurl + pathofimg}
          alt="movie_img"
        />
      </Link>
    </div>
  );
};

export default Moviecards;
