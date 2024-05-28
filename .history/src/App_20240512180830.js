import { Fragment } from "react";
import { NavLink } from "react-router-dom";
function App() {
  return (
    <Fragment>
      <header className="header flex items-center justify-center gap-x-5 text-white py-10 mb-10">
        <NavLink className="text-primary">Home</NavLink>
        <NavLink>Movies</NavLink>
      </header>
      <section className="banner h-[400px] page-containter">
        <div className="w-full h-full rounded-lg relative ">
          <img
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fnld.com.vn%2Fvan-nghe%2Favengers-endgame-bi-trang-va-cam-xuc-20190425124720333.htm&psig=AOvVaw0kdGYqUwkpeS9iVOO5j5wj&ust=1715598459881000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOCzzLj8h4YDFQAAAAAdAAAAABAd"
            alt=""
          />
        </div>
      </section>
    </Fragment>
  );
}

export default App;
