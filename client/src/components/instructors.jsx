// src/components/Instructors.jsx
import React from "react";
import instructor from "../assets/instructor.svg";
import { useNavigate } from 'react-router-dom';

function Instructors({ onLoginOpen, onSignupOpen }) {
  const navigate = useNavigate();
  return (
    <div
      id="instructors"
      className="bg-blue-100 w-full h-screen p-8 flex flex-col lg:flex-row items-center lg:py-3"
    >
      {/* Text Section */}
      <div className="lg:w-1/2 container mx-auto px-4 py-8 lg:px-16 lg:py-12">
        <p className="text-base sm:text-lg lg:text-2xl text-gray-700 leading-relaxed mb-4 sm:mb-6 lg:mb-8">
          All you need to teach and instruct about broadcast engineering. Access
          available materials for teaching, research, and evaluate your students
          in the most automated way from your test box.
        </p>
        <div className="text-center lg:text-left">
          <button
            onClick={() => navigate("/tests")}
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-full transition duration-300"
          >
            Log in
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
        <img
          src={instructor}
          alt="Instructor"
          className="w-full max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-2xl object-contain"
        />
      </div>
    </div>
  );
}

export default Instructors;