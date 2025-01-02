import React from "react";
import image3 from "../../assets/assets/image3.jpg";

import theme_pattern from "../../assets/assets/theme_pattern.svg";
import profile_img from "../../assets/assets/profile_img.svg";
import "./About.css";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-content">
        <div className="about-left">
          <img src={image3} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Hi, I'm Dulan, a passionate IT undergraduate specializing in
              ReactJS, NodeJS, Python, JavaScript, and C. I aim to become a
              skilled professional in software development, constantly learning
              and exploring new technologies to create innovative solutions.
            </p>
            <p>
              I’m always looking for new opportunities to improve and expand my
              skills. I enjoy working on projects that help me grow and
              challenge myself. My focus is on building practical and innovative
              solutions that make a real impact.
            </p>
            <br />
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Javascript</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>C</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achivements">
        <div className="about-achivement">
          <h1>Code</h1>
          <p>crafter</p>
        </div>
        <hr />
        <div className="about-achivement">
          <h1>Idea</h1>
          <p>Architect</p>
        </div>
        <hr />
        <div className="about-achivement">
          <h1>Building</h1>
          <p>projects</p>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default About;
