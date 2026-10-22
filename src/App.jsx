import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Timeline from './components/Timeline';
import SkillsContact from './components/SkillsContact';

export default function App() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen antialiased selection:bg-[#0080FF] selection:text-white transition-colors duration-300">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-6 md:py-10 space-y-12">
        <Hero />
        <Projects />
        <Certificates />
        <Timeline />
        <SkillsContact />
      </div>
    </div>
  );
}