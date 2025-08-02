import React, { useEffect, useState } from "react";
import "../App.css";

const Profile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("userData"));
    setUserData(savedUser);
  }, []);

  return (
    <div className="profile-container">
      <h1>Your Profile 🧍</h1>

      {userData ? (
        <ul className="profile-list">
          <li><strong>Name:</strong> {userData.name}</li>
          <li><strong>Age:</strong> {userData.age}</li>
          <li><strong>Gender:</strong> {userData.gender}</li>
          <li><strong>Height:</strong> {userData.height} cm</li>
          <li><strong>Weight:</strong> {userData.weight} kg</li>
          <li><strong>Water Intake:</strong> {userData.water} glasses</li>
        </ul>
      ) : (
        <p>No profile found. <a href="/">Go fill out your details now</a>.</p>
      )}
    </div>
  );
};

export default Profile;
