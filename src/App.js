import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Login from "./components/LoginSignUp";
import LanguageSelection from './components/LanguageSelection'; 
import Dashboard from "./components/Dashboard";
import Lessons from "./components/Lessons";
import LanguageLessons from "./components/LanguageLessons"; // Import LessonDetail component
import Profile from "./components/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/languageselection" element={<LanguageSelection />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/lessons/:language" element={<Lessons />} /> {/* Route for lessons */}
        <Route path="/lessons/:language" component={LanguageLessons} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
