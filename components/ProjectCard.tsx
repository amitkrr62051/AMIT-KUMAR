import React from 'react';
import { motion } from 'motion/react';
import { Project } from '../types';
import { ExternalLink, ArrowUpRight, BadgeCheck } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 group flex flex-col h-full relative"
    >
      <div className="flex flex-col flex-1">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <h3 className="text-2xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors tracking-tight">
              {project.title}
            </h3>
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ 
                repeat: Infinity, 
                repeatType: "reverse", 
                duration: 2,
                ease: "easeInOut"
              }}
            >
              <BadgeCheck size={26} className="text-blue-500 fill-blue-50 shrink-0" />
            </motion.div>
          </div>
          
          <div className="flex items-center px-3 py-1 bg-green-50 rounded-full border border-green-100">
             <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse shadow-lg shadow-green-500/50"></span>
             <span className="text-[10px] font-bold text-green-600 uppercase tracking-widest">Live</span>
          </div>
        </div>

        <div className="mb-6">
           <span className="text-[10px] bg-slate-100 text-slate-500 font-bold px-2 py-1 rounded uppercase tracking-wider mb-2 inline-block">
             {project.category}
           </span>
           <p className="text-slate-600 text-sm leading-relaxed">
             {project.description}
           </p>
        </div>

        <div className="mt-auto pt-6 border-t border-slate-50 flex justify-end items-center">
             <motion.a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center text-sm font-bold text-blue-600 group/link px-6 py-3 bg-blue-50 rounded-full hover:bg-blue-600 hover:text-white transition-all cursor-pointer shadow-sm hover:shadow-md"
            >
              Visit Website <ExternalLink size={16} className="ml-2 transition-transform group-hover/link:translate-x-1" />
            </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
