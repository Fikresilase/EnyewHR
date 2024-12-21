import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faArrowLeft, faPlus } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const ElectronicMaterials = () => {
  const [data, setData] = useState([]);
  const [materialType, setMaterialType] = useState("All");
  const location = useLocation();
  const navigate = useNavigate();

  // Fetch data for all material types
  const fetchAllMaterials = async () => {
    try {
      const [videoResponse, audioResponse, lightResponse, communicationResponse] = await Promise.all([
        axios.get("https://ebc-training-and-research-center.onrender.com/materials/video"),
        axios.get("https://ebc-training-and-research-center.onrender.com/materials/audio"),
        axios.get("https://ebc-training-and-research-center.onrender.com/materials/light"),
        axios.get("https://ebc-training-and-research-center.onrender.com/materials/communication"),
      ]);
      const allData = [
        ...videoResponse.data.map(item => ({ ...item, type: "Video" })),
        ...audioResponse.data.map(item => ({ ...item, type: "Audio" })),
        ...lightResponse.data.map(item => ({ ...item, type: "Light" })),
        ...communicationResponse.data.map(item => ({ ...item, type: "Communication" })),
      ];
      setData(allData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Fetch data based on selected material type
  const fetchMaterialsByType = async (type) => {
    try {
      const response = await axios.get(`https://ebc-training-and-research-center.onrender.com/materials/${type.toLowerCase()}`);
      const fetchedData = response.data.map(item => ({ ...item, type }));
      setData(fetchedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Initial fetch for all materials
  useEffect(() => {
    fetchAllMaterials();
  }, []);

  // Handle filter change
  const handleFilterChange = (e) => {
    const type = e.target.value;
    setMaterialType(type);
    if (type === "All") {
      fetchAllMaterials();
    } else {
      fetchMaterialsByType(type);
    }
  };

  const handleBack = () => {
    navigate("/materials");
  };

  const handleDelete = async (number) => {
    const token = sessionStorage.getItem("token");

    try {
      const response = await axios.delete(`https://ebc-training-and-research-center.onrender.com/materials/${materialType.toLowerCase()}/${number}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        setData((prevData) => prevData.filter((item) => item.number !== number));
      } else {
        console.error(`Failed to delete item: ${response.data.message}`);
      }
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const handleAdd = () => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      navigate("/login", { state: { from: location.pathname } });
      return;
    }

    navigate("/addElectronics");
  };

  return (
    <div className="p-8 relative min-h-screen bg-gradient-to-b from-red-100 to-red-200">
      {/* Back Arrow */}
      <div className="mb-6">
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="h-8 w-8 cursor-pointer text-red-700 hover:text-red-900 transition-colors duration-300"
          onClick={handleBack}
        />
      </div>

      {/* Add Material Button */}
      <button
        onClick={handleAdd}
        className="absolute top-4 right-4  bg-red-600 text-white rounded-full p-4 s hover:shadow-xl hover:bg-red-700 "
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>

      <h1 className="text-center text-3xl font-extrabold text-red-800 mb-8 tracking-wide">
        {materialType === "All" ? "All Materials" : `${materialType} Materials`}
      </h1>

      {/* Filter Dropdown */}
      <div className="flex justify-center mb-8">
        <select
          value={materialType}
          onChange={handleFilterChange}
          className="border rounded-lg p-3 shadow-md focus:ring-2 focus:ring-red-300"
        >
          <option value="All">All Materials</option>
          <option value="Video">Video</option>
          <option value="Audio">Audio</option>
          <option value="Light">Light</option>
          <option value="Communication">Communication</option>
        </select>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="space-y-2">
              <div>
                <strong className="text-red-800">Number:</strong> {item.number}
              </div>
              <div>
                <strong className="text-red-800">Name:</strong> {item.name}
              </div>
              <div>
                <strong className="text-red-800">Model:</strong> {item.model}
              </div>
              <div>
                <strong className="text-red-800">Amount:</strong> {item.amount}
              </div>
              <div>
                <strong className="text-red-800">Serial No:</strong> {item.serialNo}
              </div>
              <div>
                <strong className="text-red-800">Working Remark:</strong> {item.working || "N/A"}
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => handleDelete(item.number)}
                className="text-red-500 hover:text-red-700 transition-colors duration-300"
              >
                <FontAwesomeIcon icon={faTrash} /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ElectronicMaterials;
