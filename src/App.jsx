import ParticlesBackground from './components/ParticlesBackground';
import GlowCursor from './components/GlowCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Rulebook from './components/Rulebook';
import JudgingCriteria from './components/JudgingCriteria';
import Workshop from './components/Workshop';
import Team from './components/Team';
import Contact from './components/Contact';
import LoadingScreen from './components/LoadingScreen';

export default function App() {
  return (
    <div className="relative min-h-screen bg-cosmic-navy overflow-x-hidden">
      <LoadingScreen />
      <ParticlesBackground />
      <GlowCursor />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Events />
        <Rulebook />
        <JudgingCriteria />
        <Workshop />
        <Team />
        <Contact />
      </main>
    </div>
  );
}