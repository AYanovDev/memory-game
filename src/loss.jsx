import "./win.css";

export default function Loss() {
  return (
    <div className="win">
      <div className="text_and_button">
        <div className="win_text">Oops, pressed the same thing twice!</div>
        <button
          className="play_button"
          onClick={() => window.location.reload()}
        >
          Play Again
        </button>
      </div>
    </div>
  );
}
