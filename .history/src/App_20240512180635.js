import { Fragment } from "react";
import { NavLink } from "react-router-dom";
function App() {
  return (
    <Fragment>
      <header className="header flex items-center justify-center gap-x-5 text-white py-10 mb-10">
        <NavLink className="text-primary">Home</NavLink>
        <NavLink>Movies</NavLink>
      </header>
      <section className="banner h-[400px]  page-containter">
        <div className="w-full h-full rounded-lg bg-white"></div>
      </section>
    </Fragment>
  );
}

export default App;
