import HeroImage from "/assets/nata.jpg";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/Laravel.jpg";
import Tools3 from "/assets/tools/VisualParadigm.png";
import Tools4 from "/assets/tools/github.png";
import Tools5 from "/assets/tools/BalsamiqWireframes.png";
import Tools6 from "/assets/tools/canva.png";
import Tools7 from "/assets/tools/figma.png";
import Tools8 from "/assets/tools/powerdesigner.png";
import Tools9 from "/assets/tools/postgresql.png";
import Tools10 from "/assets/tools/mongoDB.png";
import Tools11 from "/assets/tools/MySQLWorkbench.png";
import Tools12 from "/assets/tools/Solidworks.png";


export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "Laravel",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Visual Paradigm",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Balsamiq",
    ket: "Design App",
    dad: "900",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
    {
    id: 8,
    gambar: Tools8,
    nama: "PowerDesigner",
    ket: "Data Modeling Tool",
    dad: "1100",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Postgress",
    ket: "Database Design",
    dad: "1100",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "mongoDB",
    ket: "Database Design",
    dad: "1100",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "MySQLWorkbench",
    ket: "Database Design",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "Solidworks",
    ket: "software CAD",
    dad: "1100",
  },
];

import Proyek1 from "/assets/proyek/Project1.webp";
import Proyek2 from "/assets/proyek/proyek2.webp";
import Proyek3 from "/assets/proyek/proyek3.webp";
import Proyek4 from "/assets/proyek/proyek4.webp";
import Proyek5 from "/assets/proyek/proyek5.webp";
import Proyek6 from "/assets/proyek/proyek6.webp";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Website Apotek Nauli Farma Balige",
    desk: "Website Apotik Nauli Farma adalah project tim yang kami kembangkan sebagai platform informasi obat dengan tampilan modern dan responsif. Saya berkontribusi dalam merancang UI/UX dan menyusun struktur informasi agar pengguna dapat mencari dan memahami detail obat dengan lebih mudah. Project ini menjadi dasar pengembangan layanan apotek yang lebih digital dan informatif.",
    tools: ["CSS", "Javascript", "Figma", "Laravel", "PHP", "sql Workbench"],
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Rancang Bangun Sistem Informasi dan Manajemen Del Cafe",
    desk: "LSistem Informasi dan Manajemen Del Cafe adalah aplikasi yang kami kembangkan untuk membantu pengelola kantin dalam mencatat menu, pemesanan, transaksi, dan penjualan harian secara lebih cepat dan terstruktur. Sistem ini menggantikan pembukuan manual dengan proses yang lebih efisien dan minim kesalahan, sehingga operasional kantin dapat berjalan lebih modern dan tertata.",
    tools: ["Flutter", "CSS", "Javascript", "Laravel", "Postgress", "Figma"],
    dad: "300",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "ReDesign Prototipe Rumah Kreatif Toba",
    desk: "Dalam proyek pribadi ini, saya melakukan evaluasi usability pada website Rumah Kreatif Toba dan mengidentifikasi berbagai masalah dari sisi navigasi, tampilan, dan pengalaman pengguna. Berdasarkan temuan tersebut, saya mendesain ulang prototipe web dengan fokus pada tampilan yang lebih modern, struktur informasi yang lebih rapi, serta alur penggunaan yang lebih intuitif. Redesign ini bertujuan menghadirkan pengalaman pengguna yang lebih nyaman dan mendukung UMKM dalam mengakses layanan secara lebih efisien.",
    tools: ["Figma", "Canva", "Microsoft Word"],
    dad: "400",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "Crime Data Analytics Dashboard (USA Crime Dataset)",
    desk: "Saya membuat dashboard interaktif untuk menganalisis tren kejahatan di Amerika Serikat menggunakan dataset Kaggle. Dashboard ini menampilkan visualisasi jenis kejahatan, lokasi, dan pola waktu untuk memudahkan identifikasi area rawan dan tren kriminalitas. Proyek ini membantu saya mengasah kemampuan data preprocessing dan visualisasi dalam pembuatan dashboard analitik.",
    tools: ["Looker Studio"],
    dad: "500",
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "Community Service Program",
    desk: "Dalam kegiatan PKM ini, saya bersama tim berkolaborasi dengan dosen untuk mengajar Microsoft Excel di beberapa sekolah. Kami menyusun modul pembelajaran sendiri, mulai dari materi dasar hingga fungsi-fungsi praktis yang sering digunakan siswa. Program ini bertujuan meningkatkan literasi digital di sekolah serta memberikan pengalaman langsung bagi saya dalam membuat materi ajar dan menyampaikan konsep secara jelas.",
    tools: ["Microsoft Excel", "Microsoft Word"],
    dad: "600",
  },
];
