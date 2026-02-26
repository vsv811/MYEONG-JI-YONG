import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext';

export const Portfolio = () => {
  const { lang, setLang } = useLanguage();

  return (
    <>
      {/* Navbar */}
      <header className="fixed top-0 w-full h-[80px] flex justify-between items-center px-[25px] lg:px-[60px] bg-black/95 z-[1000] border-b border-[#1a1a1a]">
        <nav className="flex items-center">
          {['ABOUT', 'WORK', 'MEDIA', 'CONTACT'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white no-underline mr-[15px] lg:mr-[35px] text-[0.7rem] lg:text-[0.8rem] tracking-[3px] font-serif transition-colors duration-300 hover:text-[#888]"
            >
              {item}
            </a>
          ))}
        </nav>
        <div className="flex items-center space-x-2 text-[#555] text-[0.75rem] tracking-[1px]">
          <button 
            className={`bg-transparent border-none cursor-pointer transition-colors duration-300 ${lang === 'KR' ? 'text-white font-bold' : 'text-[#555]'}`}
            onClick={() => setLang('KR')}
          >
            KOR
          </button>
          <span className="text-[#222]">/</span>
          <button 
            className={`bg-transparent border-none cursor-pointer transition-colors duration-300 ${lang === 'EN' ? 'text-white font-bold' : 'text-[#555]'}`}
            onClick={() => setLang('EN')}
          >
            ENG
          </button>
        </div>
      </header>

      {/* Main Container */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-[60px] lg:gap-[100px] px-[30px] lg:px-[60px] pt-[120px] lg:pt-[180px] pb-[100px]">
        
        {/* Left Content */}
        <main className="flex flex-col">
          
          {/* ABOUT Section */}
          <motion.section 
            id="about" 
            className="mb-[160px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-[0.75rem] tracking-[5px] text-[#333] mb-[40px] border-b border-[#111] pb-[10px]">
              ABOUT
            </h2>
            <div className="text-[1.1rem] leading-[1.9] text-[#777] max-w-[650px]">
              {lang === 'KR' && (
                <p className="font-sans text-[1.45rem] font-medium text-[#aaa]">
                  세계 무대에서 검증된 독창적 연출을 바탕으로 단순한 트릭을 넘어선 현대적 미학의 퍼포먼스를 지향합니다. 과감한 시도와 단단한 서사로 마술을 완성도 높은 예술 매체로 정의합니다.
                </p>
              )}
              {lang === 'EN' && (
                <p className="font-serif text-[1.25rem] italic text-[#aaa]">
                  Based on original directing verified on the world stage, we pursue performances of modern aesthetics beyond simple tricks. We define magic as a high-quality art medium.
                </p>
              )}
            </div>
          </motion.section>

          {/* WORK Section */}
          <motion.section 
            id="work" 
            className="mb-[160px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-[0.75rem] tracking-[5px] text-[#333] mb-[40px] border-b border-[#111] pb-[10px]">
              WORK / IDENTITY
            </h2>
            
            <motion.div 
              className="mb-[110px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="font-serif text-[3.8rem] lg:text-[5.5rem] font-black leading-[0.9] mb-[30px] tracking-[-3px]">
                KOREA<br/>REPRESENTATIVE
              </h1>
              {lang === 'KR' && (
                <p className="font-sans text-[1.45rem] font-medium text-[#d1d1d1]">
                  세계 마술 챔피언십 FISM ACM 한국 대표 출전
                </p>
              )}
              {lang === 'EN' && (
                <p className="font-serif text-[1.25rem] italic text-[#d1d1d1]">
                  National Representative at the World Magic Championship FISM ACM
                </p>
              )}
            </motion.div>

            <motion.div 
              className="mb-[110px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h1 className="font-serif text-[3.8rem] lg:text-[5.5rem] font-black leading-[0.9] mb-[30px] tracking-[-3px]">
                ILLUSION<br/>DESIGNER
              </h1>
              {lang === 'KR' && (
                <p className="font-sans text-[1.45rem] font-medium text-[#d1d1d1]">
                  현대 마술 연출 및 무대 매커니즘 설계 전문가
                </p>
              )}
              {lang === 'EN' && (
                <p className="font-serif text-[1.25rem] italic text-[#d1d1d1]">
                  Expert in Modern Magic Production and Stage Mechanism Design
                </p>
              )}
            </motion.div>
          </motion.section>

          {/* MEDIA Section */}
          <motion.section 
            id="media" 
            className="mb-[160px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-[0.75rem] tracking-[5px] text-[#333] mb-[40px] border-b border-[#111] pb-[10px]">
              MEDIA
            </h2>
            <div className="w-full mb-[30px]">
              <div className="relative w-full pb-[56.25%] bg-[#0a0a0a] group">
                <iframe 
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?modestbranding=1&rel=0" 
                  title="Performance Video"
                  frameBorder="0" 
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full grayscale transition-all duration-500 group-hover:grayscale-0"
                ></iframe>
              </div>
            </div>
            {lang === 'KR' && (
              <p className="font-sans text-[1.45rem] font-medium text-[#d1d1d1]">
                최신 미디어 프로젝트 아카이브
              </p>
            )}
            {lang === 'EN' && (
              <p className="font-serif text-[1.25rem] italic text-[#d1d1d1]">
                Latest Media Project Archive
              </p>
            )}
          </motion.section>

          {/* CONTACT Section */}
          <motion.section 
            id="contact" 
            className="mb-[160px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-[0.75rem] tracking-[5px] text-[#333] mb-[40px] border-b border-[#111] pb-[10px]">
              CONTACT
            </h2>
            <div className="text-[1.1rem] leading-[1.9] text-[#777] max-w-[650px]">
              {lang === 'KR' && (
                <p className="font-sans text-[1.45rem] font-medium text-[#d1d1d1]">
                  프로젝트 의뢰 및 협업 문의
                </p>
              )}
              {lang === 'EN' && (
                <p className="font-serif text-[1.25rem] italic text-[#d1d1d1]">
                  For project inquiries and collaborations
                </p>
              )}
              <p className="mt-[20px] text-white text-[1.5rem] font-serif">
                email@example.com
              </p>
            </div>
          </motion.section>

        </main>

        {/* Right Side: Portrait */}
        <aside className="relative">
          <motion.div 
            className="sticky top-0 lg:top-[150px] h-[500px] lg:h-[calc(100vh-250px)] lg:min-h-[600px] w-full overflow-hidden mb-[60px] lg:mb-0"
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.2 }}
          >
            <img 
              src="https://postfiles.pstatic.net/MjAyNjAyMjNfMTky/MDAxNzcxODQ5Mjk4NDk3.wbgGnOlTrQrhPema-yXO72lncZGRo9QnVbMcPRJHKpwg.yi03QbbmFcXCLXztesBL2fB0ziy2fNMOddZE1JF-rEIg.PNG/KakaoTalk_20260223_212118539.png?type=w773" 
              alt="Profile Image"
              className="w-full h-full object-cover grayscale"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-0 left-0 w-full h-[25%] bg-gradient-to-b from-transparent to-black pointer-events-none"></div>
          </motion.div>
        </aside>

      </div>
    </>
  );
};
