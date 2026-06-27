import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle, 
  MessageCircle, 
  Star, 
  Cpu,
  Facebook,
  Instagram,
  Globe,
  Search,
  Sparkles,
  Bot,
  Layers,
  LayoutTemplate,
  Smartphone,
  Zap,
  MousePointer2,
  ShieldCheck,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Linkedin,
  GraduationCap,
  Building2,
  Sprout,
  Radio,
  HeartHandshake,
  BookOpen
} from 'lucide-react';
import { IMAGES, SERVICES, CONTACT_INFO, RESUME_URL } from '../constants';
import Testimonials from '../components/Testimonials';

const TRUSTED_BRANDS = [
  { name: "Usha International School", icon: GraduationCap, color: "text-blue-500 dark:text-blue-400" },
  { name: "BBCO Exporter Hub", icon: Globe, color: "text-emerald-500 dark:text-emerald-400" },
  { name: "One Digital Bharat", icon: Zap, color: "text-indigo-500 dark:text-indigo-400" },
  { name: "Prime Property Bang", icon: Building2, color: "text-amber-500 dark:text-amber-400" },
  { name: "GR Ginger", icon: Sprout, color: "text-orange-500 dark:text-orange-400" },
  { name: "Prasab Communication", icon: Radio, color: "text-sky-500 dark:text-sky-400" },
  { name: "Global Edu Campus", icon: BookOpen, color: "text-teal-500 dark:text-teal-400" },
  { name: "Kalighat Shakti Peeth", icon: HeartHandshake, color: "text-red-500 dark:text-red-400" },
];

