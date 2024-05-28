import { Fragment } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import MovieList from "./Components/movie/MovieList";
import Banner from "./Components/banner/Banner";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import Header from "./Components/Layout/Header";
import HomePage from "./Page/HomePage";
import Main from "./Components/Layout/Main";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
      </Routes>
    </Fragment>
  );
}

export default App;
