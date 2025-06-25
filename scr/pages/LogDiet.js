import React, { useState } from "react";
import axios from "axios";

function LogDiet() {
  const [form, setForm] = useState({
    food_items: "",
    calories: "",
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
        "/api/dietlogs/",
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
      setMessage("Diet log added!");
      setForm({ food_items: "", calories: "" });
    } catch (err) {
      setMessage("Error logging diet.");
    }
  };

  return (
    <div className="container">
      <h2>Log Diet</h2>
      {message && <div className="alert alert-info">{message}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Food Items</label>
          <input
            name="food_items"
            className="form-control"
            value={form.food_items}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label>Calories</label>
          <input
            name="calories"
            type="number"
            className="form-control"
            value={form.calories}
            onChange={handleChange}
            required
          />
        </div>
        <button className="btn btn-success" type="submit">
          Log Diet
        </button>
      </form>
    </div>
  );
}

export default LogDiet;
