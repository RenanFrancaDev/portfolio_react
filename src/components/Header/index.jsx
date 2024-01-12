import "./header.css";
import logo from "../../assets/firedev_branco.svg";
import { useState } from "react";

const Header = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <header id="header">
      <div className="navegacao">
        <img src={logo} alt="logo" width={70} />
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
          {/* <input type="checkbox" className="checkbox" id="chk" />
          <label htmlFor="chk" className="label">
            <div className="ball"></div>
          </label> */}
        </ul>
        <div
          className={active ? " burguer burguerActive" : "burguer"}
          onClick={handleClick}
        >
          <div className="line_burger" id="line1"></div>
          <div className="line_burger" id="line2"></div>
          <div className="line_burger" id="line3"></div>
        </div>
      </div>
      {active && (
        <div className="navbarMobile">
          <ul className="listmobile">
            <a href="#presentation" onClick={handleClick}>
              <li>Home</li>
            </a>
            <a href="#about2" onClick={handleClick}>
              <li>About Me</li>
            </a>
            <a href="#project2" onClick={handleClick}>
              <li>Projects</li>
            </a>
            <a href="#contact" onClick={handleClick}>
              <li>Contact</li>
            </a>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
