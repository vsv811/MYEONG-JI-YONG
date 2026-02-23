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
          className="w-full h-full object-cover opacity-85"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-black/40 p-8 md:p-12 backdrop-blur-md border border-white/10"
          >
            <h2 className="text-3xl md:text-5xl mb-12 font-sans font-black leading-[1.2] text-white tracking-tighter uppercase">
              SHOW<br />
              CORPORATE EVENT<br />
              PRIVATE PARTY
            </h2>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-center space-x-4 text-white">
                <Mail size={18} className="text-brand-silver" />
                <span className="text-sm tracking-widest font-medium">mjyoung980521@gmail.com</span>
              </div>
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/xxeyon98/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-brand-black transition-all"
                >
                  <Instagram size={18} />
                </a>
                <a 
                  href="https://www.youtube.com/@xxeyon98" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-brand-black transition-all"
                >
                  <Youtube size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {status === 'success' ? (
              <div className="h-full flex flex-col justify-center items-center text-center p-12 border border-brand-silver/20 bg-white/5">
                <Send className="mb-6 text-brand-silver" size={48} />
                <h3 className="text-2xl mb-4">{t('메시지가 전송되었습니다', 'Message Sent')}</h3>
                <p className="text-brand-silver/60">{t('빠른 시일 내에 답변 드리겠습니다.', 'We will get back to you shortly.')}</p>
                <button onClick={() => setStatus('idle')} className="mt-8 text-xs uppercase tracking-widest underline">
                  {t('다시 보내기', 'Send another')}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-12">
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="relative">
                    <input 
                      type="text" 
                      name="name" 
                      required 
                      placeholder={t('이름', 'Name')}
                      className="w-full bg-transparent border-b border-white/20 py-4 focus:border-brand-silver outline-none transition-all placeholder:text-white/20"
                    />
                  </div>
                  <div className="relative">
                    <input 
                      type="email" 
                      name="email" 
                      required 
                      placeholder={t('이메일', 'Email')}
                      className="w-full bg-transparent border-b border-white/20 py-4 focus:border-brand-silver outline-none transition-all placeholder:text-white/20"
                    />
                  </div>
                </div>
                
                <div className="relative">
                  <input 
                    type="text" 
                    name="subject" 
                    placeholder={t('제목', 'Subject')}
                    className="w-full bg-transparent border-b border-white/20 py-4 focus:border-brand-silver outline-none transition-all placeholder:text-white/20"
                  />
                </div>

                <div className="relative">
                  <textarea 
                    name="message" 
                    rows={4} 
                    required 
                    placeholder={t('메시지', 'Message')}
                    className="w-full bg-transparent border-b border-white/20 py-4 focus:border-brand-silver outline-none transition-all placeholder:text-white/20 resize-none"
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'sending'}
                  className="btn-primary w-full disabled:opacity-50"
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
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
