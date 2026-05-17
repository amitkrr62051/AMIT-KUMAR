import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Download, MessageCircle, BadgeCheck } from 'lucide-react';
import { IMAGES, RESUME_URL } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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

  const baseLinkClasses = "font-medium text-sm lg:text-base transition-colors duration-200 hover:text-red-500 relative group";
  const activeLinkClasses = "text-red-500 font-semibold";
  const inactiveLinkClasses = "text-slate-600";

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
        scrolled ? 'glass-nav shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo - Name, Blue Tick, and Green Dot */}
          <NavLink to="/" className="flex items-center gap-2 group">
            <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                    <span className={`text-xl font-black leading-none tracking-tighter ${scrolled ? 'text-slate-900' : 'text-slate-800 md:text-slate-900'}`}>
                        Amit Kumar
                    </span>
                    <BadgeCheck size={18} className="text-blue-500 fill-blue-50" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
                </div>
                <span className="text-[10px] text-red-500 tracking-[0.2em] font-black uppercase mt-1">GROW WITH ME</span>
            </div>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `${baseLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`
                }
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            ))}
            
            {/* Buttons Group */}
            <div className="flex items-center gap-3">
              <a 
                href="https://wa.me/916205120223" 
                target="_blank" 
                rel="noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg hover:shadow-green-500/30 text-sm tracking-wide flex items-center"
              >
                <WhatsAppIcon />
                Let's Chat
              </a>
              <a 
                href={RESUME_URL}
                target="_blank"
                rel="noreferrer"
                className="bg-red-500 hover:bg-red-600 text-white px-5 py-2.5 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg hover:shadow-red-500/30 text-sm tracking-wide flex items-center"
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-700 hover:text-red-500 focus:outline-none p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg shadow-xl border-t border-slate-100 transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-4 pb-8 space-y-2 flex flex-col">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-xl text-base font-medium transition-all ${
                  isActive ? 'text-red-500 bg-red-50' : 'text-slate-600 hover:text-red-500 hover:bg-slate-50'
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
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3.5 rounded-xl font-bold shadow-lg active:scale-95 transition-transform flex items-center justify-center"
              >
                <WhatsAppIcon />
                Let's Chat
            </a>
            <a 
                href={RESUME_URL}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-red-500 hover:bg-red-600 text-white py-3.5 rounded-xl font-bold shadow-lg active:scale-95 transition-transform flex items-center justify-center"
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