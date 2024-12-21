import React from "react";
import { useNavigate } from "react-router-dom";

function Learningmaterials() {
  const navigate = useNavigate();

  const materials = [
    {
      title: "Level 1",
      description: "Explore and learn every level one materials",
      route: "/level1"
    },
    {
      title: "Level 2",
      description: "Explore and learn every level two materials",
      route: "/level2"
    },
    {
      title: "Level 3",
      description: "Explore and learn every level three materials",
      route: "/level3"
    },
    {
      title: "Level 4",
      description: "Explore and learn every level four materials",
      route: "/level4"
    },
  ];

  console.log("Rendering Learningmaterials component with materials:", materials);

  return (
    <div className="mb-4 level3">
      <header className="bg-white w-full py-4 mb-8 shadow-md fixed top-0 z-50">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <button
            onClick={() => {
              console.log("Navigating back to materials");
              navigate("/materials");
            }}
            className="text-gray-600 hover:text-red-600 transition-colors"
            aria-label="Go back to materials"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <h1 className="text-red-600 text-3xl font-bold text-center flex-grow">
            Learning Materials <br />
            <span className="text-red-600 mb-8 text-xl font-bold text-center flex-grow">
              Occupational Standard: Broadcast Technology NTQF L1-L4
            </span>
          </h1>

          
        </div>
      </header>
      <div className="mt-20">
        <div className="container1 justify-center m-8 container flex flex-wrap">
          {materials.map((material, index) => (
            <div key={index} className="card m-4 bg-base-100 w-96 shadow-xl">
              <div className="card-body">
                <h4 className="font-bold">{material.title}</h4>
                <p>{material.description}</p>
                <div className="card-actions justify-end">
                  <button
                    className="btn bg-red-600 hover:bg-red-700"
                    onClick={() => navigate(material.route)}
                  >
                    Explore
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Learningmaterials;
