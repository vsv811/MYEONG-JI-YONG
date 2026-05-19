import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../LanguageContext';

const galleryData = [
  {
    id: 1,
    title: 'BEYOND THE HORIZON',
    descEn: 'A narrative of new senses cast beyond the horizon, toward the world.',
    descKr: '수평선 너머, 세계를 향해 던지는 새로운 감각의 서사.',
    main: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?q=80&w=800&auto=format&fit=crop',
    details: ['https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?q=80&w=1200&auto=format&fit=crop']
  },
  {
    id: 2,
    title: 'SHOW',
    descEn: 'A live magic performance completed with contemporary aesthetics and sophisticated illusions.',
    descKr: '현대적 미학과 정교한 일루전으로 완성하는 라이브 매직 퍼포먼스.',
    main: '/show-main.jpg',
    details: ['/show-main.jpg', '/show-detail-1.jpg', '/show-detail-2.jpg']
  },
  {
    id: 3,
    title: 'PRIVATE PARTY',
    descEn: 'A high-density exclusive performance designed for VIPs and high-end brands.',
    descKr: 'VIP와 하이엔드 브랜드를 위해 설계된 밀도 높은 단독 공연.',
    main: 'https://postfiles.pstatic.net/MjAyNjAyMjNfNDgg/MDAxNzcxODQ5NDc4MDYz.mI2_9kZ45c2M-3iO_63I77D_a9w32W2u-zX3Q8c826wg.kXw9xL3r6K294vC3R-E-nB1r-2mO-l8S1cO7f2kO-D8g.PNG/KakaoTalk_20260223_212048995_02.png?type=w773',
    details: ['https://postfiles.pstatic.net/MjAyNjAyMjNfNDgg/MDAxNzcxODQ5NDc4MDYz.mI2_9kZ45c2M-3iO_63I77D_a9w32W2u-zX3Q8c826wg.kXw9xL3r6K294vC3R-E-nB1r-2mO-l8S1cO7f2kO-D8g.PNG/KakaoTalk_20260223_212048995_02.png?type=w773']
  },
  {
    id: 4,
    title: 'INTERNATIONAL',
    descEn: 'Performances presented on the global stage, transcending language and culture based on FISM national representative experience.',
    descKr: 'FISM 국가대표 경력을 바탕으로 언어와 문화를 초월해 세계 무대에 선보이는 공연.',
    main: 'https://postfiles.pstatic.net/MjAyNjAyMjNfMjA1/MDAxNzcxODUwMDAzOTA5.N7lE22P8W8M8gQ0tS1X1A8mH0B2-1m_mZ7cQ38_x0oMg.u1J9Z5jP2H2c2xV8HqH3L0L1S1F1F8f7s8hX4I-O3vgg.PNG/KakaoTalk_20260223_212118539_01.png?type=w773',
    details: ['https://postfiles.pstatic.net/MjAyNjAyMjNfMjA1/MDAxNzcxODUwMDAzOTA5.N7lE22P8W8M8gQ0tS1X1A8mH0B2-1m_mZ7cQ38_x0oMg.u1J9Z5jP2H2c2xV8HqH3L0L1S1F1F8f7s8hX4I-O3vgg.PNG/KakaoTalk_20260223_212118539_01.png?type=w773']
  },
  {
    id: 5,
    title: 'MAGIE NOUVELLE',
    descEn: 'An independent artwork combining magic, theater, dance, and media art.',
    descKr: '마술과 연극, 무용, 미디어 아트를 결합한 독립적인 예술 작품.',
    main: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=800&auto=format&fit=crop',
    details: ['https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1200&auto=format&fit=crop']
  },
  {
    id: 6,
    title: 'MEDIA & BROADCAST',
    descEn: 'A performance perfectly designed for any screen, including TV and online content.',
    descKr: 'TV와 온라인 콘텐츠, 어떤 화면 위에서도 완벽하게 설계된 퍼포먼스.',
    main: 'https://images.unsplash.com/photo-1513364776144-60967fc0f80c?q=80&w=800&auto=format&fit=crop',
    details: ['https://images.unsplash.com/photo-1513364776144-60967fc0f80c?q=80&w=1200&auto=format&fit=crop']
  },
  {
    id: 7,
    title: 'BRAND UNVEILING',
    descEn: 'A launching performance that strongly imprints the brand\'s message by transforming it into a magical moment.',
    descKr: '브랜드의 메시지를 마술적 순간으로 전환해 강렬하게 각인시키는 론칭 퍼포먼스.',
    main: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop',
    details: ['https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1200&auto=format&fit=crop']
  },
  {
    id: 8,
    title: 'ART MUSEUM & GALLERY',
    descEn: 'A minimalist gallery-specialized performance that respects the atmosphere of the space and artwork.',
    descKr: '공간과 작품의 분위기를 존중하는 미니멀한 갤러리 특화 퍼포먼스.',
    main: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop',
    details: ['https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop']
  },
  {
    id: 9,
    title: 'ARTISTIC DIRECTION',
    descEn: 'Creative direction that designs the entire aesthetics and narrative of the performance from planning to directing.',
    descKr: '공연의 미학과 서사 전체를 기획부터 연출까지 함께 설계하는 크리에이티브 디렉션.',
    main: 'https://images.unsplash.com/photo-1478147427282-58a87a120781?q=80&w=800&auto=format&fit=crop',
    details: ['https://images.unsplash.com/photo-1478147427282-58a87a120781?q=80&w=1200&auto=format&fit=crop']
  }
];

