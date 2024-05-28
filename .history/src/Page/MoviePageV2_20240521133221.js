import React, { Fragment, useEffect, useState } from "react";
import MovieList from "../Components/movie/MovieList";
import useSWR from "swr";
import { api_key, fetcher, tmdbAPI } from "../Config";
import MovieCard, { MovieCardSkeleton } from "../Components/movie/MovieCard";
import useDebounce from "../Hooks/useDebounce";
import ReactPaginate from "react-paginate";
import LoadingSkeleton from "src/Components/loading/LoadingSkeleton";
import useSWRInfinite from "swr/infinite";
import { v4 } from "uuid";
import Button from "src/Components/button/Button";
const itemsPerPage = 20;

const MoviePageV2 = () => {
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
  const { data, error, size, setSize, isLoading } = useSWRInfinite((index) => {
    setNextPage(index + 1);
    return url;
  }, fetcher);
  //   const isLoading = !data && !error;
  console.log(data);
  const movies = data?.results || [];
  //   useEffect(() => {
  //     if (!data || !data.total_results) {
  //       return;
  //     }
  //     setPageCount(Math.ceil(data.total_results / itemsPerPage));
  //   }, [data, itemOffset]);
  //   const handlePageClick = (event) => {
  //     const newOffset = (event.selected * itemsPerPage) % data.total_results;
  //     setItemOffset(newOffset);
  //     setNextPage(event.selected + 1);
  //   };
  return null;
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
      {/* {isLoading && (
        <div className="w-10 h-10 rounded-full  border-4 border-primary border-t-transparent border-t-4 mx-auto animate-spin mt-10"></div>
      )} */}
      {isLoading && (
        <div className="grid grid-cols-4 gap-10">
          {new Array(20).fill(0).map(() => {
            <MovieCardSkeleton key={v4()}></MovieCardSkeleton>;
          })}
        </div>
      )}
      {!isLoading && (
        <Fragment>
          <div className="grid grid-cols-4 gap-10">
            {movies.length > 0 &&
              movies.map((item) => (
                <MovieCard key={item.key} item={item}></MovieCard>
              ))}
          </div>
          {/* <div className="mt-10">
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
          </div> */}
          <div className="mt-10 text-center">
            <Button className={`font-bold`}>Load More</Button>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default MoviePageV2;
