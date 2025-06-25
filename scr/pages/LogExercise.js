import React, { useState } from "react";
import axios from "axios";

function LogExercise() {
  const [form, setForm] = useState({
    activity_type: "",
    duration: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      await axios.post(
        "/api/exercises/",
        {
          ...form,
          date_time: new Date().toISOString(),
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setMessage("Exercise logged!");
      setForm({ activity_type: "", duration: "" });
    } catch (err) {
      setMessage("Error logging exercise.");
    }
  };

  return (
    <div className="container">
      <h2>Log Exercise</h2>
      {message && <div className="alert alert-info">{message}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Activity Type</label>
          <input
            name="activity_type"
            className="form-control"
            value={form.activity_type}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label>Duration (minutes)</label>
          <input
            name="duration"
            type="number"
            className="form-control"
            value={form.duration}
            onChange={handleChange}
            required
          />
        </div>
        <button className="btn btn-info" type="submit">
          Log Exercise
        </button>
      </form>
    </div>
  );
}

export default LogExercise;
