import React from "react";
import MovieList from "../Components/movie/MovieList";

const MoviePage = () => {
  return (
    <div className="text-white py-10 ">
      <MovieList type="popular"></MovieList>
    </div>
  );
};

export default MoviePage;
