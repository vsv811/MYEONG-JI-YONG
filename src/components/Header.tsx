import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../LanguageContext';
import { Menu, X, Globe } from 'lucide-react';

export const Header = () => {
  const { lang, setLang, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Media', href: '#media' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-brand-black/90 backdrop-blur-md py-4' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-serif tracking-[0.2em] font-bold">
          MYEONG JI YONG
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-12">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className="text-xs uppercase tracking-widest hover:text-white transition-colors"
            >
              {item.name}
            </a>
          ))}
          <button 
            onClick={() => setLang(lang === 'KR' ? 'EN' : 'KR')}
            className="flex items-center space-x-2 text-xs font-bold border border-brand-silver/30 px-3 py-1 rounded-full hover:border-brand-silver transition-all"
          >
            <Globe size={14} />
            <span>{lang}</span>
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-brand-black border-t border-white/10 p-8 md:hidden"
          >
            <div className="flex flex-col space-y-6 items-center">
              {navItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg uppercase tracking-widest"
                >
                  {item.name}
                </a>
              ))}
              <button 
                onClick={() => {
                  setLang(lang === 'KR' ? 'EN' : 'KR');
                  setIsMenuOpen(false);
                }}
                className="flex items-center space-x-2 text-sm font-bold border border-brand-silver/30 px-6 py-2 rounded-full"
              >
                <Globe size={16} />
                <span>{lang}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
