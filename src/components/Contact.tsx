import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext';
import { Instagram, Youtube, Mail, Send } from 'lucide-react';

export const Contact = () => {
  const { t } = useLanguage();
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    try {
      const response = await fetch('https://formspree.io/f/mnjbovge', {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert(t('전송 중 오류가 발생했습니다. 다시 시도해주세요.', 'An error occurred while sending. Please try again.'));
      setStatus('idle');
    }
  };

  return (
    <section id="contact" className="section-padding bg-brand-black relative overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://postfiles.pstatic.net/MjAyNjAyMjNfNjUg/MDAxNzcxODQ3MTI3MTQ4.bxwO2AG663COQzexLcAGrSsfMZo-BPGc_uqMJG1MINYg.eXPHwRBoSHYWpGgBCISzvJxqeB51Llasm3MqgTGhcoEg.JPEG/KakaoTalk_20260116_045641714.jpg?type=w773" 
          alt="Contact Background"
          className="w-full h-full object-cover opacity-100 scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/90 via-black/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-0"
          >
            <div className="space-y-4 mb-16">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-6xl md:text-8xl font-serif italic font-light text-white tracking-tighter leading-[0.85]"
              >
                SHOW
              </motion.h2>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-7xl font-serif font-bold text-white tracking-tighter leading-[0.85] opacity-90"
              >
                CORPORATE EVENT
              </motion.h2>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-5xl md:text-7xl font-serif italic font-light text-brand-silver tracking-tighter leading-[0.85] opacity-80"
              >
                PRIVATE PARTY
              </motion.h2>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-center space-x-4 text-white/90 group cursor-pointer">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                  <Mail size={16} />
                </div>
                <span className="text-sm tracking-[0.3em] font-light uppercase">mjyoung980521@gmail.com</span>
              </div>
              <div className="flex space-x-6">
                <a 
                  href="https://www.instagram.com/xxeyon98/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-4 text-white/60 hover:text-white transition-all duration-500"
                >
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/40 transition-all">
                    <Instagram size={20} />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.4em] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">Instagram</span>
                </a>
                <a 
                  href="https://www.youtube.com/@xxeyon98" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-4 text-white/60 hover:text-white transition-all duration-500"
                >
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/40 transition-all">
                    <Youtube size={20} />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.4em] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">YouTube</span>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 md:p-12 shadow-2xl"
          >
            {status === 'success' ? (
              <div className="h-[400px] flex flex-col justify-center items-center text-center">
                <div className="w-20 h-20 rounded-full border border-brand-silver/20 flex items-center justify-center mb-8">
                  <Send className="text-brand-silver" size={32} />
                </div>
                <h3 className="text-3xl mb-4 font-serif italic">{t('메시지가 전송되었습니다', 'Message Sent')}</h3>
                <p className="text-brand-silver/60 max-w-xs mx-auto leading-relaxed">
                  {t('빠른 시일 내에 답변 드리겠습니다.', 'We will get back to you shortly.')}
                </p>
                <button 
                  onClick={() => setStatus('idle')} 
                  className="mt-12 text-[10px] uppercase tracking-[0.4em] border-b border-white/20 pb-1 hover:border-white transition-all"
                >
                  {t('다시 보내기', 'Send another')}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="group relative">
                    <label className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2 block group-focus-within:text-white transition-colors">
                      {t('이름', 'Name')}
                    </label>
                    <input 
                      type="text" 
                      name="name" 
                      required 
                      className="w-full bg-transparent border-b border-white/10 py-2 focus:border-white outline-none transition-all placeholder:text-white/5 text-sm"
                    />
                  </div>
                  <div className="group relative">
                    <label className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2 block group-focus-within:text-white transition-colors">
                      {t('이메일', 'Email')}
                    </label>
                    <input 
                      type="email" 
                      name="email" 
                      required 
                      className="w-full bg-transparent border-b border-white/10 py-2 focus:border-white outline-none transition-all placeholder:text-white/5 text-sm"
                    />
                  </div>
                </div>
                
                <div className="group relative">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2 block group-focus-within:text-white transition-colors">
                    {t('제목', 'Subject')}
                  </label>
                  <input 
                    type="text" 
                    name="subject" 
                    className="w-full bg-transparent border-b border-white/10 py-2 focus:border-white outline-none transition-all placeholder:text-white/5 text-sm"
                  />
                </div>

                <div className="group relative">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2 block group-focus-within:text-white transition-colors">
                    {t('메시지', 'Message')}
                  </label>
                  <textarea 
                    name="message" 
                    rows={4} 
                    required 
                    className="w-full bg-transparent border-b border-white/10 py-2 focus:border-white outline-none transition-all placeholder:text-white/5 resize-none text-sm"
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'sending'}
                  className="w-full bg-white text-black py-5 text-[11px] uppercase tracking-[0.5em] font-bold hover:bg-brand-silver transition-all duration-500 disabled:opacity-50"
                >
                  {status === 'sending' ? 'Sending...' : 'Send Inquiry'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <footer className="mt-24 pt-12 border-t border-white/5 text-center text-[10px] uppercase tracking-[0.3em] text-brand-silver/30">
        &copy; 2026 MYEONG JI YONG. ALL RIGHTS RESERVED.
      </footer>
    </section>
  );
};
