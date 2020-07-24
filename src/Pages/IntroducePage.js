import React from "react";
import profileImg from "../assets/images/profileImage.jpg";
import reactLogo from "../assets/images/react_logo.png";
import nodeLogo from "../assets/images/node_logo.png";
import azureLogo from "../assets/images/azure_logo.png";

export default function IntroducePage() {
  return (
    <div>
      <section className="intro">
        <h1 className="section__title section__title--intro">
          Welcome to <strong>Jaden's site.</strong>
        </h1>
        <p className="section__subtitle section__subtitle--intro">
          Web Developer
        </p>
        <img src={profileImg} alt="profile" />
      </section>

      <section className="skills">
        <h2>Some of my skills</h2>
        <div className="skillTable">
          <div className="skillItem">
            <h3>ReactJS Library</h3>
            <img src={reactLogo} alt="react logo" />
            <p>Experience with creating responsive website</p>
          </div>
          <div className="skillItem">
            <h3>NodeJS Framework</h3>
            <img src={nodeLogo} alt="node logo" />
            <p>By using Express library, creating dynamic API</p>
          </div>
          <div className="skillItem">
            <h3>Cloud Computing</h3>
            <img src={azureLogo} alt="azure logo" />
            <p>Hosting web applications, database on cloud services.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
