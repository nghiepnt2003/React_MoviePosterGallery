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
    <div className="py-10 page-container">
      <div className="flex mb-4">
        <div className="flex-1">
          <input
            type="text"
            className="w-full p-4 bg-transparent"
            placeholder="Searching..."
          />
        </div>
        <button className="text-white p-4 bg-primary rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-4 gap-10">
        {movies.length > 0 &&
          movies.map((item) => <MovieCard item={item}></MovieCard>)}
      </div>
    </div>
  );
};

export default MoviePage;
