import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Reports.css";

const Reports = () => {
  const navigate = useNavigate();
  const [fitnessData, setFitnessData] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("fitnessData")) || [];
    setFitnessData(data);
  }, []);

  // Optional: Motivational quote
  const fitnessQuotes = [
    "Push yourself, because no one else is going to do it for you.",
    "Fitness is not about being better than someone else. It's about being better than you used to be.",
    "The body achieves what the mind believes.",
    "No pain, no gain. Shut up and train!",
    "A little progress each day adds up to big results."
  ];
  const randomQuote = fitnessQuotes[Math.floor(Math.random() * fitnessQuotes.length)];

  return (
    <div className="reports-container">
      <h1 className="reports-heading">📈 Reports</h1>
      <p className="fitness-quote">💪 "{randomQuote}"</p>

      {fitnessData.length === 0 ? (
        <p>No fitness data available. Track some activity first!</p>
      ) : (
        <div className="report-table">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Steps</th>
                <th>Calories</th>
                <th>Duration (min)</th>
                <th>Workout Type</th>
              </tr>
            </thead>
            <tbody>
              {fitnessData.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.date}</td>
                  <td>{entry.steps}</td>
                  <td>{entry.calories}</td>
                  <td>{entry.duration}</td>
                  <td>{entry.workoutType}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="nav-buttons">
        <button onClick={() => navigate("/dashboard")}>⬅️ Back to Dashboard</button>
      </div>
    </div>
  );
};

export default Reports;
