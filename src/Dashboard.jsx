// src/Dashboard.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const preambleText = `WE, THE PEOPLE OF INDIA, having solemnly resolved to constitute India into a 
SOVEREIGN SOCIALIST SECULAR DEMOCRATIC REPUBLIC and to secure to all its citizens:

JUSTICE, social, economic and political;
LIBERTY of thought, expression, belief, faith and worship;
EQUALITY of status and of opportunity;
FRATERNITY assuring the dignity of the individual and the unity and integrity of the Nation.`;

const quickFacts = [
  "Indian Constitution is the longest written Constitution in the world.",
  "It came into effect on 26 January 1950.",
  "Dr. B. R. Ambedkar chaired the Drafting Committee.",
  "The Constitution balances Fundamental Rights and Duties."
];

const recentAmendments = [
  { no: "104th", year: "2019", text: "Extended SC/ST reservation in Parliament" },
  { no: "103rd", year: "2019", text: "Introduced 10% EWS reservation" }
];

export default function Dashboard() {
  const [dark, setDark] = useState(false);
  const [showFullPreamble, setShowFullPreamble] = useState(false);
  const [factIndex, setFactIndex] = useState(0);

  return (
    <div className={`dashboard ${dark ? "dark" : ""}`}>
      {/* Header */}
      <header className="dash-header">
        <div>
          <h1>Constitution Dashboard</h1>
          <p className="header-sub">Your quick constitutional overview</p>
        </div>
        <button className="theme-btn" onClick={() => setDark(!dark)}>
          {dark ? "☀ Light Mode" : "🌙 Dark Mode"}
        </button>
      </header>

      {/* Overview Stats */}
      <section className="stats-grid">
        <div className="stat-card">📘 <span>25</span> Parts</div>
        <div className="stat-card">📜 <span>448</span> Articles</div>
        <div className="stat-card">🧾 <span>12</span> Schedules</div>
        <div className="stat-card">🛠 <span>105</span> Amendments</div>
      </section>

      {/* Main Content */}
      <main className="dash-grid">
        {/* Preamble */}
        <section className="card preamble">
          <h2>Preamble of India</h2>
          <p className={`preamble-text ${showFullPreamble ? "show" : ""}`}>
            {preambleText}
          </p>
          <button onClick={() => setShowFullPreamble(!showFullPreamble)}>
            {showFullPreamble ? "Show Less" : "Read Full Preamble"}
          </button>
        </section>

        {/* Navigation */}
        <section className="card">
          <h2>Explore Portal</h2>
          <div className="nav-grid">
            <Link to="/articles">📖 Articles</Link>
            <Link to="/resources">📚 Resources</Link>
            <Link to="/quiz">📝 Quiz</Link>
            <Link to="/contact">☎ Contact</Link>
          </div>
        </section>

        {/* Focus Areas */}
        <section className="card">
          <h2>Core Constitutional Areas</h2>
          <ul className="clean-list">
            <li>Fundamental Rights & Digital Privacy</li>
            <li>Directive Principles & Governance</li>
            <li>Fundamental Duties of Citizens</li>
          </ul>
        </section>

        {/* Amendments */}
        <section className="card">
          <h2>Recent Amendments</h2>
          {recentAmendments.map((a, i) => (
            <div key={i} className="timeline-item">
              <strong>{a.no} Amendment ({a.year})</strong>
              <p>{a.text}</p>
            </div>
          ))}
        </section>

        {/* Facts */}
        <section className="card center">
          <h2>Did You Know?</h2>
          <p className="fact">{quickFacts[factIndex]}</p>
          <button onClick={() => setFactIndex((factIndex + 1) % quickFacts.length)}>
            Next Fact
          </button>
        </section>
      </main>
    </div>
  );
}
