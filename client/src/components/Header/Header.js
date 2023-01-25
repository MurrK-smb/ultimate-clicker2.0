import "./Header.css";
import React from "react";

function Header() {
  return (
    <header className="header">
      <p className="header__title">Ultimate Clicker 2.0</p>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__list-item">
            <a className="nav__link" href="/">
              Log Out
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
