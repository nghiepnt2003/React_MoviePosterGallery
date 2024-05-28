import React, { Fragment, useEffect, useState } from "react";
import MovieList from "../Components/movie/MovieList";
import useSWR from "swr";
import { api_key, fetcher, tmdbAPI } from "Config";
import MovieCard from "../Components/movie/MovieCard";
import useDebounce from "../Hooks/useDebounce";
import ReactPaginate from "react-paginate";

const itemsPerPage = 20;

// https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=API_KEY
const MoviePage = () => {
  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  const [filter, setFilter] = useState("");
  const filterDebounce = useDebounce(filter, 2000);
  const [nextPage, setNextPage] = useState(1);
  const [url, setUrl] = useState(tmdbAPI.getMovieList("popular", nextPage));
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
  // Khi debounce chạy xong => sẽ vào đây
  useEffect(() => {
    if (filterDebounce && filterDebounce !== "") {
      setUrl(tmdbAPI.getMovieSearch(filterDebounce, nextPage));
    } else {
      setUrl(tmdbAPI.getMovieList("popular", nextPage));
    }
  }, [filterDebounce, nextPage]);
  const { data, error, isLoading } = useSWR(url, fetcher);
  const movies = data?.results || [];
  useEffect(() => {
    if (!data || !data.total_results) {
      return;
    }
    setPageCount(Math.ceil(data.total_results / itemsPerPage));
  }, [data, itemOffset]);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.total_results;
    setItemOffset(newOffset);
    setNextPage(event.selected + 1);
  };
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
        <div className="w-10 h-10 rounded-full  border-4 border-primary border-t-transparent border-t-4 mx-auto animate-spin mt-10"></div>
      )}
      {!isLoading && (
        <Fragment>
          <div className="grid grid-cols-4 gap-10">
            {movies.length > 0 &&
              movies.map((item) => (
                <MovieCard key={item.key} item={item}></MovieCard>
              ))}
          </div>
          <div className="mt-10">
            <ReactPaginate
              breakLabel="..."
              nextLabel="next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel="< previous"
              renderOnZeroPageCount={null}
              className="pagination"
            />
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default MoviePage;
