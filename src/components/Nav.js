import React from "react";
import logo from "../Images/logo.svg";
import Menu from "../components/Menu";

const Nav = () => {
  return (
    <nav>
      <img src={logo} alt="logo" />
      <div className="nav-links">
        <p>Home</p>
        <p>Heart</p>
        <p>Destinations</p>
        <p>Experiences</p>
        <p>Travel</p>
        <p>Scientific</p>
      </div>
      <button className="btn">Join</button>
      <Menu />
    </nav>
  );
};

export default Nav;
