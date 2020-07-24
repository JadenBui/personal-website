import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <ul className="social-list">
          <li className="footer__link">
            <a href="https://www.linkedin.com/in/dangvuanhbui/" target="_blank">
              <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            </a>
          </li>
          <li className="footer__link">
            <a href="https://github.com/JadenBui" target="_blank">
              <i className="fa fa-github" aria-hidden="true"></i>
            </a>
          </li>
          <li className="footer__link">
            <a href="mailto:jadenab99@gmail.com" className="footer-link">
              <i className="fa fa-envelope" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
