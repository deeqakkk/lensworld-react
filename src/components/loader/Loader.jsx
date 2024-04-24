import React from "react";
import "../../loader.styles.css";
import loadingGif from "../../assets/loading.gif";
const Loader = () => {
  return (
    <div className="text-loader font-monoton flex flex-col gap-1 items-center">
      <span>
        <img
          width={100}
          src={loadingGif}
          alt="loading..."
          className="opacity-[0.25]"
        />
      </span>
      <div className="text-container">
        <span className="letter">L</span>
        <span className="letter">E</span>
        <span className="letter">N</span>
        <span className="letter">S</span>
        <span className="letter">W</span>
        <span className="letter">O</span>
        <span className="letter">R</span>
        <span className="letter">L</span>
        <span className="letter">D</span>
      </div>
    </div>
  );
};

export default Loader;
