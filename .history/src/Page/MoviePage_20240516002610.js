import React, { useEffect, useState } from "react";
import MovieList from "../Components/movie/MovieList";
import useSWR from "swr";
import { api_key, fetcher } from "../Config";
import MovieCard from "../Components/movie/MovieCard";
import useDebounce from "../Hooks/useDebounce";

// https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=API_KEY
const MoviePage = () => {
  const [filter, setFilter] = useState("");
  const filterDebounce = useDebounce(filter, 2000);
  const [url, setUrl] = useState(
    "https://api.themoviedb.org/3/movie/popular?api_key=1131ba05247a46f0af67e1e0ed316977"
  );
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
  // Khi debounce chạy xong => sẽ vào đây
  useEffect(() => {
    if (filterDebounce && filterDebounce !== "") {
      setUrl(
        `https://api.themoviedb.org/3/search/movie?query=${filterDebounce}&api_key=${api_key}`
      );
    } else {
      setUrl(
        "https://api.themoviedb.org/3/movie/popular?api_key=1131ba05247a46f0af67e1e0ed316977"
      );
    }
  }, [filterDebounce]);
  const { data, error, isLoading } = useSWR(url, fetcher);
  const movies = data?.results || [];
  return (
    <div className="py-10 page-container">
      <div className="flex mb-4">
        <div className="flex-1">
          <input
            type="text"
            className="w-full p-4 bg-slate-800 text-white outline-none"
            placeholder="Searching..."
            onChange={handleFilterChange}
          />
        </div>
        <button className="text-white p-4 bg-primary rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </div>
      {isLoading && (
        <div className="w-10 h-10 rounded-full border border-4 border-primary border-t-transparent border-t-4 mx-auto animate-spin mt-10"></div>
      )}
        <div className="grid grid-cols-4 gap-10">
      {!isLoading && (

          {movies.length > 0 &&
            movies.map((item) => (
              <MovieCard key={item.key} item={item}></MovieCard>
            ))}
        </div>
        
  );
      )}
    </div>
};

export default MoviePage;
