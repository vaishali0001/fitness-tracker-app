import React, { useState } from "react";

const ProfileForm = () => {
  const [userData, setUserData] = useState({
    name: "",
    age: "",
    gender: "",
    height: "",
    weight: "",
    water: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userData", JSON.stringify(userData));
    alert("Profile saved successfully!");
    window.location.href = "/activity"; // Redirect back to activity page
  };

  return (
    <div className="profile-form-container">
      <h2>📝 Fill Out Your Profile</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <input type="number" name="age" placeholder="Age" onChange={handleChange} required />
        <input type="text" name="gender" placeholder="Gender" onChange={handleChange} required />
        <input type="number" name="height" placeholder="Height (cm)" onChange={handleChange} required />
        <input type="number" name="weight" placeholder="Weight (kg)" onChange={handleChange} required />
        <input type="number" name="water" placeholder="Water Intake (glasses)" onChange={handleChange} required />
        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
};

export default ProfileForm;
