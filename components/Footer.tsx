import React from 'react';
import { CONTACT_INFO, SOCIAL_LINKS } from '../constants';
import { Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10 relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-500 to-red-500"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-3xl font-bold mb-6 tracking-tight">Amit Kumar</h3>
            <p className="text-slate-400 mb-8 max-w-sm text-lg leading-relaxed">
              Helping businesses grow through professional web development, creative design, and strategic digital marketing.
            </p>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((link) => (
                <a 
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all duration-300 transform hover:scale-110"
                  aria-label={link.platform}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-lg font-bold mb-6 text-white border-b border-slate-700 pb-2 inline-block">Services</h4>
            <ul className="space-y-3 text-slate-400">
              <li><Link to="/services" className="hover:text-red-400 transition-colors flex items-center"><ArrowRight size={14} className="mr-2"/> Web Development</Link></li>
              <li><Link to="/services" className="hover:text-red-400 transition-colors flex items-center"><ArrowRight size={14} className="mr-2"/> Graphic Design</Link></li>
              <li><Link to="/services" className="hover:text-red-400 transition-colors flex items-center"><ArrowRight size={14} className="mr-2"/> Digital Marketing</Link></li>
              <li><Link to="/services" className="hover:text-red-400 transition-colors flex items-center"><ArrowRight size={14} className="mr-2"/> SEO Optimization</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h4 className="text-lg font-bold mb-6 text-white border-b border-slate-700 pb-2 inline-block">Contact</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start">
                  <span className="block">{CONTACT_INFO.address}</span>
              </li>
              <li>
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-white transition-colors font-medium text-lg block">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors block break-words">
                  {CONTACT_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Amit Kumar. All Rights Reserved.</p>
          <p className="flex items-center mt-2 md:mt-0 bg-slate-800 px-4 py-1 rounded-full">
            Made by Amit Kumar
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;