import "./App.css";
import Home from "./Home/Home.js";
import Game from "./Game/Game.js";
import Login from "./Login/Login.js";
// import { useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  // const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <Routes>
        <Route path="/game" element={<Game />} />
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
