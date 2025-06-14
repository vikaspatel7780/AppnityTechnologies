import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

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

      {/* Fullscreen Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-md p-6 z-50 flex flex-col space-y-4 font-medium">
            {["/", "/about", "/services", "/portfolio", "/contact"].map((path, i) => {
              const name = path === "/" ? "Home" : path.slice(1).charAt(0).toUpperCase() + path.slice(2);
              return (
                <NavLink
                  key={i}
                  to={path}
                  onClick={toggleMenu}
                  className={({ isActive }) =>
                    "hover:text-blue-600 transition " + (isActive ? activeClass : "")
                  }
                >
                  {name}
                </NavLink>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
