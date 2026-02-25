import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../LanguageContext';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryData: Record<string, string[]> = {
  SHOW: [
    "https://postfiles.pstatic.net/MjAyNjAyMjVfMTU0/MDAxNzcyMDEyMjk2Mzk0.yszsnE-m91i4KyYw-tq41-sjqtMtVA-E4PwERzVNVusg.fa9xrL9IZEoKZxm9aLBGh45uy5d0jDv6EnU1u4TE7WIg.JPEG/photo1.jpg?type=w773",
    "https://picsum.photos/seed/show2/800/600",
    "https://picsum.photos/seed/show3/800/600",
    "https://picsum.photos/seed/show4/800/600"
  ],
  "PRIVATE PARTY": [
    "https://postfiles.pstatic.net/MjAyNjAyMjVfMjc5/MDAxNzcyMDEyMzEzMzUz.uYbAUXjqPDl6X_tZn1f8avhoD31drrQl9eu-hcP03sAg.K80XBSC_ahjC8DjS3hpEK0DaC4rbrHvGeqvOVaDnbIcg.JPEG/photo2.jpg?type=w773",
    "https://picsum.photos/seed/party2/800/600",
    "https://picsum.photos/seed/party3/800/600"
  ],
  INTERNATIONAL: [
    "https://postfiles.pstatic.net/MjAyNjAyMjVfMjIg/MDAxNzcyMDEyMzI0NDQ4.VUNSC790tucPDTG4JobfcK2Ik_UKg2DdxEEdgUQf_4wg.jAbcVUfcoEYKz2FWfEJAkftXhcHUQxt73y2whYOI7DUg.JPEG/photo3.jpg?type=w773",
    "https://picsum.photos/seed/intl2/800/600",
    "https://picsum.photos/seed/intl3/800/600"
  ]
};

export const Work = () => {
  const { t, lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (category: string, e: React.MouseEvent) => {
    e.preventDefault();
    setActiveCategory(category);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setActiveCategory(null);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeCategory) {
      setCurrentImageIndex((prev) => 
        prev === galleryData[activeCategory].length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeCategory) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? galleryData[activeCategory].length - 1 : prev - 1
      );
    }
  };

  return (
    <section id="work" className="w-full bg-[#000] text-[#fff] font-sans">
      {/* Main Banner with Quotes */}
      <header 
        className="w-full h-[75vh] flex justify-center items-center text-center"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url('https://postfiles.pstatic.net/MjAyNjAyMjVfNDUg/MDAxNzcyMDI0MDI0NDQx.eUR-nlokkssEF6ZwPZxQGlOu0W6CZrV3GyejcCxZpWIg.oMtkCoZrciEUAxhYUJa1CG6ElvgdSJClE5JNILNQuuUg.JPEG/KakaoTalk_20260116_045641714.jpg?type=w773')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="quotes">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[2.2rem] italic mb-[35px] font-serif font-light">
              {t('“그는 마술을 하나의 시네마틱한 경험으로 전환시키는 아티스트다.”', '"He transforms magic into a cinematic experience."')}
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-[2.2rem] italic mb-[35px] font-serif font-light">
              {t('“시각 언어를 새롭게 정의하는 비전 있는 마술사.”', '"A visionary magician redefining visual language."')}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-[2.2rem] italic mb-[35px] font-serif font-light">
              {t('“절제되어 있지만 강렬하다. 그의 무대는 끝난 뒤에도 오래 남는다.”', '"Subtle yet powerful — his work lingers long after the moment ends."')}
            </h2>
          </motion.div>
        </div>
      </header>

      {/* Work Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-[25px] px-[10%] py-[60px]">
        <motion.a 
          href="#" 
          onClick={(e) => openModal('SHOW', e)}
          className="text-white no-underline transition-transform duration-300 hover:-translate-y-[10px] cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="w-full aspect-[3/4] overflow-hidden bg-[#111]">
            <img 
              src={galleryData['SHOW'][0]} 
              alt="SHOW"
              className="w-full h-full object-cover block"
              referrerPolicy="no-referrer"
            />
          </div>
          <h3 className="mt-[20px] text-[1rem] tracking-[2px] border-b border-[#fff] pb-[8px] inline-block font-sans">SHOW</h3>
        </motion.a>

        <motion.a 
          href="#" 
          onClick={(e) => openModal('PRIVATE PARTY', e)}
          className="text-white no-underline transition-transform duration-300 hover:-translate-y-[10px] cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="w-full aspect-[3/4] overflow-hidden bg-[#111]">
            <img 
              src={galleryData['PRIVATE PARTY'][0]} 
              alt="PRIVATE PARTY"
              className="w-full h-full object-cover block"
              referrerPolicy="no-referrer"
            />
          </div>
          <h3 className="mt-[20px] text-[1rem] tracking-[2px] border-b border-[#fff] pb-[8px] inline-block font-sans">PRIVATE PARTY</h3>
        </motion.a>

        <motion.a 
          href="#" 
          onClick={(e) => openModal('INTERNATIONAL', e)}
          className="text-white no-underline transition-transform duration-300 hover:-translate-y-[10px] cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="w-full aspect-[3/4] overflow-hidden bg-[#111]">
            <img 
              src={galleryData['INTERNATIONAL'][0]} 
              alt="INTERNATIONAL"
              className="w-full h-full object-cover block"
              referrerPolicy="no-referrer"
            />
          </div>
          <h3 className="mt-[20px] text-[1rem] tracking-[2px] border-b border-[#fff] pb-[8px] inline-block font-sans">INTERNATIONAL</h3>
        </motion.a>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {activeCategory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(0,0,0,0.9)] backdrop-blur-sm"
            onClick={closeModal}
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
              onClick={closeModal}
            >
              <X size={24} />
            </button>

            {/* Prev Button */}
            <button 
              className="absolute left-4 md:left-12 z-50 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
              onClick={prevImage}
            >
              <ChevronLeft size={32} />
            </button>

            {/* Image Container */}
            <div 
              className="relative w-full max-w-5xl h-[80vh] flex items-center justify-center px-16 md:px-24"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={galleryData[activeCategory][currentImageIndex]}
                  alt={`${activeCategory} image ${currentImageIndex + 1}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="max-w-full max-h-full object-contain drop-shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>
              
              {/* Counter */}
              <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 text-white/70 font-mono tracking-widest text-sm">
                {currentImageIndex + 1} / {galleryData[activeCategory].length}
              </div>
            </div>

            {/* Next Button */}
            <button 
              className="absolute right-4 md:right-12 z-50 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
              onClick={nextImage}
            >
              <ChevronRight size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
