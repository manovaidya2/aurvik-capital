import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileResourcesOpen, setIsMobileResourcesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation(); // ✅ for active route detection

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsResourcesOpen(false);
      }
    };
    if (isResourcesOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isResourcesOpen]);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setIsMobileResourcesOpen(false);
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/services", label: "Services" },
    { to: "/bootcamp", label: "Bootcamp" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="flex justify-between items-center px-6 sm:px-8 py-4 bg-white shadow-sm relative z-50">
      {/* ---------- Logo ---------- */}
      <div className="text-2xl font-bold">
        <span className="text-blue-900">Aurevik</span>{" "}
        <span className="text-yellow-500">Capital</span>
      </div>

      {/* ---------- Desktop Navigation ---------- */}
      <nav className="hidden md:flex space-x-8 text-gray-800 font-medium items-center">
        {navLinks.slice(0, 4).map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`relative transition-colors duration-200 hover:text-blue-900 
              ${
                location.pathname === link.to
                  ? "text-blue-900"
                  : "text-gray-800"
              }`}
          >
            {link.label}
            {/* Animated underline */}
            <span
              className={`absolute left-0 bottom-[-4px] h-[2px] bg-blue-900 transition-all duration-300 
              ${location.pathname === link.to ? "w-full" : "w-0 group-hover:w-full"}
              hover:w-full`}
            ></span>
          </Link>
        ))}

        {/* ---------- Resources Dropdown ---------- */}
        <div className="relative group" ref={dropdownRef}>
          <button
            onClick={() => setIsResourcesOpen((prev) => !prev)}
            className={`relative flex items-center transition-colors duration-200 hover:text-blue-900 ${
              location.pathname.includes("blog") ||
              location.pathname.includes("case-studies") ||
              location.pathname.includes("free-tools")
                ? "text-blue-900"
                : "text-gray-800"
            }`}
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
            {/* Animated underline */}
            <span
              className={`absolute left-0 bottom-[-4px] h-[2px] bg-blue-900 transition-all duration-300 ${
                isResourcesOpen ? "w-full" : "w-0 group-hover:w-full"
              }`}
            ></span>
          </button>

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

        <Link
          to="/contact"
          className={`relative transition-colors duration-200 hover:text-blue-900 ${
            location.pathname === "/contact" ? "text-blue-900" : "text-gray-800"
          }`}
        >
          Contact
          <span
            className={`absolute left-0 bottom-[-4px] h-[2px] bg-blue-900 transition-all duration-300 ${
              location.pathname === "/contact" ? "w-full" : "w-0 group-hover:w-full"
            } hover:w-full`}
          ></span>
        </Link>
      </nav>

      {/* ---------- Desktop CTA Button ---------- */}
      <button className="hidden md:block bg-blue-900 text-white px-5 py-2 rounded-md hover:bg-blue-800 transition">
        Join Free Orientation
      </button>

      {/* ---------- Mobile Menu Icon ---------- */}
      <button
        className="md:hidden text-blue-900 focus:outline-none"
        onClick={() => setIsMobileMenuOpen(true)}
      >
        <Menu size={28} />
      </button>

      {/* ---------- Mobile Sidebar ---------- */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <div className="text-2xl font-bold">
            <span className="text-blue-900">Aurevik</span>{" "}
            <span className="text-yellow-500">Capital</span>
          </div>
          <button className="text-blue-900" onClick={() => setIsMobileMenuOpen(false)}>
            <X size={26} />
          </button>
        </div>

        <div className="flex flex-col px-6 py-4 space-y-4 text-gray-800 font-medium">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} onClick={handleLinkClick}>
              {link.label}
            </Link>
          ))}

          {/* ---------- Resources (Mobile Dropdown) ---------- */}
          <div>
            <button
              onClick={() => setIsMobileResourcesOpen(!isMobileResourcesOpen)}
              className="flex justify-between items-center w-full text-left"
            >
              <span>Resources</span>
              <svg
                className={`w-4 h-4 ml-1 transition-transform ${
                  isMobileResourcesOpen ? "rotate-180" : ""
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
            {isMobileResourcesOpen && (
              <div className="mt-2 ml-4 flex flex-col space-y-2 text-gray-700 text-[15px]">
                <Link to="/blog" onClick={handleLinkClick}>
                  Blog
                </Link>
                <Link to="/case-studies" onClick={handleLinkClick}>
                  Case Studies
                </Link>
                <Link to="/free-tools" onClick={handleLinkClick}>
                  Free Tools
                </Link>
              </div>
            )}
          </div>

          <button
            className="bg-blue-900 text-white px-5 py-3 rounded-md hover:bg-blue-800 transition mt-6"
            onClick={handleLinkClick}
          >
            Join Free Orientation
          </button>
        </div>
      </div>

      {/* ---------- Overlay ---------- */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Header;
