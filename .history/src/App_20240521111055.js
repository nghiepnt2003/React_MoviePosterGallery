import { Fragment, lazy, Suspense } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
// import HomePage from "./Page/HomePage";
import Main from "./Components/Layout/Main";
import Banner from "./Components/banner/Banner";
// import MoviePage from "./Page/MoviePage";
// import MovieDetailPage from "./Page/MovieDetailPage";

const HomePage = lazy(() => import("./Page/HomePage"));
const MoviePage = lazy(() => import("./Page/MoviePage"));
const MovieDetailPage = lazy(() => import("./Page/MovieDetailPage"));

function App() {
  return (
    <Fragment>
      <Suspense>
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
            <Route
              path="/movies/:movieID"
              element={<MovieDetailPage></MovieDetailPage>}
            ></Route>
          </Route>
          {/* Route_List */}
        </Routes>
      </Suspense>
    </Fragment>
  );
}

export default App;
