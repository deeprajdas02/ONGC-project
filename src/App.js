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

const questionArray = [
  {
    question: "What is the capital of India?",
    isVisited: false,
    isAnswered: false,
    usersResponse: null,
    options: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
  },
  {
    question: "What is the capital of Australia?",
    isVisited: false,
    isAnswered: false,
    usersResponse: null,
    options: ["Sydney", "Melbourne", "Canberra", "Perth"],
  },
  {
    question: "What is the capital of USA?",
    isVisited: false,
    isAnswered: false,
    usersResponse: null,
    options: ["New York", "Washington DC", "Los Angeles", "Chicago"],
  },
  {
    question: "What is the capital of UK?",
    isVisited: false,
    isAnswered: false,
    usersResponse: null,
    options: ["London", "Manchester", "Birmingham", "Liverpool"],
  },
  {
    question: "What is the capital of China?",
    isVisited: false,
    isAnswered: false,
    usersResponse: null,
    options: ["Shanghai", "Beijing", "Shenzhen", "Guangzhou"],
  },
  {
    question: "What is the capital of Japan?",
    isVisited: false,
    isAnswered: false,
    usersResponse: null,
    options: ["Tokyo", "Osaka", "Kyoto", "Yokohama"],
  },
  {
    question: "What is the capital of France?",
    isVisited: false,
    isAnswered: false,
    usersResponse: null,
    options: ["Paris", "Marseille", "Lyon", "Toulouse"],
  },
  {
    question: "What is the capital of Germany?",
    isVisited: false,
    isAnswered: false,
    usersResponse: null,
    options: ["Berlin", "Hamburg", "Munich", "Cologne"],
  },
  {
    question: "What is the capital of Italy?",
    isVisited: false,
    isAnswered: false,
    usersResponse: null,
    options: ["Rome", "Milan", "Naples", "Turin"],
  },
  {
    question: "What is the capital of Brazil?",
    isVisited: false,
    isAnswered: false,
    usersResponse: null,
    options: ["Sao Paulo", "Rio de Janeiro", "Brasilia", "Salvador"],
  },
  {
    question: "What is the capital of Canada?",
    isVisited: false,
    isAnswered: false,
    usersResponse: null,
    options: ["Toronto", "Montreal", "Vancouver", "Ottawa"],
  },
  {
    question: "What is the capital of Russia?",
    isVisited: false,
    isAnswered: false,
    usersResponse: null,
    options: [
      "Moscow",
      "Saint Petersburg",
      "Novosibirsk",
      "Yekaterinburg",
    ],
  },
  {
    question: "WWhich one of the following river flows between Vindhyan and Satpura ranges? ",
    isVisited: false,
    isAnswered: false,
    usersResponse: null,
    options: [
      "Narmada",
      "Mahanadi",
      "Son",
      "Netravati",
    ],
  },
  {
    question: "The Central Rice Research Station is situated in?",
    isVisited: false,
    isAnswered: false,
    usersResponse: null,
    options: [
      "Chennai",
      "Cuttack",
      "Bangalore",
      "Quilon",
    ],
  },
  {
    question: "Who among the following wrote Sanskrit grammar?",
    isVisited: false,
    isAnswered: false,
    usersResponse: null,
    options: [
      "Kalidasa",
      "Charak",
      "Panini",
      "Aryabhatt",
    ],
  },
  {
    question: "Which among the following headstreams meets the Ganges in last?",
    isVisited: false,
    isAnswered: false,
    usersResponse: null,
    options: [
      "Alaknanda",
      "Pindar",
      "Mandakini",
      "Bhagirathi",
    ],
  },
  {
    question: "The metal whose salts are sensitive to light is?",
    isVisited: false,
    isAnswered: false,
    usersResponse: null,
    options: [
      "Zinc",
      "Silver",
      "Copper",
      "Aluminum",
    ],
  },
  {
    question: "Patanjali is well known for the compilation of",
    isVisited: false,
    isAnswered: false,
    usersResponse: null,
    options: [
      "Yoga Sutra",
      "Panchatantra",
      "Brahma Sutra",
      " Ayurveda",
    ],
  },
  {
    question: "Which one of the following rivers originates in Brahmagiri range of Western Ghats",
    isVisited: false,
    isAnswered: false,
    usersResponse: null,
    options: [
      "Pennar",
      "Cauvery",
      "Krishna",
      "Tapti",
    ],
  },
  {
    question: "Volcanic eruption do not occur in the",
    isVisited: false,
    isAnswered: false,
    usersResponse: null,
    options: [
      "Baltic sea",
      "Black sea",
      "Caribbean sea",
      "Caspian sea",
    ],
  },
];

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
