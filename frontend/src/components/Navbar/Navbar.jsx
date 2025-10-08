import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.svg";
import themepartern from "../../assets/theme_pattern.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  // quick debug — remove later
  // console.log("current menu:", menu);

  return (
    <div className="navbar">
      {/* Logo */}
      <div className="nav-logo">
        <h1>Barik</h1>
        <img src={themepartern} alt="logo" />
      </div>

      {/* Menu Section */}
      <ul className="nav-menu">
        <li>
          <p onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>
            Home
          </p>
        </li>

        <li>
          <p onClick={() => setMenu("about")} className={menu === "about" ? "active" : ""}>
            About Me
          </p>
        </li>

        <li>
          <p onClick={() => setMenu("services")} className={menu === "services" ? "active" : ""}>
            Services
          </p>
        </li>

        <li>
          <p onClick={() => setMenu("portfolio")} className={menu === "portfolio" ? "active" : ""}>
            Portfolio
          </p>
        </li>

        <li>
          <p onClick={() => setMenu("contact")} className={menu === "contact" ? "active" : ""}>
            Contact
          </p>
        </li>
      </ul>

      {/* Button */}
      <button className="nav-connect">Connect with me</button>
    </div>
  );
};

export default Navbar;
