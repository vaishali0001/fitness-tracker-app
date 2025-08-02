import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css"; // make sure styles are clean and responsive

const Dashboard = () => {
  const navigate = useNavigate();
  const [steps, setSteps] = useState(0);
  const [calories, setCalories] = useState(0);
  const [duration, setDuration] = useState(0);
  const [workoutType, setWorkoutType] = useState("");
  const [randomQuote, setRandomQuote] = useState("");

  // Load a motivational quote
  useEffect(() => {
    const quotes = [
      "Push yourself, because no one else is going to do it for you!",
      "Every step is progress.",
      "Stay strong. Stay consistent.",
      "Sweat is just fat crying.",
      "You don’t have to go fast, you just have to go."
    ];
    setRandomQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);

  // Calculate calories based on steps
  useEffect(() => {
    const calculatedCalories = steps > 0 ? (steps * 0.04).toFixed(2) : 0;
    setCalories(calculatedCalories);
  }, [steps]);

  // Save data to localStorage
  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = {
      date: new Date().toLocaleDateString(),
      steps,
      calories,
      duration,
      workoutType
    };

    const existing = JSON.parse(localStorage.getItem("fitnessData")) || [];
    localStorage.setItem("fitnessData", JSON.stringify([...existing, newEntry]));

    // Reset form
    setSteps(0);
    setDuration(0);
    setWorkoutType("");
  };

  // Render Section
  return (
    <div className="dashboard-container">

      {/* 👋 Motivational Quote */}
      <h1 className="dashboard-title">💬 {randomQuote}</h1>

      {/* 📝 Workout Input Form */}
      <form className="dashboard-form" onSubmit={handleSubmit}>
        <label>
          🧍 Steps Walked:
          <input
            type="number"
            value={steps}
            onChange={(e) => setSteps(Number(e.target.value))}
            required
          />
        </label>

        <label>
          🔥 Calories Burned:
          <input type="text" value={calories} readOnly />
        </label>

        <label>
          ⏱ Duration (minutes):
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
            required
          />
        </label>

        <label>
          🏋️‍♂️ Workout Type:
          <select
            value={workoutType}
            onChange={(e) => setWorkoutType(e.target.value)}
            required
          >
            <option value="">Select</option>
            <option value="Cardio">Cardio</option>
            <option value="Strength">Strength</option>
            <option value="Yoga">Yoga</option>
            <option value="Walk">Walk</option>
            <option value="Other">Other</option>
          </select>
        </label>

        <button type="submit">💾 Save Workout</button>
      </form>

      {/* 📅 Show 3 Most Recent Workouts */}
      <div className="dashboard-history">
        <h2>📅 Today's & Past Activity</h2>
        {JSON.parse(localStorage.getItem("fitnessData"))?.length > 0 ? (
          <ul>
            {JSON.parse(localStorage.getItem("fitnessData"))
              .slice(-3) // Only last 3
              .reverse()
              .map((entry, index) => (
                <li key={index}>
                  <strong>{entry.date}</strong> — {entry.steps} steps, {entry.calories} kcal, {entry.duration} min, {entry.workoutType}
                </li>
              ))}
          </ul>
        ) : (
          <p>No workout data saved yet.</p>
        )}
      </div>

      {/* 🚀 Bottom Navigation */}
      <ul className="dashboard-menu">
        <li onClick={() => navigate("/activity")}>🏃‍♀️ <span>Activity</span></li>
        <li onClick={() => navigate("/reports")}>📈 <span>Reports</span></li>
        <li onClick={() => navigate("/settings")}>⚙️ <span>Your Profile</span></li>
      </ul>
    </div>
  );
};

export default Dashboard;
