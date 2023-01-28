import "./App.css";
import Home from "./Home/Home.js";
import Game from "./Game/Game.js";
import Login from "./Login/Login.js";
import Register from "./Register/Register.js";
// import { useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  // const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
