import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Download, 
  ArrowLeft, 
  Briefcase, 
  GraduationCap, 
  Code, 
  Search, 
  Palette, 
  CheckCircle2,
  Calendar,
  MapPin,
  Mail,
  Phone
} from 'lucide-react';
import { RESUME_URL, CONTACT_INFO } from '../constants';

const Resume: React.FC = () => {
  const experiences = [
    {
      role: "Freelance Website Developer",
      period: "2021 - Present",
      company: "Self-Employed",
      location: "Bangalore, India",
      achievements: [
        "Architected and deployed high-performance, responsive websites for startups and corporate clients.",
        "Specialized in WordPress, Odoo custom integrations, and modern full-stack web applications using React and Node.js.",
        "Optimized web platforms to achieve 90+ Lighthouse performance and accessibility scores, improving organic visibility.",
        "Integrated secure API systems, AI automated customer chatbots, and WhatsApp business portals to boost conversion rates."
      ]
    },
    {
      role: "Digital Marketer & SEO Specialist",
      period: "2022 - Present",
      company: "Self-Employed",
      location: "Bangalore, India",
      achievements: [
        "Crafted custom organic and paid marketing campaigns utilizing Google Ads, Facebook/Meta Ads, and Instagram promotions.",
        "Conducted thorough technical SEO audits, keyword indexing, and content tuning to rank client businesses on the front page of Google search.",
        "Designed high-converting landing pages backed by user behavior heatmaps and precise A/B performance tracking.",
        "Collaborated with diverse local business models, scaling lead generation results by up to 2.5x over baseline."
      ]
    },
    {
      role: "Graphic & Creative Designer",
      period: "2020 - Present",
      company: "Self-Employed",
      location: "Bangalore, India",
      achievements: [
        "Designed comprehensive corporate brand identities, including custom logos, typography standards, and color palettes.",
        "Created high-impact marketing materials such as banners, social media collaterals, brochures, and digital posters.",
        "Maintained client satisfaction ratings exceeding 98% with an agile workflow and precise execution of creative briefs.",
        "Expertly applied Adobe Illustrator, Photoshop, and Figma to design premium intuitive interfaces and layouts."
      ]
    }
  ];

  const education = [
    {
      degree: "Academic Studies / Skill Certification",
      institution: "Professional Training Platforms",
      period: "Completed",
      description: "Advanced certifications in Full Stack Web Development, Advanced Digital Marketing, Google Search Ads, and Graphic Layout Architecture."
    }
  ];

  const skillCategories = [
    {
      title: "Web Development",
      skills: ["React.js", "Node.js", "TypeScript", "WordPress", "Odoo CRM", "HTML5 & CSS3", "Tailwind CSS", "JavaScript"]
    },
    {
      title: "Marketing & SEO",
      skills: ["SEO Optimization", "Google Ads", "Meta Ads", "A/B Testing", "Analytics tracking", "Lead Generation", "Copywriting"]
    },
    {
      title: "Design & Tools",
      skills: ["Graphic Design", "Logo Branding", "UI/UX Layout", "Adobe Illustrator", "Adobe Photoshop", "Figma", "Canva", "Media Editing"]
    }
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation & Action Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
          <Link 
            to="/" 
            className="inline-flex items-center text-slate-600 dark:text-slate-300 hover:text-red-500 dark:hover:text-red-400 font-bold transition-colors text-sm sm:text-base group"
          >
            <ArrowLeft size={18} className="mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
          
          <a 
            href={RESUME_URL}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-extrabold rounded-2xl shadow-lg hover:shadow-red-500/20 transition-all transform hover:scale-105 active:scale-95 text-sm tracking-wide gradient-btn-animated"
          >
            <Download className="w-4 h-4 mr-2 animate-bounce" />
            Download PDF Resume
          </a>
        </div>

        {/* Resume Card Container */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-[2.5rem] shadow-xl p-8 sm:p-12 relative overflow-hidden transition-colors duration-300"
        >
          {/* Header Accents */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-500 via-orange-500 to-red-500"></div>
          
          {/* Main Info */}
          <div className="border-b border-slate-100 dark:border-slate-800 pb-8 mb-10">
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-3">
              {CONTACT_INFO.name}
            </h1>
            <p className="text-red-500 dark:text-red-400 text-lg font-bold tracking-wide uppercase mb-6">
              {CONTACT_INFO.title}
            </p>
            
            {/* Quick Contact Specs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-600 dark:text-slate-400 text-sm font-medium">
              <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center hover:text-red-500 dark:hover:text-red-400 transition-colors">
                <Mail size={16} className="mr-2 text-slate-400" />
                {CONTACT_INFO.email}
              </a>
              <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center hover:text-red-500 dark:hover:text-red-400 transition-colors">
                <Phone size={16} className="mr-2 text-slate-400" />
                {CONTACT_INFO.phone}
              </a>
              <div className="flex items-center">
                <MapPin size={16} className="mr-2 text-slate-400" />
                {CONTACT_INFO.address}
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center border-l-4 border-red-500 pl-3">
              Professional Summary
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              Highly resourceful and performance-driven freelancer specializing in end-to-end digital solutions. Proven track record of combining pristine web code (WordPress, custom React applications, Odoo databases), graphic communication, and performance digital marketing (SEO, search campaigns, Meta platforms) to scale small to mid-sized business visibility and convert organic traffic into recurring clients.
            </p>
          </div>

          {/* Professional Experience */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center border-l-4 border-red-500 pl-3">
              <Briefcase size={22} className="mr-2 text-red-500" />
              Professional Experience
            </h2>
            
            <div className="space-y-8">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative group">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 mb-3">
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white group-hover:text-red-500 dark:group-hover:text-red-400 transition-colors">
                      {exp.role}
                    </h3>
                    <span className="inline-flex items-center px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold rounded-full">
                      <Calendar size={12} className="mr-1.5" />
                      {exp.period}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs font-semibold mb-4 uppercase tracking-wider">
                    <span>{exp.company}</span>
                    <span>•</span>
                    <span>{exp.location}</span>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.achievements.map((ach, aIdx) => (
                      <li key={aIdx} className="flex items-start text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        <CheckCircle2 size={16} className="text-red-500 dark:text-red-400 mr-2 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Key Skills & Competencies */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center border-l-4 border-red-500 pl-3">
              <Code size={22} className="mr-2 text-red-500" />
              Core Competencies
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {skillCategories.map((cat, idx) => (
                <div key={idx} className="bg-slate-50 dark:bg-slate-800/40 p-5 rounded-2xl border border-slate-100 dark:border-slate-800/50">
                  <h3 className="font-bold text-slate-800 dark:text-white text-base mb-3 border-b border-slate-100 dark:border-slate-800 pb-1.5 uppercase tracking-wider text-xs text-red-500 dark:text-red-400">
                    {cat.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((skill, sIdx) => (
                      <span 
                        key={sIdx}
                        className="px-2 py-1 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-300 shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center border-l-4 border-red-500 pl-3">
              <GraduationCap size={22} className="mr-2 text-red-500" />
              Education & Certifications
            </h2>
            
            {education.map((edu, idx) => (
              <div key={idx} className="bg-slate-50 dark:bg-slate-800/40 p-5 rounded-2xl border border-slate-100 dark:border-slate-800/50">
                <div className="flex justify-between items-start sm:items-center mb-2">
                  <h3 className="font-bold text-slate-800 dark:text-white text-base">
                    {edu.degree}
                  </h3>
                  <span className="text-xs font-bold text-slate-500">{edu.period}</span>
                </div>
                <p className="text-red-500 dark:text-red-400 text-xs font-bold uppercase tracking-wide mb-3">
                  {edu.institution}
                </p>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-medium">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>

        </motion.div>

      </div>
    </div>
  );
};

export default Resume;
