import React from "react";
import "./header.css";
import logo from "../../assets/firedev_branco.svg";

const Header = () => {
  return (
    <header id="header">
      <div className="navegacao">
        <img src={logo} alt="logo" width={100} />
        <ul className="list">
          <a href="#">
            <li>Home</li>
          </a>
          <a href="#">
            <li>About Me</li>
          </a>
          <a href="#">
            <li>Projects</li>
          </a>
          <a href="#">
            <li>Contact</li>
          </a>
          <input type="checkbox" className="checkbox" id="chk" />
          <label htmlFor="chk" className="label">
            <div className="ball"></div>
          </label>
        </ul>
      </div>
    </header>
  );
};

export default Header;
