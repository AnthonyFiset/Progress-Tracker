import React, { useState, useEffect } from "react";
import "./App.css";

function ProgressTracker() {
  const [goal, setGoal] = useState(parseInt(localStorage.getItem("goal")) || 0);
  const [progress, setProgress] = useState(parseInt(localStorage.getItem("progress")) || 0);

  useEffect(() => {
    localStorage.setItem("goal", goal);
    localStorage.setItem("progress", progress);
  }, [goal, progress]);

  const handleGoalChange = (e) => {
    const goal = parseInt(e.target.value);
    setGoal(goal);
  };

  const incrementProgress = () => {
    if (progress < goal) {
      setProgress(progress + 1);
    } else {
      alert("Congratulations! You've reached your goal.");
    }
  };

  const resetProgress = () => {
    setProgress(0);
    setGoal(0);
  };

  const progressBarWidth = goal !== 0 ? (progress / goal) * 100 : 0;

  return (
    <div className="container">
      <h1>Progress Tracker</h1>
      <input
        type="number"
        value={goal}
        onChange={handleGoalChange}
        placeholder="Enter your goal"
      />
      <button onClick={incrementProgress}>Applied</button>
      <button onClick={resetProgress}>Reset</button>
      <div className="progressBarContainer">
        <div className="progressBar" style={{ width: `${progressBarWidth}%` }}></div>
      </div>
      <p>
        Jobs applied: {progress} out of {goal}
      </p>
    </div>
  );
}

export default ProgressTracker;

