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
  const { poster_path, backdrop_path, title, genres } = data || [];
  return (
    <Fragment>
      <div className="w-full h-[600px] bg-cover bg-no-repeat relative">
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div
          className="w-full h-full bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(http://image.tmdb.org/t/p/original/${backdrop_path})`,
          }}
        ></div>
      </div>
      <div className="w-full h-[400px] max-w-[800px] mx-auto -mt-[200px] relative z-10 pb-10">
        <img
          className="w-full h-full object-cover rounded-xl"
          src={`http://image.tmdb.org/t/p/original//${poster_path}`}
          alt=""
        />
      </div>
      <h1 className="text-white text-center font-bold text-3xl mb-10 ">
        {title}
      </h1>
      {genres.length > 0 && (
        <div className="flex items-center gap-x-5 mb-10">
          {genres.map((item) => (
            <span
              className="border rounded-md items-center px-5 py-3"
              key={item.id}
            >
              {item.name}
            </span>
          ))}
        </div>
      )}
    </Fragment>
  );
};

export default MovieDetailPage;
