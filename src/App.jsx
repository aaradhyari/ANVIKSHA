import ParticlesBackground from './components/ParticlesBackground';
import GlowCursor from './components/GlowCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import CompetitionRounds from './components/CompetitionRounds';
import Rulebook from './components/Rulebook';
import JudgingCriteria from './components/JudgingCriteria';
import Workshop from './components/Workshop';
import Team from './components/Team';
import Registration from './components/Registration';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="relative min-h-screen bg-cosmic-navy overflow-hidden">
      <ParticlesBackground />
      <GlowCursor />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <CompetitionRounds />
        <Rulebook />
        <JudgingCriteria />
        <Workshop />
        <Team />
        <Registration />
        <Contact />
      </main>
    </div>
  );
}
