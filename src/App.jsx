import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import { motion, useScroll } from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="relative bg-background text-foreground min-h-screen selection:bg-primary/30 font-sans">
      {/* Progress Bar */}
      <motion.div 
        style={{ scaleX: scrollYProgress }} 
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
      />

      {/* Floating Nav */}
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-40">
        <nav className="glass px-6 py-3 rounded-full border border-cardBorder shadow-2xl flex gap-6 text-sm font-medium">
          <a href="#about" className="hover:text-primary transition-colors">À propos</a>
          <a href="#projects" className="hover:text-primary transition-colors">Projets</a>
          <a href="#skills" className="hover:text-primary hidden sm:block transition-colors">Compétences</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </nav>
      </header>

      <main className="flex flex-col gap-8 md:gap-16 pb-12">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default App;
