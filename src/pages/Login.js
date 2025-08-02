import React, { useState } from "react";
import "../styles/LoginSignup.css";

import { useNavigate } from "react-router-dom";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const navigate = useNavigate();

  const handleSendOtp = () => {
    if (phone.length === 10) {
      setOtpSent(true);
    } else {
      alert("Enter a valid 10-digit phone number.");
    }
  };

  const handleLogin = () => {
    if (otp === "9802") {
      navigate("/dashboard");
    } else {
      alert("Invalid OTP. Try again.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Enter phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      {!otpSent ? (
        <button onClick={handleSendOtp}>Send OTP</button>
      ) : (
        <>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </>
      )}
    </div>
  );
};

export default Login;
