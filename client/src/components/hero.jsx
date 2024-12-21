// src/components/hero.jsx
import { TypeAnimation } from 'react-type-animation';
import React from "react";
import hero from "../assets/hero.svg";
import { useNavigate } from "react-router-dom";

function Hero({ onLoginOpen }) {
  const navigate = useNavigate();
  return (
    <div
      id="home"
      className="bg-red-200 p-8 w-full h-screen py-16 flex flex-col lg:flex-row items-center lg:py-3"
    >
      {/* Text Section */}
      <div className="lg:w-1/2 lg:pr-12 container my-8 mx-auto px-4 py-8 lg:px-16 lg:py-12">
        <TypeAnimation 
          className="text-3xl sm:text-6xl lg:text-6xl font-serif text-red-950 font-bold leading-tight mb-4 sm:mb-8 lg:mb-12 py-4 sm:py-8"
          sequence={[
            'Well come',
            1000,
            'እንኳን ደህና መጡ',
            1000,
            'baga nagaan dhuftan',
            1000,
            'እንኩአ ብሰላም መጻኩም',
            1000
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
        <p className="text-base sm:text-lg lg:text-2xl text-gray-700 leading-relaxed mb-4 sm:mb-6 lg:mb-8">
          Here is all you need to start feeding your curiosity and learn everything you need to know about broadcast engineering, journalism, and media communication and access materials in our store to do your researches and projects.
        </p>
        <div className="text-center lg:text-left">
          <button
           onClick={() => navigate("/electronicmaterials")}
            className="inline-block bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-8 rounded-full transition duration-300"
          >
            Start Now
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
        <img
          src={hero}
          alt="Hero"
          className="w-full max-w-lg sm:max-w-md lg:max-w-xl xl:max-w-2xl object-contain"
        />
      </div>
    </div>
  );
}

export default Hero;