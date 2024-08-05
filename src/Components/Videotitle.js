import React from "react";

const Videotitle = ({ title, overview }) => {
  return (
    <div className="pt-36 mx-12 w-5/12">
      <h2 className="font-serif text-3xl font-semibold my-4">{title}</h2>
      <p className="font-mono text-base my-4">{overview}</p>
      <div className="my-4">
        <button className="bg-white px-9 rounded-sm py-2  text-black font-semibold">
          Play
        </button>
        <button className="bg-gray-500 px-9 rounded-sm py-2 mx-2 text-white font-semibold bg-opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default Videotitle;
