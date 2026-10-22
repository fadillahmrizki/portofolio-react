import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { doc, onSnapshot } from 'firebase/firestore';
import FadeIn from './FadeIn';

export default function Hero() {
    const [photoUrl, setPhotoUrl] = useState('');

    useEffect(() => {
        const unsub = onSnapshot(doc(db, "profile", "main"), (docSnap) => {
            if (docSnap.exists() && docSnap.data().photoUrl) {
                setPhotoUrl(docSnap.data().photoUrl);
            }
        });
        return () => unsub();
    }, []);

    return (
        <FadeIn delay={0.1}>
            <header className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-10 shadow-sm transition-all">
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8">

                    {/* Teks Bio */}
                    <div className="space-y-4 max-w-2xl flex-1 text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 rounded-full text-xs font-semibold">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                            Senior Consultan Data & Design
                        </div>

                        <div>
                            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
                                Prof. Ir. Mhd. Rizky Fadillah, S. Gem. AI, C.V.I.M., C. EI., Ph.D (Eng.)
                            </h1>
                            <p className="text-lg md:text-xl font-semibold text-slate-600 dark:text-slate-400">
                                Data Science & Frontend Developer
                            </p>
                        </div>

                        <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed">
                            Senior di bidang AI, Data Science, Design Enginering, Senior Consultan. Berpengalaman dalam pengembangan solusi berbasis data dan teknologi informasi, juga sudah terlibat dalam berbagai proyek AI, Data Science, Desain Grafis, juga juru bicara untuk Methodist Binjai.
                        </p>

                        {/* <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed">
                            Mahasiswa Semester 7 yang memadukan kekuatan analisis data, pemodelan Machine Learning, serta eksekusi antarmuka web (UI/UX) yang rapi, cepat, dan interaktif.
                        </p> */}

                        <div className="flex flex-wrap items-center gap-3 pt-2">
                            <a href="#proyek" className="px-6 py-3 bg-[#0080FF] hover:bg-[#0066cc] active:scale-95 text-white font-medium text-sm rounded-xl transition shadow-sm">
                                Lihat Proyek
                            </a>
                            <a href="#" className="px-6 py-3 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 active:scale-95 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 font-medium text-sm rounded-xl transition">
                                Download CV 📄
                            </a>
                        </div>
                    </div>

                    {/* Foto Profil Dinamis */}
                    <div className="shrink-0 flex justify-center items-center">
                        {photoUrl ? (
                            <img
                                src={photoUrl}
                                alt="Foto Profil"
                                className="w-48 h-48 md:w-60 md:h-60 lg:w-64 lg:h-64 rounded-2xl object-cover shadow-md border-4 border-slate-100 dark:border-slate-800"
                            />
                        ) : (
                            <div className="w-48 h-48 md:w-60 md:h-60 lg:w-64 lg:h-64 rounded-2xl bg-[#0080FF] text-white flex items-center justify-center font-bold text-5xl md:text-6xl shadow-md border-4 border-slate-100 dark:border-slate-800">
                                RF
                            </div>
                        )}
                    </div>

                </div>
            </header>
        </FadeIn>
    );
}