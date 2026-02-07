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
    nama: "Nauli Farma Balige Pharmacy Website",
    desk: "The Nauli Farma Pharmacy Website is a team project that we developed as a modern and responsive medicine information platform. I contributed to designing the UI/UX and organizing the information structure so users can easily search for and understand detailed medicine information. This project serves as a foundation for developing more digital and informative pharmacy services.",
    tools: ["CSS", "Javascript", "Figma", "Laravel", "PHP", "sql Workbench"],
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Design and Development of Del Cafe Information and Management System",
    desk: "The Del Cafe Information and Management System is an application we developed to help cafeteria managers record menus, orders, transactions, and daily sales more quickly and in a structured manner. This system replaces manual bookkeeping with a more efficient and error-minimized process, allowing cafeteria operations to run in a more modern and organized way.",
    tools: ["Flutter", "CSS", "Javascript", "Laravel", "Postgress", "Figma"],
    dad: "300",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "ReDesign Prototipe Rumah Kreatif Toba",
    desk: "In this personal project, I conducted a usability evaluation of the Rumah Kreatif Toba website and identified various issues related to navigation, layout, and user experience. Based on these findings, I redesigned the web prototype with a focus on a more modern interface, clearer information structure, and a more intuitive user flow. This redesign aims to provide a more comfortable user experience and support SMEs in accessing services more efficiently.",
    tools: ["Figma", "Canva", "Microsoft Word"],
    dad: "400",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "Crime Data Analytics Dashboard (USA Crime Dataset)",
    desk: "I developed an interactive dashboard to analyze crime trends in the United States using a Kaggle dataset. The dashboard presents visualizations of crime types, locations, and temporal patterns to facilitate the identification of high-risk areas and crime trends. This project helped me strengthen my skills in data preprocessing and visualization for building analytical dashboards.",
    tools: ["Looker Studio"],
    dad: "500",
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "Community Service Program",
    desk: "In this PKM activity, my team and I collaborated with lecturers to teach Microsoft Excel at several schools. We developed our own learning modules, ranging from basic concepts to practical functions commonly used by students. This program aimed to improve digital literacy in schools while providing me with hands-on experience in creating instructional materials and delivering concepts clearly.",
    tools: ["Microsoft Excel", "Microsoft Word"],
    dad: "600",
  },
];
