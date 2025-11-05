import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Toggle dropdown on click
  const handleToggle = () => {
    setIsResourcesOpen((prev) => !prev);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsResourcesOpen(false);
      }
    };

    if (isResourcesOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isResourcesOpen]);

  return (
    <header className="flex justify-between items-center px-8 py-4 bg-white shadow-sm">
      <div className="text-2xl font-bold">
        <span className="text-blue-900">Aurevik</span>{" "}
        <span className="text-yellow-500">Capital</span>
      </div>

      <nav className="hidden md:flex space-x-8 text-gray-800 font-medium">
        <Link to="/" className="hover:text-blue-900">
          Home
        </Link>
        <Link to="/about" className="hover:text-blue-900">
          About Us
        </Link>
        <Link to="/services" className="hover:text-blue-900">
          Services
        </Link>
        <Link to="/bootcamp" className="hover:text-blue-900">
          Bootcamp
        </Link>

        {/* Resources Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={handleToggle}
            className="hover:text-blue-900 flex items-center"
          >
            Resources
            <svg
              className={`w-4 h-4 ml-1 transition-transform ${
                isResourcesOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {/* Dropdown Menu */}
          {isResourcesOpen && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10">
              <Link
                to="/blog"
                className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-900"
                onClick={() => setIsResourcesOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/case-studies"
                className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-900"
                onClick={() => setIsResourcesOpen(false)}
              >
                Case Studies
              </Link>
              <Link
                to="/free-tools"
                className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-900"
                onClick={() => setIsResourcesOpen(false)}
              >
                Free Tools
              </Link>
            </div>
          )}
        </div>

        <Link to="/contact" className="hover:text-blue-900">
          Contact
        </Link>
      </nav>

      <button className="bg-blue-900 text-white px-5 py-2 rounded-md hover:bg-blue-800 transition">
        Join Free Orientation
      </button>
    </header>
  );
};

export default Header;
