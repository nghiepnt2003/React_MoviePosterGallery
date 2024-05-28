import { Fragment, lazy, Suspense } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
// import HomePage from "./Page/HomePage";
import Main from "./Components/Layout/Main";
import Banner from "./Components/banner/Banner";
import MoviePageV2 from "./Page/MoviePageV2";
import ErrorPage from "./Page/ErrorPage";
// import MoviePage from "./Page/MoviePage";
// import MovieDetailPage from "./Page/MovieDetailPage";

// dynamic import
const HomePage = lazy(() => import("./Page/HomePage"));
const MoviePage = lazy(() => import("./Page/MoviePage"));
const MovieDetailPage = lazy(() => import("./Page/MovieDetailPage"));

function App() {
  return (
    <Fragment>
      {/* Fall back trong này có thể hiểu là loading. khi đang load có thể hiện component Loading */}
      <Suspense fallback={<></>}>
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
            <Route path="/movies" element={<MoviePageV2></MoviePageV2>}></Route>
            <Route
              path="/movies/:movieID"
              element={<MovieDetailPage></MovieDetailPage>}
            ></Route>
          </Route>
          <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
        </Routes>
      </Suspense>
    </Fragment>
  );
}

export default App;
