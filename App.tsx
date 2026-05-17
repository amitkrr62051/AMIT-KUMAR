import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import { CONTACT_INFO } from './constants';

// Scroll to top helper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

const FloatingWhatsApp = () => (
  <a
    href={CONTACT_INFO.whatsappUrl}
    target="_blank"
    rel="noreferrer"
    className="fixed bottom-6 right-6 z-50 transition-all duration-300 transform hover:scale-110 group"
    aria-label="Chat on WhatsApp"
  >
    <img 
      src="https://lh3.googleusercontent.com/d/1xxLTnnOIhMucscGOP-L8rTicQGhUUSqs" 
      alt="Chat on WhatsApp"
      className="w-14 h-14 md:w-16 md:h-16 drop-shadow-2xl" 
    />
    <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-white text-slate-800 px-3 py-1 rounded-lg text-sm font-bold shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
      Chat on WhatsApp
    </span>
  </a>
);

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </Router>
  );
};

export default App;