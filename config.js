/**
 * Configuration and Data for PT. Brimo Swarnindo Karyavara Ecosystem
 * This script dynamically renders the ecosystem grid based on corporate data.
 */

const corporateData = {
    ecosystem: [
        {
            name: "Kelas Bisa",
            domain: "kelasbisa.com",
            category: "Pendidikan Non-Formal",
            tagline: '"Bersama Kelas Bisa, Semua Bisa"',
            type: "Lembaga Kursus & Pelatihan",
            target: "Operasional: Agustus 2025",
            description: "Kursus Online Terlengkap di Indonesia dengan Sistem LMS AI.",
            services: [
                "GEODATIS (Data Sains Geospasial)",
                "PILAR JUARA (Bimbel Seri Kompetisi)",
                "GATRA ADHIKA (Bimbel CPNS & Kedinasan)",
                "ARPA (Training Riset & Publikasi)",
                "NESTU (Bimbel Lulus PTN DN/LN)"
            ]
        },
        {
            name: "Pena Bisa",
            domain: "penabisa.com",
            category: "Informasi Komunikasi",
            tagline: '"Wadah Berkarya, Jejak Literasi"',
            type: "Lembaga Penerbitan & Percetakan",
            target: "Operasional: Juni 2025",
            description: "Self Publishing Termurah & Terlengkap di Indonesia Timur.",
            services: [
                "Penerbitan self-publishing",
                "Cetak buku & modul (PoD)",
                "Jasa HAKI dan ISBN",
                "Proofreading & layout desain",
                "Konversi skripsi jadi buku",
                "Penjualan Toko Buku Pena Store"
            ]
        },
        {
            name: "Pakkakasa Digipro",
            domain: "pakkakasa.com",
            category: "Teknologi",
            tagline: '"From Problem to Solution"',
            type: "Industri Teknologi Pendidikan",
            target: "Operasional: November 2026",
            description: "Software Mobile Apps Termurah yang mendukung Produktivitas.",
            services: [
                "Template Word/Excel",
                "Perangkat Pembelajaran",
                "Mobile Apps",
                "AI Learning",
                "LMS"
            ]
        },
        {
            name: "Barugahub",
            domain: "barugahub.com",
            category: "Event & Community",
            tagline: '"Basis Ruang Gelora Prestasi"',
            type: "Lembaga Event Pendidikan",
            target: "Operasional: April 2027",
            description: "Penyelenggara Event & Kompetisi Akademik Berbasis Prestasi.",
            services: [
                "Briska Kompetisi Penelitian & Bisnis Nasional",
                "Seminar Riset & Webinar",
                "Academic Camp",
                "Teacher Summit",
                "Education Expo"
            ]
        },
        {
            name: "APACA Consulting",
            domain: "apacaconsulting.com",
            category: "Sertifikasi & Konsultan",
            tagline: '"Asesmen Tepat, Sertifikasi Tepat"',
            type: "Lembaga Sertifikasi & Konsultan",
            target: "Operasional: April 2027",
            description: "Pusat Sertifikasi dan Konsultasi Pendidikan Terintegrasi.",
            services: [
                "Asesmen Center",
                "Profiling Student & Career",
                "School Auditing",
                "Certification (BNSP & APACA)",
                "Advisory and Consultation"
            ]
        },
        {
            name: "SMA Celebes Macca",
            domain: "celebesmacca.sch.id",
            category: "Pendidikan Formal",
            tagline: '"Cendekiawan Macca Berkarakter"',
            type: "Sekolah Menengah Atas Swasta",
            target: "Operasional: April 2030",
            description: "SMA Prestasi dan Persiapan Kampus Global di Indonesia Timur.",
            services: [
                "SMA Boarding School berbasis Karakter, Prestasi dan Takwa",
                "Kurikulum Oxford berbasis Kearifan Lokal",
                "Program Kelas Prestasi, Pengusaha, Riset dan Global Graduation"
            ]
        }
    ]
};

// Function to render the ecosystem cards
function renderEcosystem() {
    const grid = document.getElementById('ecosystem-grid');
    if (!grid) return;

    let html = '';
    
    corporateData.ecosystem.forEach(item => {
        // Generate list items for services
        const servicesList = item.services.map(service => `<li>${service}</li>`).join('');
        
        html += `
            <div class="eco-card">
                <div class="eco-header">
                    <h3>${item.name}</h3>
                    <span class="eco-domain">${item.domain}</span>
                </div>
                
                <div class="eco-meta">
                    <span class="eco-badge badge-type">${item.type}</span>
                    <span class="eco-badge badge-status"><i class="far fa-calendar-alt"></i> ${item.target}</span>
                </div>
                
                <p class="eco-tagline">${item.tagline}</p>
                <p class="eco-desc">${item.description}</p>
                
                <h4 class="eco-services-title">Layanan Utama</h4>
                <ul class="eco-services">
                    ${servicesList}
                </ul>
            </div>
        `;
    });
    
    grid.innerHTML = html;
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    renderEcosystem();
    
    // Simple smooth scrolling for navbar links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
