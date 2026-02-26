import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext';

export const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="pt-32 pb-32 relative font-sans overflow-hidden bg-black min-h-screen text-white">
      {/* Headline (The Vision) */}
      <div className="relative z-30 text-center mb-32 px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-lg md:text-2xl lg:text-3xl font-serif font-thin text-white tracking-[0.2em] md:tracking-[0.4em] uppercase"
        >
          BEYOND MAGIC: THE AESTHETIC OF CONTEMPORARY ART
        </motion.h2>
      </div>

      <div className="relative z-20 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-[50px] lg:gap-[100px] px-6 md:px-10">
        
        {/* Text Content */}
        <div className="flex flex-col">
          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-[80px] lg:mb-[100px]"
          >
            <h1 className="text-[3rem] md:text-[4rem] lg:text-[5rem] font-serif font-light tracking-[-2px] uppercase mb-[25px] leading-[1.1]">
              KOREA<br/>REPRESENTATIVE
            </h1>
            <p className="text-lg md:text-[1.25rem] text-[#cfcfcf] font-sans font-medium tracking-[-0.5px]">
              {t(
                '세계 마술 챔피언십 FISM ACM 한국 대표 출전',
                'National Representative at the World Magic Championship FISM ACM'
              )}
            </p>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-[80px] lg:mb-[100px]"
          >
            <h1 className="text-[3rem] md:text-[4rem] lg:text-[5rem] font-serif font-light tracking-[-2px] uppercase mb-[25px] leading-[1.1]">
              ILLUSION<br/>DESIGNER
            </h1>
            <p className="text-lg md:text-[1.25rem] text-[#cfcfcf] font-sans font-medium tracking-[-0.5px]">
              {t(
                '현대 마술 연출 및 무대 매커니즘 설계 전문가',
                'Expert in Modern Magic Production and Stage Mechanism Design'
              )}
            </p>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-[80px] lg:mb-[100px]"
          >
            <h1 className="text-[3rem] md:text-[4rem] lg:text-[5rem] font-serif font-light tracking-[-2px] uppercase mb-[25px] leading-[1.1]">
              MEDIA<br/>SPECIALIST
            </h1>
            <p className="text-lg md:text-[1.25rem] text-[#cfcfcf] font-sans font-medium tracking-[-0.5px]">
              {t(
                '기업 브랜딩 및 미디어 프로젝트 전문 퍼포머',
                'Professional Performer for Corporate Branding & Media Projects'
              )}
            </p>
          </motion.section>

          <motion.footer 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-[50px] lg:mt-[100px] pt-[40px] border-t border-[#333] text-[1.05rem] leading-[1.8] text-[#cfcfcf] font-sans max-w-[550px]"
          >
            <p>
              {t(
                '세계 무대에서 검증된 독창적 연출을 바탕으로 단순한 트릭을 넘어선 현대적 미학의 퍼포먼스를 지향합니다. 과감한 시도와 단단한 서사로 마술을 완성도 높은 예술 매체로 정의하며, 관객에게 깊은 울림을 전달합니다. 이는 수많은 하이엔드 프로젝트를 통해 증명해온 명지용만의 독보적인 예술적 성취입니다.',
                'Based on original direction proven on the global stage, we aim for performances of contemporary aesthetics that go beyond simple tricks. Through bold attempts and solid narratives, we define magic as a highly complete artistic medium and deliver a deep resonance to the audience. This is Myeong Ji Yong\'s unique artistic achievement proven through numerous high-end projects.'
              )}
            </p>
          </motion.footer>
        </div>

        {/* Right Side: Portrait */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="sticky top-[80px] w-full h-[500px] lg:h-[calc(100vh-160px)] lg:min-h-[600px] overflow-hidden"
          >
            <img 
              src="https://postfiles.pstatic.net/MjAyNjAyMjNfMTky/MDAxNzcxODQ5Mjk4NDk3.wbgGnOlTrQrhPema-yXO72lncZGRo9QnVbMcPRJHKpwg.yi03QbbmFcXCLXztesBL2fB0ziy2fNMOddZE1JF-rEIg.PNG/KakaoTalk_20260223_212118539.png?type=w773" 
              alt="Artist Portrait"
              className="w-full h-full object-cover object-top grayscale contrast-[1.1]"
              referrerPolicy="no-referrer"
            />
            {/* Fade to Black Gradient */}
            <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-b from-transparent to-black pointer-events-none"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
