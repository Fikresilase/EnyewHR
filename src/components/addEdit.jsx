import React, { useState } from "react";
import axios from "axios";

function AddEdit({ employeeData, isEditing, onClose, fetchEmployees }) {
  const [formData, setFormData] = useState({
    name: employeeData?.name || "",
    email: employeeData?.email || "",
    age: employeeData?.age || "",
    salary: employeeData?.salary || "",
    position: employeeData?.position || "",
    coSignerName: employeeData?.coSignerName || "",
    coSignerDocument: null,
    educationalDocument: null,
    codeNumber: employeeData?.codeNumber || "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formPayload = new FormData();
    for (const key in formData) {
      formPayload.append(key, formData[key]);
    }

    try {
      if (isEditing) {
        await axios.put(`/api/employees/${employeeData.id}`, formPayload);
        alert("Employee updated successfully!");
      } else {
        await axios.post("/api/employees", formPayload);
        alert("Employee added successfully!");
      }
      fetchEmployees(); // Refresh the employee list
      onClose(); // Close the modal or form
    } catch (error) {
      console.error("Error while submitting the form:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        {isEditing ? "Edit Employee" : "Add Employee"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>

        {/* Age */}
        <div>
          <label className="block font-medium text-gray-700">Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            required
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>

        {/* Salary */}
        <div>
          <label className="block font-medium text-gray-700">Salary</label>
          <input
            type="number"
            name="salary"
            value={formData.salary}
            onChange={handleInputChange}
            required
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>

        {/* Position */}
        <div>
          <label className="block font-medium text-gray-700">Position</label>
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleInputChange}
            required
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>

        {/* Co-signer Name */}
        <div>
          <label className="block font-medium text-gray-700">Co-signer Name</label>
          <input
            type="text"
            name="coSignerName"
            value={formData.coSignerName}
            onChange={handleInputChange}
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>

        {/* Co-signer Document */}
        <div>
          <label className="block font-medium text-gray-700">Co-signer Document</label>
          <input
            type="file"
            name="coSignerDocument"
            onChange={handleFileChange}
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>

        {/* Educational Document */}
        <div>
          <label className="block font-medium text-gray-700">Educational Document</label>
          <input
            type="file"
            name="educationalDocument"
            onChange={handleFileChange}
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>

        {/* Code Number */}
        <div>
          <label className="block font-medium text-gray-700">Code Number</label>
          <input
            type="text"
            name="codeNumber"
            value={formData.codeNumber}
            onChange={handleInputChange}
            required
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300"
        >
          {isEditing ? "Update Employee" : "Add Employee"}
        </button>
      </form>
    </div>
  );
}

export default AddEdit;
