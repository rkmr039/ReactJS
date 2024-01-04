import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) => `${isActive && "active"} link`}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => `${isActive && "active"} link`}
      >
        About
      </NavLink>
      <NavLink
        to="/products"
        className={({ isActive }) => `${isActive && "active"} link`}
      >
        Products
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) => `${isActive && "active"} link`}
      >
        Login
      </NavLink>
    </div>
  );
}

export default Navbar;
