import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import MovieList from "./Components/movie/MovieList";
import Banner from "./Components/banner/Banner";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import Header from "./Components/Layout/Header";
import HomePage from "./Page/HomePage";

function App() {
  return (
    <Fragment>
      <Header></Header>
      <Banner></Banner>
      <HomePage></HomePage>
    </Fragment>
  );
}

export default App;
