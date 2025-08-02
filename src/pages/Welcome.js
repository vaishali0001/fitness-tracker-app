import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Welcome.css";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <h1 className="welcome-title">Welcome to FitTrack Pro 💪</h1>
      <div className="button-group">
        <button onClick={() => navigate("/login")}>Login</button>
        <button onClick={() => navigate("/signup")}>Create Account</button>
</div>
    </div>
  );
};

export default Welcome;
