import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Style for active link
  const activeClass = "text-blue-600 font-semibold border-b-2 border-blue-600";

  return (
    <header className="shadow sticky z-50 top-0 bg-white">
      <nav className="px-4 lg:px-6 py-3 max-w-screen-xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold text-blue-600">
          Appnity
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-8 font-medium">
          {["/", "/about", "/services", "/portfolio", "/contact"].map((path, i) => {
            const name = path === "/" ? "Home" : path.slice(1).charAt(0).toUpperCase() + path.slice(2);
            return (
              <li key={i}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    "hover:text-blue-600 transition " + (isActive ? activeClass : "")
                  }
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-gray-700">
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="lg:hidden px-4 py-3 space-y-3 bg-white border-t font-medium">
          {["/", "/about", "/services", "/portfolio", "/contact"].map((path, i) => {
            const name = path === "/" ? "Home" : path.slice(1).charAt(0).toUpperCase() + path.slice(2);
            return (
              <NavLink
                key={i}
                to={path}
                onClick={toggleMenu}
                className={({ isActive }) =>
                  "block hover:text-blue-600 transition " + (isActive ? activeClass : "")
                }
              >
                {name}
              </NavLink>
            );
          })}
        </div>
      )}
    </header>
  );
}
