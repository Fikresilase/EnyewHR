import React from "react";
import { useNavigate } from "react-router-dom";

function Current() {
  const navigate = useNavigate();

  const materials = [
    { title: "Audio", path: "/currentAudio" },
    { title: "Video", path: "/currentVideo" },
    { title: "Light", path: "/currentLight" },
    { title: "RF", path: "/currentRf" },
    { title: "Broadcast IT", path: "/currentIt" },
    { title: "Camera", path: "/currentCamera" },
    { title: "Editing and graphics", path: "/cuurentEditing" },
  ];

  const handleLogout = () => {
    // Clear user data (if stored in local storage)
    sessionStorage.removeItem("user");
    // Navigate to the login page
    navigate("/login");
  };

  return (
    <div className="level1">
      <header className="bg-white mb-8 w-full py-4 shadow-md fixed top-0 z-50">

        {/* Header code here */}
      <h3 className="text-red-600 font-bold text-center">Take your tests here</h3>
      </header>
      <div className="container1 justify-center mt-8 m-4 container flex flex-wrap">
        {materials.map((material, index) => (
          <div key={index} className="card m-4 bg-base-100 w-96 shadow-xl">
            <div className="card-body">
              <h4 className="font-bold">{material.title}</h4>
              <p>{material.description}</p>
              <div className="card-actions flex justify-end">
                <button
                  className="btn m-2 bg-red-600 hover:bg-red-700"
                  onClick={() => {
                    console.log(`Navigating to: ${material.title}`);
                    navigate(material.path); // Navigate to the appropriate path
                  }}
                >
                  take the test
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Current;