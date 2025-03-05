// src/components/hero.jsx
// ready to be delivered
import React from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  return (
    <div className=" py-16 h-auto lg:h-screen m-8 flex items-center justify-center px-8 lg:px-16" id="about-us">
      <div className="max-w-screen-lg mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            About Us
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            At <span className="font-semibold text-blue-600">[Your Company Name]</span>, we’re dedicated to providing innovative solutions that empower our clients to succeed in their goals. Our journey is built on passion, commitment, and a vision for a better tomorrow.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative mb-8 sm:mb-12 lg:mb-0">
            <img
              src="https://via.placeholder.com/600x400"
              alt="About Us"
              className="rounded-lg shadow-lg w-full h-auto"
            />
            <div className="absolute inset-0 bg-blue-600 opacity-20 rounded-lg"></div>
          </div>

          {/* Text Section */}
          <div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800 mb-4">
              Who We Are
            </h3>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6">
              Founded in [Year], [Your Company Name] has grown into a trusted name in the industry. Our team of experts works tirelessly to design and implement solutions that drive real-world impact. From cutting-edge technology to tailored services, we strive to exceed expectations at every step.
            </p>
            <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3">
              Our Mission
            </h4>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              To innovate, inspire, and deliver excellence. Our mission is to help businesses and individuals achieve their highest potential through world-class products and services.
            </p>
            <div className="mt-6">
              <a
                href="#footer"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-full transition duration-300"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
