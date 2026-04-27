<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

=======
>>>>>>> e1f9f2d8d12f0cf11c73d8571c178157bf0f5f1f
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import HowItWorks from './components/HowItWorks';
import Pilot from './components/Pilot';
import Internships from './components/Internships';
import VisionTeam from './components/VisionTeam';
import Footer from './components/Footer';
<<<<<<< HEAD
import Admin from './pages/Admin';

// NEW (we'll create this next)
import Verify from './pages/Verify';

function Home() {
  return (
    <>
=======

function App() {
  return (
    <div className="min-h-screen bg-white">
>>>>>>> e1f9f2d8d12f0cf11c73d8571c178157bf0f5f1f
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Pilot />
      <Internships />
      <VisionTeam />
      <Footer />
<<<<<<< HEAD
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
=======
    </div>
  );
}

export default App;
>>>>>>> e1f9f2d8d12f0cf11c73d8571c178157bf0f5f1f
