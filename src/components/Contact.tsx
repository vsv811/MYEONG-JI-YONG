import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext';
import { Instagram, Youtube, Mail, Send, ArrowUpRight } from 'lucide-react';

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
    <section id="contact" className="relative min-h-screen flex flex-col items-center justify-center py-24 px-6 overflow-hidden">
      {/* Background Spline 3D */}
      <div className="absolute inset-0 z-0">
        {/* @ts-ignore */}
        <spline-viewer url="https://prod.spline.design/DQU3QjTjrTSlYSRM/scene.splinecode" style={{ width: '100%', height: '100%' }}></spline-viewer>
        <div className="absolute inset-0 bg-brand-black/60 pointer-events-none" />
      </div>

      <div className="relative z-10 w-full max-w-3xl mx-auto text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-[0.3em] text-white mb-12">
            CONTACT
          </h2>
          
          <div className="text-sm md:text-base text-brand-silver/80 mb-16 font-light tracking-widest uppercase flex flex-col items-center justify-center">
            <p className="text-center mb-6">Show | Corporate Event | Private Party</p>
            <div className="flex gap-6 justify-center items-center">
              <a href="https://www.instagram.com/xxeyon98/" target="_blank" rel="noopener noreferrer" className="text-brand-silver/80 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.youtube.com/@xxeyon98" target="_blank" rel="noopener noreferrer" className="text-brand-silver/80 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {status === 'success' ? (
            <div className="py-12 border border-white/10 bg-brand-black/40 backdrop-blur-md">
              <h3 className="text-2xl mb-4 font-serif italic text-white">{t('메시지가 전송되었습니다', 'Message Sent')}</h3>
              <p className="text-brand-silver/60 mb-8 font-light">
                {t('빠른 시일 내에 답변 드리겠습니다.', 'We will get back to you shortly.')}
              </p>
              <button 
                onClick={() => setStatus('idle')} 
                className="text-xs uppercase tracking-widest border-b border-white/20 pb-1 hover:border-white transition-all text-white font-bold"
              >
                {t('다시 보내기', 'Send another')}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 text-left border border-white/10 bg-brand-black/40 backdrop-blur-md p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    placeholder="NAME"
                    className="w-full bg-transparent border-b border-white/20 py-3 text-xs tracking-widest text-white placeholder:text-white/40 focus:border-white outline-none transition-colors"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    name="email" 
                    required 
                    placeholder="E-MAIL"
                    className="w-full bg-transparent border-b border-white/20 py-3 text-xs tracking-widest text-white placeholder:text-white/40 focus:border-white outline-none transition-colors"
                  />
                </div>
              </div>
              
              <div>
                <input 
                  type="text" 
                  name="subject" 
                  placeholder="SUBJECT"
                  className="w-full bg-transparent border-b border-white/20 py-3 text-xs tracking-widest text-white placeholder:text-white/40 focus:border-white outline-none transition-colors"
                />
              </div>

              <div>
                <textarea 
                  name="message" 
                  rows={4} 
                  required 
                  placeholder="MESSAGE"
                  className="w-full bg-transparent border-b border-white/20 py-3 text-xs tracking-widest text-white placeholder:text-white/40 focus:border-white outline-none transition-colors resize-none"
                />
              </div>

              <div className="flex justify-center pt-8">
                <button 
                  type="submit" 
                  disabled={status === 'sending'}
                  className="border border-white/20 px-16 py-4 text-xs tracking-widest text-white hover:bg-white hover:text-black transition-colors disabled:opacity-50 font-bold"
                >
                  {status === 'sending' ? 'SENDING...' : 'SEND'}
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>

      <footer className="relative z-10 mt-auto pt-24 pb-8 text-center text-[10px] uppercase tracking-widest text-brand-silver/40 font-mono w-full">
        &copy; {new Date().getFullYear()} MYEONG JI YONG. ALL RIGHTS RESERVED.
      </footer>
    </section>
  );
};
