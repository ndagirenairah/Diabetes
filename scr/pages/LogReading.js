import React, { useState } from "react";
import axios from "axios";

function LogReading() {
  const [sugarLevel, setSugarLevel] = useState("");
  const [note, setNote] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      await axios.post(
        "/api/readings/",
        {
          sugar_level: sugarLevel,
          note,
          date_time: new Date().toISOString(),
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setMessage("Reading logged!");
      setSugarLevel("");
      setNote("");
    } catch (err) {
      setMessage("Error logging reading.");
    }
  };

  return (
    <div className="container">
      <h2>Log Blood Sugar Reading</h2>
      {message && <div className="alert alert-info">{message}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Blood Sugar Level (mg/dL)</label>
          <input
            type="number"
            className="form-control"
            value={sugarLevel}
            onChange={(e) => setSugarLevel(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Note</label>
          <input
            className="form-control"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Log Reading
        </button>
      </form>
    </div>
  );
}

export default LogReading;
