// Activity.js
import React, { useEffect, useState } from "react";
import "../App.css";

const Activity = () => {
  const [userData, setUserData] = useState(null);
  const [fitnessData, setFitnessData] = useState([]);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("userDetails"));
    const savedFitness = JSON.parse(localStorage.getItem("fitnessData")) || [];

    if (savedUser) setUserData(savedUser);

    // Sort newest first
    const sortedData = savedFitness.sort((a, b) => new Date(b.date) - new Date(a.date));
    setFitnessData(sortedData);
  }, []);

  return (
    <div className="activity-container" style={{ padding: "20px", fontFamily: "Arial", background: "#cce0ff", minHeight: "100vh" }}>
      <h2 style={{ textAlign: "center" }}>👤 Your Profile</h2>
      {userData ? (
        <div style={{ marginBottom: "30px", fontSize: "18px", background: "#fff", padding: "15px", borderRadius: "12px", boxShadow: "0 0 8px #aaa", maxWidth: "500px", margin: "auto" }}>
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Age:</strong> {userData.age}</p>
          <p><strong>Gender:</strong> {userData.gender}</p>
          <p><strong>Height:</strong> {userData.height} cm</p>
          <p><strong>Weight:</strong> {userData.weight} kg</p>
        </div>
      ) : (
        <p>No profile data found.</p>
      )}

      <h3>📊 Your Activity Summary</h3>
      <ul style={{ listStyle: "disc", paddingLeft: "30px", fontSize: "17px" }}>
        {fitnessData.length > 0 ? (
          fitnessData.map((entry, index) => (
            <li key={index} style={{ marginBottom: "10px" }}>
              <strong>{entry.date}:</strong> {entry.steps} steps, {entry.workout}, burned {entry.calories} kcal
            </li>
          ))
        ) : (
          <p>No activity data found.</p>
        )}
      </ul>
    </div>
  );
};

export default Activity;
