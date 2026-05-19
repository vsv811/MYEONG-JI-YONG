import React from 'react';
import { motion } from 'motion/react';

interface SectionDividerProps {
  className?: string;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({ className = '' }) => {
  return (
    <div className={`w-full flex justify-center items-center overflow-hidden pointer-events-none ${className}`}>
      {/* 
        중앙에서 시작해 양옆으로 스르륵 확산되는(ScaleX) 애니메이션 
        마치 마술사가 허공에 지팡이를 휘둘러 선을 만드는 듯한 우아하고 절제된 속도감(Ease-in-out)
      */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ 
          duration: 2.0, 
          ease: [0.65, 0, 0.35, 1], // 우아하고 깊이감 있는 ease-in-out
        }}
        className="h-[1px] w-full max-w-[1920px] bg-gradient-to-r from-transparent via-brand-silver/50 to-transparent"
        style={{ transformOrigin: "center" }}
      />
    </div>
  );
};