const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path === '/about') {
      const el = document.getElementById('about');
      if (el) {
        // Delay slightly for render cycles
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    } else if (path === '/skills') {
      const el = document.getElementById('skills');
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    } else if (path === '/testimonials') {
      const el = document.getElementById('testimonials');
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    }
  }, [location.pathname]);

  // Typewriter effect state
  const [typedText, setTypedText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);
  const words = [
    "Website Developer",
    "Graphic Designer",
    "Digital Marketer",
    "WordPress & Odoo Developer",
    "AI Automation Expert"
  ];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const handleTyping = () => {
      const currentWord = words[wordIndex];
      if (!isDeleting) {
        setTypedText(currentWord.substring(0, typedText.length + 1));
        if (typedText === currentWord) {
          setSpeed(1800); // Wait on completed word
          setIsDeleting(true);
        } else {
          setSpeed(80); // Typing speed
        }
      } else {
        setTypedText(currentWord.substring(0, typedText.length - 1));
        if (typedText === '') {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
          setSpeed(400); // Wait before typing next word
        } else {
          setSpeed(40); // Deleting speed
        }
      }
    };

    timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, wordIndex, speed]);

  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="flex flex-col bg-slate-950">
      {/* Custom style for true 9:16 portrait video object-cover background */}
      <style dangerouslySetInnerHTML={{__html: `
        .vimeo-portrait-cover {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          min-width: 100% !important;
          min-height: 100% !important;
          width: auto !important;
          height: auto !important;
          aspect-ratio: 9/16 !important;
          pointer-events: none;
          border: none;
          opacity: 0.8;
          z-index: 0;
        }

        .vimeo-portrait-cover-desktop {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          min-width: 100% !important;
          min-height: 100% !important;
          width: auto !important;
          height: auto !important;
          aspect-ratio: 9/16 !important;
          pointer-events: none;
          border: none;
          opacity: 0.75;
          z-index: 0;
        }
      `}} />

      {/* Combined Hero & About Container with video background for laptop/desktop */}
      <div className="relative w-full overflow-hidden">
        
        {/* Cinematic Video Background Container (for Laptop/Desktop) */}
        <div className="hidden lg:block absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none bg-slate-950">
          {/* Dark overlay (75% opacity) above the video so text is easy to read across both sections */}
          <div className="absolute inset-0 bg-slate-950/75 z-10"></div>
          
          {/* Floating Atmospheric Particles */}
          <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
            {[...Array(35)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-red-500/20 rounded-full blur-[2px] animate-pulse"
                style={{
                  width: `${Math.random() * 8 + 3}px`,
                  height: `${Math.random() * 8 + 3}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDuration: `${Math.random() * 6 + 4}s`,
                  animationDelay: `${Math.random() * 3}s`,
                }}
              />
            ))}
          </div>

          {/* Background Vimeo Video Iframe spanning BOTH sections */}
          <div className="absolute inset-0 w-full h-full flex items-center justify-center">
            <iframe
              src="https://player.vimeo.com/video/1205129872?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&background=1"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="vimeo-portrait-cover-desktop"
              style={{ border: 'none', pointerEvents: 'none' }}
            ></iframe>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-slate-950/40 lg:bg-transparent text-white pt-24 pb-16 lg:py-20 z-10">
          
          {/* Cinematic Video Background Container (Mobile only) */}
          <div className="lg:hidden absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
            {/* Dark overlay (65% opacity) above the video so text is easy to read */}
            <div className="absolute inset-0 bg-slate-950/65 z-10"></div>
            
            {/* Floating Atmospheric Particles */}
            <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute bg-red-500/20 rounded-full blur-[2px] animate-pulse"
                  style={{
                    width: `${Math.random() * 8 + 3}px`,
                    height: `${Math.random() * 8 + 3}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDuration: `${Math.random() * 6 + 4}s`,
                    animationDelay: `${Math.random() * 3}s`,
                  }}
                />
              ))}
            </div>

            {/* Background Vimeo Video Iframe exactly as requested */}
            <div className="hero-video absolute inset-0 w-full h-full flex items-center justify-center">
              <iframe
                src="https://player.vimeo.com/video/1205129872?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&background=1"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="vimeo-portrait-cover"
                style={{ border: 'none', pointerEvents: 'none' }}
              ></iframe>
            </div>

            {/* Backup HTML5 background video playing in parallel */}
            <video
              ref={videoRef}
              src="/intro.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-70"
            />
          </div>

        {/* Content Layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-20 relative grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center h-full">
          
          {/* Left Column (Left Content) */}
          <div className="md:col-span-7 space-y-4 sm:space-y-6 md:space-y-8 text-left pt-6 pb-2 md:py-12">
            {/* Small Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-2xl shadow-black/30"
            >
               <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
               <span className="text-sm font-bold tracking-wider uppercase">👋 Hello, I'm</span>
            </motion.div>
            
            {/* Heading Group */}
            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-none drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]"
              >
                Amit Kumar
              </motion.h1>
              
              <motion.div 
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="space-y-2"
              >
                {/* Large Animated Title */}
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-red-400 tracking-tight leading-tight">
                  Website Developer
                </h2>

                {/* Typewriter subtitle */}
                <div className="h-10 flex items-center">
                  <span className="text-lg md:text-2xl font-bold text-white/90 tracking-tight flex items-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
                    ✨&nbsp;<span className="text-red-400 font-extrabold">{typedText}</span>
                    <span className="typing-cursor h-6 w-[3px] ml-1 bg-red-400"></span>
                  </span>
                </div>
              </motion.div>
            </div>
            
            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="text-base md:text-lg lg:text-xl text-slate-200/90 max-w-2xl leading-relaxed font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]"
            >
              Professional Website Developer, Graphic Designer and Digital Marketer helping businesses grow with modern websites, branding and AI-powered automation.
            </motion.p>
            
          </div>
          
          {/* Right Column (Floating Badges Showcase) */}
          <div className="md:col-span-5 relative h-[280px] sm:h-[320px] md:h-[400px] lg:h-[500px] w-full flex items-center justify-center z-10 mt-4 md:mt-0 pb-8 md:pb-0">
             
             {/* 1. WordPress Badge */}
             <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8, delay: 0.1 }}
               className="absolute top-2 left-[5%] z-30 animate-float-slow transition-all duration-300 hover:scale-110"
             >
               <div className="flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-4 py-2.5 rounded-full shadow-[0_8px_25px_rgba(37,117,230,0.3)] border border-blue-500/30">
                 <div className="p-1.5 bg-blue-500/20 rounded-full">
                   <svg viewBox="0 0 24 24" className="w-4 h-4 text-blue-400 fill-current" xmlns="http://www.w3.org/2000/svg">
                     <path d="M12.158 12.786l-2.698 7.84a9.755 9.755 0 005.352.012l-2.654-7.852zm-1.11-3.213c.483 0 .822-.114.822-.527 0-.36-.263-.49-.553-.49H9.863v1.017h1.185zm2.5 5.568l2.128-6.49c.202-.615.352-1.077.352-1.472 0-.616-.462-.968-1.164-.968h-.122a9.704 9.704 0 00-7.39 3.518l3.197 9.412 3.003-9.066zm-1.39-11.141a10 10 0 1010 10 10 10 0 00-10-10zm0 18.824a8.814 8.814 0 01-5.138-1.634l3.522-10.222.013.003h1.037l3.541 10.27a8.775 8.775 0 01-2.975 1.583z"/>
                   </svg>
                 </div>
                 <span className="font-extrabold text-xs text-white tracking-tight">WordPress</span>
               </div>
             </motion.div>

             {/* 2. Odoo Badge */}
             <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="absolute top-10 right-[10%] z-30 animate-float-medium transition-all duration-300 hover:scale-110"
             >
               <div className="flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-4 py-2.5 rounded-full shadow-[0_8px_25px_rgba(168,85,247,0.3)] border border-purple-500/30">
                 <div className="p-1.5 bg-purple-500/20 rounded-full">
                   <Layers size={14} className="text-purple-400" />
                 </div>
                 <span className="font-extrabold text-xs text-white tracking-tight">Odoo</span>
               </div>
             </motion.div>

             {/* 3. AI Badge */}
             <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8, delay: 0.3 }}
               className="absolute top-32 left-[15%] z-30 animate-float-slow transition-all duration-300 hover:scale-110"
             >
               <div className="flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-4 py-2.5 rounded-full shadow-[0_8px_25px_rgba(16,185,129,0.3)] border border-emerald-500/30">
                 <div className="p-1.5 bg-emerald-500/20 rounded-full">
                   <Sparkles size={14} className="text-emerald-400 animate-pulse" />
                 </div>
                 <span className="font-extrabold text-xs text-white tracking-tight">AI</span>
               </div>
             </motion.div>

             {/* 4. AI Chatbot Badge */}
             <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8, delay: 0.4 }}
               className="absolute bottom-36 left-[5%] z-30 animate-float-fast transition-all duration-300 hover:scale-110"
             >
               <div className="flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-4 py-2.5 rounded-full shadow-[0_8px_25px_rgba(14,165,233,0.3)] border border-sky-500/30">
                 <div className="p-1.5 bg-sky-500/20 rounded-full">
                   <Bot size={14} className="text-sky-400 animate-bounce" />
                 </div>
                 <span className="font-extrabold text-xs text-white tracking-tight">AI Chatbot</span>
               </div>
             </motion.div>

             {/* 5. Website Badge */}
             <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8, delay: 0.5 }}
               className="absolute bottom-16 left-[20%] z-30 animate-float-medium transition-all duration-300 hover:scale-110"
             >
               <div className="flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-4 py-2.5 rounded-full shadow-[0_8px_25px_rgba(99,102,241,0.3)] border border-indigo-500/30">
                 <div className="p-1.5 bg-indigo-500/20 rounded-full">
                   <Globe size={14} className="text-indigo-400" />
                 </div>
                 <span className="font-extrabold text-xs text-white tracking-tight">Website</span>
               </div>
             </motion.div>

             {/* 6. Facebook Badge */}
             <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8, delay: 0.6 }}
               className="absolute top-28 right-[5%] z-30 animate-float-slow transition-all duration-300 hover:scale-110"
             >
               <a href="https://www.facebook.com/profile.php?id=100094611630246" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-blue-600/90 hover:bg-blue-600 backdrop-blur-md px-4 py-2.5 rounded-full shadow-[0_8px_25px_rgba(37,99,235,0.4)] border border-blue-400/30">
                 <Facebook size={14} fill="currentColor" className="text-white" />
                 <span className="font-bold text-xs text-white">Facebook</span>
               </a>
             </motion.div>

             {/* 7. Instagram Badge */}
             <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8, delay: 0.7 }}
               className="absolute top-1/2 -translate-y-6 right-[15%] z-30 animate-float-fast transition-all duration-300 hover:scale-110"
             >
               <a href="https://www.instagram.com/growwithus__12/" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 backdrop-blur-md px-4 py-2.5 rounded-full shadow-[0_8px_25px_rgba(219,39,119,0.4)] border border-pink-500/30">
                 <Instagram size={14} className="text-white" />
                 <span className="font-bold text-xs text-white">Instagram</span>
               </a>
             </motion.div>

             {/* 8. WhatsApp Badge */}
             <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8, delay: 0.8 }}
               className="absolute bottom-28 right-[5%] z-30 animate-float-medium transition-all duration-300 hover:scale-110"
             >
               <a href="https://wa.me/916205120223" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-green-500/90 hover:bg-green-500 backdrop-blur-md px-4 py-2.5 rounded-full shadow-[0_8px_25px_rgba(34,197,94,0.4)] border border-green-400/30">
                 <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" className="text-white">
                   <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.1 1.29 4.74 1.29 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01C17.18 3.03 14.69 2 12.04 2zm.01 16.61c-1.48 0-2.94-.4-4.21-1.15l-.3-.18-3.11.82.83-3.04-.19-.31a6.69 6.69 0 0 1 5.89-10.05c1.79 0 3.47.7 4.73 1.96 1.26 1.26 1.96 2.94 1.96 4.73.01 3.69-2.99 6.69-6.68 6.69v-.01c-.01 0-.01 0 0 0zm3.67-5.01c-.2-.1-.18-.1-.4-.2l-1.3-.64c-.2-.1-.38-.02-.48.13-.17.26-.52.82-.67 1.05-.12.19-.28.2-.48.1-.88-.42-1.63-.98-2.22-1.72-.45-.55-.17-.67.24-1.11l.37-.47c.1-.12.12-.24.05-.38l-.66-1.59c-.23-.55-.45-.48-.61-.48h-.53c-.21 0-.69.05-1.16.51-.51.52-.96 1.3-.96 2.5s.98 2.92 1.63 3.86c.65.95 2.5 2.27 4.38 2.83 1.88.56 2.22.42 2.61.35.61-.11 1.36-.57 1.57-1.12.21-.55.21-1.02.15-1.12-.06-.1-.23-.16-.43-.26z"/>
                 </svg>
                 <span className="font-bold text-xs text-white">WhatsApp</span>
               </a>
             </motion.div>

             {/* 9. LinkedIn Badge */}
             <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8, delay: 0.9 }}
               className="absolute bottom-12 right-[15%] z-30 animate-float-slow transition-all duration-300 hover:scale-110"
             >
               <a href="https://www.linkedin.com/in/amit-kumar62051" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-slate-900/90 hover:bg-slate-800 backdrop-blur-md px-4 py-2.5 rounded-full shadow-[0_8px_25px_rgba(15,23,42,0.4)] border border-slate-700">
                 <Linkedin size={14} fill="currentColor" className="text-blue-400" />
                 <span className="font-bold text-xs text-white">LinkedIn</span>
               </a>
             </motion.div>

             {/* 10. Google Badge */}
             <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8, delay: 1.0 }}
               className="absolute top-1/2 -translate-y-1/2 left-[2%] z-30 animate-float-fast transition-all duration-300 hover:scale-110"
             >
               <div className="flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-4 py-2.5 rounded-full shadow-[0_8px_25px_rgba(219,68,85,0.2)] border border-slate-700/60">
                 <Search size={14} className="text-red-500 font-black animate-pulse" />
                 <span className="font-extrabold text-xs text-white tracking-tight">
                   <span className="text-blue-500">G</span>
                   <span className="text-red-500">o</span>
                   <span className="text-yellow-500">o</span>
                   <span className="text-blue-500">g</span>
                   <span className="text-green-500">l</span>
                   <span className="text-red-500">e</span>
                 </span>
               </div>
             </motion.div>

             {/* 11. SEO Badge */}
             <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8, delay: 1.1 }}
               className="absolute bottom-2 right-[25%] z-30 animate-float-medium transition-all duration-300 hover:scale-110"
             >
               <div className="flex items-center gap-2 bg-orange-600/90 backdrop-blur-md px-4 py-2.5 rounded-full shadow-[0_8px_25px_rgba(249,115,22,0.4)] border border-orange-500/30">
                 <Zap size={14} className="text-yellow-300 animate-bounce" />
                 <span className="font-extrabold text-xs text-white tracking-tight uppercase">SEO</span>
               </div>
             </motion.div>

             {/* Decorative glow background for the cluster */}
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-red-500/10 rounded-full blur-[100px] -z-10 animate-pulse"></div>

          </div>

          {/* Buttons Group (Unified - positioned below the text content and floating badges showcase for all views) */}
          <motion.div 
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="col-span-1 md:col-span-12 flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-12 w-full z-20 relative"
          >
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-5 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base font-extrabold rounded-2xl text-white bg-gradient-to-r from-red-500 via-orange-500 to-red-500 hover:from-red-600 hover:to-orange-600 shadow-[0_0_25px_rgba(239,68,68,0.35)] hover:shadow-[0_0_35px_rgba(239,68,68,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 transform hover:-translate-y-1 gradient-btn-animated text-center min-w-[140px] sm:w-auto"
            >
              Hire Me
            </Link>
            <a 
              href={RESUME_URL}
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center justify-center px-5 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base font-extrabold rounded-2xl text-white bg-white/10 backdrop-blur-md border border-white/20 hover:border-white/40 hover:bg-white/20 hover:scale-105 active:scale-95 shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-center min-w-[140px] sm:w-auto"
            >
              Download Resume
            </a>
            <Link 
              to="/portfolio" 
              className="inline-flex items-center justify-center px-5 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base font-extrabold rounded-2xl text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:scale-105 active:scale-95 transition-all duration-300 transform hover:-translate-y-1 text-center min-w-[140px] sm:w-auto"
            >
              View My Work
            </Link>
            <a 
              href="https://wa.me/916205120223" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center justify-center px-5 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base font-extrabold rounded-2xl text-white bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:scale-105 active:scale-95 transition-all duration-300 transform hover:-translate-y-1 text-center min-w-[140px] sm:w-auto"
            >
              <MessageCircle size={16} className="mr-1.5 sm:mr-2" />
              Let's Chat
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white dark:bg-slate-900 lg:bg-transparent lg:dark:bg-transparent relative transition-colors duration-300 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16">
                <div className="w-full lg:w-1/2 flex justify-center">
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-red-500 to-orange-500 rounded-full blur-2xl opacity-20 transform translate-x-4 translate-y-4 group-hover:opacity-30 transition-opacity"></div>
                        <img 
                            src={IMAGES.PROFILE_PORTRAIT} 
                            alt="Amit Kumar Portrait" 
                            className="relative w-72 h-72 md:w-96 md:h-96 rounded-full object-cover shadow-2xl border-[6px] border-white dark:border-slate-800 lg:border-slate-800 ring-1 ring-slate-100 dark:ring-slate-800 lg:ring-slate-800"
                            loading="lazy"
                        />
                        <div className="absolute bottom-6 right-10 bg-white dark:bg-slate-800 lg:bg-slate-900/85 lg:backdrop-blur-md px-5 py-3 rounded-full shadow-lg border border-slate-100 dark:border-slate-700 lg:border-slate-700/50 flex items-center gap-2 max-w-[200px] transition-colors duration-300">
                            <Cpu size={20} className="text-red-500 shrink-0" />
                            <span className="font-bold text-slate-800 dark:text-slate-100 lg:text-white text-xs leading-tight">Web Developer | Graphic Designer | Digital Marketer</span>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="inline-block px-3 py-1 bg-red-50 dark:bg-red-950/25 lg:bg-red-950/30 text-red-600 dark:text-red-400 lg:text-red-300 rounded-lg text-xs font-bold uppercase tracking-widest mb-4">
                        Who I Am
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white lg:text-white mb-6">
                        I Help Brands <span className="text-red-500 dark:text-red-400">Stand Out</span> in the Digital World
                    </h2>
                    <p className="text-lg font-medium text-slate-700 dark:text-slate-300 lg:text-slate-200 mb-6 italic border-l-4 border-red-500 pl-4">
                        "Driven by creativity, fueled by technology. My mission is to transform your ideas into digital reality."
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 lg:text-slate-300 mb-6 leading-relaxed">
                        I am Amit Kumar, a passionate freelancer based in Bangalore, India. With expertise spanning full-stack web development, creative graphic design, and results-driven digital marketing, I offer a holistic approach to building your online presence.
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 lg:text-slate-300 mb-8 leading-relaxed">
                        Whether you are a startup needing a logo and website, or an established business looking to scale via Google and Facebook Ads, I have the tools and experience to make it happen.
                    </p>
                    <Link to="/contact" className="text-red-500 dark:text-red-400 font-bold hover:text-red-600 dark:hover:text-red-300 inline-flex items-center transition-all hover:translate-x-2 text-lg">
                        Let's Work Together <ArrowRight size={22} className="ml-2" />
                    </Link>
                </div>
            </div>
        </div>
      </section>
    </div>

      {/* Trusted By / Social Proof Section */}
      <section className="py-14 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800/60 overflow-hidden relative transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 block">
            Trusted By Leading Brands & Institutions
          </span>
        </div>
        
        {/* Infinite Marquee Track */}
        <div className="relative flex w-full overflow-hidden select-none">
          {/* Fade overlays on left and right for slick transition */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white dark:from-slate-900 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white dark:from-slate-900 to-transparent z-10 pointer-events-none" />
          
          <motion.div 
            className="flex gap-16 md:gap-24 shrink-0 items-center pr-16 md:pr-24 min-w-full"
            animate={{ x: [0, "-50%"] }}
            transition={{
              ease: "linear",
              duration: 25,
              repeat: Infinity,
            }}
          >
            {/* Render 2 sets for perfect infinite loop */}
            {[...TRUSTED_BRANDS, ...TRUSTED_BRANDS].map((brand, idx) => {
              const IconComponent = brand.icon;
              return (
                <div 
                  key={idx} 
                  className="flex items-center gap-3 grayscale opacity-45 dark:opacity-40 hover:grayscale-0 hover:opacity-100 hover:scale-105 transition-all duration-300 cursor-pointer group whitespace-nowrap"
                >
                  <div className={`p-2 rounded-xl bg-slate-50 dark:bg-slate-800/50 group-hover:bg-white dark:group-hover:bg-slate-800 transition-colors duration-300 ${brand.color}`}>
                    <IconComponent size={20} className="group-hover:animate-pulse" />
                  </div>
                  <span className="font-sans font-bold tracking-tight text-slate-700 dark:text-slate-300 text-sm md:text-base">
                    {brand.name}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Skills & Expertise Section */}
      <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <span className="text-red-500 dark:text-red-400 font-bold tracking-wider uppercase text-sm">My Expertise</span>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-2">Skills & Technologies</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                {/* Skill Group 1 */}
                <div className="space-y-6">
                    <div className="space-y-2">
                        <div className="flex justify-between font-bold text-slate-700 dark:text-slate-200">
                            <span>Web Development</span>
                            <span>95%</span>
                        </div>
                        <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2.5">
                            <div className="bg-red-500 h-2.5 rounded-full w-[95%] shadow-lg shadow-red-500/30"></div>
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400">React, TypeScript, Tailwind, Node.js</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex justify-between font-bold text-slate-700 dark:text-slate-200">
                            <span>Graphic Design</span>
                            <span>90%</span>
                        </div>
                        <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2.5">
                            <div className="bg-orange-500 h-2.5 rounded-full w-[90%] shadow-lg shadow-orange-500/30"></div>
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Photoshop, Illustrator, Canva, Figma</p>
                    </div>
                </div>
                {/* Skill Group 2 */}
                <div className="space-y-6">
                    <div className="space-y-2">
                        <div className="flex justify-between font-bold text-slate-700 dark:text-slate-200">
                            <span>Digital Marketing</span>
                            <span>85%</span>
                        </div>
                        <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2.5">
                            <div className="bg-blue-500 h-2.5 rounded-full w-[85%] shadow-lg shadow-blue-500/30"></div>
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Google Ads, Meta Ads, Email Marketing</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex justify-between font-bold text-slate-700 dark:text-slate-200">
                            <span>SEO & Analytics</span>
                            <span>80%</span>
                        </div>
                        <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2.5">
                            <div className="bg-green-500 h-2.5 rounded-full w-[80%] shadow-lg shadow-green-500/30"></div>
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400">On-page SEO, Keyword Research, GA4</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <span className="text-red-500 dark:text-red-400 font-bold tracking-wider uppercase text-sm">What I Do</span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-2">My Core Services</h2>
                <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-lg">Everything you need to launch and grow your business online, all in one place.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {SERVICES.slice(0, 3).map((service) => (
                    <div key={service.id} className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 dark:border-slate-700/50 group hover:-translate-y-2">
                        <div className="mb-6 bg-red-50 dark:bg-red-950/20 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-red-500 dark:group-hover:bg-red-500 transition-colors">
                            <div className="text-red-500 dark:text-red-400 group-hover:text-white dark:group-hover:text-white transition-colors">
                                {service.icon}
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{service.title}</h3>
                        <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">{service.description}</p>
                        <Link to="/services" className="text-red-500 dark:text-red-400 font-bold hover:text-red-700 dark:hover:text-red-300 flex items-center gap-1">
                            Learn more <ArrowRight size={16} />
                        </Link>
                    </div>
                ))}
            </div>
             <div className="mt-16 text-center">
                <Link to="/services" className="inline-block px-8 py-4 border-2 border-slate-200 dark:border-slate-700 rounded-full text-slate-700 dark:text-slate-300 font-bold hover:border-red-500 dark:hover:border-red-500 hover:text-red-500 dark:hover:text-red-500 transition-all hover:shadow-lg">
                    View All Services
                </Link>
             </div>
        </div>
      </section>

      {/* What I Can Do for You Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
          <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-100/50 dark:bg-blue-950/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-red-100/50 dark:bg-red-950/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <span className="inline-block px-4 py-1.5 bg-blue-50 dark:bg-blue-950/25 text-blue-600 dark:text-blue-400 rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-blue-100 dark:border-blue-900/30">
              Your Digital Growth Partner
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
              What I Can <span className="text-blue-600 dark:text-blue-400">Do for You</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 font-medium">
              I don’t just build websites — we build your <span className="text-slate-900 dark:text-white font-bold underline decoration-blue-200 dark:decoration-blue-900 underline-offset-4">digital identity</span>.
            </p>
            <p className="mt-4 text-slate-600 dark:text-slate-400">
              Our mission is to make your online journey smooth, professional, and growth-driven.
              Here’s how we help you stand out in the digital world 👇
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe size={32} />,
                title: "1. Create Your Dream Website",
                desc: "From personal portfolios to business websites, we craft stunning, mobile-friendly designs that reflect your brand and engage your audience.",
                color: "blue"
              },
              {
                icon: <MousePointer2 size={32} />,
                title: "2. Easy-to-Manage Drag & Drop Builder",
                desc: "No coding, no confusion! You can edit, add, or rearrange website sections with our simple drag-and-drop system.",
                color: "indigo"
              },
              {
                icon: <ShieldCheck size={32} />,
                title: "3. Free Domain & Lifetime Subdomain",
                desc: "Get a Free Domain for 1 Year and a Free Subdomain for Lifetime — your business stays online, always.",
                color: "emerald"
              },
              {
                icon: <Smartphone size={32} />,
                title: "4. App Embedded Website",
                desc: "We make your website function as a mobile app, so visitors can access your business with one tap on their phones.",
                color: "slate"
              },
              {
                icon: <Bot size={32} />,
                title: "5. Smart Chatbot Integration",
                desc: "Engage visitors 24/7 with an intelligent chatbot that answers questions, captures leads, and boosts conversions automatically.",
                color: "sky"
              },
              {
                icon: <MessageCircle size={32} />,
                title: "6. WhatsApp Chat Button",
                desc: "Let your customers reach you instantly! One click opens your WhatsApp for real-time communication and faster deals.",
                color: "green"
              },
              {
                icon: <Zap size={32} />,
                title: "7. SEO & Performance Optimization",
                desc: "We ensure your website loads fast, ranks better, and gives users a seamless experience across all devices.",
                color: "orange"
              }
            ].map((item, idx) => {
               const colorMap: Record<string, string> = {
                  blue: 'bg-blue-50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 dark:group-hover:bg-blue-500',
                  indigo: 'bg-indigo-50 dark:bg-indigo-950/20 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600 dark:group-hover:bg-indigo-500',
                  emerald: 'bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-600 dark:group-hover:bg-emerald-500',
                  slate: 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 group-hover:bg-slate-600 dark:group-hover:bg-slate-500',
                  sky: 'bg-sky-50 dark:bg-sky-950/20 text-sky-600 dark:text-sky-400 group-hover:bg-sky-600 dark:group-hover:bg-sky-500',
                  green: 'bg-green-50 dark:bg-green-950/20 text-green-600 dark:text-green-400 group-hover:bg-green-600 dark:group-hover:bg-green-500',
                  orange: 'bg-orange-50 dark:bg-orange-950/20 text-orange-600 dark:text-orange-400 group-hover:bg-orange-600 dark:group-hover:bg-orange-500',
               };

               return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all group flex flex-col items-center text-center"
                >
                  <div className={`p-5 rounded-2xl mb-6 transition-all duration-300 group-hover:text-white mx-auto ${colorMap[item.color]}`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors uppercase tracking-tight">{item.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-medium">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 dark:bg-slate-950/40 text-white relative overflow-hidden border-t border-slate-850">
         <div className="absolute top-0 right-0 w-96 h-96 bg-red-600 rounded-full blur-[100px] opacity-20 -mr-20 -mt-20"></div>
         <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-600 rounded-full blur-[100px] opacity-20 -ml-20 -mb-20"></div>
         
         <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight">Which website do you need?</h2>
            <p className="text-slate-300 mb-10 text-xl max-w-3xl mx-auto">
              If you require any type of website, digital marketing services, or creative graphic design solutions such as posters or logos, please do not hesitate to contact me.
            </p>
            <a 
                href={CONTACT_INFO.whatsappUrl} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center justify-center px-10 py-5 bg-green-600 hover:bg-green-700 rounded-full text-white text-lg font-bold transition-all transform hover:scale-105 shadow-xl hover:shadow-green-500/20"
            >
                <MessageCircle size={24} className="mr-3" />
                Let's chat on Whatsapp to discuss further
            </a>
            <p className="mt-6 text-sm text-slate-500">No obligation, just a friendly chat about your goals.</p>
         </div>
      </section>
    </div>
  );
};

export default Home;
