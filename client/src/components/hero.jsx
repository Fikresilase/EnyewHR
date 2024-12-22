// src/components/hero.jsx
import { TypeAnimation } from 'react-type-animation';
import React from "react";
import hero from "../assets/hero.jpg";
import { useNavigate } from "react-router-dom";

function Hero({ onLoginOpen }) {
  const navigate = useNavigate();
  return (
    <div
    id="home"
    className="relative flex flex-col lg:flex-row items-center justify-center px-8 bg-blue-100"
    style={{
      paddingTop: "64px", // Replace 64px with your navbar's height
      backgroundImage: `url(${hero})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "100vh",
      width:"100%"
    }}
  >
    {/* Text section */}
    <div className="relative lg:w-1/2 lg:pr-12 z-10 text-center lg:text-left bg-opacity-80 p-6 rounded-md ">
      <h1 className="text-6xl lg:text-6xl font-serif text-white font-bold leading-snug lg:leading-tight mb-4 lg:mb-6">
        MebTech Azolarea bogna satara
      </h1>
      <p className="text-base lg:text-lg text-white leading-relaxed mb-6 lg:mb-8">
        Harnessing computer vision to detect patient behavior, provide timely
        alerts, and record vital data for improved healthcare outcomes.
      </p>
      <div className="text-center lg:text-left">
        <button
        
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-full transition duration-300"
        >
          <a href="/login">Start Now
          </a>
        </button>
      </div>
    </div>

    {/* Optional: add a semi-transparent overlay for the background image */}
    <div className="absolute inset-0 bg-black opacity-50 z-1"></div>
  </div>
  );
}

export default Hero;