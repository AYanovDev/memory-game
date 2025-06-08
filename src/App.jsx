import { useState, useEffect, useRef } from "react";
import "./App.css";
import Card from "./card";
import Header from "./header";
import Result from "./result";

const dataLog = [];

function App() {
  const [data, setData] = useState([
    "Confident",
    "Curious",
    "Efficient",
    "Generous",
    "Reliable",
    "Sensitive",
    "Helpful",
    "Honest",
    "Polite",
    "Friendly",
    "Creative",
    "Independent",
  ]);

  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(
    localStorage.getItem("bestScore") || 0
  );
  const [isLoss, setIsLoss] = useState(false);

  useEffect(() => {
    localStorage.setItem("bestScore", bestScore);
  }, [bestScore]);

  function renderCards() {
    return data.map((e) => {
      function onCardClick() {
        shuffleData();
        // score keeping logic
        if (dataLog.includes(e)) {
          if (bestScore < score) {
            setBestScore(score);
          }
          setScore(0);
          dataLog.length = 0;
          setIsLoss(true);
        } else {
          setScore((previousScore) => previousScore + 1);
          if (bestScore < score + 1) {
            setBestScore(score + 1);
          }
          dataLog.push(e);
        }
      }
      return <Card key={e} name={e} onClick={onCardClick}></Card>;
    });
  }

  function reset() {
    setScore(0);
    shuffleData();
    setIsLoss(false);
    dataLog.length = 0;
  }

  function shuffleData() {
    let shuffledArr = data
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    setData(shuffledArr);
  }

  function renderWin() {
    if (score === 3) {
      return <Result result="You won!" reset={reset} />;
    }
  }

  function renderLoss() {
    if (isLoss) {
      return (
        <Result result="Oops, pressed the same thing twice!" reset={reset} />
      );
    }
  }

  return (
    <>
      <Header></Header>
      <div className="counter_container">
        <p>Score:{score}</p>
        <p>Best score:{bestScore}</p>
      </div>
      <div className="cardsContainer">{renderCards()}</div>
      {renderWin()}
      {renderLoss()}
    </>
  );
}

export default App;
