import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp"
import Dashboard from "./pages/Dashboard";
import ActivityTracker from "./pages/ActivityTracker";
import Activity from "./pages/Activity";
import Profile from "./pages/Profile";
import ProfileForm from "./pages/ProfileForm";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} /> {/* ✅ Start Here */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile-form" element={<ProfileForm />} />
        <Route path="/activity-tracker" element={<ActivityTracker />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
