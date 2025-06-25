import React from "react";
import { Link } from "react-router-dom";

function PatientDashboard() {
  return (
    <div className="container">
      <h2>Patient Dashboard</h2>
      <div className="mb-3">
        <Link className="btn btn-primary mx-1" to="/log-reading">
          Log Blood Sugar
        </Link>
        <Link className="btn btn-secondary mx-1" to="/log-medication">
          Log Medication
        </Link>
        <Link className="btn btn-success mx-1" to="/log-diet">
          Log Diet
        </Link>
        <Link className="btn btn-info mx-1" to="/log-exercise">
          Log Exercise
        </Link>
      </div>
      {/* Add charts and history here */}
      <div>
        <h4>Your History & Charts (Coming Soon)</h4>
      </div>
    </div>
  );
}

export default PatientDashboard;
