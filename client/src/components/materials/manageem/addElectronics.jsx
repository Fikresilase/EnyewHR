import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddElectronics = () => {
  const [type, setType] = useState("audio"); // Default type
  const [name, setName] = useState("");
  const [model, setModel] = useState("");
  const [amount, setAmount] = useState("");
  const [serialNo, setSerialNo] = useState("");
  const [workingRemark, setWorkingRemark] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous error

    // Simple validation
    if (!name || !model || !amount || !serialNo) {
      setError("Please fill in all fields.");
      return;
    }

    const token = sessionStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    const newComponent = {
      type,
      name,
      model,
      amount: parseInt(amount, 10), // Convert to number
      serialNo,
      workingRemark,
    };

    // Wrap the newComponent in a material key
    const payload = { material: newComponent }; // This line was missing

    try {
      const response = await axios.post(
        `https://ebc-training-and-research-center.onrender.com/materials/${type}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        alert("Component added successfully!");
        navigate("/electronicmaterials");
      }
    } catch (error) {
      console.error("Error adding component:", error);
      setError("Error adding component. Please try again.");
    }
  };
  return (
    <div className="p-4">
      <h1 className="text-center text-2xl font-bold mb-4">
        Add Electronic Material
      </h1>
      {error && <p className="text-blue-500 text-center">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Type</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="border rounded p-2 w-full"
          >
            <option value="audio">Audio</option>
            <option value="video">Video</option>
            <option value="light">Light</option>
            <option value="communication">Communication</option>
          </select>
        </div>
        <div>
          <label className="block mb-1">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded p-2 w-full"
            placeholder="Enter name"
          />
        </div>
        <div>
          <label className="block mb-1">Model</label>
          <input
            type="text"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            className="border rounded p-2 w-full"
            placeholder="Enter model"
          />
        </div>
        <div>
          <label className="block mb-1">Amount</label>
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="border rounded p-2 w-full"
            placeholder="Enter amount"
          />
        </div>
        <div>
          <label className="block mb-1">Serial No</label>
          <input
            type="text"
            value={serialNo}
            onChange={(e) => setSerialNo(e.target.value)}
            className="border rounded p-2 w-full"
            placeholder="Enter serial number"
          />
        </div>
        <div>
          <label className="block mb-1">Working Remark</label>
          <select
            value={workingRemark}
            onChange={(e) => setWorkingRemark(e.target.value)}
            className="border rounded p-2 w-full"
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600 w-full"
        >
          Add the Material
        </button>
      </form>
    </div>
  );
};

export default AddElectronics;
