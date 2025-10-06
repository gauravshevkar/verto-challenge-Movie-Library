import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';
import "./navbar.css";

const Navbar = ({ setSearchQuery }) => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle("nav-open", !isOpen);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setSearchQuery(value); // pass query to Home
  };

  return (
    <nav className="navbar-container">
      <Link to="/" className="logo">
        <img src={logo} alt="Logo" />
      </Link>

      <i
        id="menu-icon"
        className={`bx ${isOpen ? "bx-x" : "bx-menu"}`}
        onClick={toggleMenu}
      ></i>

      <div className={`nav-links ${isOpen ? "active" : ""}`}>
        <Link to="/" className="nav-menu" onClick={toggleMenu}>Home</Link>
        <Link to="/movie" className="nav-menu" onClick={toggleMenu}>Movie</Link>
        <Link to="/series" className="nav-menu" onClick={toggleMenu}>Series</Link>
        <Link to="/about" className="nav-menu" onClick={toggleMenu}>Library</Link>
        <Link to="/watchlist" className="nav-menu" onClick={toggleMenu}>Watchlist</Link>

        <div className="search-box">
          <input
            type="text"
            className="search-input"
            placeholder="Search movie..."
            value={query}
            onChange={handleSearchChange}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
