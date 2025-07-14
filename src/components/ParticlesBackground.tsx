import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";

const ParticlesBackground: React.FC = () => {
  const particlesInit = async (engine: Engine): Promise<void> => {
    await loadFull(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: 0 }, // ✅ KEY
        background: { color: "#0f0f0f" },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            resize: true,
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
          },
        },
        particles: {
          number: {
            value: 70, // 🎯 increase this number for more particles
            density: {
              enable: true,
              area: 800, // smaller area = denser layout
            },
          },
          color: { value: "#ffffff" },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.4,
            width: 1,
          },
          move: { enable: true, speed: 1 },
          opacity: { value: 0.5 },
          shape: {
            type: "polygon",
            polygon: {
              sides: 6, // you can set number of sides
            },
          },
          size: { value: { min: 1, max: 3 } },
        },
      }}
    />
  );
};

export default ParticlesBackground;
