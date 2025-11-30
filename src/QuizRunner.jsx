// src/QuizRunner.jsx
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { quizSections, getAllSubtopics } from "./quizData";
import "./Quiz.css";

export default function QuizRunner() {
  const { subtopicId } = useParams();
  const navigate = useNavigate();

  const subtopics = getAllSubtopics();
  const subtopic = subtopics.find(st => st.id === subtopicId);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState("");
  const [score, setScore] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [finished, setFinished] = useState(false);

  if (!subtopic) {
    return (
      <div className="quiz-container">
        <div className="quiz-card">
          <h2>Topic not found</h2>
          <button
            className="quiz-btn"
            onClick={() => navigate("/quiz")}
          >
            Back to Quiz Topics
          </button>
        </div>
      </div>
    );
  }

  const questions = subtopic.questions;
  const currentQuestion = questions[currentIndex];

  const handleNext = () => {
    if (selected === currentQuestion.answer) {
      setScore(prev => prev + 1);
    }
    setShowHint(false);
    setSelected("");

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setScore(0);
    setSelected("");
    setShowHint(false);
    setFinished(false);
  };

  return (
    <div className="quiz-container">
      <div className="quiz-card">
        {!finished ? (
          <>
            <div className="quiz-header">
              <button
                className="quiz-back"
                onClick={() => navigate("/quiz")}
              >
                ← Topics
              </button>
              <span className="quiz-progress">
                Question {currentIndex + 1} of {questions.length}
              </span>
            </div>

            <h2 className="quiz-topic-title">{subtopic.title}</h2>
            <p className="quiz-question">{currentQuestion.question}</p>

            <div className="quiz-options">
              {currentQuestion.options.map(option => (
                <label key={option} className={`quiz-option ${selected === option ? "selected" : ""}`}>
                  <input
                    type="radio"
                    name="option"
                    value={option}
                    checked={selected === option}
                    onChange={() => setSelected(option)}
                  />
                  {option}
                </label>
              ))}
            </div>

            <div className="quiz-actions">
              <button
                type="button"
                className="quiz-hint-btn"
                onClick={() => setShowHint(prev => !prev)}
              >
                {showHint ? "Hide Hint" : "Show Hint"}
              </button>

              <button
                className="quiz-btn"
                disabled={!selected}
                onClick={handleNext}
              >
                {currentIndex + 1 === questions.length ? "Finish Quiz" : "Next"}
              </button>
            </div>

            {showHint && (
              <p className="quiz-hint">
                💡 Hint: {currentQuestion.hint}
              </p>
            )}
          </>
        ) : (
          <>
            <h2>Quiz Completed ✅</h2>
            <p className="quiz-score">
              You scored {score} out of {questions.length}
            </p>
            <p className="quiz-score-detail">
              Percentage: {Math.round((score / questions.length) * 100)}%
            </p>

            <div className="quiz-finish-actions">
              <button className="quiz-btn" onClick={handleRestart}>
                Try Again
              </button>
              <button
                className="quiz-secondary-btn"
                onClick={() => navigate("/quiz")}
              >
                Back to Topics
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
