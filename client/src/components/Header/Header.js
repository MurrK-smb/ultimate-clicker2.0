import "./Header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <p className="header__title">Ultimate Clicker 2.0</p>
      <nav className="nav">
        <NavLink className="nav__link" to="/">
          Log Out
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
