// src/components/Instructors.jsx
import React from "react";
import { useNavigate } from 'react-router-dom';

function Instructors({ onLoginOpen, onSignupOpen }) {
  const navigate = useNavigate();
  return (
    <div
      id="logging"
      className="bg-gradient-to-b from-blue-200 to-blue-900 text-white min-h-screen flex items-center justify-center mt-8 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl text-center">
        {/* Section Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Welcome to the Login Portal
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-12">
          Select your role to access the platform designed specifically for you. Secure and seamless login for Admins, Managers, and HR professionals.
        </p>

        {/* Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {/* Reusable Button Component */}
          <a
            href="/login"
            className="block bg-white text-blue-800 font-semibold p-4 rounded-lg shadow-lg hover:bg-blue-900 hover:text-white transition duration-300 text-sm sm:text-base"
          >
            Login as Admin
          </a>
          <a
            href="/login"
            className="block bg-white text-blue-800 font-semibold p-4 rounded-lg shadow-lg hover:bg-blue-900 hover:text-white transition duration-300 text-sm sm:text-base"
          >
            Login as Manager
          </a>
          <a
            href="/login"
            className="block bg-white text-blue-800 font-semibold p-4 rounded-lg shadow-lg hover:bg-blue-900 hover:text-white transition duration-300 text-sm sm:text-base"
          >
            Login as HR
          </a>
        </div>
      </div>
    </div>
  );
}

export default Instructors;
