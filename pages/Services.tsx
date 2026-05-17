import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Check, 
  ClipboardList, 
  PenTool, 
  Rocket, 
  TrendingUp, 
  Plus, 
  User, 
  Briefcase, 
  Heart, 
  ShoppingBag,
  Globe,
  Monitor,
  Search,
  MessageSquare,
  Smartphone,
  ShieldCheck,
  Layout,
  MousePointer2,
  Zap,
  Sparkles
} from 'lucide-react';

const Services: React.FC = () => {
  const websiteServices = [
    {
      id: '01',
      title: "Portfolio Website",
      category: "Personal Brand",
      icon: <User size={40} className="text-blue-500" />,
      description: "Perfect for individuals, freelancers, influencers, and professionals who want to showcase their work online.",
      goal: "Build your personal brand and attract more clients with a stunning online portfolio.",
      color: "blue",
      included: [
        "Custom Domain (yourname.com)",
        "Beautiful, Modern Design",
        "SEO Optimization",
        "Smart Chatbot",
        "WhatsApp Chat Integration",
        "Social Media Links",
        "Mobile Responsive Design"
      ]
    },
    {
      id: '02',
      title: "Business Website",
      category: "Corporate Identity",
      icon: <Briefcase size={40} className="text-indigo-500" />,
      description: "For businesses, startups, and NGOs who need a professional online identity and digital presence.",
      goal: "Present your brand, attract clients, and build trust with a complete business website.",
      color: "indigo",
      included: [
        "Custom Domain & Hosting",
        "Branded Website Design",
        "SEO & Google Listing Setup",
        "Contact Forms & Social Integration",
        "WhatsApp Chat & Chatbot",
        "About / Services / Team / Gallery / Contact Pages"
      ]
    },
    {
      id: '03',
      title: "NGO / Organizational Website",
      category: "Social Impact",
      icon: <Heart size={40} className="text-red-500" />,
      description: "Empower your mission with a professional NGO / Organization Website that helps you connect, share, and grow your community.",
      goal: "Trusted platform for NGOs, Charities, Trusts, and Community Projects.",
      color: "red",
      included: [
        "Domain & Hosting",
        "SEO Setup & Mobile Optimization",
        "Multi-Language Option for Global Reach",
        "Easy-to-Manage Admin Panel",
        "SEO-Friendly Setup",
        "WhatsApp Support Chat"
      ]
    },
    {
      id: '04',
      title: "E-Commerce Website",
      category: "Digital Storefront",
      icon: <ShoppingBag size={40} className="text-emerald-500" />,
      description: "For online stores and product-based businesses ready to sell online and scale up.",
      goal: "Grow your business online and start accepting payments 24/7.",
      color: "emerald",
      included: [
        "Domain & Hosting",
        "Professional Store Design",
        "Product Management Dashboard",
        "Secure Payment Gateway Integration",
        "SEO Setup & Mobile Optimization",
        "WhatsApp Support Chat",
        "Order Tracking & Customer Login"
      ]
    }
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-40 -right-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-40 -left-20 w-[500px] h-[500px] bg-red-100 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section of Service Page */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-24 pt-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-xs font-black uppercase tracking-widest mb-6 border border-blue-100 shadow-sm">
            <Sparkles size={14} /> Build Your Online Presence
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-6 uppercase tracking-tighter leading-none">
            Grow with <span className="text-blue-600 underline decoration-blue-200 underline-offset-8">Me</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed px-4">
            We create stunning, functional, and <span className="text-slate-900 font-bold border-b-2 border-blue-200">SEO-optimized</span> websites that help you grow online. 
            Everything you need — from domain to chatbot — in one place.
          </p>
        </motion.div>

        {/* Website Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-32">
          {websiteServices.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-[3rem] p-8 md:p-10 shadow-sm border border-slate-100 hover:shadow-2xl hover:shadow-blue-500/5 transition-all group flex flex-col items-center text-center relative overflow-hidden"
            >
                {/* Number Badge */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-slate-50 flex items-center justify-center rounded-bl-[3rem] text-slate-200 font-black text-3xl transition-colors group-hover:text-blue-100">
                    {service.id}
                </div>

                <div className="mb-8 relative z-10">
                    <div className="w-20 h-20 mx-auto bg-slate-50 rounded-3xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                        {service.icon}
                    </div>
                </div>

                <div className="flex-1 relative z-10 w-full">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 block">{service.category}</span>
                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 tracking-tighter group-hover:text-blue-600 transition-colors">{service.title}</h3>
                    <p className="text-slate-600 mb-8 leading-relaxed font-medium text-sm md:text-base px-2">
                        {service.description}
                    </p>
                    
                    <div className="mb-8 text-left inline-block w-full max-w-sm mx-auto">
                        <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider mb-4 flex items-center justify-center gap-2">
                           <Layout size={16} className="text-blue-500" /> What's Included:
                        </h4>
                        <ul className="grid grid-cols-1 gap-2.5">
                            {service.included.map((item, i) => (
                                <li key={i} className="flex items-start text-sm text-slate-500 font-medium group/item justify-center">
                                    <div className="mt-0.5 bg-green-50 rounded-full p-1 mr-2 group-hover/item:bg-green-100 transition-colors shrink-0">
                                        <Check size={10} className="text-green-600" />
                                    </div>
                                    <span className="text-center">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-auto pt-8 border-t border-slate-50 relative z-10 w-full">
                    <div className="bg-blue-50 p-5 rounded-2xl border border-blue-100 mb-6 max-w-md mx-auto">
                        <p className="text-sm text-blue-800 font-bold leading-relaxed">
                            <span className="text-blue-600">🎯 Goal:</span> {service.goal}
                        </p>
                    </div>
                    <Link to="/contact" className="w-full max-w-sm mx-auto py-4 bg-slate-900 text-white rounded-2xl font-black text-center block hover:bg-blue-600 transition-colors shadow-lg hover:shadow-blue-200">
                        Get Started Now
                    </Link>
                </div>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <div className="py-24 bg-slate-900 rounded-[3rem] text-white shadow-2xl relative overflow-hidden mb-32">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[100px] opacity-10"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-600 rounded-full blur-[100px] opacity-10"></div>
            
            <div className="relative z-10 px-8">
                <h2 className="text-4xl md:text-5xl font-black text-center text-white mb-6 uppercase tracking-tighter">My Proven Workflow</h2>
                <p className="text-center text-slate-400 max-w-2xl mx-auto mb-20 text-lg font-medium">
                    From concept to completion, I follow a structured approach to ensure your project delivers real business value.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { step: '01', icon: <ClipboardList size={32} />, title: "Planning", desc: "Detailed analysis of your goals, audience, and competitors.", color: "blue" },
                        { step: '02', icon: <PenTool size={32} />, title: "Execution", desc: "Crafting beautiful designs and writing clean code.", color: "purple" },
                        { step: '03', icon: <Rocket size={32} />, title: "Launch", desc: "Stress testing and deploying your site to the live web.", color: "orange" },
                        { step: '04', icon: <TrendingUp size={32} />, title: "Growth", desc: "SEO monitoring and continuous performance tweaks.", color: "green" }
                    ].map((item, i) => (
                        <div key={i} className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all group">
                            <div className="flex items-center justify-between mb-6">
                                <div className="p-4 bg-white/10 rounded-2xl text-white group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <span className="text-4xl font-black text-white/5 group-hover:text-white/10 transition-colors">{item.step}</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                            <p className="text-sm text-slate-400 font-medium leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tighter uppercase">Frequently Asked Questions</h2>
                <p className="text-slate-600 font-medium">Everything you need to know about starting your project with us.</p>
            </div>
            
            <div className="space-y-4">
                {[
                    { q: "Do you work with international clients?", a: "Yes! I work with clients globally, including India, Australia, and the USA. Communication is handled smoothly via WhatsApp, Email, or Zoom." },
                    { q: "What is your payment structure?", a: "Typically, I require a 50% deposit to start the project, with the remaining balance due upon completion and approval." },
                    { q: "How long does it take to build a website?", a: "A standard business website usually takes 1-2 weeks, while more complex e-commerce sites may take 3-4 weeks depending on requirements." }
                ].map((item, i) => (
                    <motion.div 
                        key={i} 
                        initial={false}
                        className="bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden"
                    >
                        <details className="group">
                            <summary className="flex justify-between items-center w-full px-8 py-6 text-left font-black text-xl text-slate-900 cursor-pointer list-none focus:outline-none">
                                {item.q}
                                <span className="ml-4 transition-transform group-open:rotate-45">
                                    <Plus className="text-blue-500" size={24} />
                                </span>
                            </summary>
                            <div className="px-8 pb-8 pt-2 text-slate-600 font-medium leading-relaxed">
                                {item.a}
                            </div>
                        </details>
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Services;