import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../LanguageContext';
import { Project } from '../types';
import { X, Maximize2 } from 'lucide-react';

export const Work = () => {
  const { t, lang } = useLanguage();
  const [projects, setProjects] = useState<Project[]>([]);
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    fetch('/api/projects')
      .then(res => res.json())
      .then(data => setProjects(data));
  }, []);

  const categories = ['All', 'Artistic Collaboration', 'Curated for VIP', 'International'];
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="work" className="section-padding bg-brand-black border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl italic">MORDERN ILLUSION</h2>
          </div>
          
          <div className="flex flex-wrap gap-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-[10px] uppercase tracking-widest px-4 py-2 border transition-all ${
                  filter === cat ? 'bg-brand-silver text-brand-black border-brand-silver' : 'border-white/20 hover:border-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group relative aspect-square overflow-hidden cursor-pointer bg-white/5"
                onClick={() => setSelectedProject(project)}
              >
                <img 
                  src={project.image_url} 
                  alt={project.title_en}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-8 flex flex-col justify-end">
                  <h3 className="text-xl mb-2">
                    {lang === 'KR' ? project.title_kr : project.title_en}
                  </h3>
                  <p className="text-xs uppercase tracking-widest text-brand-silver/60">
                    {project.category}
                  </p>
                  <Maximize2 className="absolute top-8 right-8 text-brand-silver/40" size={20} />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12"
          >
            <div className="absolute inset-0 bg-brand-black/95 backdrop-blur-xl" onClick={() => setSelectedProject(null)} />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl bg-brand-black border border-white/10 overflow-hidden grid md:grid-cols-2"
            >
              <button 
                className="absolute top-6 right-6 z-10 text-brand-silver hover:text-white"
                onClick={() => setSelectedProject(null)}
              >
                <X size={32} />
              </button>

              <div className="aspect-square md:aspect-auto">
                <img 
                  src={selectedProject.image_url} 
                  alt={selectedProject.title_en}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-12 flex flex-col justify-center">
                <span className="text-xs uppercase tracking-widest text-brand-silver/40 mb-4">
                  {selectedProject.category}
                </span>
                <h3 className="text-4xl mb-8 font-serif">
                  {lang === 'KR' ? selectedProject.title_kr : selectedProject.title_en}
                </h3>
                <p className="text-brand-silver/70 leading-relaxed mb-12 whitespace-pre-wrap">
                  {lang === 'KR' ? selectedProject.description_kr : selectedProject.description_en}
                </p>
                <div className="pt-8 border-t border-white/10">
                  <p className="text-[10px] uppercase tracking-widest text-brand-silver/30">
                    {t('문의하기', 'Inquiry')}
                  </p>
                  <a href="#contact" onClick={() => setSelectedProject(null)} className="text-sm hover:underline mt-2 inline-block">
                    {t('이 프로젝트에 대해 문의하기', 'Inquire about this project')}
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
