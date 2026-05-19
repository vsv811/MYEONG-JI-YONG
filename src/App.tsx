import React from 'react';
import { LanguageProvider } from './LanguageContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Media } from './components/Media';
import { Work } from './components/Work';
import { Contact } from './components/Contact';
import { SectionDivider } from './components/SectionDivider';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black">
        <Header />
        <main>
          <Hero />
          <SectionDivider />
          <About />
          <SectionDivider />
          <Media />
          <SectionDivider />
          <Work />
          <SectionDivider />
          <Contact />
        </main>
      </div>
    </LanguageProvider>
  );
}
