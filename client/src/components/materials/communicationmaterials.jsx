import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faArrowLeft,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

const CommunicationMaterials = () => {
  const [data, setData] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  // Fetch data from the backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://ebc-training-and-research-center.onrender.com/materials/communication");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        console.log("Fetched data:", result);
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleBack = () => {
    navigate("/electronicmaterials");
  };

  const handleDelete = async (number) => {
    const token = sessionStorage.getItem("token");

    try {
        console.log(`Attempting to delete item with number: ${number}`);
        const response = await fetch(
            `https://ebc-training-and-research-center.onrender.com/materials/communication/${number}`,
            {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            }
        );

        console.log(`Response status: ${response.status}`);

        if (response.ok) {
            setData((prevData) => prevData.filter((item) => item.number !== number));
            console.log(`Item with number ${number} deleted successfully.`);
        } else {
            const errorMessage = await response.text();
            console.error(`Failed to delete item with number ${number}. Status: ${response.status}, Message: ${errorMessage}`);
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
    <div className="p-4 relative">
      {/* Back Arrow */}
      <div className="mb-4">
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="h-6 w-6 cursor-pointer"
          onClick={handleBack}
        />
      </div>

      {/* Add Video Material Button */}
      <button
        onClick={handleAdd}
        className="absolute top-4 right-4 bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600"
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>

      <h1 className="text-center text-2xl font-bold mb-4">Communication Materials</h1>

      <div className="space-y-4">
        {data.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <strong>Number:</strong> {item.number}
              </div>
              <div>
                <strong>Name:</strong> {item.name}
              </div>
              <div>
                <strong>Model:</strong> {item.model}
              </div>
              <div>
                <strong>Amount:</strong> {item.amount}
              </div>
              <div>
                <strong>Serial No:</strong> {item.serialNo}
              </div>
              <div>
                <strong>Working Remark:</strong> {item.working || "N/A"}
              </div>
            </div>
            <div className="mt-4">
            <button
    onClick={() => handleDelete(item.number)} // Pass the item.number for deletion
    className="text-red-500 hover:text-red-700"
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

export default CommunicationMaterials;