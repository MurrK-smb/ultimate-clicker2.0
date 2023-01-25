import "./Main.css";
import { useState } from "react";

function Main() {
  const [count, setCount] = useState(0);

  return (
    <main className="main">
      <button className="main__button" onClick={() => setCount(count + 1)}>
        <p className="main__counter">{count}</p>
      </button>
    </main>
  );
}

export default Main;
