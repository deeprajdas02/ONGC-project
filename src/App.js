import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Question from './components/Question';
function countdownTimer() {
  let examDuration = 180; // Exam duration in minutes
  let now = new Date().getTime(); // Current time in milliseconds
  let examEnd = now + (examDuration * 60000); // Exam end time in milliseconds

  // Update the timer every second
  let timerInterval = setInterval(function() {
    now = new Date().getTime(); // Current time in milliseconds

    let timeRemaining = examEnd - now; // Remaining time in milliseconds
    let hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Display the remaining time in the timer element
    document.getElementById("timer").textContent = hours + "h " + minutes + "m " + seconds + "s";

    // Check if the timer has reached zero
    if (timeRemaining < 0) {
      clearInterval(timerInterval);
      document.getElementById("timer").textContent = "Time's up!";
    }
  }, 1000); // Update every second
}


function App() {
  useEffect(() => {
    countdownTimer();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Question />
    </div>
  );
}

export default App;
