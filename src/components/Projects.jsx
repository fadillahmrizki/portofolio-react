import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import FadeIn from './FadeIn';
import { useLanguage } from '../context/LanguageContext';

export default function Projects() {
    const { t } = useLanguage();
    const [projects, setProjects] = useState([]);
    const [filter, setFilter] = useState('all');
    const [loading, setLoading] = useState(true);
    const [selectedProject, setSelectedProject] = useState(null);

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
                            {t.projects.title}
                        </h2>
                    </div>

                    {/* Tombol Penyaring Kategori */}
                    <div className="flex items-center gap-1.5 bg-slate-200/70 dark:bg-slate-800 p-1 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-semibold overflow-x-auto max-w-full whitespace-nowrap">
                        <button
                            onClick={() => setFilter('all')}
                            className={`px-4 py-2 rounded-lg transition shrink-0 cursor-pointer ${filter === 'all'
                                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                                }`}
                        >
                            {t.projects.filterAll}
                        </button>
                        <button
                            onClick={() => setFilter('data-science')}
                            className={`px-4 py-2 rounded-lg transition shrink-0 cursor-pointer ${filter === 'data-science'
                                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                                }`}
                        >
                            {t.projects.filterDataScience}
                        </button>
                        <button
                            onClick={() => setFilter('frontend')}
                            className={`px-4 py-2 rounded-lg transition shrink-0 cursor-pointer ${filter === 'frontend'
                                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                                }`}
                        >
                            {t.projects.filterFrontend}
                        </button>
                    </div>
                </div>
            </FadeIn>

            {/* Grid Daftar Kartu Proyek */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {loading ? (
                    <p className="text-xs text-slate-400 col-span-3">{t.projects.loading}</p>
                ) : filteredProjects.length === 0 ? (
                    <p className="text-xs text-slate-400 col-span-3">{t.projects.empty}</p>
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
                                            {project.category === 'data-science' 
                                                ? t.projects.categoryDataScience 
                                                : t.projects.categoryFrontend}
                                        </span>
                                    </div>
                                    <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">{project.title}</h3>
                                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">{project.description}</p>
                                </div>

                                <div>
                                    <img
                                        src={project.imageUrl}
                                        alt={project.title}
                                        className="h-36 w-full object-cover rounded-xl mb-4 border border-slate-100 dark:border-slate-800 cursor-pointer"
                                        onClick={() => setSelectedProject(project)}
                                        onError={(e) => {
                                            e.target.src = 'https://via.placeholder.com/300x150?text=No+Image';
                                        }}
                                    />
                                    <button
                                        onClick={() => setSelectedProject(project)}
                                        className="inline-flex items-center gap-1 text-xs font-semibold text-slate-900 dark:text-white hover:underline cursor-pointer"
                                    >
                                        <span>{t.projects.viewDetail}</span>
                                        <span>↗</span>
                                    </button>
                                </div>
                            </div>
                        </FadeIn>
                    ))
                )}
            </div>

            {/* MODAL POP-UP DETAIL PROYEK */}
            {selectedProject && (
                <div
                    onClick={() => setSelectedProject(null)}
                    className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white dark:bg-slate-900 rounded-2xl max-w-3xl w-full p-4 md:p-6 shadow-2xl relative max-h-[90vh] flex flex-col border border-slate-200 dark:border-slate-800"
                    >
                        {/* Header Modal */}
                        <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
                            <div>
                                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#0080FF] text-white">
                                    {selectedProject.category === 'data-science' 
                                        ? t.projects.categoryDataScience 
                                        : t.projects.categoryFrontend}
                                </span>
                                <h3 className="font-bold text-slate-900 dark:text-white text-base md:text-lg mt-1">
                                    {selectedProject.title}
                                </h3>
                            </div>
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center font-bold text-sm transition cursor-pointer"
                            >
                                ✕
                            </button>
                        </div>

                        {/* Isi Modal */}
                        <div className="py-4 overflow-y-auto flex-1 space-y-4">
                            <img
                                src={selectedProject.imageUrl}
                                alt={selectedProject.title}
                                className="w-full max-h-[60vh] object-contain rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm bg-slate-50 dark:bg-slate-950"
                                onError={(e) => {
                                    e.target.src = 'https://via.placeholder.com/600x300?text=No+Image';
                                }}
                            />
                            <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                {selectedProject.description}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}