import React from 'react';
import { motion } from 'motion/react';
import { PROJECTS, IMAGES, GRAPHIC_DESIGNS, MARKETING_CAMPAIGNS } from '../constants';
import ProjectCard from '../components/ProjectCard';
import { Palette, TrendingUp, Sparkles, Globe, ShieldCheck } from 'lucide-react';

const Portfolio: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-40 -right-20 w-[500px] h-[500px] bg-red-100 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20 pt-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-blue-100">
            <Sparkles size={14} /> My Creative Journey
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 uppercase tracking-tighter leading-none">
            My Completed <span className="text-blue-600 underline decoration-blue-200 underline-offset-8">Projects</span>
          </h1>
          <p className="text-xl text-slate-600 font-medium max-w-2xl mx-auto">
            Real businesses. Real solutions. <span className="text-slate-900 font-bold">Real results.</span>
          </p>
        </motion.div>

        {/* Web Development Section */}
        <section aria-labelledby="web-dev-title" className="mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center mb-10"
          >
            <div className="p-3 bg-blue-600 rounded-2xl text-white shadow-lg shadow-blue-200 mr-4">
              <Globe size={28} />
            </div>
            <div>
              <h2 id="web-dev-title" className="text-3xl font-extrabold text-slate-900 tracking-tight">Web Development</h2>
              <p className="text-slate-500 text-sm font-medium">High performance digital experiences</p>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </div>
        </section>

        {/* Graphic Design Showcase */}
        <section aria-labelledby="graphic-design-title" className="mb-24">
           <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center mb-10"
          >
              <div className="p-3 bg-orange-500 rounded-2xl text-white shadow-lg shadow-orange-200 mr-4">
                 <Palette size={28} />
              </div>
              <div>
                <h2 id="graphic-design-title" className="text-3xl font-extrabold text-slate-900 tracking-tight">Creative Graphics</h2>
                <p className="text-slate-500 text-sm font-medium">Visual storytelling & brand identity</p>
              </div>
           </motion.div>
           
           <motion.div 
             variants={containerVariants}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
           >
               {GRAPHIC_DESIGNS.map((item) => (
                 <motion.div 
                   key={item.id} 
                   variants={itemVariants}
                   whileHover={{ y: -5 }}
                   className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 group flex flex-col h-full"
                 >
                    <div className="h-52 bg-slate-50 relative overflow-hidden flex items-center justify-center p-6 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
                       {item.imageUrl === 'COLLAGE' ? (
                          <div className="grid grid-cols-3 gap-2 w-full h-full content-center">
                            {PROJECTS.slice(0, 6).map((proj) => (
                              <div key={proj.id} className="bg-white rounded-lg shadow-sm p-1.5 flex items-center justify-center aspect-square border border-slate-100 transform transition-transform group-hover:scale-105" style={{ transitionDelay: `${Math.random() * 0.2}s` }}>
                                <img src={proj.imageUrl} alt="logo" className="w-full h-full object-contain" />
                              </div>
                            ))}
                          </div>
                       ) : (
                          <img 
                            src={item.imageUrl} 
                            alt={item.title} 
                            className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-110" 
                          />
                       )}
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                       <span className="text-[10px] text-orange-500 font-extrabold uppercase tracking-widest mb-2 px-2 py-0.5 bg-orange-50 rounded w-fit">{item.type}</span>
                       <h3 className="font-bold text-slate-800 group-hover:text-orange-600 transition-colors text-lg leading-tight mb-2">{item.title}</h3>
                    </div>
                 </motion.div>
               ))}
           </motion.div>
        </section>

        {/* Digital Marketing Showcase */}
        <section aria-labelledby="marketing-title" className="mb-24">
           <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center mb-10"
          >
              <div className="p-3 bg-red-600 rounded-2xl text-white shadow-lg shadow-red-200 mr-4">
                 <TrendingUp size={28} />
              </div>
              <div>
                <h2 id="marketing-title" className="text-3xl font-extrabold text-slate-900 tracking-tight">Marketing Impact</h2>
                <p className="text-slate-500 text-sm font-medium">ROI driven digital campaigns</p>
              </div>
           </motion.div>
           
           <motion.div 
             variants={containerVariants}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             className="grid grid-cols-1 md:grid-cols-3 gap-6"
           >
              {MARKETING_CAMPAIGNS.map((camp) => (
                 <motion.div 
                    key={camp.id} 
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:border-red-200 transition-all hover:shadow-2xl hover:shadow-red-500/5 group relative overflow-hidden"
                 >
                    <div className="absolute -right-4 -top-4 w-24 h-24 bg-red-50 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
                    <h3 className="font-bold text-slate-900 text-2xl mb-4 group-hover:text-red-600 transition-colors relative z-10">{camp.title}</h3>
                    <div className="flex flex-col gap-3 relative z-10">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{camp.type}</span>
                        <div className="flex items-end gap-2">
                           <span className="font-black text-slate-900 text-4xl tracking-tighter">{camp.result.split(' ')[0]}</span>
                           <span className="font-bold text-red-600 text-xl mb-1">{camp.result.split(' ')[1]}</span>
                        </div>
                    </div>
                 </motion.div>
              ))}
           </motion.div>
        </section>

        {/* Client Showcase / Collage */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900 p-12 rounded-[3rem] shadow-2xl relative overflow-hidden"
        >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <h3 className="text-3xl font-black text-white mb-4 uppercase tracking-tighter">Global Trust</h3>
              <p className="text-slate-400 mb-10 text-lg font-medium">
                 Trusted by diverse businesses for Web, Design, and Marketing solutions across India and Australia.
              </p>
              
              <div className="relative w-full rounded-3xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 p-2">
                   <img 
                      src={IMAGES.PORTFOLIO_BG} 
                      alt="Client Logos Collage" 
                      className="w-full h-auto object-contain rounded-2xl opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 duration-500"
                   />
              </div>
            </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
