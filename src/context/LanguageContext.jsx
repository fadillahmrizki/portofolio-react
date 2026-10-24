import React, { createContext, useContext, useState } from 'react';

export const dictionary = {
    id: {
        nav: {
            proyek: "Proyek Unggulan",
            sertifikat: "Sertifikat & Prestasi",
            riwayat: "Riwayat & Organisasi",
            keahlian: "Keahlian",
            kontak: "Hubungi Saya",
        },
        hero: {
            badge: "Open for Internship / Junior Roles",
            name: "Mhd. Rizky Fadillah S",
            role: "AI & Data Scientist Enthusiast | Frontend & Graphic Designer",
            description: "Mahasiswa Sistem Informasi & Google Student Ambassador 2026 yang berfokus di bidang AI, Data Science, dan Frontend Web Development. Memiliki latar belakang kuat dalam desain grafis (Adobe Photoshop & Illustrator), memungkinkan saya membangun solusi berbasis data yang tidak hanya fungsional, tetapi juga memiliki visual antarmuka yang menarik dan intuitif.",
            viewProjects: "Lihat Proyek",
            downloadCv: "Unduh CV",
        },
        projects: {
            title: "Karya & Proyek Unggulan",
            filterAll: "Semua Proyek",
            filterDataScience: "Data Science",
            filterFrontend: "Design & Frontend",
            loading: "Memuat data proyek dari Firebase...",
            empty: "Belum ada proyek pada kategori ini.",
            viewDetail: "Lihat Detail Proyek",
            categoryDataScience: "Data Science",
            categoryFrontend: "Frontend Web",
        },
        certs: {
            title: "Prestasi & Sertifikat",
            viewCert: "Lihat Sertifikat",
        },
        timeline: {
            eduTitle: "Riwayat Pendidikan",
            orgTitle: "Pengalaman Organisasi",
            education: [
                {
                    id: 1,
                    title: "S1 Sistem Informasi / Teknik",
                    institution: "Universitas Malikussaleh (UNIMAL)",
                    period: "2023 — Sekarang (Semester 7)",
                },
            ],
            organization: [
                {
                    id: 1,
                    name: "Himpunan Mahasiswa Sistem Informasi (HIMASI)",
                    role: "Anggota Bidang Agama",
                    desc: "Menjalankan kegiatan keagamaan dan kegiatan sosial dalam organisasi.",
                    period: "Okt 2025 — Jul 2026",
                },
                {
                    id: 2,
                    name: "GSA Buddy",
                    role: "Ketua Kelompok GSA Buddy",
                    desc: "Memimpin projek kolaborasi tim, dan aktivitas lainnya.",
                    period: "April 2026 — Jul 2026",
                },
                {
                    id: 3,
                    name: "UKM Badminton",
                    role: "Anggota Kelompok Perlengkapan",
                    desc: "Membantu dalam perawatan dan pengelolaan perlengkapan olahraga.",
                    period: "Des 2023 — Jul 2024",
                },
                {
                    id: 4,
                    name: "Remaja Masjid At-Thahirin Binjai",
                    role: "Anggota Bidang Keamanan",
                    desc: "Menjalankan kegiatan keamanan, kegiatan sosial, dan berkoordinasi antar bidang dalam organisasi.",
                    period: "2016 - 2019",
                },
            ],
        },
        skills: {
            dataTitle: "Data & Analisis",
            webTitle: "Pengembangan Web",
            contactTitle: "Hubungi Saya",
            contactSubtitle: "Terbuka untuk diskusi proyek, kolaborasi, atau posisi kesempatan magang.",
            copied: "Tersalin! ✓",
            copy: "Salin",
            footer: "© 2026 RF CV Web 1.4.0",
        },
    },
    en: {
        nav: {
            proyek: "Featured Projects",
            sertifikat: "Certificates & Awards",
            riwayat: "History & Experience",
            keahlian: "Skills & Contact",
            kontak: "Contact Me",
        },
        hero: {
            badge: "Open for Internship / Junior Roles",
            name: "Mhd. Rizky Fadillah S",
            role: "AI & Data Scientist Enthusiast | Frontend & Graphic Designer",
            description: "Information Systems student & Google Student Ambassador 2026 focusing on AI, Data Science, and Frontend Web Development. Possessing a strong background in graphic design (Adobe Photoshop & Illustrator), enabling me to build data-driven solutions that are not only functional but also visually appealing and intuitive.",
            viewProjects: "View Projects",
            downloadCv: "Download CV",
        },
        projects: {
            title: "Featured Works & Projects",
            filterAll: "All Projects",
            filterDataScience: "Data Science",
            filterFrontend: "Design & Frontend",
            loading: "Loading project data from Firebase...",
            empty: "No projects found in this category.",
            viewDetail: "View Project Details",
            categoryDataScience: "Data Science",
            categoryFrontend: "Frontend Web",
        },
        certs: {
            title: "Certificates & Achievements",
            viewCert: "View Certificate",
        },
        timeline: {
            eduTitle: "Education History",
            orgTitle: "Organizational Experience",
            education: [
                {
                    id: 1,
                    title: "Bachelor of Information Systems / Engineering",
                    institution: "Malikussaleh University (UNIMAL)",
                    period: "2023 — Present (7th Semester)",
                },
            ],
            organization: [
                {
                    id: 1,
                    name: "Information Systems Student Association (HIMASI)",
                    role: "Religious Affairs Member",
                    desc: "Conducting religious and social activities within the organization.",
                    period: "Oct 2025 — Jul 2026",
                },
                {
                    id: 2,
                    name: "GSA Buddy",
                    role: "GSA Buddy Group Leader",
                    desc: "Leading team collaboration projects and other activities.",
                    period: "April 2026 — Jul 2026",
                },
                {
                    id: 3,
                    name: "UKM Badminton",
                    role: "Equipment Team Member",
                    desc: "Assisting in the maintenance and management of sports equipment.",
                    period: "Dec 2023 — Jul 2024",
                },
                {
                    id: 4,
                    name: "Binjai At-Thahirin Mosque Youth",
                    role: "Security Division Member",
                    desc: "Executing security duties, social activities, and inter-division coordination within the organization.",
                    period: "2016 - 2019",
                },
            ],
        },
        skills: {
            dataTitle: "Data & Analytics",
            webTitle: "Web Development",
            contactTitle: "Contact Me",
            contactSubtitle: "Open for project discussions, collaborations, or internship opportunities.",
            copied: "Copied! ✓",
            copy: "Copy",
            footer: "© 2026 RF CV Web 1.4.0",
        },
    }
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [lang, setLang] = useState('id');

    const toggleLanguage = () => {
        setLang((prevLang) => (prevLang === 'id' ? 'en' : 'id'));
    };

    return (
        <LanguageContext.Provider value={{ lang, toggleLanguage, t: dictionary[lang] }}>
            {children}
        </LanguageContext.Provider>
    );
}

export const useLanguage = () => useContext(LanguageContext);