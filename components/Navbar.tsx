import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Download, MessageCircle, BadgeCheck, Sun, Moon } from 'lucide-react';
import { IMAGES, RESUME_URL } from '../constants';
import { useTheme } from './ThemeContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      } else {
        setScrollProgress(0);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  const isHomePage = location.pathname === '/';

  const baseLinkClasses = `font-medium text-sm lg:text-base transition-all duration-300 relative group ${
    isHomePage ? 'text-white/80 hover:text-white' : 'text-slate-600 dark:text-slate-300 hover:text-red-500 dark:hover:text-red-400'
  }`;
  const activeLinkClasses = isHomePage ? "text-red-400 font-bold" : "text-red-500 dark:text-red-400 font-bold";
  const inactiveLinkClasses = isHomePage ? "text-white/80 hover:text-white" : "text-slate-600 dark:text-slate-300 hover:text-red-500 dark:hover:text-red-400";

  // WhatsApp Icon Component using Image
  const WhatsAppIcon = () => (
    <img 
      src="https://lh3.googleusercontent.com/d/1xxLTnnOIhMucscGOP-L8rTicQGhUUSqs" 
      alt="WhatsApp" 
      className="w-5 h-5 mr-2 object-contain"
    />
  );

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      {/* Scroll Progress Bar */}
      <div id="scroll-progress-container" className="absolute top-0 left-0 w-full h-[4px] bg-transparent z-50 pointer-events-none">
        <div 
          id="scroll-progress-bar"
          className="h-full bg-gradient-to-r from-red-500 via-orange-500 to-red-500 transition-all duration-100 ease-out shadow-[0_2px_10px_rgba(239,68,68,0.4)]"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
      <div className={`mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-500 ${
        scrolled ? 'max-w-6xl' : 'max-w-7xl'
      }`}>
        <div className={`flex justify-between items-center px-4 sm:px-6 py-3 transition-all duration-500 rounded-[2rem] ${
          isHomePage
            ? scrolled 
              ? 'bg-black/50 backdrop-blur-xl border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.4)] text-white' 
              : 'bg-white/5 backdrop-blur-md border border-white/10 text-white'
            : scrolled
              ? 'glass-nav-scrolled shadow-[0_12px_40px_rgba(15,23,42,0.08)] bg-white/80 dark:bg-slate-950/80 border border-slate-200/50 dark:border-slate-800/50 text-slate-900 dark:text-white'
              : 'bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-white/10 dark:border-slate-800/50 shadow-sm text-slate-800 dark:text-white'
        }`}>
          {/* Logo - Name, Blue Tick, and Green Dot */}
          <NavLink to="/" className="flex items-center gap-2 group">
            <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                    <span className={`text-xl font-black leading-none tracking-tighter transition-all duration-300 ${
                      isHomePage ? 'text-white' : 'text-slate-900 dark:text-white'
                    }`}>
                        Amit Kumar
                    </span>
                    <BadgeCheck size={18} className="text-blue-500 fill-blue-50" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
                </div>
                <span className="text-[10px] text-red-500 tracking-[0.2em] font-black uppercase mt-1">GROW WITH ME</span>
            </div>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `${baseLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`
                }
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isHomePage ? 'bg-red-400' : 'bg-red-500'
                }`}></span>
              </NavLink>
            ))}

            {/* Theme Toggle Button for Desktop */}
            <button
              onClick={toggleTheme}
              className={`focus:outline-none p-2.5 rounded-full transition-all duration-300 transform hover:scale-110 active:scale-95 ${
                isHomePage
                  ? 'text-white bg-white/10 hover:bg-white/20'
                  : 'text-slate-700 dark:text-slate-300 bg-slate-100/50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun size={20} className="text-amber-400 animate-pulse" />
              ) : (
                <Moon size={20} className="text-slate-700" />
              )}
            </button>
            
            {/* Buttons Group */}
            <div className="flex items-center gap-3">
              <a 
                href="https://wa.me/916205120223" 
                target="_blank" 
                rel="noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg hover:shadow-green-500/20 text-sm tracking-wide flex items-center"
              >
                <WhatsAppIcon />
                Let's Chat
              </a>
              <a 
                href={RESUME_URL}
                target="_blank"
                rel="noreferrer"
                className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-5 py-2.5 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg hover:shadow-red-500/20 text-sm tracking-wide flex items-center gradient-btn-animated"
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </a>
            </div>
          </div>

          {/* Mobile Actions Group */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Theme Toggle Button for Mobile */}
            <button
              onClick={toggleTheme}
              className={`focus:outline-none p-2 rounded-full transition-colors ${
                isHomePage
                  ? 'text-white bg-white/10 hover:bg-white/20'
                  : 'text-slate-700 dark:text-slate-300 bg-slate-100/50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun size={20} className="text-amber-400 animate-pulse" />
              ) : (
                <Moon size={20} className="text-slate-700" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`focus:outline-none p-2 rounded-full transition-colors ${
                isHomePage 
                  ? 'text-white bg-white/10 hover:bg-white/20' 
                  : 'text-slate-700 dark:text-slate-300 bg-slate-100/50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`lg:hidden absolute top-full left-0 w-full transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[500px] opacity-100 visible' : 'max-h-0 opacity-0 invisible'
        }`}
      >
        <div className={`mx-4 mt-2 p-4 space-y-2 flex flex-col rounded-3xl border shadow-2xl ${
          isHomePage
            ? 'bg-black/90 backdrop-blur-2xl border-white/10 text-white'
            : 'bg-white/90 dark:bg-slate-900/95 backdrop-blur-xl border-slate-200/50 dark:border-slate-800/50 text-slate-800 dark:text-white'
        }`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-2xl text-base font-bold transition-all ${
                  isActive 
                    ? 'text-red-500 bg-red-50/10' 
                    : isHomePage
                      ? 'text-white/80 hover:text-red-400 hover:bg-white/5'
                      : 'text-slate-600 dark:text-slate-300 hover:text-red-500 dark:hover:text-red-400 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <div className="pt-4 px-2 space-y-3">
            <a 
                href="https://wa.me/916205120223" 
                target="_blank" 
                rel="noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3.5 rounded-2xl font-bold shadow-lg active:scale-95 transition-transform flex items-center justify-center"
              >
                <WhatsAppIcon />
                Let's Chat
            </a>
            <a 
                href={RESUME_URL}
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white py-3.5 rounded-2xl font-bold shadow-lg active:scale-95 transition-transform flex items-center justify-center gradient-btn-animated"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;