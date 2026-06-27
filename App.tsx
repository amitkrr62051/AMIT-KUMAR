import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import AIChatbot from './components/AIChatbot';
import { CONTACT_INFO } from './constants';
import { ThemeProvider } from './components/ThemeContext';

// Scroll to top helper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

// Dynamic SEO / Metadata manager
const DynamicSEO = () => {
  const location = useLocation();

  React.useEffect(() => {
    const path = location.pathname;

    let title = "Amit Kumar | Website Developer, Graphic Designer & Digital Marketer";
    let description = "Amit Kumar is a professional Website Developer, Graphic Designer and Digital Marketer helping businesses grow with SEO-friendly websites, branding, AI automation and digital marketing solutions.";

    if (path === '/about') {
      title = "About Amit Kumar | Website Developer & Digital Marketer";
      description = "Learn about Amit Kumar, a Website Developer, Graphic Designer and Digital Marketing professional specializing in WordPress, Odoo, branding, SEO and AI-powered business solutions.";
    } else if (path === '/services') {
      title = "Website Development & Digital Marketing Services | Amit Kumar";
      description = "Explore professional website development, graphic design, branding, SEO, AI automation, Meta Ads and digital marketing services offered by Amit Kumar.";
    } else if (path === '/portfolio') {
      title = "Portfolio | Website Development & Digital Marketing Projects";
      description = "View Amit Kumar's portfolio featuring websites, branding, SEO, WordPress, Odoo, AI automation and digital marketing projects for businesses across India.";
    } else if (path === '/testimonials') {
      title = "Client Testimonials | Amit Kumar Portfolio";
      description = "Read client testimonials and success stories from businesses that trusted Amit Kumar for website development, branding and digital marketing services.";
    } else if (path === '/contact') {
      title = "Contact Amit Kumar | Hire Website Developer & Digital Marketer";
      description = "Contact Amit Kumar for website development, branding, graphic design, SEO, AI automation and digital marketing services. Let's build your business online.";
    } else if (path === '/resume') {
      title = "Amit Kumar Resume | Website Developer & Digital Marketer";
      description = "Download Amit Kumar's professional resume showcasing experience in website development, graphic design, SEO, WordPress, Odoo and digital marketing.";
    } else if (path === '/skills') {
      title = "Skills & Technologies | Amit Kumar";
      description = "Discover Amit Kumar's technical skills including WordPress, Odoo, HTML, CSS, SEO, AI tools, branding, digital marketing and website optimization.";
    }

    // Set page title
    document.title = title;

    // Set meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', description);
      document.head.appendChild(metaDescription);
    }
  }, [location.pathname]);

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

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1.0] }}
    >
      {children}
    </motion.div>
  );
};

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
        <Route path="/portfolio" element={<PageWrapper><Portfolio /></PageWrapper>} />
        <Route path="/testimonials" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        <Route path="/resume" element={<PageWrapper><Resume /></PageWrapper>} />
        <Route path="/skills" element={<PageWrapper><Home /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <DynamicSEO />
        <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300">
          <Navbar />
          <main className="flex-grow">
            <AnimatedRoutes />
          </main>
          <Footer />
          <FloatingWhatsApp />
          <AIChatbot />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;