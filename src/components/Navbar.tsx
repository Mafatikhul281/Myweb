import React from "react";
import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import "./Navbar.css";

const Navbar: React.FC = () => (
  <nav className="navbar">
    <ul>
      <li>
        <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/projects" className={({ isActive }) => (isActive ? "active" : "")}>
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/social" className={({ isActive }) => (isActive ? "active" : "")}>
          Social
        </NavLink>
      </li>
      <li style={{ marginLeft: "auto" }}>
        <ThemeToggle />
      </li>
    </ul>
  </nav>
);

export default Navbar;
