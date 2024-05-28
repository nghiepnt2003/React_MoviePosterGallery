import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { api_key, fetcher } from "../Config";

// https://api.themoviedb.org/3/movie/{movie_id}
const MovieDetailPage = () => {
  const { movieID } = useParams();
  const { data, error, isLoading } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieID}?api_key=${api_key}`,
    fetcher
  );
  const movie = data || [];
  console.log(movie);
  return (
    <Fragment>
      <div
        className="w-full h-screen bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(http://image.tmdb.org/t/p/w500/${movie.backdrop_path})`,
        }}
      ></div>
    </Fragment>
  );
};

export default MovieDetailPage;
