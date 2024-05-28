import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { api_key, fetcher } from "../Config";

// https://api.themoviedb.org/3/movie/{movie_id}

// https://api.themoviedb.org/3/movie/{movie_id}/credits
const MovieDetailPage = () => {
  const { movieID } = useParams();
  const { data, error, isLoading } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieID}?api_key=${api_key}`,
    fetcher
  );
  if (!data) return null;
  const { poster_path, backdrop_path, title, genres, overview } = data || [];
  return (
    <div className="py-10">
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
      <h1 className="text-white text-center font-bold text-4xl mb-10 ">
        {title}
      </h1>
      {genres.length > 0 && (
        <div className="flex items-center justify-center gap-x-5 mb-10">
          {genres.map((item) => (
            <span
              className="border border-primary text-primary rounded-lg  px-4 py-2"
              key={item.id}
            >
              {item.name}
            </span>
          ))}
        </div>
      )}
      <p className="text-center text-lg leading-relaxed max-w-[600px] mx-auto mb-10">
        {overview}
      </p>
      <MovieCredits></MovieCredits>
      <MovieVideos></MovieVideos>
    </div>
  );
};

function MovieCredits() {
  const { movieID } = useParams();

  const { data, error, isLoading } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=${api_key}`,
    fetcher
  );
  if (!data) return null;
  const { cast } = data;
  if (cast.length <= 0 || !cast) return null;
  return (
    <div className="py-10">
      <h2 className="text-center text-3xl mb-10">Casts</h2>
      <div className="grid grid-cols-4 gap-5">
        {/* Lấy ra 4 phần tử đầu trong cast */}
        {cast.slice(0, 4).map((item) => (
          <div key={item.id} className="cast-item">
            <img
              className="w-full h-[350px] object-cover rounded-lg mb-1"
              src={`http://image.tmdb.org/t/p/original//${item.profile_path}`}
              alt=""
            />
            <h3 className="text-xl text-center font-medium">{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

function MovieVideos() {
  const { movieID } = useParams();

  const { data, error, isLoading } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=${api_key}`,
    fetcher
  );
  if (!data) return null;
  console.log(data);
  return <div></div>;
}

export default MovieDetailPage;
