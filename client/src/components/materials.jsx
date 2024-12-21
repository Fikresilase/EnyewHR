import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import electronic from "../assets/electronic.jpg";
import learning from "../assets/learning.jpg";

function Materials() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-100 to-red-200 p-6 flex flex-col items-center">
      {/* Back Button */}
      <div className="mb-6 self-start">
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="h-8 w-8 cursor-pointer text-red-700 hover:text-red-900 transition-colors duration-300"
          onClick={() => navigate("/")}
        />
      </div>

      {/* Title */}
      <h1 className="text-4xl font-extrabold text-center text-red-800 mb-10">
        Explore Materials
      </h1>

      {/* Card Grid */}
      <div className=" gap-6  w-1/2 h-2/3 max-w-screen-lg mx-auto flex justify-center">
        {/* Card 1 */}
        <div className="bg-white w-128 lg:w-1/2 rounded-xl shadow-lg hover:shadow-xl transform transition-transform hover:scale-105 overflow-hidden">
          <img
            src={electronic}
            alt="Electronic Materials"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Electronic Materials
            </h2>
            <p className="text-gray-600 mb-6">
              Access and manage wide range of electronic materials, for your research or project.
            </p>
            <div className="flex justify-end">
              <button
                onClick={() => navigate("/electronicmaterials")}
                className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg shadow hover:bg-red-700 transition duration-300"
              >
                Explore <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl lg:w-1/2 w-128 shadow-lg hover:shadow-xl transform transition-transform hover:scale-105 overflow-hidden">
          <img
            src={learning}
            alt="Learning Materials"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Learning Materials
            </h2>
            <p className="text-gray-600 mb-6">
              Access a wide selection of learning materials designed to
              support your educational journey.
            </p>
            <div className="flex justify-end">
              <button
                onClick={() => navigate("/learningmaterials")}
                className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg shadow hover:bg-red-700 transition duration-300"
              >
                Explore <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Materials;