import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <ul>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            to="/favorite-list"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Favorite List</li>
          </NavLink>
        </ul>
      </nav>
      <h1>Movies</h1>
    </div>
  );
};

export default Header;
