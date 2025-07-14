import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ParticlesBackground from './components/ParticlesBackground';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <ParticlesBackground />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </div>
    </>
  );
}

export default App;
