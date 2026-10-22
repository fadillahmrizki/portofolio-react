import React, { useState } from 'react';

export default function SkillsContact() {
    const [copied, setCopied] = useState(false);
    const email = "fadillahmrizki60@gmail.com";

    // Function to copy email address to clipboard
    const handleCopyEmail = () => {
        navigator.clipboard.writeText(email).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <>
            <section id="keahlian" className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                {/* Data & Analytics Skills */}
                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 hover:-translate-y-1 hover:shadow-md transition-all duration-200">
                    <h3 className="font-bold text-sm text-slate-900 dark:text-white uppercase tracking-wider mb-4 pb-2 border-b border-slate-100 dark:border-slate-800 flex items-center gap-2">
                        <span>📊</span> Data & Analytics
                    </h3>
                    <ul className="space-y-2.5 text-xs font-medium text-slate-700 dark:text-slate-300">
                        <li className="flex items-center justify-between">
                            <span>Python & Analysis</span>
                            <span className="text-slate-400 dark:text-slate-500 text-[10px]">Pandas / Numpy</span>
                        </li>
                        <li className="flex items-center justify-between">
                            <span>Machine Learning</span>
                            <span className="text-slate-400 dark:text-slate-500 text-[10px]">Scikit-learn</span>
                        </li>
                        <li className="flex items-center justify-between">
                            <span>Database Query</span>
                            <span className="text-slate-400 dark:text-slate-500 text-[10px]">SQL / MySQL</span>
                        </li>
                        <li className="flex items-center justify-between">
                            <span>Data Visualization</span>
                            <span className="text-slate-400 dark:text-slate-500 text-[10px]">Seaborn / Tableau</span>
                        </li>
                    </ul>
                </div>

                {/* Web Development Skills */}
                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 hover:-translate-y-1 hover:shadow-md transition-all duration-200">
                    <h3 className="font-bold text-sm text-slate-900 dark:text-white uppercase tracking-wider mb-4 pb-2 border-b border-slate-100 dark:border-slate-800 flex items-center gap-2">
                        <span>💻</span> Web Development
                    </h3>
                    <ul className="space-y-2.5 text-xs font-medium text-slate-700 dark:text-slate-300">
                        <li className="flex items-center justify-between">
                            <span>Frontend Structure</span>
                            <span className="text-slate-400 dark:text-slate-500 text-[10px]">HTML5 / Semantic</span>
                        </li>
                        <li className="flex items-center justify-between">
                            <span>CSS Styling Framework</span>
                            <span className="text-slate-400 dark:text-slate-500 text-[10px]">Tailwind CSS</span>
                        </li>
                        <li className="flex items-center justify-between">
                            <span>Client Logic & React</span>
                            <span className="text-slate-400 dark:text-slate-500 text-[10px]">JavaScript ES6 / React</span>
                        </li>
                        <li className="flex items-center justify-between">
                            <span>Backend Integration</span>
                            <span className="text-slate-400 dark:text-slate-500 text-[10px]">Firebase / Firestore</span>
                        </li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div id="kontak" className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between hover:-translate-y-1 hover:shadow-md transition-all duration-200">
                    <div>
                        <h3 className="font-bold text-sm text-slate-900 dark:text-white uppercase tracking-wider mb-2 pb-2 border-b border-slate-100 dark:border-slate-800 flex items-center gap-2">
                            <span>🤝</span> Hubungi Saya
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                            Terbuka untuk diskusi proyek, kolaborasi, atau posisi kesempatan magang.
                        </p>

                        <div className="space-y-2">
                            <button
                                onClick={handleCopyEmail}
                                className="w-full py-2.5 px-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white text-xs font-semibold rounded-xl transition flex items-center justify-between cursor-pointer border border-transparent dark:border-slate-700"
                            >
                                <span>{email}</span>
                                <span
                                    className={`text-[10px] px-2 py-0.5 rounded border ${copied
                                            ? 'bg-emerald-500 text-white border-emerald-500'
                                            : 'bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700'
                                        }`}
                                >
                                    {copied ? 'Copied! ✓' : 'Copy'}
                                </span>
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800 mt-4">
                        <a
                            href="https://www.linkedin.com/in/mhd-rizky-fadillah"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 py-2 text-center bg-[#0080FF] hover:bg-[#0066cc] text-white text-xs font-medium rounded-xl transition"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com/fadillahmrizki"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 py-2 text-center border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white text-xs font-medium rounded-xl transition"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer class="text-center py-6 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-400 dark:text-slate-500 mt-12">
                &copy; 2026 RF CV Web 1.0
            </footer>
        </>
    );
}