import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const { lang, toggleLanguage, t } = useLanguage();
  const [isDark, setIsDark] = useState(() => {
    return localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [isDark]);

  // Variant animasi untuk kontainer background dropdown (slide down)
  const menuVariants = {
    hidden: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.2,
        when: "afterChildren",
      }
    },
    visible: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.06,
      }
    }
  };

  // Variant animasi untuk teks link (slide dari kiri)
  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.2, ease: "easeOut" }
    }
  };

  const navLinks = [
    { href: "#proyek", label: t.nav.proyek },
    { href: "#sertifikat", label: t.nav.sertifikat },
    { href: "#riwayat", label: t.nav.riwayat },
    { href: "#keahlian", label: t.nav.keahlian },
  ];

  return (
    <>
      {/* FLOATING GLASS NAVBAR */}
      <div className="sticky top-4 z-50 px-4">
        <nav className="mx-auto max-w-6xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 rounded-2xl shadow-sm transition-all overflow-hidden">
          <div className="px-5 py-3.5 flex items-center justify-between">

            {/* Brand Logo & Nama */}
            <a href="#" className="font-bold text-slate-900 dark:text-white text-base md:text-lg tracking-tight flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-xl bg-[#0080FF] text-white flex items-center justify-center font-extrabold text-xs shadow-sm">RF</span>
              <span>Rizky Fadillah</span>
            </a>

            {/* Menu Desktop */}
            <div className="hidden md:flex items-center gap-6 text-xs md:text-sm font-semibold text-slate-700 dark:text-slate-200">
              <a href="#proyek" className="hover:text-slate-900 dark:hover:text-white transition py-1">
                {t.nav.proyek}
              </a>
              <a href="#sertifikat" className="hover:text-slate-900 dark:hover:text-white transition py-1">
                {t.nav.sertifikat}
              </a>
              <a href="#riwayat" className="hover:text-slate-900 dark:hover:text-white transition py-1">
                {t.nav.riwayat}
              </a>
              <a href="#keahlian" className="hover:text-slate-900 dark:hover:text-white transition py-1">
                {t.nav.keahlian}
              </a>

              {/* Tombol Hubungi Saya */}
              <a
                href="#kontak"
                className="px-4 py-2 bg-[#0080FF] text-white hover:bg-[#0066cc] rounded-xl transition shadow-sm font-semibold text-xs md:text-sm"
              >
                {t.nav.kontak}
              </a>

              {/* TOMBOL TRANSLATE (Di Hujung Paling Kanan) */}
              <button
                onClick={toggleLanguage}
                className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-700 transition flex items-center gap-1.5 cursor-pointer active:scale-95"
                title="Tukar Bahasa / Switch Language"
              >
                <span>{lang === 'id' ? '🇮🇩 ID' : '🇬🇧 EN'}</span>
              </button>
            </div>

            {/* Tombol Mobile (Hamburger & Translate Mobile) */}
            <div className="flex items-center gap-2 md:hidden">
              {/* Tombol Translate Mobile */}
              <button
                onClick={toggleLanguage}
                className="px-2.5 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-700 active:scale-95 cursor-pointer"
                title="Tukar Bahasa"
              >
                {lang === 'id' ? '🇮🇩 ID' : '🇬🇧 EN'}
              </button>

              {/* Tombol Hamburger */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 transition focus:outline-none border border-slate-200 dark:border-slate-700 active:scale-95 cursor-pointer"
                aria-label="Toggle Menu"
              >
                <svg className="w-5 h-5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Dropdown Mobile Menu Beranimasi */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="md:hidden border-t border-slate-200/80 dark:border-slate-800 px-5 py-3 space-y-2 text-sm font-semibold text-slate-700 dark:text-slate-200 overflow-hidden"
              >
                {navLinks.map((link) => (
                  <motion.a
                    key={link.href}
                    variants={itemVariants}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-2 hover:text-slate-900 dark:hover:text-white transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}

                <motion.a
                  variants={itemVariants}
                  href="#kontak"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 text-[#0080FF] font-bold"
                >
                  {t.nav.kontak} ↗
                </motion.a>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>

      {/* TOMBOL DARK MODE RESPONSIF */}
      <button
        onClick={() => setIsDark(!isDark)}
        className="fixed top-24 right-5 sm:top-28 sm:right-8 md:top-24 md:right-12 z-50 w-10 h-10 sm:w-11 sm:h-11 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-full shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center justify-center"
        title="Ubah Tema Mode"
      >
        <span className="text-sm sm:text-base leading-none">{isDark ? '☀️' : '🌙'}</span>
      </button>
    </>
  );
}