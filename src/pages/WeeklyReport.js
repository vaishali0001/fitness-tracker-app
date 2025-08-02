import React from "react";
import "../styles/WeeklyReport.css";

const WeeklyReport = () => {
  const weeklyData = [
    { day: "Monday", steps: 5000, workout: "Yoga", calories: 220 },
    { day: "Tuesday", steps: 7500, workout: "Running", calories: 340 },
    { day: "Wednesday", steps: 6200, workout: "Cycling", calories: 290 },
    { day: "Thursday", steps: 8000, workout: "HIIT", calories: 410 },
    { day: "Friday", steps: 3000, workout: "Rest", calories: 120 },
    { day: "Saturday", steps: 10000, workout: "Hiking", calories: 550 },
    { day: "Sunday", steps: 7000, workout: "Walk", calories: 310 },
  ];

  return (
    <div className="weekly-report-container">
      <h2 className="weekly-title">📊 Weekly Fitness Summary</h2>
      <div className="report-list">
        {weeklyData.map((data, index) => (
          <div className="report-card" key={index}>
            <h3>{data.day}</h3>
            <p>Steps: {data.steps}</p>
            <p>Workout: {data.workout}</p>
            <p>Calories Burned: {data.calories}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyReport;
