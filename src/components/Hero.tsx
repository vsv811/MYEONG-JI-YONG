import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext';

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen w-full bg-brand-black overflow-hidden flex flex-col items-center">
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero.png" 
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-10 blur-xl grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-black/50 to-brand-black" />
      </div>

      {/* Main Container - Editorial Layout */}
      <div className="relative z-10 w-full h-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-[144px] flex flex-col justify-end lg:pb-24 pb-16">
        
        {/* Core Image Container - Free from text */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-x-0 top-0 h-[80vh] md:h-[85vh] w-full flex justify-center -z-10 mt-10 md:mt-0"
        >
          <img 
            src="/hero.png" 
            alt="Hero Portrait"
            className="h-full w-auto object-contain opacity-80 grayscale mix-blend-lighten"
            referrerPolicy="no-referrer"
          />
          {/* Subtle fade out at the bottom of the image */}
          <div className="absolute inset-x-0 bottom-0 h-1/4 md:h-1/3 bg-gradient-to-t from-brand-black to-transparent" />
        </motion.div>

        {/* Text Layout strategically positioned below the image breathing room */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between w-full border-t border-white/20 pt-8 gap-6 md:gap-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-col"
          >
            <h1 className="text-3xl md:text-5xl lg:text-[4rem] font-serif font-light tracking-[0.15em] md:tracking-[0.2em] uppercase text-white mb-2 md:mb-4 whitespace-nowrap">
              Myeong Ji Yong
            </h1>
            <p className="text-[9px] md:text-xs tracking-[0.3em] md:tracking-[0.4em] uppercase text-brand-silver/80">
              {t('Beyond Magic, Into Contemporary Art', 'Beyond Magic, Into Contemporary Art')}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="flex flex-col items-start lg:items-end gap-2 md:gap-4 lg:pb-2"
          >
            <p className="font-script text-3xl md:text-4xl lg:text-5xl text-white/50 font-light pr-4 lg:pr-0">
              Make your imagination for real
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
