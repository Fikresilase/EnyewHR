import React from "react";
import { useNavigate } from "react-router-dom";

function Level3() {
  const navigate = useNavigate();

  const materials = [
    {
      title: "CST BCT3 01 0322",
      description: "Apply Graphic design",
    },
    {
      title: "CST BCT3 02 0322",
      description: "Design Sound Proof and Acoustic Treatment",
    },
    {
      title: "CST BCT3 03 0322",
      description: "Operate Vision Mixer",
    },
    {
      title: "CST BCT3 04 0322",
      description: "Perform multi-camera Directing",
    },
    {
      title: "CST BCT3 05 0322",
      description: "Manage Media Asset",
    },
    {
      title: "CST BCT3 06 0322",
      description: "Ensure Production and broadcast quality Standard",
    },
    {
      title: "CST BCT3 07 0322",
      description: "Operate Radio Transmission",
    },
  ];
  

  console.log("Rendering Level 3 component with materials:", materials);

  return (
    <div className="m level3">
      <header className="bg-white w-full py-4 shadow-md fixed top-0 z-50">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <button
            onClick={() => {
              console.log("Navigating back to learning materials");
              navigate("/learningmaterials");
            }}
            className="text-gray-600 hover:text-blue-600 transition-colors"
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

          <h1 className="text-blue-600 text-xl font-bold text-center flex-grow">
            Level-3 Learning Materials <br />
          </h1>
          <button
            onClick={() => {
              console.log("Navigating to add new item");
              // Navigate or perform the action here
            }}
            className="text-gray-600 hover:text-blue-600 transition-colors"
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
      <div className="container1 justify-center m-8 container flex flex-wrap">
        {materials.map((material, index) => (
          <div key={index} className="card m-4 bg-base-100 w-96 shadow-xl">
            <div className="card-body">
              <h4 className="font-bold">{material.title}</h4>
              <p>{material.description}</p>
              <div className="card-actions justify-end">
                <button
                  className="btn bg-blue-600 hover:bg-blue-700"
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

export default Level3;
