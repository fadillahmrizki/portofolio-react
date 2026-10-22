import React from 'react';

export default function Timeline() {
    const educationData = [
        {
            id: 1,
            title: 'S1 Sistem Informasi / Teknik',
            institution: 'Universitas Malikussaleh (UNIMAL)',
            period: '2023 — Sekarang (Semester 7)',
        },
    ];

    const organizationData = [
        {
            id: 1,
            name: 'Himpunan Mahasiswa Sistem Informasi (HIMASI)',
            role: 'Anggota Bidang Agama',
            desc: 'Menjalankan kegiatan keagamaan dan kegiatan sosial dalam organisasi.',
            period: 'Okt 2025 — Jul 2026',
        },
        {
            id: 2,
            name: 'GSA Buddy',
            role: 'Ketua Kelompok GSA Buddy',
            desc: 'Memimpin projek kolaborasi tim, dan aktivitas lainnya.',
            period: 'April 2026 — Jul 2026',
        },
        {
            id: 3,
            name: 'UKM Badminton',
            role: 'Anggota Kelompok Perlengkapan',
            desc: 'Membantu dalam perawatan dan pengelolaan perlengkapan olahraga.',
            period: 'Des 2023 — Jul 2024',
        },
        {
            id: 4,
            name: 'Remaja Masjid At-Thahirin Binjai',
            role: 'Anggota Bidang Keamanan',
            desc: 'Menjalankan kegiatan keamanan, kegiatan sosial, dan berkoordinasi antar bidang dalam organisasi.',
            period: '2016 - 2019',
        },
    ];

    return (
        <section id="riwayat" className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            {/* Education Timeline */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 hover:-translate-y-1 hover:shadow-md transition-all duration-200">
                <h3 className="font-bold text-base text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                    <span>🎓</span> Riwayat Pendidikan
                </h3>
                <div className="relative border-s-2 border-slate-200 dark:border-slate-800 ml-3 space-y-6">
                    {educationData.map((edu) => (
                        <div key={edu.id} className="ms-5">
                            <div className="absolute w-3 h-3 bg-[#0080FF] rounded-full -start-[7px] border-2 border-white dark:border-slate-900"></div>
                            <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
                                {edu.title}
                            </h4>
                            <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                                {edu.institution}
                            </p>
                            <span className="text-[11px] text-slate-400 dark:text-slate-500">
                                {edu.period}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Organization List */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between hover:-translate-y-1 hover:shadow-md transition-all duration-200">
                <div>
                    <h3 className="font-bold text-base text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                        <span>👥</span> Pengalaman Organisasi
                    </h3>
                    <div className="space-y-4">
                        {organizationData.map((org) => (
                            <div
                                key={org.id}
                                className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/60"
                            >
                                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                                    {org.name}
                                </h4>
                                <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-0.5">
                                    {org.role}
                                </p>
                                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                                    {org.desc}
                                </p>
                                <span className="text-[10px] text-slate-400 dark:text-slate-500 block mt-2">
                                    {org.period}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}