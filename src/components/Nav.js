import React from "react";

export default function Nav() {
  return (
    <nav className="nav">
      <img
        className="nav__img"
        alt="logo"
        src={require("../assets/logo.png")}
      ></img>
      <h3 className="nav__title">Tic-tac-toe</h3>
    </nav>
  );
}
