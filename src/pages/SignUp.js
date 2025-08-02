import React, { useState } from "react";
import "../styles/LoginSignup.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    gender: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    if (formData.name && formData.email) {
      localStorage.setItem("user-data", JSON.stringify(formData));
      navigate("/dashboard");
    } else {
      alert("Please fill all required fields.");
    }
  };

  return (
    <div className="signup-container">
      <h2>Create Account</h2>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} />
      <input type="number" name="age" placeholder="Age" onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} />
      <input type="text" name="gender" placeholder="Gender" onChange={handleChange} />
      <button onClick={handleSubmit}>Create Account</button>
    </div>
  );
};

export default Signup;
