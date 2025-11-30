import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";

import Login from "./Login.jsx";
import Home from "./Home.jsx";
import Articles from "./Articles.jsx";
import Dashboard from "./Dashboard.jsx";
import Resources from "./Resources.jsx";
import QuizTopics from "./Quiz.jsx";      // topics list page
import QuizRunner from "./QuizRunner.jsx"; // actual quiz page
import Contact from "./Contact.jsx";

import "./Home.css";

function Navbar({ isAuthenticated, onLogout }) {
  return (
    <nav className="navbar">
      {!isAuthenticated && <Link to="/login">Login</Link>}
      {isAuthenticated && (
        <>
          <Link to="/articles">Articles</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/quiz">Quiz</Link>
          <Link to="/contact">Contact</Link>
          <button className="nav-logout" onClick={onLogout}>
            Logout
          </button>
        </>
      )}
    </nav>
  );
}

function AppRouter() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    navigate("/dashboard");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<Login onLoginSuccess={handleLoginSuccess} />}
        />

        {/* Protected routes (only when logged in) */}
        {isAuthenticated && (
          <>
            <Route
              path="/articles"
              element={
                <>
                  <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
                  <Articles />
                </>
              }
            />
            <Route
              path="/dashboard"
              element={
                <>
                  <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
                  <Dashboard />
                </>
              }
            />
            <Route
              path="/resources"
              element={
                <>
                  <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
                  <Resources />
                </>
              }
            />
            {/* Quiz topics list */}
            <Route
              path="/quiz"
              element={
                <>
                  <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
                  <QuizTopics />
                </>
              }
            />
            {/* Quiz runner for selected subtopic */}
            <Route
              path="/quiz/:subtopicId"
              element={
                <>
                  <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
                  <QuizRunner />
                </>
              }
            />
            <Route
              path="/contact"
              element={
                <>
                  <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
                  <Contact />
                </>
              }
            />
          </>
        )}
      </Routes>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </React.StrictMode>
);
