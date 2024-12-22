// src/components/hero.jsx
import React from "react";
import student from "../assets/student.svg";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  return (
    <div class="bg-gray-100 py-16 h-screen flex items-center justify-center px-8 lg:px-16" id="about-us">
    <div class="">
      <div class="text-center mb-12">
        <h2 class="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
          About Us
        </h2>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          At <span class="font-semibold text-blue-600">[Your Company Name]</span>, we’re dedicated to providing innovative solutions that empower our clients to succeed in their goals. Our journey is built on passion, commitment, and a vision for a better tomorrow.
        </p>
      </div>
  
      {/* <!-- Content --> */}
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* <!-- Image Section --> */}
        <div class="relative">
          <img
            src="https://via.placeholder.com/600x400"
            alt="About Us"
            class="rounded-lg shadow-lg w-full h-auto"
          />
          <div class="absolute inset-0 bg-blue-600 opacity-20 rounded-lg"></div>
        </div>
  
        {/* <!-- Text Section --> */}
        <div>
          <h3 class="text-2xl lg:text-3xl font-semibold text-gray-800 mb-4">
            Who We Are
          </h3>
          <p class="text-gray-600 leading-relaxed mb-6">
            Founded in [Year], [Your Company Name] has grown into a trusted name in the industry. Our team of experts works tirelessly to design and implement solutions that drive real-world impact. From cutting-edge technology to tailored services, we strive to exceed expectations at every step.
          </p>
          <h4 class="text-xl font-semibold text-gray-800 mb-3">
            Our Mission
          </h4>
          <p class="text-gray-600 leading-relaxed">
            To innovate, inspire, and deliver excellence. Our mission is to help businesses and individuals achieve their highest potential through world-class products and services.
          </p>
          <div class="mt-6">
            <a
              href="/contact-us"
              class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full transition duration-300"
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