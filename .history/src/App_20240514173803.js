import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import MovieList from "./Components/movie/MovieList";
import Banner from "./Components/banner/Banner";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";

function App() {
  return (
    <Fragment>
      <header className="header flex items-center justify-center gap-x-5 text-white py-10 mb-10">
        <NavLink
          to={"/"}
          className="text-primary is-active"
          className={({ isActive }) =>
            isActive ? "text-green-400 font-semibold" : ""
          }
        >
          Home
        </NavLink>
        <NavLink to={"/movies"}>Movies</NavLink>
      </header>

      <Banner></Banner>

      <section className="movie-layout page-container pb-20">
        <h2 className="capitalize text-white mb-10 text-3xl font-bold">
          Now playing
        </h2>
        <MovieList type="now_playing"></MovieList>
      </section>

      <section className="movie-layout page-container pb-20">
        <h2 className="capitalize text-white mb-10 text-3xl font-bold">
          Top rated
        </h2>
        <MovieList type="top_rated"></MovieList>
      </section>

      <section className="movie-layout page-container pb-20">
        <h2 className="capitalize text-white mb-10 text-3xl font-bold">
          Trending
        </h2>
        {/* Cart List */}
        <MovieList type="popular"></MovieList>
      </section>
    </Fragment>
  );
}

export default App;
