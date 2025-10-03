import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Logo */}
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <span>MyPortfolio</span>
      </div>

      {/* Menu */}
      <ul className="nav-menu">
        <li>Home</li>
        <li>About Me</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>

      {/* Button */}
      <button className="nav-connect">Connect with me</button>
    </div>
  );
};

export default Navbar;
