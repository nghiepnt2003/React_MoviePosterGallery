import { Fragment } from "react";
import { NavLink } from "react-router-dom";
function App() {
  return (
    <Fragment>
      <header className="header flex items-center justify-center gap-x-5 text-white py-10">
        <NavLink>Home</NavLink>
        <NavLink>Movies</NavLink>
      </header>
    </Fragment>
  );
}

export default App;
