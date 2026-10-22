import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import FadeIn from './FadeIn';

export default function Projects() {
    const [projects, setProjects] = useState([]);
    const [filter, setFilter] = useState('all');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const q = query(collection(db, "projects"), orderBy("createdAt", "desc"));

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const projectData = [];
            snapshot.forEach((doc) => {
                projectData.push({ id: doc.id, ...doc.data() });
            });
            setProjects(projectData);
            setLoading(false);
        }, (error) => {
            console.error("Gagal mengambil data proyek:", error);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const filteredProjects = projects.filter((project) => {
        if (filter === 'all') return true;
        return project.category === filter;
    });

    return (
        <section id="proyek" className="space-y-6 pt-4">
            {/* Header Section & Filter */}
            <FadeIn delay={0.1}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                            Karya & Proyek Unggulan
                        </h2>
                    </div>

                    {/* Tombol Penyaring Kategori (Sejajar Kanan di Desktop, Scrollable di Mobile) */}
                    <div className="flex items-center gap-1.5 bg-slate-200/70 dark:bg-slate-800 p-1 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-semibold overflow-x-auto max-w-full whitespace-nowrap">
                        <button
                            onClick={() => setFilter('all')}
                            className={`px-4 py-2 rounded-lg transition shrink-0 ${filter === 'all'
                                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                                }`}
                        >
                            Semua Proyek
                        </button>
                        <button
                            onClick={() => setFilter('data-science')}
                            className={`px-4 py-2 rounded-lg transition shrink-0 ${filter === 'data-science'
                                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                                }`}
                        >
                            Data Science
                        </button>
                        <button
                            onClick={() => setFilter('frontend')}
                            className={`px-4 py-2 rounded-lg transition shrink-0 ${filter === 'frontend'
                                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                                }`}
                        >
                            Design & Frontend
                        </button>
                    </div>
                </div>
            </FadeIn>

            {/* Grid Daftar Kartu Proyek */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {loading ? (
                    <p className="text-xs text-slate-400 col-span-3">Memuat data proyek dari Firebase...</p>
                ) : filteredProjects.length === 0 ? (
                    <p className="text-xs text-slate-400 col-span-3">Belum ada proyek pada kategori ini.</p>
                ) : (
                    filteredProjects.map((project, index) => (
                        <FadeIn key={project.id} delay={index * 0.1}>
                            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between hover:-translate-y-1 hover:shadow-md transition-all duration-200 h-full">
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <span
                                            className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md ${project.category === 'data-science'
                                                    ? 'bg-[#0080FF] text-white'
                                                    : 'bg-sky-100 dark:bg-sky-950 text-sky-800 dark:text-sky-300 border border-sky-200 dark:border-sky-800'
                                                }`}
                                        >
                                            {project.category === 'data-science' ? 'Data Science' : 'Frontend Web'}
                                        </span>
                                    </div>
                                    <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">{project.title}</h3>
                                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">{project.description}</p>
                                </div>

                                <div>
                                    <img
                                        src={project.imageUrl}
                                        alt={project.title}
                                        className="h-36 w-full object-cover rounded-xl mb-4 border border-slate-100 dark:border-slate-800"
                                        onError={(e) => {
                                            e.target.src = 'https://via.placeholder.com/300x150?text=No+Image';
                                        }}
                                    />
                                    <a
                                        href="#"
                                        className="inline-flex items-center gap-1 text-xs font-semibold text-slate-900 dark:text-white hover:underline"
                                    >
                                        <span>Lihat Detail Proyek</span>
                                        <span>↗</span>
                                    </a>
                                </div>
                            </div>
                        </FadeIn>
                    ))
                )}
            </div>
        </section>
    );
}