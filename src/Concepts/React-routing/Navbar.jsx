import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="flex justify-between items-center p-4 text-white gap-4">
        {/* Add active styling */}

        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-green-500 font-bold" : "bg-red-500 font-thin"
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-green-500 font-bold" : "bg-red-500 font-thin"
          }
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-green-500 font-bold" : "bg-red-500 font-thin"
          }
          to="/contact/shobhit"
        >
          Contact
        </NavLink>
      </nav>
    </>
  );
}

export default Navbar;
