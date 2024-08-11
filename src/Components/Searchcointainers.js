import React from "react";
import Movielist from "./Movielist";
import { useSelector } from "react-redux";

const Searchcointainers = () => {
  const searchresultfromstore = useSelector(
    (store) => store.searchresult.searchmovieinfo
  );
  return (
    <div className=" bg-stone-950 bg-opacity-40">
      <div className="pt-[27%]">
        <Movielist title={"Search Result"} moviedata={searchresultfromstore} />
      </div>
    </div>
  );
};

export default Searchcointainers;
