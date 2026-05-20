import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../LanguageContext';

const galleryData = [
  {
    id: 1,
    title: 'BEYOND THE HORIZON',
    descEn: 'A narrative of new senses cast beyond the horizon, toward the world.',
    descKr: '수평선 너머, 세계를 향해 던지는 새로운 감각의 서사.',
    main: '/Beyond The Horizon.jpg',
    details: ['/Beyond The Horizon.jpg']
  },
  {
    id: 2,
    title: 'SHOW',
    descEn: 'A live magic performance completed with contemporary aesthetics and sophisticated illusions.',
    descKr: '현대적 미학과 정교한 일루전으로 완성하는 라이브 매직 퍼포먼스.',
    main: '/SHOW.jpg',
    details: [
      '/SHOW DETAIL1.jpg',
      '/SHOW DETAIL2.jpg',
      '/SHOW DETAIL3.jpg',
      '/SHOW DETAIL4.jpg',
      '/SHOW DETAIL5.jpg',
      '/SHOW DETAIL6.jpg',
      '/SHOW DETAIL7.jpg',
      '/SHOW DETAIL8.jpg',
      '/SHOW DETAIL9.jpg',
      '/SHOW DETAIL10.jpg',
      '/SHOW DETAIL11.jpg',
      '/SHOW DETAIL12.jpg'
    ]
  },
  {
    id: 3,
    title: 'PRIVATE PARTY',
    descEn: 'A high-density exclusive performance designed for VIPs and high-end brands.',
    descKr: 'VIP와 하이엔드 브랜드를 위해 설계된 밀도 높은 단독 공연.',
    main: '/PRIVATE PARTY.jpg',
    details: [
      '/PRIVATE PARTY DETAIL1.jpg',
      '/PRIVATE PARTY DETAIL2.jpg',
      '/PRIVATE PARTY DETAIL3.jpg',
      '/PRIVATE PARTY DETAIL4.jpg',
      '/PRIVATE PARTY DETAIL5.jpg',
      '/PRIVATE PARTY DETAIL6.jpg'
    ]
  },
  {
    id: 4,
    title: 'INTERNATIONAL',
    descEn: 'Performances presented on the global stage, transcending language and culture based on FISM national representative experience.',
    descKr: 'FISM 국가대표 경력을 바탕으로 언어와 문화를 초월해 세계 무대에 선보이는 공연.',
    main: '/INTERNATIONAL.jpg',
    details: [
      '/INTERNATIONAL DETAIL 1.jpg',
      '/INTERNATIONAL DETAIL 2.jpg',
      '/INTERNATIONAL DETAIL 3.jpg',
      '/INTERNATIONAL DETAIL 4.jpg',
      '/INTERNATIONAL DETAIL 5.jpg',
      '/INTERNATIONAL DETAIL 6-1.jpg'
    ]
  },
  {
    id: 5,
    title: 'BRAND UNVEILING',
    descEn: 'A launching performance that strongly imprints the brand\'s message by transforming it into a magical moment.',
    descKr: '브랜드의 메시지를 마술적 순간으로 전환해 강렬하게 각인시키는 론칭 퍼포먼스.',
    main: '/BRAND UNVEILING.png',
    details: [
      '/BRAND UNVEILING Detail1.jpg',
      '/BRAND UNVEILING Detail 2.jpg',
      '/BRAND UNVEILING Detail 3.jpg',
      '/BRAND UNVEILING Detail 4.jpg',
      '/BRAND UNVEILING Detail 5.jpg',
      '/BRAND UNVEILING Detail 6.jpg'
    ]
  },
  {
    id: 6,
    title: 'MEDIA & BROADCAST',
    descEn: 'A performance perfectly designed for any screen, including TV and online content.',
    descKr: 'TV와 온라인 콘텐츠, 어떤 화면 위에서도 완벽하게 설계된 퍼포먼스.',
    main: '/MEDIA & BROADCAST.jpg',
    details: [
      '/MEDIA & BROADCAST DETAIL1.jpg',
      '/MEDIA & BROADCAST DETAIL2.jpg',
      '/MEDIA & BROADCAST DETAIL2-1.jpg',
      '/MEDIA & BROADCAST DETAIL3.jpg',
      '/MEDIA & BROADCAST DETAIL4.jpg',
      '/MEDIA & BROADCAST DETAIL5.jpg'
    ]
  },
  {
    id: 7,
    title: 'MAGIE NOUVELLE',
    descEn: 'An independent artwork combining magic, theater, dance, and media art.',
    descKr: '마술과 연극, 무용, 미디어 아트를 결합한 독립적인 예술 작품.',
    main: '/MAGIE NOUVELLE-1.jpg',
    details: [
      '/MAGIE NOUVELLE DETAIL1.jpg',
      '/MAGIE NOUVELLE Detail2.jpg',
      '/MAGIE NOUVELLE DEtail3.jpg',
      '/MAGIE NOUVELLE DEtail 4.jpg'
    ]
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
    title: 'PUBLIC INSTITUTION',
    descEn: 'A high-end partnership that elevates the dignity of national events and local government stages to the level of a gallery.',
    descKr: '국가적 행사와 지자체 무대의 품격을 갤러리 수준으로 격상시키는 하이엔드 파트너십.',
    main: '/Public Institution.jpg',
    details: [
      '/Public Institution DEtail 1.jpg',
      '/Public Institution DEtail 2.jpg',
      '/Public Institution DEtail 3.jpg'
    ]
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
                      className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-[1.04] group-hover:opacity-100 transition-all duration-700 ease-out"
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
              className="px-10 py-4 border border-white/20 text-[11px] font-bold tracking-[0.3em] uppercase text-white/60 hover:text-white hover:border-white transition-all duration-500 hover:bg-white/5"
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
              {selectedProject.title === 'MEDIA & BROADCAST' && selectedProject.details.length === 6 ? (
                <div className="flex flex-col gap-2 md:gap-4 w-full h-full justify-center overflow-y-auto py-8 max-w-5xl mx-auto">
                  {/* Top 3 Images */}
                  <div className="flex justify-center gap-2 md:gap-4 w-full">
                    {selectedProject.details.slice(0, 3).map((detailImg, idx) => (
                      <div key={idx} className="relative w-[calc(33.333%-0.333rem)] md:w-[calc(33.333%-0.666rem)] overflow-hidden bg-[#050505]">
                        <img 
                          src={detailImg} 
                          alt={`${selectedProject.title} detail ${idx + 1}`}
                          className="w-full h-full object-cover opacity-90 hover:opacity-100 hover:scale-[1.03] transition-all duration-700 aspect-square md:aspect-[4/3]"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    ))}
                  </div>
                  {/* Bottom 3 Images */}
                  <div className="flex justify-center gap-2 md:gap-4 w-full">
                    {selectedProject.details.slice(3, 6).map((detailImg, idx) => (
                      <div key={idx + 3} className="relative w-[calc(33.333%-0.333rem)] md:w-[calc(33.333%-0.666rem)] overflow-hidden bg-[#050505]">
                        <img 
                          src={detailImg} 
                          alt={`${selectedProject.title} detail ${idx + 4}`}
                          className="w-full h-full object-cover opacity-90 hover:opacity-100 hover:scale-[1.03] transition-all duration-700 aspect-square md:aspect-[4/3]"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ) : (selectedProject.title === 'BRAND UNVEILING' || selectedProject.title === 'PRIVATE PARTY' || selectedProject.title === 'INTERNATIONAL' || selectedProject.title === 'SHOW' || selectedProject.title === 'MAGIE NOUVELLE' || selectedProject.title === 'PUBLIC INSTITUTION') && selectedProject.details.length >= 3 ? (
                <div className={`grid ${selectedProject.title === 'SHOW' ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4' : selectedProject.title === 'MAGIE NOUVELLE' ? 'grid-cols-2' : 'grid-cols-2 md:grid-cols-3'} gap-2 md:gap-4 w-full h-full content-center overflow-y-auto py-8 max-w-5xl mx-auto`}>
                  {selectedProject.details.map((detailImg, idx) => (
                    <div key={idx} className="relative w-full overflow-hidden bg-[#050505]">
                      <img 
                        src={detailImg} 
                        alt={`${selectedProject.title} detail ${idx + 1}`}
                        className="w-full h-full object-cover opacity-90 hover:opacity-100 hover:scale-[1.03] transition-all duration-700 aspect-square md:aspect-[4/3]"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <>
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
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
