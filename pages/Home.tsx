import React from 'react';
import { Link } from 'react-router-dom';
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
  ShieldCheck
} from 'lucide-react';
import { IMAGES, SERVICES, CONTACT_INFO } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-slate-50 pt-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute top-1/3 left-10 w-4 h-4 bg-yellow-400 rounded-full opacity-60 animate-bounce"></div>
        <div className="absolute bottom-1/3 right-10 w-6 h-6 bg-red-400 rounded-full opacity-40 animate-pulse"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-slate-200">
               <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
               <span className="text-slate-700 font-semibold text-sm">Available for new projects</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.15]">
              Building Businesses with <br/>
              <span className="gradient-text">Web, Design & Marketing</span>
            </h1>
            
            <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
              {CONTACT_INFO.title}. I specialize in creating high-performance websites, stunning graphics, and ROI-driven digital marketing campaigns to grow your business online.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/portfolio" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl text-white bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 shadow-xl hover:shadow-red-500/30 transition-all duration-300 transform hover:-translate-y-1">
                View My Work
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl text-slate-700 bg-white border-2 border-slate-100 hover:border-red-500 hover:text-red-500 shadow-sm transition-all duration-300">
                Contact Me
              </Link>
            </div>
            
            <div className="pt-6 flex flex-wrap items-center gap-6 text-sm font-medium text-slate-500 border-t border-slate-200">
                <span className="flex items-center"><CheckCircle size={18} className="text-green-500 mr-2" /> SEO Friendly Websites</span>
                <span className="flex items-center"><CheckCircle size={18} className="text-green-500 mr-2" /> Creative Branding</span>
                <span className="flex items-center"><CheckCircle size={18} className="text-green-500 mr-2" /> Results Driven Ads</span>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
             <div className="relative w-full max-w-md aspect-square lg:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white bg-slate-200 animate-float z-20">
                <img 
                    src={IMAGES.HERO_WORKING} 
                    alt="Amit Kumar Working" 
                    className="w-full h-full object-cover"
                />
                
                {/* Tech Badges Overlay */}
                
                {/* Odoo */}
                <div className="absolute top-8 right-8 px-3 py-1.5 bg-white/90 backdrop-blur rounded-lg shadow-lg animate-bounce delay-100 font-bold text-slate-800 text-xs flex items-center gap-1.5 z-30">
                    <Layers size={14} className="text-purple-600" /> Odoo
                </div>
                
                {/* Wordpress */}
                <div className="absolute top-12 left-6 px-3 py-1.5 bg-white/90 backdrop-blur rounded-lg shadow-lg font-bold text-slate-800 text-xs flex items-center gap-1.5 z-30 animate-pulse delay-700">
                   <LayoutTemplate size={14} className="text-blue-600" /> Wordpress
                </div>

                {/* AI */}
                <div className="absolute top-1/2 left-2 px-3 py-1.5 bg-white/90 backdrop-blur rounded-lg shadow-lg font-bold text-slate-800 text-xs flex items-center gap-1.5 z-30">
                    <Bot size={14} className="text-emerald-600" /> AI
                </div>

                {/* Facebook */}
                <div className="absolute bottom-32 left-6 px-3 py-1.5 bg-white/90 backdrop-blur rounded-lg shadow-lg font-bold text-slate-800 text-xs flex items-center gap-1.5 z-30">
                    <Facebook size={14} className="text-blue-600" /> Facebook
                </div>

                {/* Instagram */}
                <div className="absolute top-1/3 right-4 px-3 py-1.5 bg-white/90 backdrop-blur rounded-lg shadow-lg font-bold text-slate-800 text-xs flex items-center gap-1.5 z-30">
                    <Instagram size={14} className="text-pink-600" /> Instagram
                </div>

                {/* WEBSITE */}
                <div className="absolute bottom-1/4 right-3 px-3 py-1.5 bg-white/90 backdrop-blur rounded-lg shadow-lg font-bold text-slate-800 text-xs flex items-center gap-1.5 z-30">
                    <Globe size={14} className="text-indigo-600" /> WEBSITE
                </div>

                {/* Google */}
                <div className="absolute bottom-12 right-10 px-3 py-1.5 bg-white/90 backdrop-blur rounded-lg shadow-lg font-bold text-slate-800 text-xs flex items-center gap-1.5 z-30">
                    <Search size={14} className="text-red-500" /> Google
                </div>

                {/* Gemini */}
                <div className="absolute bottom-10 left-1/3 px-3 py-1.5 bg-white/90 backdrop-blur rounded-lg shadow-lg font-bold text-slate-800 text-xs flex items-center gap-1.5 z-30">
                    <Sparkles size={14} className="text-sky-500" /> Gemini
                </div>

                <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 hidden md:flex items-center justify-between z-30">
                    <div>
                        <p className="font-bold text-white text-sm">50+ Projects</p>
                        <p className="text-xs text-slate-300 font-semibold uppercase tracking-wider">Completed Successfully</p>
                    </div>
                    <div className="flex -space-x-3 pl-2">
                        {[1,2,3,4].map(i => (
                            <div key={i} className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-[10px] font-bold text-slate-500 shadow-sm">
                                <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Client" className="w-full h-full rounded-full" />
                            </div>
                        ))}
                        <div className="w-10 h-10 rounded-full bg-slate-900 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white shadow-sm">+</div>
                    </div>
                </div>
             </div>
             
             {/* Floating badge */}
             <div className="absolute bottom-10 -left-6 lg:-left-12 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 max-w-xs hidden sm:block z-30 transform hover:scale-105 transition-transform cursor-default">
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-red-100 rounded-lg text-red-600">
                        <Star size={20} fill="currentColor" />
                    </div>
                    <div>
                        <p className="font-bold text-slate-800 text-lg">50+ Projects</p>
                        <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Completed Successfully</p>
                    </div>
                </div>
             </div>
             
             {/* Decorative blob behind image */}
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-red-200/40 to-orange-100/40 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16">
                <div className="w-full lg:w-1/2 flex justify-center">
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-red-500 to-orange-500 rounded-full blur-2xl opacity-20 transform translate-x-4 translate-y-4 group-hover:opacity-30 transition-opacity"></div>
                        <img 
                            src={IMAGES.PROFILE_PORTRAIT} 
                            alt="Amit Kumar Portrait" 
                            className="relative w-72 h-72 md:w-96 md:h-96 rounded-full object-cover shadow-2xl border-[6px] border-white ring-1 ring-slate-100"
                        />
                        <div className="absolute bottom-6 right-10 bg-white px-5 py-3 rounded-full shadow-lg border border-slate-100 flex items-center gap-2 max-w-[200px]">
                            <Cpu size={20} className="text-red-500 shrink-0" />
                            <span className="font-bold text-slate-800 text-xs leading-tight">Web Developer | Graphic Designer | Digital Marketer</span>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="inline-block px-3 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-bold uppercase tracking-widest mb-4">
                        Who I Am
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                        I Help Brands <span className="text-red-500">Stand Out</span> in the Digital World
                    </h2>
                    <p className="text-lg font-medium text-slate-700 mb-6 italic border-l-4 border-red-500 pl-4">
                        "Driven by creativity, fueled by technology. My mission is to transform your ideas into digital reality."
                    </p>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                        I am Amit Kumar, a passionate freelancer based in Bangalore, India. With expertise spanning full-stack web development, creative graphic design, and results-driven digital marketing, I offer a holistic approach to building your online presence.
                    </p>
                    <p className="text-slate-600 mb-8 leading-relaxed">
                        Whether you are a startup needing a logo and website, or an established business looking to scale via Google and Facebook Ads, I have the tools and experience to make it happen.
                    </p>
                    <Link to="/contact" className="text-red-500 font-bold hover:text-red-600 inline-flex items-center transition-all hover:translate-x-2 text-lg">
                        Let's Work Together <ArrowRight size={22} className="ml-2" />
                    </Link>
                </div>
            </div>
        </div>
      </section>

      {/* Skills & Expertise Section (New) */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <span className="text-red-500 font-bold tracking-wider uppercase text-sm">My Expertise</span>
                <h2 className="text-3xl font-bold text-slate-900 mt-2">Skills & Technologies</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                {/* Skill Group 1 */}
                <div className="space-y-6">
                    <div className="space-y-2">
                        <div className="flex justify-between font-bold text-slate-700">
                            <span>Web Development</span>
                            <span>95%</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2.5">
                            <div className="bg-red-500 h-2.5 rounded-full w-[95%] shadow-lg shadow-red-500/30"></div>
                        </div>
                        <p className="text-xs text-slate-500">React, TypeScript, Tailwind, Node.js</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex justify-between font-bold text-slate-700">
                            <span>Graphic Design</span>
                            <span>90%</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2.5">
                            <div className="bg-orange-500 h-2.5 rounded-full w-[90%] shadow-lg shadow-orange-500/30"></div>
                        </div>
                        <p className="text-xs text-slate-500">Photoshop, Illustrator, Canva, Figma</p>
                    </div>
                </div>
                {/* Skill Group 2 */}
                <div className="space-y-6">
                    <div className="space-y-2">
                        <div className="flex justify-between font-bold text-slate-700">
                            <span>Digital Marketing</span>
                            <span>85%</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2.5">
                            <div className="bg-blue-500 h-2.5 rounded-full w-[85%] shadow-lg shadow-blue-500/30"></div>
                        </div>
                        <p className="text-xs text-slate-500">Google Ads, Meta Ads, Email Marketing</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex justify-between font-bold text-slate-700">
                            <span>SEO & Analytics</span>
                            <span>80%</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2.5">
                            <div className="bg-green-500 h-2.5 rounded-full w-[80%] shadow-lg shadow-green-500/30"></div>
                        </div>
                        <p className="text-xs text-slate-500">On-page SEO, Keyword Research, GA4</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <span className="text-red-500 font-bold tracking-wider uppercase text-sm">What I Do</span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">My Core Services</h2>
                <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg">Everything you need to launch and grow your business online, all in one place.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {SERVICES.slice(0, 3).map((service) => (
                    <div key={service.id} className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 group hover:-translate-y-2">
                        <div className="mb-6 bg-red-50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-red-500 transition-colors">
                            <div className="text-red-500 group-hover:text-white transition-colors">
                                {service.icon}
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                        <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                        <Link to="/services" className="text-red-500 font-bold hover:text-red-700 flex items-center gap-1">
                            Learn more <ArrowRight size={16} />
                        </Link>
                    </div>
                ))}
            </div>
             <div className="mt-16 text-center">
                <Link to="/services" className="inline-block px-8 py-4 border-2 border-slate-200 rounded-full text-slate-700 font-bold hover:border-red-500 hover:text-red-500 transition-all hover:shadow-lg">
                    View All Services
                </Link>
             </div>
        </div>
      </section>

      {/* What I Can Do for You Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
          <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-100/50 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-red-100/50 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-blue-100">
              Your Digital Growth Partner
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
              What I Can <span className="text-blue-600">Do for You</span>
            </h2>
            <p className="text-xl text-slate-600 font-medium">
              I don’t just build websites — we build your <span className="text-slate-900 font-bold underline decoration-blue-200 underline-offset-4">digital identity</span>.
            </p>
            <p className="mt-4 text-slate-600">
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
               // Dynamic classes for colors since Tailwind JIT might not pick them up if generated entirely via string interpolation in some environments
               const colorMap: Record<string, string> = {
                  blue: 'bg-blue-50 text-blue-600 group-hover:bg-blue-600',
                  indigo: 'bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600',
                  emerald: 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600',
                  slate: 'bg-slate-50 text-slate-600 group-hover:bg-slate-600',
                  sky: 'bg-sky-50 text-sky-600 group-hover:bg-sky-600',
                  green: 'bg-green-50 text-green-600 group-hover:bg-green-600',
                  orange: 'bg-orange-50 text-orange-600 group-hover:bg-orange-600',
               };

               return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all group flex flex-col items-center text-center"
                >
                  <div className={`p-5 rounded-2xl mb-6 transition-all duration-300 group-hover:text-white mx-auto ${colorMap[item.color]}`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors uppercase tracking-tight">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
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