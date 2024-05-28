import React from "react";

const MovieCard = ({ item }) => {
  const { title } = item;
  return (
    <div className="movie-card rounded-lg p-3 bg-slate-800 text-white">
      <img
        className="w-full h-[250px] object-cover rounded-lg mb-5"
        src={item.backdrop_path}
        alt=""
      />
      <h3 className=" text-xl font-bold mb-3">{item.original_title}</h3>
      <div className="flex items-center justify-between text-sm opacity-50 mb-10">
        <span>{item.release_date}</span>
        <span>{item.vote_average}</span>
      </div>
      <button className="w-full py-3 px-6 rounded-lg capitalize bg-primary">
        Watch now
      </button>
    </div>
  );
};

export default MovieCard;
