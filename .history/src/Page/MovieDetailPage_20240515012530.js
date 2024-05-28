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
  if (!data) return null;
  console.log(data);
  const { poster_path, backdrop_path } = data || [];
  console.log(poster_path);
  return (
    <Fragment>
      <div className="w-full h-[600px] bg-cover bg-no-repeat relative mb-10">
        <div className="absolute inset-0 bg-black bg-opacity-25"></div>
        <div
          className="w-full h-full bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(http://image.tmdb.org/t/p/original/${backdrop_path})`,
          }}
        ></div>
      </div>
      <div className="w-full h-[300px]">
        <img
          className="w-full h-full object-cover"
          src={`url(http://image.tmdb.org/t/p/original//${poster_path})`}
          alt=""
        />
      </div>
    </Fragment>
  );
};

export default MovieDetailPage;