export const Work = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<typeof galleryData[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const openModal = (project: typeof galleryData[0]) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.details.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev === 0 ? selectedProject.details.length - 1 : prev - 1));
    }
  };

  return (
    <section id="work" className="w-full bg-[#000000] text-white font-sans min-h-screen">
      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 py-[150px]">
        {/* Section Label */}
        <div className="mb-20">
          <p className="text-[11px] md:text-[14px] font-label font-medium tracking-[0.3em] text-[#666] uppercase mb-8">
            WORK
          </p>
          <div className="w-[80px] h-[1px] bg-white/10" />
        </div>

        {/* Work Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-white/10 p-[1px]"
        >
          <AnimatePresence>
            {(showAll ? galleryData : galleryData.slice(0, 3)).map((item, index) => (
              <motion.div 
                layout
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: (index % 3) * 0.1, duration: 0.8, ease: 'easeOut' }}
                className="flex flex-col group cursor-pointer bg-black"
                onClick={() => openModal(item)}
              >
                <div className="w-full h-full p-4 md:p-6 flex flex-col items-start hover:bg-white/5 transition-colors duration-500">
                  {/* Image Container */}
                  <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#050505] mb-6">
                    <img 
                      src={item.main} 
                      alt={item.title}
                      className="w-full h-full object-cover grayscale opacity-90 group-hover:scale-[1.04] group-hover:opacity-100 transition-all duration-700 ease-out"
                      referrerPolicy="no-referrer"
                    />
                    {/* Title Overlay at bottom of image */}
                    <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                      <h3 className="font-serif font-bold text-[1.1rem] md:text-[1.3rem] tracking-[0.15em] text-white/80 group-hover:text-white transition-opacity duration-300 uppercase">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description Text Below Image */}
                  <div className="w-full pt-3">
                    <p className="text-[13px] leading-[1.6] text-white/40 font-[300] font-sans tracking-[0.02em] break-keep">
                      {t(item.descKr, item.descEn)}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        {!showAll && galleryData.length > 3 && (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="w-full flex justify-center mt-24"
          >
            <button 
              onClick={() => setShowAll(true)}
              className="px-10 py-4 border border-white/20 text-[11px] tracking-[0.3em] uppercase text-white/60 hover:text-white hover:border-white transition-all duration-500 hover:bg-white/5"
            >
              LOAD MORE
            </button>
          </motion.div>
        )}
      </div>

      {/* Modal Gallery */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center backdrop-blur-sm"
            onClick={closeModal}
          >
            <button 
              className="absolute top-6 right-6 md:top-10 md:right-10 text-white/70 hover:text-white text-5xl transition-colors z-50 font-light"
              onClick={closeModal}
            >
              &times;
            </button>

            <div 
              className="relative w-full max-w-7xl h-[85vh] flex items-center justify-center px-6 md:px-16"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedProject.details.length > 1 && (
                <button 
                  className="absolute left-2 md:left-8 text-white/40 hover:text-white text-4xl md:text-6xl transition-colors z-50 font-light"
                  onClick={prevImage}
                >
                  &#10094;
                </button>
              )}

              <motion.img 
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                src={selectedProject.details[currentImageIndex]} 
                alt={`${selectedProject.title} detail ${currentImageIndex + 1}`}
                className="max-w-full max-h-full object-contain grayscale"
                referrerPolicy="no-referrer"
              />

              {selectedProject.details.length > 1 && (
                <button 
                  className="absolute right-2 md:right-8 text-white/40 hover:text-white text-4xl md:text-6xl transition-colors z-50 font-light"
                  onClick={nextImage}
                >
                  &#10095;
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
