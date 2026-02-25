import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext';
import { MediaItem } from '../types';
import { ArrowUpRight } from 'lucide-react';

export const Media = () => {
  const { t, lang } = useLanguage();
  const awards = [
    {
      country: "UNITED KINGDOM",
      items: [
        "2024 Stage Magician of the Year - Manipulation",
        "WONVERVILLE West End",
        "West End Magic Show",
        "Edinburgh Fringe Festival - 4 star reviews, Sell-Out"
      ]
    },
    {
      country: "SPAIN",
      items: [
        "Gala Magic Tour Shows - Bilbao, Irun, Logroño",
        "Congreso Mágia Nacional 2nd Prize"
      ]
    },
    {
      country: "FRANCE",
      items: [
        "L'heritier de l'illusion, France 2nd Prize",
        "L'heritier de l'illusion, France 'Most touching act'"
      ]
    }
  ];

  return (
    <section id="media" className="section-padding bg-brand-black w-full">
      <div className="max-w-4xl mx-auto text-center px-6 md:px-12">
        <div className="space-y-24">
          {awards.map((award, index) => (
            <motion.div
              key={award.country}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-lg md:text-xl font-serif tracking-[0.2em] mb-8 text-white">
                {award.country}
              </h3>
              <div className="space-y-3 text-xs md:text-sm text-brand-silver/80 font-light">
                {award.items.map((item, i) => (
                  <p key={i}>{item}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
