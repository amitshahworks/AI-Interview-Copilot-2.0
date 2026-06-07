import { Routes, Route } from "react-router-dom";


import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";

import ProtectedRoute from "../components/auth/ProtectedRoute";
import InterviewSetup from "../pages/interviewSetup";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      <Route path="/interview-setup" element={<ProtectedRoute><InterviewSetup /></ProtectedRoute>} />
    </Routes>
  );
}

export default AppRoutes;