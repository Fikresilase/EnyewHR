// src/components/hero.jsx
import React from "react";
import student from "../assets/student.svg";
import { useNavigate } from "react-router-dom";

function Students() {
  const navigate = useNavigate();
  return (
    <div
      id="students"
      className="bg-white p-8 w-full h-screen flex flex-col lg:flex-row items-center lg:py-3"
    >
      {/* Image Section */}
      <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
        <img
          src={student}
          alt="Student"
          className="w-full max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-2xl object-contain"
        />
      </div>

      {/* Text Section */}
      <div className="lg:w-1/2 lg:pr-12 container mx-auto px-4 py-8 lg:px-16 lg:py-12">
        <p className="text-base sm:text-lg lg:text-2xl text-gray-700 leading-relaxed mb-4 sm:mb-6 lg:mb-8">
          All you need to learn about broadcast engineering and prepare for your
          upcoming projects and exams. Whether you are a media technology
          student or just curious to learn, we have everything you need.
          Click the button to take your test.
        </p>
        <div className="text-center lg:text-left">
          <button
            onClick={() => navigate("/current")}
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-full transition duration-300"
          >
            Start here
          </button>
        </div>
      </div>
    </div>
  );
}

export default Students;