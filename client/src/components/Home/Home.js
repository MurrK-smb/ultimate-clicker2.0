import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h1 className="home__title">Ultimate Clicker 2.0</h1>
      <button
        className="home__play"
        type="click"
        onClick={() => navigate("/login")}
      >
        Play
      </button>
    </div>
  );
}

export default Home;
