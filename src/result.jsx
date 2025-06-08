import "./result.css";

export default function Result(props) {
  return (
    <div className="win">
      <div className="text_and_button">
        <div className="win_text">{props.result}</div>
        <button className="play_button" onClick={props.reset}>
          Play Again
        </button>
      </div>
    </div>
  );
}
