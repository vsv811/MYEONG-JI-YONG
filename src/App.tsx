import React from 'react';
import { LanguageProvider } from './LanguageContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Media } from './components/Media';
import { Work } from './components/Work';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <About />
          <Media />
          <Work />
          <Contact />
        </main>
      </div>
    </LanguageProvider>
  );
}
