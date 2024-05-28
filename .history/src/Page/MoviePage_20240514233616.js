import React from "react";
import MovieList from "../Components/movie/MovieList";
import useSWR from "swr";
import { fetcher } from "../Config";
import MovieCard from "../Components/movie/MovieCard";

const MoviePage = () => {
  const { data, error, isLoading } = useSWR(
    `https://api.themoviedb.org/3/movie/popular?api_key=1131ba05247a46f0af67e1e0ed316977`,
    fetcher
  );
  const movies = data?.results || [];
  return (
    <div className="py-10">
      <div className="flex">
        <div className="flex-1">
          <input type="text" className="w-full" />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-10">
        {movies.length > 0 &&
          movies.map((item) => <MovieCard item={item}></MovieCard>)}
      </div>
    </div>
  );
};

export default MoviePage;
