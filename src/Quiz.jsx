// src/Quiz.jsx
import React from "react";
import { Link } from "react-router-dom";
import { quizSections } from "./quizData";
import "./Quiz.css";

export default function QuizTopics() {
  return (
    <div className="quiz-topics-container">
      <h1 className="quiz-title">Samvidhan Quiz Centre</h1>
      <p className="quiz-subtitle">
        Choose a topic to start a short quiz. Each subtopic contains 10–15 questions
        (you can add more in <code>quizData.js</code>).
      </p>

      <div className="quiz-sections-grid">
        {quizSections.map(section => (
          <section key={section.id} className="quiz-section-card">
            <h2>{section.title}</h2>
            <p className="quiz-section-desc">{section.description}</p>

            <ul className="quiz-subtopic-list">
              {section.subtopics.map(sub => (
                <li key={sub.id}>
                  <Link
                    className="quiz-subtopic-btn"
                    to={`/quiz/${sub.id}`}
                  >
                    {sub.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
