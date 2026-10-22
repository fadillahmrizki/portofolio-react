import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
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
        when: "afterChildren", // Menunggu item anak hilang dulu saat ditutup
      }
    },
    visible: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        when: "beforeChildren", // Buka kontainer dulu baru munculkan anak
        staggerChildren: 0.06,  // Jeda waktu antar teks link
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
    { href: "#proyek", label: "Proyek Unggulan" },
    { href: "#sertifikat", label: "Sertifikat & Prestasi" },
    { href: "#riwayat", label: "Riwayat & Organisasi" },
    { href: "#keahlian", label: "Keahlian" },
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
              <span>My Portofolio</span>
            </a>

            {/* Menu Desktop */}
            <div className="hidden md:flex items-center gap-7 text-xs md:text-sm font-semibold text-slate-700 dark:text-slate-200">
              <a href="#proyek" className="hover:text-slate-900 dark:hover:text-white transition py-1">Proyek Unggulan</a>
              <a href="#sertifikat" className="hover:text-slate-900 dark:hover:text-white transition py-1">Sertifikat & Prestasi</a>
              <a href="#riwayat" className="hover:text-slate-900 dark:hover:text-white transition py-1">Riwayat & Organisasi</a>
              <a href="#keahlian" className="hover:text-slate-900 dark:hover:text-white transition py-1">Keahlian</a>
              <a href="#kontak" className="px-4 py-2 bg-[#0080FF] text-white hover:bg-[#0066cc] rounded-xl transition shadow-sm font-semibold text-xs md:text-sm">
                Hubungi Saya
              </a>
            </div>

            {/* Tombol Hamburger Mobile */}
            <div className="flex items-center gap-2 md:hidden">
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
                  Hubungi Saya ↗
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