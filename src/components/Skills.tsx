// src/components/Skills.tsx
import React, { useState } from 'react';
import './Skills.css';

const skills = [
  'HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Git',
  'C', 'C++', 'Python', 'Data Structures', 'Algorithms',
  'OS', 'DBMS', 'MySQL'
];

const Skills: React.FC = () => {
  const [rotatingOrbs, setRotatingOrbs] = useState<number[]>([]);

  const handleClick = (index: number) => {
    setRotatingOrbs((prev) => [...prev, index]);
    setTimeout(() => {
      setRotatingOrbs((prev) => prev.filter(i => i !== index));
    }, 1000); // match duration of animation
  };

  return (
    <section className="skills-orbs-section" id="skills">
      <h2 className="skills-heading">Tech & Tools</h2>
      <div className="orbs-grid">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`orb ${rotatingOrbs.includes(index) ? 'rotate-on-click' : ''}`}
            onClick={() => handleClick(index)}
          >
            <span>{skill}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
