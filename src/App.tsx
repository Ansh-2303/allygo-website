import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import HowItWorks from './components/HowItWorks';
import Pilot from './components/Pilot';
import Internships from './components/Internships';
import VisionTeam from './components/VisionTeam';
import Footer from './components/Footer';
import Admin from './pages/Admin';

// NEW (we'll create this next)
import Verify from './pages/Verify';

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Pilot />
      <Internships />
      <VisionTeam />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;