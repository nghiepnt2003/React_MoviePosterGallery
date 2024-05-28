import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";

const MovieCard = ({ item }) => {
  const { id, title, vote_average, release_date, poster_path } = item;
  const navigate = useNavigate();
  return (
    <div className="movie-card rounded-lg p-3 bg-slate-800 text-white h-full select-none flex  flex-col">
      <img
        className="w-full h-[250px] object-cover rounded-lg mb-5"
        src={`http://image.tmdb.org/t/p/w500/${poster_path}`}
        alt=""
      />
      <div className="flex flex-col flex-1">
        <h3 className=" text-xl font-bold mb-3">{title}</h3>
        <div className="flex items-center justify-between text-sm opacity-50 mb-10">
          <span>{new Date(release_date).getFullYear()}</span>
          <span>{vote_average}</span>
        </div>
        <Button
          onClick={() => {
            navigate(`/movies/${id}`);
          }}
        >
          Watch now
        </Button>
        {/* <button
          onClick={() => {
            // Click vô thì chuyển hướng đến cái đường dẫn này
            navigate(`/movies/${id}`);
          }}
          className="w-full py-3 px-6 rounded-lg capitalize bg-primary mt-auto"
        >
          Watch now
        </button> */}
      </div>
    </div>
  );
};

export default MovieCard;
