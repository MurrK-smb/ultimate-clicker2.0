import "./Game.css";
import Header from "../Header/Header.js";
import { useState } from "react";

function Game() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <game className="game">
        <button className="game__button" onClick={() => setCount(count + 1)}>
          <p className="game__counter">{count}</p>
        </button>
      </game>
    </>
  );
}

export default Game;
