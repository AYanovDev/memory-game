import { useState, useEffect, useRef } from "react";
import "./App.css";
import Card from "./card";
import Header from "./header";

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
  const bestScore = useRef(0);

  function renderCards() {
    return data.map((e) => {
      function onCardClick() {
        shuffleData();
        if (dataLog.includes(e)) {
          if (bestScore.current < score) {
            bestScore.current = score;
          }
          setScore(0);
          dataLog.length = 0;
          // use useRef hook here
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

  return (
    <>
      <Header></Header>
      <div className="counter_container">
        <p>Score:{score}</p>
        <p>Best score:{bestScore.current}</p>
      </div>
      <div className="cardsContainer">{renderCards()}</div>
    </>
  );
}

export default App;
