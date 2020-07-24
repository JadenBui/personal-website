import React, { useState } from "react";
import logo from "../assets/images/logo.PNG";

export default function Navbar({ onLinkClick }) {
  const [open, setOpen] = useState(false);

  const onOpen = () => {
    setOpen((prev) => !prev);
  };

  const onNavLinkClick = (e) => {
    if (e.target.href) {
      const link = e.target.href.split("#")[1];
      onLinkClick(link);
    }
  };

  return (
    <div>
      <header>
        <div className="logo">
          <img src={logo} alt="page logo" />
        </div>
        <button
          className={open ? "nav-open nav-toggle" : "nav-toggle"}
          onClick={onOpen}
          aria-label="toggle navigation"
        >
          <span className="hamburgerIcon"></span>
          <nav className="nav">
            <ul className="nav__list" onClick={onNavLinkClick}>
              <li className="nav__item">
                <a className="nav__link" href="#about">
                  About Me
                </a>
              </li>
              <li className="nav__item">
                <a className="nav__link" href="#skill">
                  My Skills
                </a>
              </li>
              <li className="nav__item">
                <a className="nav__link" href="#work">
                  My Work
                </a>
              </li>
            </ul>
          </nav>
        </button>
      </header>
    </div>
  );
}
