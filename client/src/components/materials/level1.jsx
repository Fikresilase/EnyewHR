import React from "react";
import { useNavigate } from "react-router-dom";

function Level1() {
  const navigate = useNavigate();

  const materials = [
    {
      title: "CST BCT1 01 0322",
      description: "Grasp basic Audio Visual skill and knowledge",
    },
    {
      title: "CST BCT1 02 0322",
      description: "Setup and Operate basic Video Lighting",
    },
    { title: "CST BCT1 03 0322", description: "Design and setup stage" },
    {
      title: "CST BCT1 04 0322",
      description: "Compile and Edit Digital Audio",
    },
    {
      title: "CST BCT1 05 0322",
      description: "Install Broadcast Satellite Antenna",
    },
    { title: "CST BCT1 06 0322", description: "Apply 5’s procedures" },
    {
      title: "Common Course",
      description: "Developing Morality, Professional Ethics and Patriotism",
    },
    {
      title: "Common Course",
      description: "Developing Entrepreneurship and Employability skills",
    },
  ];

  console.log("Rendering Level 1 component with materials:", materials);

  return (
    <div className=" level1">
      <header className="bg-white mb-8 w-full py-4 shadow-md fixed top-0 z-50">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <button
            onClick={() => {
              console.log("Navigating back to learning materials");
              navigate("/learningmaterials");
            }}
            className="text-gray-600 hover:text-red-600 transition-colors"
            aria-label="Go back to homepage"
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

          <h1 className="text-red-600 text-xl font-bold text-center flex-grow">
            Level-1 Learning Materials <br />
          </h1>
          <button
            onClick={() => {
              console.log("Navigating to add new item");
              // Navigate or perform the action here
            }}
            className="text-gray-600 hover:text-red-600 transition-colors"
            aria-label="Add new item"
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
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
        </div>
      </header>
      <div className="container1  justify-center mt-8 m-4 container flex flex-wrap">
        {materials.map((material, index) => (
          <div key={index} className="card m-4 bg-base-100 w-96 shadow-xl">
            <div className="card-body">
              <h4 className="font-bold">{material.title}</h4>
              <p>{material.description}</p>
              <div className="card-actions flex justify-end">
                <button
                  className="btn m-2 bg-red-600 hover:bg-red-700"
                  onClick={() =>
                    console.log(`Fetching materials for: ${material.title}`)
                  }
                >
                  Get materials
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Level1;
