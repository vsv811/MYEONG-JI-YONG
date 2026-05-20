import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext';

export const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative w-full bg-[#030303] text-gray-200 overflow-hidden font-sans">
      {/* Background Image Placeholder (Subtle overlay) */}
      <div 
        className="absolute top-0 right-0 w-full md:w-[60%] h-full bg-[url('/SHOW%20DETAIL13.jpg')] bg-cover bg-center bg-no-repeat pointer-events-none opacity-20 grayscale"
        style={{ mixBlendMode: 'lighten' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#030303] via-[#030303]/60 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#030303] to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-6 md:px-[80px] lg:px-[144px] pt-[150px] pb-24">
        
        {/* --- 1. 상단 헤더 섹션 (Main Title & Intro) --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="mb-[180px] max-w-[900px]"
        >
          <p className="text-[10px] md:text-[11px] tracking-[0.4em] text-[#666] uppercase mb-10">
            ABOUT
          </p>
          <h2 className="text-[32px] md:text-[46px] lg:text-[54px] font-medium leading-[1.3] text-white mb-12 tracking-tight break-keep flex flex-col items-start xl:flex-row xl:items-center">
            <span>{t("마술,", "Beyond the Magic")}</span>
            <span className="flex items-center mt-2 xl:mt-0 xl:ml-4 whitespace-nowrap">
              <span className="w-8 md:w-12 h-[1.5px] bg-white inline-block mr-4 xl:mx-4" /> 
              {t("그 이상의 미학적 경계", "In To New Horizon")}
            </span>
          </h2>
          <div className="space-y-6 text-[15px] md:text-[16px] leading-[1.8] text-[#999] font-light max-w-[750px] break-keep">
            <p>
              {t("찰나의 경이로움을 넘어, 마술을 하나의 언어로 삼아 시각적 서사를 기록합니다.", "Beyond momentary wonder, we record a visual narrative using magic as a language.")}
            </p>
            <p>
              {t("현대 마술과 무대 예술의 접점에서 탄생한 ‘Magie Nouvelle’의 시각으로, 단순한 트릭이 아닌 서사를, 기술의 나열이 아닌 미학을 무대 위에 구현합니다. 세계 마술 챔피언십 FISM ACM 한국 국가대표로서 그 독창적인 예술적 가치를 세계 무대에서 증명해 왔습니다.", "With the perspective of 'Magie Nouvelle' born at the intersection of modern magic and stage art, we realize narratives rather than simple tricks, and aesthetics rather than a list of techniques on stage. As a national representative of the World Championship of Magic FISM ACM, we have proven its unique artistic value on the global stage.")}
            </p>
            <p>
              {t("명지용의 무대는 눈을 속이는 기술에 머물지 않습니다. 정교하게 설계된 미니멀리즘과 깊이 있는 연출을 통해, 관객의 시선을 넘어 마음의 울림에 닿는 것을 지향합니다.", "Myeong Ji-yong's stage does not stop at techniques that deceive the eyes. Through intricately designed minimalism and deep directing, we aim to reach the resonance of the heart beyond the audience's gaze.")}
            </p>
          </div>
        </motion.div>

        {/* --- 2. 중간 전문 분야 섹션 (3-Column Grid) --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
          className="mb-[150px]"
        >
          <p className="text-[10px] md:text-[11px] tracking-[0.4em] text-[#666] uppercase mb-10">
            {t("전문 분야", "EXPERTISE")}
          </p>
          <div className="w-full h-[1px] bg-[#222] mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {/* Column 01 */}
            <div className="flex flex-col items-center text-center md:px-6 lg:px-10 md:border-r border-[#222] pb-12 md:pb-0 h-full">
              <span className="text-[10px] text-[#444] mb-8 font-mono">01</span>
              <h3 className="text-[20px] md:text-[22px] font-bold text-white mb-2">{t("VISUAL ARTISTRY", "VISUAL ARTISTRY")}</h3>
              <p className="text-[12px] md:text-[13px] text-[#666] mb-8 tracking-wide">{t("독창적 연출과 예술적 서사", "Original Directing and Artistic Narrative")}</p>
              <div className="w-8 h-[1px] bg-[#444] mb-8 mx-auto" />
              <p className="text-[14px] leading-[1.8] text-[#888] mb-12 break-keep flex-1">
                {t("단순한 트릭이 아닌, 하나의 이야기로 완성되는 무대. 동선, 연출, 시각적 언어 모두를 직접 설계해 관객이 끝난 후에도 기억하는 작품을 만듭니다.", "A stage completed not as a simple trick but as a single story. We design the movement, direction, and visual language ourselves to create works that the audience remembers even after they are over.")}
              </p>
              {/* Image Box */}
              <div className="relative w-full mt-auto aspect-[4/3] overflow-hidden bg-[#0a0a0a]">
                <img 
                  src="/VISUAL ARTISTRY.jpg" 
                  alt="Visual Artistry" 
                  className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Column 02 */}
            <div className="flex flex-col items-center text-center md:px-6 lg:px-10 md:border-r border-[#222] pb-12 md:pb-0 pt-12 md:pt-0 border-t md:border-t-0 border-[#222] h-full">
              <span className="text-[10px] text-[#444] mb-8 font-mono">02</span>
              <h3 className="text-[20px] md:text-[22px] font-bold text-white mb-2 uppercase break-keep ">{t("공공기관 퍼포먼스", "PUBLIC INSTITUTION")}</h3>
              <p className="text-[12px] md:text-[13px] text-[#666] mb-8 tracking-wide">{t("하이엔드 파트너십", "High-end Partnership")}</p>
              <div className="w-8 h-[1px] bg-[#444] mb-8 mx-auto" />
              <p className="text-[14px] leading-[1.8] text-[#888] mb-12 break-keep flex-1">
                {t("국가적 행사와 지자체 무대의 품격을 갤러리 수준으로 격상시키는 하이엔드 파트너십.", "A high-end partnership that elevates the dignity of national events and local government stages to the level of a gallery.")}
              </p>
              {/* Image Box */}
              <div className="relative w-full mt-auto aspect-[4/3] overflow-hidden bg-[#0a0a0a]">
                <img 
                  src="/Public Institution.jpg" 
                  alt="Public Institution" 
                  className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Column 03 */}
            <div className="flex flex-col items-center text-center md:px-6 lg:px-10 pt-12 md:pt-0 border-t md:border-t-0 border-[#222] h-full">
              <span className="text-[10px] text-[#444] mb-8 font-mono">03</span>
              <h3 className="text-[20px] md:text-[22px] font-bold text-white mb-2">{t("PREMIUM AUTHORITY", "PREMIUM AUTHORITY")}</h3>
              <p className="text-[12px] md:text-[13px] text-[#666] mb-8 tracking-wide">{t("하이엔드 가치 & 프리미엄", "High-end Value & Premium")}</p>
              <div className="w-8 h-[1px] bg-[#444] mb-8 mx-auto" />
              <p className="text-[14px] leading-[1.8] text-[#888] mb-12 break-keep flex-1">
                {t("FISM ASIA 한국 국가대표, 국내 최정상 일루션 프로덕션의 프로페셔널 크루. 묵묵히 쌓아온 커리어가 말하는 신뢰. 기업 VIP와 럭셔리 브랜드가 선택하는 하이엔드 무대의 압도적인 품격을 증명합니다.", "FISM ASIA National Representative of Korea, professional crew of the nation's top illusion production. The trust spoken by a silently built career. We prove the overwhelming dignity of the high-end stage chosen by corporate VIPs and luxury brands.")}
              </p>
              {/* Image Box */}
              <div className="relative w-full mt-auto aspect-[4/3] overflow-hidden bg-[#0a0a0a]">
                <img 
                  src="/PREMIUM AUTHORITY.jpg?v=2" 
                  alt="Premium Authority" 
                  className="w-full h-full object-cover object-center grayscale opacity-80 hover:grayscale-0 hover:opacity-100 hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
          <div className="w-full h-[1px] bg-[#222] mt-16" />
        </motion.div>

        {/* --- 3. 하단 이력 및 프로젝트 섹션 (Timeline / History Grid) --- */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
           className="relative mt-24 pt-12 md:pt-24"
        >
          {/* History Background Image Placeholder */}
          <div 
            className="absolute inset-x-0 inset-y-0 md:inset-y-[-100px] w-full h-[calc(100%+100px)] bg-[url('/black_marble_texture.png')] bg-cover bg-center bg-no-repeat pointer-events-none opacity-[0.25] grayscale mix-blend-lighten"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#030303] via-[#030303]/40 md:via-transparent to-[#030303]" />
            <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-[#030303] to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#030303] to-transparent" />
          </div>

          <div className="relative z-10">
            <p className="text-[10px] md:text-[11px] tracking-[0.4em] text-[#666] uppercase mb-10">
              {t("수상 & 이력", "HISTORY")}
            </p>
            <div className="w-full h-[1px] bg-[#222] mb-12" />

            {/* Table / Grid Structure */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[100px] gap-y-12">
            
            {/* History Item 1 */}
            <div className="flex flex-row justify-between items-start pb-6 border-b md:border-none border-[#222]">
              <div className="flex flex-col">
                <span className="text-[15px] font-medium text-white mb-2 break-keep">{t("세계 마술 챔피언쉽(FISM ASIA)", "World Championship of Magic (FISM ASIA)")}</span>
                <span className="text-[12px] tracking-wide text-[#666] break-keep">{t("한국 국가대표 출전 (National Representative)", "National Representative")}</span>
              </div>
              <span className="text-[13px] text-[#555] font-mono mt-1 shrink-0 ml-4">2024</span>
            </div>

            {/* History Item 2 */}
            <div className="flex flex-row justify-between items-start pb-6 border-b md:border-none border-[#222]">
              <div className="flex flex-col">
                <span className="text-[15px] font-medium text-white mb-2 break-keep">{t("KBS <굿모닝 대한민국> 우리동네 人스타", "KBS <Good Morning Korea>")}</span>
                <span className="text-[12px] tracking-wide text-[#666] break-keep">{t("현실판 마법사 <마술사 명지용> 출연", "Appearance as Real-life Wizard <Magician Myeong Ji yong>")}</span>
              </div>
              <span className="text-[13px] text-[#555] font-mono mt-1 shrink-0 ml-4">2026</span>
            </div>

            {/* History Item 3 */}
            <div className="flex flex-row justify-between items-start pb-6 border-b md:border-none border-[#222]">
              <div className="flex flex-col">
                <span className="text-[15px] font-medium text-white mb-2 break-keep">{t("고양 국제 꽃 박람회", "Goyang International Flower Foundation")}</span>
                <span className="text-[12px] tracking-wide text-[#666] break-keep">{t("공식 초청 마술 퍼포머", "Official Invited Magic Performer")}</span>
              </div>
              <span className="text-[13px] text-[#555] font-mono mt-1 shrink-0 ml-4">2026</span>
            </div>

            {/* History Item 4 */}
            <div className="flex flex-row justify-between items-start pb-6 border-b md:border-none border-[#222]">
              <div className="flex flex-col">
                <span className="text-[15px] font-medium text-white mb-2 break-keep">{t("패션 브랜드 'TAPAHA' 및 하이엔드 브랜드", "Fashion brand 'TAPAHA' and High-End Brands")}</span>
                <span className="text-[12px] tracking-wide text-[#666] break-keep">{t("VIP 오프닝 파티 라이브 퍼포먼스", "VIP Opening Party Live Performance")}</span>
              </div>
              <span className="text-[13px] text-[#555] font-mono mt-1 shrink-0 ml-4">2026</span>
            </div>

            {/* History Item 5 */}
            <div className="flex flex-row justify-between items-start pb-6 border-b md:border-none border-[#222]">
              <div className="flex flex-col">
                <span className="text-[15px] font-medium text-white mb-2 break-keep">{t("강남 디지털 DNA 페스티벌", "Gangnam Digital DNA Festival")}</span>
                <span className="text-[12px] tracking-wide text-[#666] break-keep">{t("테크니컬 매직 & 스폐셜 퍼포먼스", "Technical Magic & Special Performance")}</span>
              </div>
              <span className="text-[13px] text-[#555] font-mono mt-1 shrink-0 ml-4">2025</span>
            </div>

            {/* History Item 6 */}
            <div className="flex flex-row justify-between items-start pb-6 border-b md:border-none border-[#222]">
              <div className="flex flex-col">
                <span className="text-[15px] font-medium text-white mb-2 break-keep">{t("재즈 보컬리스트 이동우 단독 콘서트", "Jazz Vocalist Lee Dong-woo Solo Concert")}</span>
                <span className="text-[12px] tracking-wide text-[#666] break-keep">{t("'노래와 이야기' 스페셜 아티스트 초청", "Special Artist Invitation for 'Song and Story'")}</span>
              </div>
              <span className="text-[13px] text-[#555] font-mono mt-1 shrink-0 ml-4">2025</span>
            </div>

            {/* History Item 7 */}
            <div className="flex flex-row justify-between items-start pb-6 md:col-span-2">
              <div className="flex flex-col">
                <span className="text-[15px] font-medium text-white mb-2 break-keep">{t("기업 및 공공기관 공연", "Corporate & Public Institution Performances")}</span>
                <span className="text-[12px] tracking-wide text-[#666] break-keep">{t("서울 해군호텔 · 서산의료원 · 인천검단소방서 외 다수 기관 초청 공연 진행", "Invited performances at Seoul Navy Hotel, Seosan Medical Center, Incheon Geomdan Fire Station, etc.")}</span>
              </div>
              <span className="text-[13px] text-[#555] font-mono mt-1 shrink-0 ml-4">-</span>
            </div>
          </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
