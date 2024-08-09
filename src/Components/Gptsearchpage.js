import React from "react";
import Gptsearchbar from "./Gptsearchbar";
import Gptsuggestions from "./Gptsuggestions";

const Gptsearchpage = () => {
  return (
    <div className="pt-[10%] no-scrollbar">
      <Gptsearchbar />
      <Gptsuggestions />
    </div>
  );
};

export default Gptsearchpage;
