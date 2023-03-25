import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../page/Home";
import Login from "../page/Login";
import Signup from "../page/Signup";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default AllRoutes;
