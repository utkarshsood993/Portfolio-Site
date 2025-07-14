import React from "react";
import "./About.css";

const About: React.FC = () => {
  return (
    <div id="about" className="about-flip-wrapper">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <h2>About Me</h2>
          </div>
          <div className="flip-card-back">
            <p>
              I’m a frontend developer focused on creating user-first, responsive, and visually engaging web interfaces using React, JavaScript, and CSS frameworks like Bootstrap. I enjoy translating ideas into seamless, interactive experiences.
            </p>
            <p>
              Beyond UI, I bring a strong foundation in software engineering principles — particularly in data structures, algorithms, and writing clean, testable code. I enjoy solving complex problems and database design, giving me a deeper understanding of how systems work end to end.
            </p>
            <p>
              I thrive in team environments where communication and code quality matter. Continuously learning and improving is core to how I operate — whether it’s mastering a new frontend library, optimizing a function, or designing a more scalable solution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
