import { Fragment } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import Header from "./Components/Layout/Header";
import HomePage from "./Page/HomePage";
import Main from "./Components/Layout/Main";
import Banner from "./Components/banner/Banner";
import MoviePage from "./Page/MoviePage";

function App() {
  return (
    <Fragment>
      <Routes>
        {/* Khi để Route mà không để đường dẫn. Có nghĩa là nó sẽ truy cập vào trong Route này với mọi đường dẫn */}
        {/* Route_List */}
        <Route element={<Main></Main>}>
          {/* Route Item */}
          <Route
            path="/"
            element={
              <>
                <Banner></Banner>
                <HomePage></HomePage>
              </>
            }
          ></Route>

          {/* Route Item */}
          <Route path="/movies" element={<MoviePage></MoviePage>}></Route>
        </Route>
        {/* Route_List */}
      </Routes>
    </Fragment>
  );
}

export default App;
