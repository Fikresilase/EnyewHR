import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Import useLocation
import axios from 'axios';
// import { useAuth } from './utils/AuthContext';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Access the previous location
  // const { login } = useAuth(); // Access login function from AuthContext

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent form submission
    setError(""); // Clear previous errors
    setLoading(true); // Set loading state
  
    try {

      localStorage.removeItem('token');

      // Send the POST request to the backend
      const response = await axios.post("https://ebc-training-and-research-center.onrender.com/login", {
        username,
        password,
      });
  
      const token = response.data.token;  
      // Call your session management function (login) and store token in sessionStorage
      // login(token); // Ensure the login function correctly handles the token
      sessionStorage.setItem('token', token);  
      console.log("Login successful");
  
      // Check if there is a redirect path or default to "/tests"
      const redirectTo = location.state?.from?.pathname || '/';
      navigate(redirectTo);
    } catch (error) {
      // Error handling based on the server response
      if (error.response) {
        setError(error.response.data.message || "Invalid username or password");
      } else {
        setError("An error occurred. Please try again.");
      }
    } finally {
      setLoading(false); // Reset loading state once login attempt is completed
    }
  };
  
  

  return (
    <div>
      {/* Your login form code */}
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
        <button 
                  onClick={() => navigate("/")}

        className="absolute top-4 right-4">
          <svg
            className="h-6 w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 mb-4">
            Login to your account
          </h1>
          {error && <p className="text-blue-500">{error}</p>}
          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900">
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                className="bg-gray-100 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-100 focus:border-blue-100 block w-full p-2.5"
                placeholder="emelia_erickson24"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-100 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-100 focus:border-blue-100 block w-full p-2.5"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full ${loading ? "bg-gray-400" : "bg-blue-600"} text-white rounded-lg font-medium text-sm px-5 py-2.5 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 transition duration-300`}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
          <p className="text-sm font-light text-gray-500 mt-4">
            Don’t have an account yet?{" "}
            <button
              onClick={() => navigate("/login")}
              className="font-medium text-blue-600 hover:underline"
            >
              Sign up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
