import React from "react";

const MovieCard = (props) => {
  return (
    <div className="movie-card rounded-lg p-3 bg-slate-800 text-white">
      <img
        className="w-full h-[250px] object-cover rounded-lg mb-5"
        src="https://genk.mediacdn.vn/139269124445442048/2023/3/21/1-16789527941271488886901-1679413960731-16794139616321626370107.jpg"
        alt=""
      />
      <h3 className=" text-xl font-bold mb-3">{props.original_title}</h3>
      <div className="flex items-center justify-between text-sm opacity-50 mb-10">
        <span>2017</span>
        <span>7.4</span>
      </div>
      <button className="w-full py-3 px-6 rounded-lg capitalize bg-primary">
        Watch now
      </button>
    </div>
  );
};

export default MovieCard;
