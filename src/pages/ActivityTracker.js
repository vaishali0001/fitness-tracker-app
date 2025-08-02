// src/pages/ActivityTracker.js
import React from "react";
import "./ActivityTracker.css";
import Dashboard from "./Dashboard"; // Make sure this is the default export

const ActivityTracker = () => {
  return (
    <Dashboard>
      <div className="activity-tracker-container">
        <h1 className="heading">Your Daily Activity</h1>

        <div className="card-container">
          <div className="activity-card">
            <h3>Steps Walked</h3>
            <p>7,800</p>
          </div>
          <div className="activity-card">
            <h3>Workout</h3>
            <p>Strength Training</p>
          </div>
          <div className="activity-card">
            <h3>Duration</h3>
            <p>45 mins</p>
          </div>
        </div>

        <div className="quote">
          <em>"Push yourself because no one else is going to do it for you!"</em>
        </div>
      </div>
    </Dashboard>
  );
};

export default ActivityTracker;
