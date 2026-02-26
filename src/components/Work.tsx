import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../LanguageContext';

const galleryData: Record<string, string[]> = {
  SHOW: [
    "https://postfiles.pstatic.net/MjAyNjAyMjVfMTU0/MDAxNzcyMDEyMjk2Mzk0.yszsnE-m91i4KyYw-tq41-sjqtMtVA-E4PwERzVNVusg.fa9xrL9IZEoKZxm9aLBGh45uy5d0jDv6EnU1u4TE7WIg.JPEG/photo1.jpg?type=w773",
    "https://picsum.photos/seed/show2/800/600",
    "https://picsum.photos/seed/show3/800/600",
    "https://picsum.photos/seed/show4/800/600",
    "https://picsum.photos/seed/show5/800/600",
    "https://picsum.photos/seed/show6/800/600"
  ],
  "PRIVATE PARTY": [
    "https://postfiles.pstatic.net/MjAyNjAyMjVfMjc5/MDAxNzcyMDEyMzEzMzUz.uYbAUXjqPDl6X_tZn1f8avhoD31drrQl9eu-hcP03sAg.K80XBSC_ahjC8DjS3hpEK0DaC4rbrHvGeqvOVaDnbIcg.JPEG/photo2.jpg?type=w773",
    "https://picsum.photos/seed/party2/800/600",
    "https://picsum.photos/seed/party3/800/600",
    "https://picsum.photos/seed/party4/800/600"
  ],
  INTERNATIONAL: [
    "https://postfiles.pstatic.net/MjAyNjAyMjVfMjIg/MDAxNzcyMDEyMzI0NDQ4.VUNSC790tucPDTG4JobfcK2Ik_UKg2DdxEEdgUQf_4wg.jAbcVUfcoEYKz2FWfEJAkftXhcHUQxt73y2whYOI7DUg.JPEG/photo3.jpg?type=w773",
    "https://picsum.photos/seed/intl2/800/600",
    "https://picsum.photos/seed/intl3/800/600",
    "https://picsum.photos/seed/intl4/800/600",
    "https://picsum.photos/seed/intl5/800/600"
  ]
};

const categoryDetails: Record<string, { desc: string, enDesc: string }> = {
  'SHOW': {
    desc: '한 편의 극처럼 흐르는 서사적 연출. 음악, 조명, 오브제가 완벽한 조화를 이루며 관객을 몰입시키는 종합 예술 퍼포먼스',
    enDesc: 'A narrative direction that flows like a play. A comprehensive art performance that immerses the audience with the perfect harmony of music, lighting, and objects.'
  },
  'PRIVATE PARTY': {
    desc: 'VIP 및 프라이빗 이벤트를 위한 연출과 다이렉팅 기록입니다. 격식 있는 공간의 무드를 완성하는 세련된 퍼포먼스. 프라이빗 파티나 갈라 디너의 품격에 맞는 절제된 화려함을 선사합니다.',
    enDesc: 'Directing and production records for VIP and private events. A sophisticated performance that completes the mood of a formal space. We present understated splendor that matches the dignity of a private party or gala dinner.'
  },
  'INTERNATIONAL': {
    desc: '세계라는 무대 위에 기록한 독창적인 발자취',
    enDesc: 'Original footsteps recorded on the stage of the world.'
  }
};

export const Work = () => {
  const { lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const openDetail = (category: string, e: React.MouseEvent) => {
    e.preventDefault();
    setActiveCategory(category);
    // Scroll to the top of the work section smoothly
    setTimeout(() => {
      document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const closeDetail = () => {
    setActiveCategory(null);
    setTimeout(() => {
      document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <section id="work" className="w-full bg-[#000] text-[#fff] font-sans min-h-screen">
      <div className="max-w-[1400px] mx-auto">
        <AnimatePresence mode="wait">
          {!activeCategory ? (
            <motion.section 
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-[40px] px-6 md:px-[50px] py-20 md:pt-[160px] md:pb-[100px]"
            >
              {Object.keys(galleryData).map((category, index) => (
                <motion.div 
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="cursor-pointer group" 
                  onClick={(e) => openDetail(category, e)}
                >
                  <div className="w-full aspect-[1/1.4] overflow-hidden mb-[25px] bg-[#111]">
                    <img 
                      src={galleryData[category][0]} 
                      alt={category}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <h3 className="text-[1.2rem] md:text-[1.4rem] font-serif font-bold tracking-[4px] uppercase border-b-2 border-[#555] pb-[8px] inline-block text-white">
                    {category}
                  </h3>
                </motion.div>
              ))}
            </motion.section>
          ) : (
            <motion.section
              key="detail"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="px-6 md:px-[50px] py-20 md:py-[140px]"
            >
              <div className="text-center mb-[80px]">
                <h1 className="font-serif text-[2.5rem] md:text-[3.5rem] font-light mb-[20px]">
                  {activeCategory}
                </h1>
                <p className="text-[#cfcfcf] text-[1rem] md:text-[1.15rem] leading-[1.8] font-light max-w-[800px] mx-auto">
                  {lang === 'KR' ? categoryDetails[activeCategory].desc : categoryDetails[activeCategory].enDesc}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
                {galleryData[activeCategory].map((src, idx) => (
                  <img 
                    key={idx} 
                    src={src} 
                    alt={`${activeCategory} ${idx + 1}`}
                    className="w-full aspect-[3/2] object-cover bg-[#111]" 
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>

              <button 
                onClick={closeDetail}
                className="block w-fit mx-auto mt-[60px] bg-transparent border border-[#444] text-white px-[40px] py-[12px] font-serif tracking-[3px] hover:bg-white hover:text-black transition-colors"
              >
                BACK TO WORK
              </button>
            </motion.section>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
