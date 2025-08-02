import React, { useState } from "react";
import "./PageStyles.css";

const Settings = () => {
  const [stepGoal, setStepGoal] = useState(10000);
  const [notifications, setNotifications] = useState(true);
  const [workoutType, setWorkoutType] = useState("Cardio");
  const [waterGoal, setWaterGoal] = useState(8); // glasses/day
  const [theme, setTheme] = useState("light");

  const toggleNotifications = () => {
    setNotifications(!notifications);
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleSave = () => {
    alert("✅ Settings Saved!");
    // Later you can store this in DB or localStorage
  };

  return (
    <div className={`page-container fade-in ${theme}`}>
      <h2>⚙️ Fitness Settings</h2>

      <div className="setting-group">
        <label>🎯 Daily Step Goal:</label>
        <input
          type="number"
          value={stepGoal}
          onChange={(e) => setStepGoal(e.target.value)}
          min={1000}
        />
      </div>

      <div className="setting-group">
        <label>🔔 Workout Reminders:</label>
        <button className="btn toggle-btn" onClick={toggleNotifications}>
          {notifications ? "Disable" : "Enable"}
        </button>
      </div>

      <div className="setting-group">
        <label>💪 Preferred Workout Type:</label>
        <select
          value={workoutType}
          onChange={(e) => setWorkoutType(e.target.value)}
        >
          <option>Cardio</option>
          <option>Strength Training</option>
          <option>Yoga</option>
          <option>HIIT</option>
          <option>Mixed</option>
        </select>
      </div>

      <div className="setting-group">
        <label>🚰 Daily Water Goal (Glasses):</label>
        <input
          type="number"
          value={waterGoal}
          onChange={(e) => setWaterGoal(e.target.value)}
          min={1}
          max={20}
        />
      </div>

      <div className="setting-group">
        <label>🌓 Theme Mode:</label>
        <button className="btn toggle-btn" onClick={toggleTheme}>
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>

      <button className="btn save-btn" onClick={handleSave}>
        💾 Save Changes
      </button>
    </div>
  );
};

export default Settings;
