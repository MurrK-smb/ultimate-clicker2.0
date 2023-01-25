import "./App.css";
import Header from "./Header/Header.js";
import Main from "./Main/Main.js";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" />
      </Routes>
    </div>
  );
}

export default App;
