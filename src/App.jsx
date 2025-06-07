import { useState, useEffect, useRef } from "react";
import "./App.css";
import Card from "./card";
import Header from "./header";
import Win from "./win";

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
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    if (localStorage.getItem("bestScore")) {
      setBestScore(localStorage.getItem("bestScore"));
    }
  }, []);

  // const bestScore = useRef(0); // use a state and save it so that it stays after a refresh

  function renderCards() {
    return data.map((e) => {
      function onCardClick() {
        shuffleData();

        // score keeping logic
        if (dataLog.includes(e)) {
          if (bestScore < score) {
            setBestScore(score);
            localStorage.setItem("bestScore", score);
          }
          setScore(0);
          dataLog.length = 0;
        } else {
          setScore((previousScore) => previousScore + 1);
          dataLog.push(e);
        }
      }
      return <Card key={e} name={e} onClick={onCardClick}></Card>;
    });
  }

  function shuffleData() {
    let shuffledArr = data
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    setData(shuffledArr);
  }

  function renderWin() {
    if (score === 12) {
      return <Win></Win>;
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
    </>
  );
}

export default App;
