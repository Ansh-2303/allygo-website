import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import HowItWorks from './components/HowItWorks';
import Pilot from './components/Pilot';
import Internships from './components/Internships';
import VisionTeam from './components/VisionTeam';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Pilot />
      <Internships />
      <VisionTeam />
      <Footer />
    </div>
  );
}

export default App;
