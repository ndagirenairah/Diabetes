import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div className="container">
        <Link className="navbar-brand" to="/">
          DiabetesCare+
        </Link>
        <div>
          <Link className="btn btn-outline-primary mx-1" to="/login">
            Login
          </Link>
          <Link className="btn btn-outline-success mx-1" to="/register">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
