import React from "react";
import logo from "../../src/logo.jpg";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} alt="code-mate" className="logo"></img>
      <NavLink to="/">Home</NavLink>
      <NavLink to="about">About</NavLink>
      <NavLink to="code_session">Coding sessions</NavLink>
    </div>
  );
}
