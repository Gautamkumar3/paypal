import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const userdata = JSON.parse(localStorage.getItem("userdata"));
  if (!userdata) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
