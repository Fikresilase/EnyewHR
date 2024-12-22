import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = sessionStorage.getItem('token');
  const location = useLocation();

  if (!token) {
    // Redirect to login if no token is found
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Render the protected component if the user is authenticated
  return children;
};

export default ProtectedRoute;
