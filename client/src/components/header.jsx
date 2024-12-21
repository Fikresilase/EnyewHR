import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

function Header({ onSignupOpen, onLoginOpen }) {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Smoothly scroll to the section with the given ID
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-3 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 lg:h-12" />
        </div>
        
        {/* Navbar for large screens */}
        <nav className="hidden lg:flex space-x-6">
          <a
            onClick={() => scrollToSection("home")}
            href="#home"
            className="text-gray-800 text-lg font-semibold hover:text-red-600 transition duration-300 relative group cursor-pointer"
          >
            Home
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </a>
          <a
            onClick={() => scrollToSection("students")}
            href="#students"
            className="text-gray-800 text-lg font-semibold hover:text-red-600 transition duration-300 relative group cursor-pointer"
          >
            Students
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </a>
          <a
            onClick={() => scrollToSection("instructors")}
            href="#instructors"
            className="text-gray-800 text-lg font-semibold hover:text-red-600 transition duration-300 relative group cursor-pointer"
          >
            Instructors
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </a>
        </nav>

        {/* Check Materials Button (only visible on large screens) */}
        <div className="hidden lg:flex">
          <button
            onClick={() => navigate("/materials")}
            className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg shadow hover:bg-red-700 transition duration-300"
          >
            Check Materials
          </button>
        </div>

        {/* Mobile Menu Button (visible only on small screens) */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-800 hover:text-red-600 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="lg:hidden bg-white border-t shadow-md">
          <div className="space-y-2 px-4 py-3">
            <a
              onClick={() => {
                scrollToSection("home");
                toggleMobileMenu(); // Close menu on click
              }}
              href="#home"
              className="block text-gray-800 text-lg font-semibold hover:text-red-600 transition duration-300 cursor-pointer"
            >
              Home
            </a>
            <a
              onClick={() => {
                scrollToSection("students");
                toggleMobileMenu();
              }}
              href="#students"
              className="block text-gray-800 text-lg font-semibold hover:text-red-600 transition duration-300 cursor-pointer"
            >
              Students
            </a>
            <a
              onClick={() => {
                scrollToSection("instructors");
                toggleMobileMenu();
              }}
              href="#instructors"
              className="block text-gray-800 text-lg font-semibold hover:text-red-600 transition duration-300 cursor-pointer"
            >
              Instructors
            </a>
            <button
              onClick={() => navigate("/materials")}
              className="block w-full text-left px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-300"
            >
              Check Materials
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
