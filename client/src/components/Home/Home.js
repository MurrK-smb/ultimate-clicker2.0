import "./Home.css";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1 className="home__title">Ultimate Clicker 2.0</h1>
      <NavLink className="home__nav-link" to="/login">
        Play
      </NavLink>
    </div>
  );
}

export default Home;
