import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext';

export const Media = () => {
  const { t } = useLanguage();

  return (
    <section id="media" className="pt-32 pb-16 relative font-sans bg-black text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-[0.7rem] font-serif tracking-[6px] text-[#444] border-b border-[#1a1a1a] pb-[10px] mb-10 uppercase">
            MEDIA
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 gap-8"
        >
          <div className="w-full aspect-video bg-[#0a0a0a]">
            <iframe 
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
