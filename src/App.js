import React, { useState } from "react";
import './App.css';

function ProgressTracker() {
  const [goal, setGoal] = useState(0);
  const [progress, setProgress] = useState(0);

  const handleGoalChange = (e) => {
    setGoal(e.target.value);
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
      <h1>Job Applications</h1>
      <input 
        type="number" 
        value={goal} 
        onChange={handleGoalChange} 
        placeholder="Enter your goal"
      />
      <button onClick={incrementProgress}>Applied</button>
      <button onClick={resetProgress}>Reset</button>
      <div className="progressBarContainer">
        <div className="progressBar" style={{width: `${progressBarWidth}%`}}></div>
      </div>
      <p>Job Applications: {progress} out of {goal}</p>
    </div>
  );
}

export default ProgressTracker;
