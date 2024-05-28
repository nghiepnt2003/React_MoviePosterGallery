import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import "swiper/scss";
import MovieList from "./Components/movie/MovieList";
function App() {
  return (
    <Fragment>
      <header className="header flex items-center justify-center gap-x-5 text-white py-10 mb-10">
        <NavLink className="text-primary">Home</NavLink>
        <NavLink>Movies</NavLink>
      </header>
      <section className="banner h-[500px] page-container pb-20">
        <div className="w-full h-full rounded-lg relative ">
          <div className="overlay absolute inset-0 bg-gradient-to-t rounded-lg from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)]"></div>
          <img
            src="https://genk.mediacdn.vn/139269124445442048/2023/3/21/1-16789527941271488886901-1679413960731-16794139616321626370107.jpg"
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute left-5 bottom-5 w-full text-white">
            <h2 className="font-bold text-3xl mb-5">Avengers: Endgame</h2>

            <div className="flex items-center gap-x-3 mb-8 ">
              <span className="px-4 py-2 border border-white rounded-md">
                Adventure
              </span>
              <span className="px-4 py-2 border border-white rounded-md">
                Adventure
              </span>
              <span className="px-4 py-2 border border-white rounded-md">
                Adventure
              </span>
            </div>
            <button className="py-3 px-6 rounded-lg bg-primary text-white font-medium">
              Watch now
            </button>
          </div>
        </div>
      </section>
      <section className="movie-layout page-container pb-20">
        <h2 className="capitalize text-white mb-10 text-3xl font-bold">
          Now playing
        </h2>
        {/* Cart List */}
        <div className="movie-list grid grid-cols-4 gap-10">
          {/* Cart Item */}
          <div className="movie-card rounded-lg p-3 bg-slate-800 text-white">
            <img
              className="w-full h-[250px] object-cover rounded-lg mb-5"
              src="https://genk.mediacdn.vn/139269124445442048/2023/3/21/1-16789527941271488886901-1679413960731-16794139616321626370107.jpg"
              alt=""
            />
            <h3 className=" text-xl font-bold mb-3">Spiderman : No way home</h3>
            <div className="flex items-center justify-between text-sm opacity-50 mb-10">
              <span>2017</span>
              <span>7.4</span>
            </div>
            <button className="w-full py-3 px-6 rounded-lg capitalize bg-primary">
              Watch now
            </button>
          </div>
        </div>
      </section>

      <section className="movie-layout page-container pb-20">
        <h2 className="capitalize text-white mb-10 text-3xl font-bold">
          Top rated
        </h2>
        {/* Cart List */}
        <MovieList></MovieList>
      </section>

      <section className="movie-layout page-container pb-20">
        <h2 className="capitalize text-white mb-10 text-3xl font-bold">
          Trending
        </h2>
        {/* Cart List */}
        <div className="movie-list grid grid-cols-4 gap-10">
          {/* Cart Item */}
          <div className="movie-card rounded-lg p-3 bg-slate-800 text-white">
            <img
              className="w-full h-[250px] object-cover rounded-lg mb-5"
              src="https://genk.mediacdn.vn/139269124445442048/2023/3/21/1-16789527941271488886901-1679413960731-16794139616321626370107.jpg"
              alt=""
            />
            <h3 className=" text-xl font-bold mb-3">Spiderman : No way home</h3>
            <div className="flex items-center justify-between text-sm opacity-50 mb-10">
              <span>2017</span>
              <span>7.4</span>
            </div>
            <button className="w-full py-3 px-6 rounded-lg capitalize bg-primary">
              Watch now
            </button>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default App;
