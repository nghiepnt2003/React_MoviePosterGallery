import React from "react";
import { NavLink } from "react-router-dom";
import HomePage from "../../Page/HomePage";

const Header = () => {
  return (
    <header className="header flex items-center justify-center gap-x-5 text-white py-10 mb-10">
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive ? "text-primary  font-semibold" : ""
        }
      >
        Home
      </NavLink>
      <NavLink to={"/movies"}>Movies</NavLink>
    </header>
  );
};

export default Header;
