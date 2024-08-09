import React from "react";

const Videotitle = ({ title, overview }) => {
  return (
    <div className="pt-60 px-12 absolute text-white bg-gradient-to-r from-stone-800 w-[100%] aspect-video">
      <h2 className="font-serif text-3xl font-semibold my-4">{title}</h2>
      <p className="text-base my-4 text-balance w-2/4 font-semibold">
        {overview}
      </p>
      <div className="my-4">
        <button className="bg-white px-9 rounded-md py-2  text-black font-semibold hover:bg-opacity-80">
          Play
        </button>
        <button className="bg-gray-500 px-9 rounded-md py-2 mx-2 text-white font-semibold bg-opacity-40">
          More Info
        </button>
      </div>
    </div>
  );
};

export default Videotitle;
