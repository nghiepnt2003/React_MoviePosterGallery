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
      <div className="overlay"></div>
      <div className="w-full h-screen bg-cover bg-no-repeat">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url(http://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
          }}
        ></div>
      </div>
    </Fragment>
  );
};

export default MovieDetailPage;
