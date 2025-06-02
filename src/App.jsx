import { useState, useEffect } from "react";
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

  function renderCards() {
    return data.map((e) => {
      function onCardClick() {
        shuffleData();
        if (dataLog.includes(e)) {
          setScore(0);
          dataLog.length = 0;
          console.log(dataLog);
        } else {
          setScore((previousScore) => previousScore + 1);
          dataLog.push(e);
          console.log(dataLog);
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
        <p>Best score:</p>
      </div>
      <div className="cardsContainer">{renderCards()}</div>
    </>
  );
}

export default App;
