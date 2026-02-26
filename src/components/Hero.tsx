import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext';

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-brand-black">
      {/* Background Media */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Blurred Background Fill */}
        <img 
          src="https://blogpfthumb-phinf.pstatic.net/MjAyNjAyMjNfMTM0/MDAxNzcxODM1NjI5NDk5.Q0l1dI62CvidksYl0VHO8nh0xv6Ob-byJr7Kwslni98g.8UE2kHUFbE5IEOlEIxGMuvAv44N4ia-X1Uovb7IAVZkg.PNG/KakaoTalk_20260213_043426494.png/KakaoTalk_20260213_043426494.png" 
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-20 blur-3xl scale-110 grayscale"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Portrait and Content Container */}
      <div className="relative z-10 w-full max-w-4xl h-[85vh] mt-16 flex flex-col items-center justify-center px-6">
        {/* Sharp Foreground Image */}
        <div className="relative h-full w-full flex items-center justify-center">
          <img 
            src="https://blogpfthumb-phinf.pstatic.net/MjAyNjAyMjNfMTM0/MDAxNzcxODM1NjI5NDk5.Q0l1dI62CvidksYl0VHO8nh0xv6Ob-byJr7Kwslni98g.8UE2kHUFbE5IEOlEIxGMuvAv44N4ia-X1Uovb7IAVZkg.PNG/KakaoTalk_20260213_043426494.png/KakaoTalk_20260213_043426494.png" 
            alt="Hero"
            className="h-full w-auto object-contain opacity-70 grayscale shadow-2xl"
            referrerPolicy="no-referrer"
          />
          
          {/* Deep Blue Accent Gradient overlay on image */}
          <div className="absolute inset-0 bg-radial-[at_50%_50%] from-brand-blue/20 via-transparent to-transparent pointer-events-none" />

          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 md:pb-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="px-4"
            >
              <h1 className="text-[32px] sm:text-[48px] md:text-[64px] lg:text-[72px] font-serif tracking-[0.15em] mb-4 uppercase font-bold text-white drop-shadow-2xl leading-tight whitespace-nowrap">
                MYEONG JI YONG
              </h1>
              <p className="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] uppercase tracking-[0.4em] sm:tracking-[0.6em] md:tracking-[0.8em] text-white/90 font-medium drop-shadow-md mb-12 whitespace-nowrap">
                {t('Beyond Magic, Into Contemporary Art', 'Beyond Magic, Into Contemporary Art')}
              </p>
              <div className="block">
                <a 
                  href="#contact" 
                  className="btn-primary font-black scale-90 md:scale-100 border-2 hover:bg-white hover:text-brand-black hover:border-white transition-all duration-500"
                >
                  Get Tickets
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-brand-silver/40">
        <div className="w-[1px] h-8 bg-brand-silver/40 mx-auto" />
      </div>
    </section>
  );
};
