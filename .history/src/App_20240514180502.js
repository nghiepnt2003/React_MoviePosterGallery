import { Fragment } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import Header from "./Components/Layout/Header";
import HomePage from "./Page/HomePage";
import Main from "./Components/Layout/Main";
import Banner from "./Components/banner/Banner";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route element={<Main></Main>}>
          <Route
            path="/"
            element={
              <>
                <Banner></Banner>
                <HomePage></HomePage>
              </>
            }
          ></Route>
          <Route
            path="/movies"
            element={
              <>
                <Banner></Banner>
              </>
            }
          ></Route>
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
