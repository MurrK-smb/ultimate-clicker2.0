import "./Game.css";
import { useState } from "react";

function Game() {
  const [count, setCount] = useState(0);

  return (
    <div className="game">
      <button className="game__button" onClick={() => setCount(count + 1)}>
        <p className="game__counter">{count}</p>
      </button>
    </div>
  );
}

export default Game;
