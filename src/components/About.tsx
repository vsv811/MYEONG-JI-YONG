import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext';

export const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-padding bg-brand-black">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl mb-12 leading-[1.2] font-serif tracking-tight text-white">
            <span className="block opacity-50 text-xl md:text-2xl mb-3 font-sans uppercase tracking-[0.2em]">Beyond Magic</span>
            {t('마술을 넘어선,', 'Beyond Magic,')}
            <br />
            {t('현대 예술의 새로운 방향', 'A New Direction for Art')}
          </h2>
          <div className="space-y-8 text-brand-silver/90 leading-relaxed font-light text-lg md:text-xl">
            <p>
              {t(
                '명지용은 단순한 트릭을 넘어, 세련된 감각과 탄탄한 서사가 어우러진 퍼포먼스를 지향합니다. 마술에 현대적인 미학을 투영하여 관객의 상상력을 자극하는 독창적인 세계관을 그려냅니다.',
                'Myeong Ji Yong aims for performances that blend sophisticated sensibility and solid narrative beyond simple tricks. He creates an original worldview that stimulates the audience\'s imagination by projecting modern aesthetics into magic.'
              )}
            </p>
            <p className="text-white font-medium border-l-2 border-brand-silver/30 pl-6">
              {t(
                '고정관념을 깨는 과감한 시도와 정교한 연출을 통해, 지금껏 본 적 없는 ‘새로운 마술’의 가능성을 매 순간 증명해 나가고자 합니다.',
                'Through bold attempts that break stereotypes and sophisticated direction, he seeks to prove the possibilities of "new magic" that has never been seen before at every moment.'
              )}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[3/4] overflow-hidden group bg-white/5"
        >
          <div className="w-full h-full">
            <img 
              src="https://postfiles.pstatic.net/MjAyNjAyMjNfMTky/MDAxNzcxODQ5Mjk4NDk3.wbgGnOlTrQrhPema-yXO72lncZGRo9QnVbMcPRJHKpwg.yi03QbbmFcXCLXztesBL2fB0ziy2fNMOddZE1JF-rEIg.PNG/KakaoTalk_20260223_212118539.png?type=w773" 
              alt="Artist Portrait"
              className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute inset-0 border-[20px] border-brand-black/20 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
};
