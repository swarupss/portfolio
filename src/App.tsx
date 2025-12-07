import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Impact from './components/Impact';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#020B24] transition-colors duration-300">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Impact />
      <Education />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
