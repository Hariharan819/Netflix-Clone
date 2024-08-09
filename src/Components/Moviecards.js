import { CDN_IMGurl } from "../Utilis/constant";

const Moviecards = ({ pathofimg, data }) => {
  // console.log(data)
  return (
    <div className="w-48 hover:-translate-y-4 cursor-pointer transition-transform">
      <img
        className="rounded-md w-48 h-[100%] pr-2"
        src={CDN_IMGurl + pathofimg}
        alt="movie_img"
      />

    </div>
  );
};

export default Moviecards;
