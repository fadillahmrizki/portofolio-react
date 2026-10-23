import React, { useState } from 'react';

export default function Certificates() {
    const [selectedCert, setSelectedCert] = useState(null);

    const certificatesData = [
        {
            id: 1,
            title: 'Google Student Ambassador (GSA) Batch 1',
            issuer: 'Google Indonesia',
            desc: 'Terpilih dari +82.000 pendaftar se-Indonesia • 2023',
            logo: 'images/GSA.png',
            fallbackLogo: 'GSA',
            type: 'modal',
            image: 'images/GraduationGSA.png',
        },
        {
            id: 2,
            title: 'Certificate of Completion #JuaraVibeCoding',
            issuer: 'Google Developer Groups (GDG)',
            desc: 'Sertifikasi kelulusan program GDG',
            logo: 'images/GDG.png',
            fallbackLogo: 'GDG',
            type: 'modal',
            image: 'images/VibesCoding.png',
        },
        {
            id: 3,
            title: 'Certificate of Gemini',
            issuer: 'Google for Education',
            desc: 'Sertifikasi Siswa Terverifikasi Gemini • 2023',
            logo: 'images/GfE.png',
            fallbackLogo: 'GfE',
            type: 'modal',
            image: 'images/COG.png',
        },
        {
            id: 4,
            title: 'Certificate of Completion',
            issuer: 'Google for Education',
            desc: 'Sertifikasi Kompetensi Education Google for Education • 2023',
            logo: 'images/GfE.png',
            fallbackLogo: 'COC',
            type: 'modal',
            image: 'images/COC.png',
        },
        {
            id: 5,
            title: 'Fundamentals of Remote Sensing',
            issuer: 'NASA ARSET Program',
            desc: 'Applied Remote Sensing Training',
            logo: 'images/NASA.png',
            fallbackLogo: 'NASA',
            type: 'modal',
            image: 'images/ARSET.png',
        },
        {
            id: 6,
            title: 'Visualisation for Information Management',
            issuer: 'UNICEF Agora',
            desc: 'Tata cara visualisasi & manajemen informasi',
            logo: 'images/UNICEF.png',
            fallbackLogo: 'UNICEF',
            type: 'link',
            url: 'https://agora.unicef.org/pluginfile.php/1/tool_certificate/issues/1790995847/1924333156MF.pdf',
        },
        {
            id: 7,
            title: 'Ethics and Integrity at UNICEF (2020 Update)',
            issuer: 'UNICEF Agora',
            desc: 'Etika & integritas dalam perusahaan',
            logo: 'images/UNICEF.png',
            fallbackLogo: 'UNICEF',
            type: 'link',
            url: 'https://agora.unicef.org/pluginfile.php/1/tool_certificate/issues/1790996015/4884646441MF.pdf',
        },
        {
            id: 8,
            title: 'AI and Machine Learning Basics',
            issuer: 'Disaster Ready',
            desc: 'Dasar-dasar Artificial Intelligence & ML',
            logo: 'images/disaster.png',
            fallbackLogo: 'DR',
            type: 'modal',
            image: 'images/DisasterOrg.png',
        },
        {
            id: 9,
            title: 'Akselerasi Karier & Produktivitas dengan Gemini',
            issuer: 'Dicoding Academy',
            desc: 'Penggunaan Gemini efisien untuk karier',
            logo: 'images/dicoding.png',
            fallbackLogo: 'DC',
            type: 'link',
            url: 'https://www.dicoding.com/certificates/JMZVV7Q8RZN9',
        },
        {
            id: 10,
            title: 'Belajar Penerapan Data Science dengan Microsoft Fabric',
            issuer: 'Dicoding Academy',
            desc: 'Penerapan Data Science Microsoft Fabric',
            logo: 'images/dicoding.png',
            fallbackLogo: 'DC',
            type: 'link',
            url: 'https://www.dicoding.com/certificates/1OP87LJ81ZQK',
        },
        {
            id: 11,
            title: 'Membangun Aplikasi Gen AI dengan Microsoft Azure',
            issuer: 'Dicoding Academy',
            desc: 'Pembuatan aplikasi Gen AI Azure',
            logo: 'images/dicoding.png',
            fallbackLogo: 'DC',
            type: 'link',
            url: 'https://www.dicoding.com/certificates/98XW8R3GWPM3',
        },
        {
            id: 12,
            title: 'Microsoft Elevate Training Center Skill Sprint',
            issuer: 'Microsoft Elevate',
            desc: 'Belajar Penerapan Data Science Fabric & Gen AI Azure',
            logo: 'images/Microsoft.png',
            fallbackLogo: 'MS',
            type: 'link',
            url: 'https://www.dicoding.com/elevate/certificates/PRECGCXY9R',
        },

    ];

    return (
        <section id="sertifikat" className="space-y-6 pt-4">
            {/* JUDUL BAGIAN SERTIFIKAT (Rata Tengah & Font Lebih Besar) */}
            <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    Prestasi & Sertifikat
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certificatesData.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 flex items-start justify-between gap-4 hover:-translate-y-1 hover:shadow-md transition-all duration-200"
                    >
                        <div className="flex items-start gap-3.5">
                            <img
                                src={item.logo}
                                alt={item.issuer}
                                className="w-11 h-11 rounded-xl object-contain bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-1 shrink-0"
                                onError={(e) => {
                                    e.target.src = `https://via.placeholder.com/44?text=${item.fallbackLogo}`;
                                }}
                            />
                            <div>
                                <h3 className="font-bold text-sm text-slate-900 dark:text-white leading-snug">
                                    {item.title}
                                </h3>
                                <p className="text-xs font-medium text-slate-600 dark:text-slate-400 mt-0.5">
                                    {item.issuer}
                                </p>
                                <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-1">
                                    {item.desc}
                                </p>
                            </div>
                        </div>

                        {item.type === 'modal' ? (
                            <button
                                onClick={() => setSelectedCert(item)}
                                className="shrink-0 px-3 py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-900 dark:hover:bg-slate-700 hover:text-white text-slate-800 dark:text-slate-200 text-xs font-semibold rounded-lg border border-slate-200 dark:border-slate-700 transition flex items-center gap-1 cursor-pointer"
                            >
                                <span>Lihat Sertifikat</span>
                            </button>
                        ) : (
                            <a
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="shrink-0 px-3 py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-900 dark:hover:bg-slate-700 hover:text-white text-slate-800 dark:text-slate-200 text-xs font-semibold rounded-lg border border-slate-200 dark:border-slate-700 transition flex items-center gap-1"
                            >
                                <span>Lihat Sertifikat</span>
                                <span>↗</span>
                            </a>
                        )}
                    </div>
                ))}
            </div>

            {/* MODAL POP-UP SERTIFIKAT */}
            {selectedCert && (
                <div
                    onClick={() => setSelectedCert(null)}
                    className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white dark:bg-slate-900 rounded-2xl max-w-3xl w-full p-4 md:p-6 shadow-2xl relative max-h-[90vh] flex flex-col border border-slate-200 dark:border-slate-800"
                    >
                        <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
                            <h3 className="font-bold text-slate-900 dark:text-white text-sm md:text-base">
                                {selectedCert.title}
                            </h3>
                            <button
                                onClick={() => setSelectedCert(null)}
                                className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center font-bold text-sm transition cursor-pointer"
                            >
                                ✕
                            </button>
                        </div>
                        <div className="py-4 overflow-y-auto flex-1 flex items-center justify-center">
                            <img
                                src={selectedCert.image}
                                alt={selectedCert.title}
                                className="max-h-[70vh] w-auto object-contain rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm"
                            />
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}