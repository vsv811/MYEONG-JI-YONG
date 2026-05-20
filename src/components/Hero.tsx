import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext';

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-black">
      {/* Background Media */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#111]">
        {/* Background Fill */}
        <img 
          src="/Hero.png" 
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-40 blur-[50px] scale-125 object-center grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-[60vh] bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center pt-8 md:pt-16">
        {/* Sharp Foreground Image Box */}
        <div className="relative w-[85vw] max-w-[480px] md:max-w-[540px] lg:max-w-[600px] h-[65vh] md:h-[75vh] grayscale">
          {/* Mask to smoothly fade the edges of the image */}
          <div className="w-full h-full" style={{ WebkitMaskImage: 'radial-gradient(ellipse 95% 95% at 50% 50%, black 70%, transparent 100%)', maskImage: 'radial-gradient(ellipse 95% 95% at 50% 50%, black 70%, transparent 100%)' }}>
            <img 
               src="/Hero.png" 
               alt="Hero"
               className="w-full h-full object-cover object-top opacity-100"
               referrerPolicy="no-referrer"
            />
            {/* Internal fade to ensure bottom is dark enough for text if necessary, or light enough */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#111] to-transparent pointer-events-none" />
          </div>
        </div>
          
        {/* Content Overlay */}
        <div className="absolute z-20 bottom-[6%] md:bottom-[8%] flex flex-col items-center text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="px-4"
          >
            <h1 className="text-[32px] sm:text-[48px] md:text-[64px] lg:text-[80px] font-serif tracking-[0.1em] mb-3 uppercase font-bold text-white leading-tight whitespace-nowrap drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
              MYEONG JI YONG
            </h1>
            <p className="text-[9px] sm:text-[11px] md:text-[13px] uppercase tracking-[0.5em] md:tracking-[0.8em] text-[#e0e0e0] font-medium mb-10 whitespace-nowrap drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              {t('Beyond Magic, Into Contemporary Art', 'Beyond Magic, Into Contemporary Art')}
            </p>
            <div className="block pb-2">
              <a 
                href="#contact" 
                className="inline-block border border-white/50 text-white px-10 py-3 uppercase tracking-widest text-xs font-bold hover:bg-white hover:text-black hover:scale-[1.03] active:scale-[0.97] transition-all duration-400 backdrop-blur-sm shadow-[0_0_0_rgba(255,255,255,0)] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
              >
                Get Tickets
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Vertical Line Indicator */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-8 md:h-12 bg-gradient-to-t from-white/40 to-transparent" />

      {/* Bottom Separator Line */}
      <div className="absolute bottom-0 inset-x-0 w-full h-[1px] bg-white/10" />
    </section>
  );
};
