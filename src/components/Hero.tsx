import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Typewriter } from 'react-simple-typewriter';
import './Hero.css';

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const heading = heroRef.current?.querySelector('.parallax-heading') as HTMLElement;
    const subtext = heroRef.current?.querySelector('.parallax-subtext') as HTMLElement;

    if (heading && subtext) {
      gsap.to(heading, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: heading,
          start: 'top 80%',
        },
      });

      gsap.to(subtext, {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: subtext,
          start: 'top 85%',
        },
      });
    }
  }, []);

  return (
    <section ref={heroRef} id="hero" className="hero">
      <h1 className="parallax-heading">
        Hello, I’m <span>Utkarsh Sood</span>
      </h1>
      <h2 className="parallax-subtext">
        <Typewriter
          words={['Frontend Developer', 'SDE Enthusiast', 'React Lover']}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={100}
          deleteSpeed={80}
          delaySpeed={1500}
        />
      </h2>
    </section>
  );
};

export default Hero;
