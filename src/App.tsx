import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import HomePage from './pages/HomePage';
import CareerSolutions from './pages/CareerSolutions';
import DigitalMarketing from './pages/DigitalMarketing';
import SpeechHearing from './pages/SpeechHearing';
import SportsAcademy from './pages/SportsAcademy';
import WeekendDayouts from './pages/WeekendDayouts';
import Navigation from './components/Navigation';
import BackToTop from './pages/BackToTop';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/career-solutions" element={<CareerSolutions />} />
            <Route path="/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/speech-hearing" element={<SpeechHearing />} />
            <Route path="/sports-academy" element={<SportsAcademy />} />
            <Route path="/weekend-dayouts" element={<WeekendDayouts />} />
          </Routes>
          <BackToTop />
        </motion.main>
      </div>
    </Router>
  );
}

export default App;