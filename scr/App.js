import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PatientDashboard from "./pages/PatientDashboard";
import DoctorDashboard from "./pages/DoctorDashboard";
import LogReading from "./pages/LogReading";
import LogMedication from "./pages/LogMedication";
import LogDiet from "./pages/LogDiet";
import LogExercise from "./pages/LogExercise";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/patient"
          element={
            <ProtectedRoute>
              <PatientDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/doctor"
          element={
            <ProtectedRoute>
              <DoctorDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/log-reading"
          element={
            <ProtectedRoute>
              <LogReading />
            </ProtectedRoute>
          }
        />
        <Route
          path="/log-medication"
          element={
            <ProtectedRoute>
              <LogMedication />
            </ProtectedRoute>
          }
        />
        <Route
          path="/log-diet"
          element={
            <ProtectedRoute>
              <LogDiet />
            </ProtectedRoute>
          }
        />
        <Route
          path="/log-exercise"
          element={
            <ProtectedRoute>
              <LogExercise />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
