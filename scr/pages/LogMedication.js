import React, { useState } from "react";
import axios from "axios";

function LogMedication() {
  const [form, setForm] = useState({
    name: "",
    dosage: "",
    time: "",
    reminder_status: false,
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      await axios.post(
        "/api/medications/",
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
      setMessage("Medication logged!");
      setForm({ name: "", dosage: "", time: "", reminder_status: false });
    } catch (err) {
      setMessage("Error logging medication.");
    }
  };

  return (
    <div className="container">
      <h2>Log Medication</h2>
      {message && <div className="alert alert-info">{message}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Name</label>
          <input
            name="name"
            className="form-control"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label>Dosage</label>
          <input
            name="dosage"
            className="form-control"
            value={form.dosage}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label>Time</label>
          <input
            name="time"
            type="time"
            className="form-control"
            value={form.time}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-check mb-3">
          <input
            name="reminder_status"
            type="checkbox"
            className="form-check-input"
            checked={form.reminder_status}
            onChange={handleChange}
          />
          <label className="form-check-label">Set Reminder</label>
        </div>
        <button className="btn btn-secondary" type="submit">
          Log Medication
        </button>
      </form>
    </div>
  );
}

export default LogMedication;
