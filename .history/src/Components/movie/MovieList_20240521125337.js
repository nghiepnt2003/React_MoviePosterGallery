import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard, { MovieCardSkeleton } from "./MovieCard";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../Config";
import React from "react";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";

// https://api.themoviedb.org/3/movie/now_playing?api_key=1131ba05247a46f0af67e1e0ed316977
// https://api.themoviedb.org/3/movie/top_rated?api_key=1131ba05247a46f0af67e1e0ed316977
const MovieList = ({ type }) => {
  const { data, error, isLoading } = useSWR(
    tmdbAPI.getMovieList(type),
    fetcher
  );
  const movies = data?.results || [];
  return (
    <div className="movie-list">
      {!isLoading && (
        <>
          <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
            <MovieCardSkeleton></MovieCardSkeleton>
          </Swiper>
        </>
      )}
      <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieCard item={item}></MovieCard>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

MovieList.propTypes = {
  type: PropTypes.string.isRequired,
};

function FallbackComponent() {
  return (
    <p className="bg-red-50 text-red-400">
      Something went wrong with this component
    </p>
  );
}
export default withErrorBoundary(MovieList, {
  FallbackComponent,
});
