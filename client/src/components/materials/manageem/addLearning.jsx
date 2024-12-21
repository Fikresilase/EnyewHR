import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import Axios

const AddLearning = () => {
  const [year, setYear] = useState("Year-1"); // Default to Year-1
  const [course, setCourse] = useState("");
  const [error, setError] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setFileName(file.name);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous error

    // Simple validation
    if (!year || !course || !selectedFile) {
      setError("Please fill in all fields and upload a document.");
      return;
    }

    const token = sessionStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    const formData = new FormData();
    formData.append("year", year);
    formData.append("course", course);
    formData.append("document", selectedFile);

    try {
      // Log the form data for debugging
      for (const [key, value] of formData.entries()) {
        console.log(key, value);
      }

      const response = await axios.post(
        "https://ebc-training-and-research-center.onrender.com/materials/learning",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            // No need to set Content-Type, Axios will handle it
          },
        }
      );

      // Check response status
      if (response.status === 201) {
        alert("Learning material added successfully!");
        navigate("/learningmaterials");
      } else {
        setError("Error adding material. Please try again.");
      }
    } catch (error) {
      console.error("Error adding material:", error);
      setError("Error adding material. Please try again.");
    }
  };

  const renderCourseOptions = () => {
    if (year === "Year-1") {
      return (
        <>
          <option value="CST BCT1 01 0322">
            Grasp basic Audio Visual skill and knowledge
          </option>
          <option value="CST BCT1 02 0322">
            Setup and Operate basic Video Lighting
          </option>
          <option value="CST BCT1 03 0322">Design and setup stage</option>
          <option value="CST BCT1 04 0322">
            Compile and Edit Digital Audio
          </option>
          <option value="CST BCT1 05 0322">
            Install Broadcast Satellite Antenna
          </option>
          <option value="CST BCT1 06 0322">Apply 5’s procedures</option>
          <option value="common_course_1">
            Developing Morality, Professional Ethics and Patriotism
          </option>
          <option value="common_course_2">
            Developing Entrepreneurship and Employability skills
          </option>
        </>
      );
    } else if (year === "Year-2") {
      return (
        <>
          <option value="CST BCT2 01 0322">
            Install, maintain, and repair Media Cable
          </option>
          <option value="CST BCT2 02 0322">
            Setup and control studio Lighting systems
          </option>
          <option value="CST BCT2 03 0322">
            Perform Camera Operation and Techniques
          </option>
          <option value="CST BCT2 04 0322">
            Operate and optimize digital audio mixer
          </option>
          <option value="CST BCT2 05 0322">
            Video Editing and post production
          </option>
          <option value="CST BCT2 06 0322">Operate RF Field Equipment</option>
          <option value="CST BCT2 07 0322">
            Apply Creative and critical thinking in Media Industries
          </option>
        </>
      );
    } else if (year === "Year-3") {
      return (
        <>
          <option value="CST BCT3 01 0322">Apply Graphic Design</option>
          <option value="CST BCT3 02 0322">
            Design Sound Proof and Acoustic Treatment
          </option>
          <option value="CST BCT3 03 0322">Operate Vision Mixer</option>
          <option value="CST BCT3 04 0322">
            Perform Multi-Camera Directing
          </option>
          <option value="CST BCT3 05 0322">Manage Media Asset</option>
          <option value="CST BCT3 06 0322">
            Ensure Production and Broadcast Quality Standards
          </option>
          <option value="CST BCT3 07 0322">Operate Radio Transmission</option>
        </>
      );
    } else if (year === "Year-4") {
      return (
        <>
          <option value="CST BCT4 01 0322">
            Integrate Broadcast Studio System
          </option>
          <option value="CST BCT4 02 0322">
            Administer Broadcast IT System
          </option>
          <option value="CST BCT4 03 0322">
            Install and Operate Radio Transmission System
          </option>
          <option value="CST BCT4 04 0322">
            Maintain Broadcast and Electromechanical Equipment and Systems
          </option>
          <option value="CST BCT4 05 0322">Prevent and Eliminate Muda</option>
        </>
      );
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-center text-2xl font-bold mb-4">
        Add Learning Material
      </h1>
      {error && <p className="text-blue-500 text-center">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Year</label>
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="border rounded p-2 w-full"
          >
            <option value="Year-1">Year-1</option>
            <option value="Year-2">Year-2</option>
            <option value="Year-3">Year-3</option>
            <option value="Year-4">Year-4</option>
          </select>
        </div>
        <div>
          <label className="block mb-1">Course</label>
          <select
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            className="border rounded p-2 w-full"
          >
            <option value="">-- Select --</option>
            {renderCourseOptions()}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Select Document</label>
          <input
            type="file"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:border-blue-500 file:bg-blue-500 file:text-white file:px-4 file:py-2 file:mr-4 file:border-0 file:rounded-md file:cursor-pointer hover:file:bg-blue-600"
          />
          {fileName && (
            <p className="mt-2 text-sm text-gray-500">
              Selected File: {fileName}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600 w-full"
        >
          Add the material
        </button>
      </form>
    </div>
  );
};

export default AddLearning;