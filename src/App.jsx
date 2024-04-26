import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");


  const data=[

    {
      id: 1,
      question: "What is the capital of Australia?",
      answers: [
        { text: "Sydney", correct: false },
        { text: "Melbourne", correct: false },
        { text: "Canberra", correct: true },
        { text: "Perth", correct: false }
      ]
    },
    {
      id: 2,
      question: "Which country is known as the Land of the Rising Sun?",
      answers: [
        { text: "China", correct: false },
        { text: "Japan", correct: true },
        { text: "South Korea", correct: false },
        { text: "Vietnam", correct: false }
      ]
    },
    {
      id: 3,
      question: "Who wrote the novel 'Pride and Prejudice'?",
      answers: [
        { text: "Jane Austen", correct: true },
        { text: "Charles Dickens", correct: false },
        { text: "George Orwell", correct: false },
        { text: "Emily Bronte", correct: false }
      ]
    },
    {
      id: 4,
      question: "What is the largest ocean on Earth?",
      answers: [
        { text: "Atlantic Ocean", correct: false },
        { text: "Indian Ocean", correct: false },
        { text: "Pacific Ocean", correct: true },
        { text: "Arctic Ocean", correct: false }
      ]
    },
    {
      id: 5,
      question: "Who is known as the father of modern physics?",
      answers: [
        { text: "Isaac Newton", correct: false },
        { text: "Galileo Galilei", correct: false },
        { text: "Albert Einstein", correct: true },
        { text: "Nikola Tesla", correct: false }
      ]
    },
    {
      id: 6,
      question: "What is the currency of Japan?",
      answers: [
        { text: "Yen", correct: true },
        { text: "Yuan", correct: false },
        { text: "Won", correct: false },
        { text: "Dollar", correct: false }
      ]
    },
    {
      id: 7,
      question: "Which country is famous for its tulip fields?",
      answers: [
        { text: "Netherlands", correct: true },
        { text: "Italy", correct: false },
        { text: "France", correct: false },
        { text: "Germany", correct: false }
      ]
    },
    {
      id: 8,
      question: "Who is the author of 'Harry Potter' series?",
      answers: [
        { text: "J.R.R. Tolkien", correct: false },
        { text: "J.K. Rowling", correct: true },
        { text: "C.S. Lewis", correct: false },
        { text: "Roald Dahl", correct: false }
      ]
    },
    {
      id: 9,
      question: "What is the largest planet in our solar system?",
      answers: [
        { text: "Earth", correct: false },
        { text: "Jupiter", correct: true },
        { text: "Saturn", correct: false },
        { text: "Mars", correct: false }
      ]
    },
    {
      id: 10,
      question: "Which country is known as the Land of Fire and Ice?",
      answers: [
        { text: "Iceland", correct: true },
        { text: "Greenland", correct: false },
        { text: "Canada", correct: false },
        { text: "Norway", correct: false }
      ]
    },
    {
      id: 11,
      question: "Who painted the ceiling of the Sistine Chapel?",
      answers: [
        { text: "Leonardo da Vinci", correct: false },
        { text: "Raphael", correct: false },
        { text: "Michelangelo", correct: true },
        { text: "Donatello", correct: false }
      ]
    },
    {
      id: 12,
      question: "What is the world's longest river?",
      answers: [
        { text: "Nile", correct: true },
        { text: "Amazon", correct: false },
        { text: "Yangtze", correct: false },
        { text: "Mississippi", correct: false }
      ]
    },
    {
      id: 13,
      question: "Which planet is known as the 'Morning Star' or 'Evening Star'?",
      answers: [
        { text: "Mars", correct: false },
        { text: "Venus", correct: true },
        { text: "Mercury", correct: false },
        { text: "Jupiter", correct: false }
      ]
    },
    {
      id: 14,
      question: "Who is the current President of the United States?",
      answers: [
        { text: "Joe Biden", correct: true },
        { text: "Donald Trump", correct: false },
        { text: "Barack Obama", correct: false },
        { text: "George W. Bush", correct: false }
      ]
    },
    {
      id: 15,
      question: "What is the largest mammal on land?",
      answers: [
        { text: "Elephant", correct: true },
        { text: "Giraffe", correct: false },
        { text: "Hippopotamus", correct: false },
        { text: "African buffalo", correct: false }
      ]
    },
  ];
  


  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "Rs 100" },
        { id: 2, amount: "RS 200" },
        { id: 3, amount: "Rs 300" },
        { id: 4, amount: "Rs 500" },
        { id: 5, amount: "Rs 1000" },
        { id: 6, amount: "Rs 2000" },
        { id: 7, amount: "Rs 4000" },
        { id: 8, amount: "Rs 8000" },
        { id: 9, amount: "Rs 16000" },
        { id: 10, amount: "Rs 32000" },
        { id: 11, amount: "Rs 500000" },
        { id: 12, amount: "Rs 1000000" },
        { id: 13, amount: "Rs 2500000" },
        { id: 14, amount: "Rs 5000000" },
        { id: 15, amount: "Rs 10000000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;