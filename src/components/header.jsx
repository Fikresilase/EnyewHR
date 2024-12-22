import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import logo from "../assets/logo.png";

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
          <h1 className="font-bold text-4xl bg-red">Mebtech</h1>
        </div>
        
        {/* Navbar for large screens */}
        <nav className="hidden lg:flex space-x-6">
          <a
            onClick={() => scrollToSection("home")}
            href="#home"
            className="text-gray-800 text-lg font-semibold hover:text-blue-600 transition duration-300 relative group cursor-pointer"
          >
            Home
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </a>
          <a
            onClick={() => scrollToSection("about-us")}
            href="#students"
            className="text-gray-800 text-lg font-semibold hover:text-blue-600 transition duration-300 relative group cursor-pointer"
          >
            About US
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </a>
          <a
            onClick={() => scrollToSection("logging")}
            href="#instructors"
            className="text-gray-800 text-lg font-semibold hover:text-blue-600 transition duration-300 relative group cursor-pointer"
          >
            Login
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </a>
        </nav>

        {/* Check Materials Button (only visible on large screens) */}
        <div className="hidden lg:flex">
          <button
            onClick={() => scrollToSection("footer")}
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-full transition duration-300"
          >
            contact Us
          </button>
        </div>

        {/* Mobile Menu Button (visible only on small screens) */}
        
      </div>

      {/* Mobile Menu */}
      
    </header>
  );
}

export default Header;
