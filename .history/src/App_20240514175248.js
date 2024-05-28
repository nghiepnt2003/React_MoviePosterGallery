import { Fragment } from "react";
import { NavLink, Route, Routes } from "react-router-dom";

import Main from "./Components/Layout/Main";
import HomePage from "./Page/HomePage";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route element={<Main></Main>}>
          <Route path="/" element={<HomePage></HomePage>}></Route>
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
