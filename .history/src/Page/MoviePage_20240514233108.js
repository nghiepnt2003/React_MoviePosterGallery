import React from "react";
import MovieList from "../Components/movie/MovieList";

const MoviePage = () => {
  const { data, error, isLoading } = useSWR(
    `https://api.themoviedb.org/3/movie/${type}?api_key=1131ba05247a46f0af67e1e0ed316977`,
    fetcher
  );
  const movies = data?.results || [];
  return (
    <div className="text-white py-10 ">
      <MovieList type="popular"></MovieList>
    </div>
  );
};

export default MoviePage;
