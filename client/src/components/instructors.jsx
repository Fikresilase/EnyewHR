// src/components/Instructors.jsx
import React from "react";
import { useNavigate } from 'react-router-dom';

function Instructors({ onLoginOpen, onSignupOpen }) {
  const navigate = useNavigate();
  return (
    <div id="logging" class="bg-gradient-to-b from-blue-600 to-blue-800 text-white min-h-screen flex items-center justify-center px-8">
  <div class="max-w-4xl text-center">
    {/* <!-- Section Header --> */}
    <h2 class="text-5xl font-bold mb-6">
      Welcome to the Login Portal
    </h2>
    <p class="text-lg lg:text-xl text-gray-200 mb-12">
      Select your role to access the platform designed specifically for you. Secure and seamless login for Admins, Managers, and HR professionals.
    </p>

    {/* <!-- Buttons --> */}
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* <!-- Reusable Button Component --> */}
      <a
        href="/login"
        class="block bg-white text-blue-800 font-semibold py-4 px-6 rounded-lg shadow-lg hover:bg-blue-700 hover:text-white transition duration-300"
      >
        Login as Admin
      </a>
      <a
        href="/login"
        class="block bg-white text-blue-800 font-semibold py-4 px-6 rounded-lg shadow-lg hover:bg-blue-700 hover:text-white transition duration-300"
      >
        Login as Manager
      </a>
      <a
        href="/login"
        class="block bg-white text-blue-800 font-semibold py-4 px-6 rounded-lg shadow-lg hover:bg-blue-700 hover:text-white transition duration-300"
      >
        Login as HR
      </a>
    </div>
  </div>
</div>


  );
}

export default Instructors;