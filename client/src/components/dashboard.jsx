import React, { useState, useEffect } from "react";
import axios from "axios";
import { Bar, Pie, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

function Dashboard() {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get("/api/employees");
        console.log(response.data); // Debug API response
        // Check if response is an array; if not, access the correct data key
        setEmployees(Array.isArray(response.data) ? response.data : response.data.employees || []);
      } catch (error) {
        console.error("Error fetching employees:", error);
        setEmployees([]);
      }
    };

    fetchEmployees();
  }, []);

  const filteredEmployees = Array.isArray(employees)
    ? employees.filter((employee) =>
        employee.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const ageData = {
    labels: filteredEmployees.map((employee) => employee.name),
    datasets: [
      {
        label: "Age",
        data: filteredEmployees.map((employee) => employee.age),
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const salaryData = {
    labels: filteredEmployees.map((employee) => employee.name),
    datasets: [
      {
        label: "Salary",
        data: filteredEmployees.map((employee) => employee.salary),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const positionData = {
    labels: [...new Set(filteredEmployees.map((employee) => employee.position))],
    datasets: [
      {
        label: "Position Distribution",
        data: [...new Set(filteredEmployees.map(
          (position) =>
            filteredEmployees.filter((e) => e.position === position).length
        ))],
        backgroundColor: [
          "rgba(255, 206, 86, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(153, 102, 255, 0.5)",
        ],
        borderColor: [
          "rgba(255, 206, 86, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Employee Dashboard
        </h1>
        <input
          type="text"
          placeholder="Search employees..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full mb-6 p-2 border border-gray-300 rounded-md"
        />
        <div className="overflow-x-auto mb-8">
          <table className="w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="border border-gray-300 p-2">Name</th>
                <th className="border border-gray-300 p-2">Email</th>
                <th className="border border-gray-300 p-2">Age</th>
                <th className="border border-gray-300 p-2">Salary</th>
                <th className="border border-gray-300 p-2">Position</th>
                <th className="border border-gray-300 p-2">Co-signer Name</th>
                <th className="border border-gray-300 p-2">Code Number</th>
              </tr>
            </thead>
            <tbody>
              {filteredEmployees.length > 0 ? (
                filteredEmployees.map((employee, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="border border-gray-300 p-2">{employee.name}</td>
                    <td className="border border-gray-300 p-2">{employee.email}</td>
                    <td className="border border-gray-300 p-2">{employee.age}</td>
                    <td className="border border-gray-300 p-2">{employee.salary}</td>
                    <td className="border border-gray-300 p-2">{employee.position}</td>
                    <td className="border border-gray-300 p-2">
                      {employee.coSignerName}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {employee.codeNumber}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="border border-gray-300 p-2 text-center">
                    No employees found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Age Distribution</h2>
            <Bar data={ageData} />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Salary Overview</h2>
            <Line data={salaryData} />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Position Distribution</h2>
            <Pie data={positionData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
