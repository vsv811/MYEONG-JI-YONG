import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext';
import { MediaItem } from '../types';
import { ArrowRight } from 'lucide-react';

export const Media = () => {
  const { t, lang } = useLanguage();
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([]);

  useEffect(() => {
    // Mock data if API fails or is empty
    const mockMedia: MediaItem[] = [
      {
        id: 1,
        title_kr: "2026 월드 매직 챔피언십 초청 공연",
        title_en: "2026 World Magic Championship Guest Performance",
        summary_kr: "세계 최대 규모의 마술 축제에서 선보인 명지용의 새로운 서사.",
        summary_en: "A new narrative by Myeong Ji Yong presented at the world's largest magic festival.",
        image_url: "https://picsum.photos/seed/media1/800/500",
        date: "2026.05.12"
      },
      {
        id: 2,
        title_kr: "예술과 기술의 만남: 인터뷰",
        title_en: "Art Meets Tech: Interview",
        summary_kr: "디지털 시대에 마술이 나아가야 할 방향에 대하여.",
        summary_en: "On the direction magic should take in the digital age.",
        image_url: "https://picsum.photos/seed/media2/800/500",
        date: "2026.04.20"
      }
    ];

    fetch('/api/media')
      .then(res => res.json())
      .then(data => {
        if (data.length > 0) setMediaItems(data);
        else setMediaItems(mockMedia);
      })
      .catch(() => setMediaItems(mockMedia));
  }, []);

  return (
    <section id="media" className="section-padding bg-brand-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-brand-silver/50 mb-4 block">
              {t('최신 소식', 'Archive')}
            </span>
            <h2 className="text-4xl md:text-5xl italic">{t('미디어 & 아카이브', 'Media & Archive')}</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {mediaItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="aspect-[16/9] overflow-hidden mb-6 bg-white/5">
                <img 
                  src={item.image_url} 
                  alt={item.title_en}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] uppercase tracking-widest text-brand-silver/40">
                  {item.date}
                </span>
                <ArrowRight size={16} className="text-brand-silver/20 group-hover:text-brand-silver transition-colors" />
              </div>
              <h3 className="text-2xl mb-4 group-hover:text-white transition-colors">
                {lang === 'KR' ? item.title_kr : item.title_en}
              </h3>
              <p className="text-sm text-brand-silver/60 leading-relaxed line-clamp-2">
                {lang === 'KR' ? item.summary_kr : item.summary_en}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="text-xs uppercase tracking-[0.2em] border-b border-brand-silver/30 pb-2 hover:border-brand-silver transition-all">
            {t('모든 소식 보기', 'View All Archive')}
          </button>
        </div>
      </div>
    </section>
  );
};
