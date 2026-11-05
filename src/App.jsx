import DataImage from "./data";
import { listTools, listProyek } from "./data";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <>
      
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-neutral-900 to-slate-900 px-6 sm:px-10 lg:px-16 pt-24 pb-12">

    <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,transparent_25%,black)] opacity-10"></div>

    <div className="relative w-full max-w-6xl mx-auto z-10">

      {/* QUOTE CARD */}
      <div
        className="group relative bg-white/5 backdrop-blur-xl border border-slate-400/20 rounded-3xl p-6 mb-10 max-w-xl shadow-2xl hover:shadow-slate-400/30 transition-all duration-500 hover:scale-[1.02]"
        data-aos="fade-up"
      >
        <div className="flex items-start gap-4">
          <img
            src={DataImage.HeroImage}
            alt="Natasya"
            className="w-12 h-12 rounded-xl object-cover ring-2 ring-slate-400 shadow-lg flex-shrink-0"
          />
          <blockquote className="text-base sm:text-lg italic text-gray-200">
            “When something is important enough, you do it even if the odds are not in your favor.”
            <br />— Elon Musk
          </blockquote>
        </div>
      </div>

      {/* HEADING + FOTO */}
      <div
        className="flex flex-col sm:flex-row items-center sm:items-start justify-start gap-8 md:gap-14 mb-10"
        data-aos="fade-up"
        data-aos-delay="200"
      >

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-white text-center sm:text-left">
          Hi, I'm <br />
          <span className="bg-gradient-to-r from-white via-slate-200 to-blue-300 bg-clip-text text-transparent">
            Natasya Dian<br />Elena Siahaan.
          </span>
        </h1>

        {/* FOTO */}
        <div className="relative group shrink-0 mt-2">
          <div className="absolute -inset-5 bg-blue-400/20 rounded-full blur-3xl animate-aura-glow"></div>

          <img
            src={DataImage.HeroImage}
            alt="Natasya"
            className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 object-cover rounded-full shadow-2xl border-4 border-slate-400/40 group-hover:scale-105 transition-all duration-700"
            loading="lazy"
          />
        </div>

      </div>

      {/* DESKRIPSI */}
      <div data-aos="fade-up" data-aos-delay="300">
        <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed text-justify font-normal">

          I am a fresh graduate with an{" "}
          Associate Degree (D3) in Information Technology
          {" "}from Institut Teknologi Del, with interests in Data Analytics, Quality Assurance, Front-End Web
          Development, and System Analysis.

          <br className="hidden sm:block" />
          <br className="hidden sm:block" />

          I have experience developing a company profile landing page using React.js during my
          internship, as well as working on data analytics projects using Looker and PostgreSQL.
          Throughout my academic journey, I have also contributed to projects involving village
          information systems and pharmacy websites.

          <br className="hidden sm:block" />
          <br className="hidden sm:block" />

          My technical skills include data processing using SQL, MySQL, and PostgreSQL, web
          development using React.js, and system analysis and design using BPMN, Class Diagrams,
          and Sequence Diagrams.

          <br className="hidden sm:block" />
          <br className="hidden sm:block" />

          Beyond technical skills, I bring strong analytical thinking, problem-solving abilities,
          attention to detail, and communication skills. I am eager to continuously learn,
          develop my expertise, and contribute to meaningful projects in the technology field.

        </p>
      </div>

    </div>
  </section>

                {/* ===== PENDIDIKAN SECTION ===== */}
          <section
            className="py-20 px-6 bg-gradient-to-b from-blue-950/20 to-transparent"
            id="pendidikan">
            <div className="max-w-7xl mx-auto text-center">
              <h2
                className="text-4xl md:text-5xl font-black text-white mb-6"
                data-aos="fade-up"
              >
                Education
              </h2>
              <p
                className="text-gray-300 mb-12 max-w-2xl mx-auto"
                data-aos="fade-up"
                data-aos-delay="200"
              ></p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Education 1 */}
                <div
                  className="bg-white/10 backdrop-blur-xl border border-blue-400/20 rounded-3xl p-8 hover:border-blue-400 transition-all duration-500 group"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="flex items-center gap-5 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl">
                      <i className="ri-graduation-cap-line text-3xl text-white"></i>
                    </div>

                    <div className="text-left">
                      <h3 className="text-2xl font-bold text-white">Fresh Graduate</h3>
                      <p className="text-blue-300 font-medium">D3 Information Technology</p>
                      <p className="text-cyan-300 text-sm">Institut Teknologi Del</p>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm">2023 – 2026</p>

                  <p className="text-blue-300 text-sm font-medium mt-3">
                    GPA: 3.38 / 4.00
                  </p>

                  <p className="text-gray-300 mt-4 text-left">
                    A fresh graduate with a Diploma 3 in Information Technology from
                    Institut Teknologi Del. Interested in Data Analytics, Quality Assurance,
                    and Web Development.
                  </p>
                </div>

                {/* Education 2 */}
                <div
                  className="bg-white/10 backdrop-blur-xl border border-blue-400/20 rounded-3xl p-8 hover:border-blue-400 transition-all duration-500 group"
                  data-aos="fade-up"
                  data-aos-delay="300">
                  <div className="flex items-center gap-5 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-sky-500 rounded-2xl flex items-center justify-center shadow-xl">
                      <i className="ri-school-line text-3xl text-white"></i>
                    </div>
                    <div className="text-left">
                      <h3 className="text-2xl font-bold text-white">High School Graduate</h3>
                      <p className="text-blue-300 font-medium">Science</p>
                      <p className="text-cyan-300 text-sm">
                        SMA Negeri 4 Pematangsiantar
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">2020 – 2023</p>
                  <p className="text-gray-300 mt-4 text-left">
                    Graduated from the Science major. Actively involved in school
                    organizations and developed an interest in technology since high
                    school.
                  </p>
                </div>
              </div>
            </div>
          </section>

            {/* ===== ORGANISASI SECTION ===== */}
          <section className="py-20 px-6" id="organisasi">
            <div className="max-w-7xl mx-auto text-center">
              <h2
                className="text-4xl md:text-5xl font-black text-white mb-6"
                data-aos="fade-up"
              >
                Organizational Experience
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                {/* Organization 1 */}
                <div
                  className="bg-white/10 backdrop-blur-xl border border-blue-400/20 rounded-3xl p-8 hover:border-blue-400 transition-all duration-500 group"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="flex items-center gap-5 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl">
                      <i className="ri-palette-line text-3xl text-white"></i>
                    </div>
                    <div className="text-left">
                      <h3 className="text-2xl font-bold text-white">
                        Visualization Division
                      </h3>
                      <p className="text-blue-300 font-medium">
                        Religion & Social Department
                      </p>
                      <p className="text-cyan-300 text-sm">
                        Student Executive Board of Institut Teknologi Del
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm mb-4">2023 – 2026</p>

                  <ul className="text-left text-gray-300 space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-0.5">•</span>
                      Designing posters, flyers, and banners for campus religious and social events
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-0.5">•</span>
                      Creating PowerPoint presentations for weekly worship services and spiritual retreats
                    </li>
                  </ul>
                </div>

                {/* Organization 2 */}
                <div
                  className="bg-white/10 backdrop-blur-xl border border-blue-400/20 rounded-3xl p-8 hover:border-blue-400 transition-all duration-500 group"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="flex items-center gap-5 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-sky-500 rounded-2xl flex items-center justify-center shadow-xl">
                      <i className="ri-robot-line text-3xl text-white"></i>
                    </div>
                    <div className="text-left">
                      <h3 className="text-2xl font-bold text-white">Active Member</h3>
                      <p className="text-blue-300 font-medium">
                        Del Robotic Club Student Activity Unit
                      </p>
                      <p className="text-cyan-300 text-sm">
                        Institut Teknologi Del
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm mb-4">2023 – 2026</p>

                  <ul className="text-left text-gray-300 space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-0.5">•</span>
                      Learning robot programming using Arduino and Python
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-0.5">•</span>
                      Designing robotic mechanical components using SolidWorks
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          
          {/* ===== EXPERIENCE SECTION ===== */}
          <section
            className="py-20 px-6 bg-gradient-to-b from-blue-950/20 to-transparent"
            id="experience">
            <div className="max-w-7xl mx-auto text-center">

              <h2
                className="text-4xl md:text-5xl font-black text-white mb-6"
                data-aos="fade-up"
              >
                Work & Project Experience
              </h2>

              <p
                className="text-gray-300 mb-12 max-w-2xl mx-auto"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                My journey through various projects and roles.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

                {/* Experience 1 */}
                <div
                  className="bg-white/10 backdrop-blur-xl border border-blue-400/20 rounded-3xl p-8 hover:border-blue-400 transition-all duration-500 group"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="flex items-center gap-5 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl shrink-0">
                      <i className="ri-computer-line text-3xl text-white"></i>
                    </div>

                    <div className="text-left">
                      <h3 className="text-2xl font-bold text-white">
                        IT Support Intern
                      </h3>
                      <p className="text-blue-300 font-medium">
                        Best Agro International
                      </p>
                      <p className="text-cyan-300 text-sm">
                        Internship · 5 Months
                      </p>
                    </div>
                  </div>

                  <ul className="text-left text-gray-300 space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-0.5">•</span>
                      Installed antivirus software and performed Windows updates.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-0.5">•</span>
                      Assisted with PC assembly, disassembly, and troubleshooting.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-0.5">•</span>
                      Configured MikroTik devices and analyzed network logs.
                    </li>
                  </ul>
                </div>

                {/* Experience 2 */}
                <div
                  className="bg-white/10 backdrop-blur-xl border border-blue-400/20 rounded-3xl p-8 hover:border-blue-400 transition-all duration-500 group"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="flex items-center gap-5 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-sky-500 rounded-2xl flex items-center justify-center shadow-xl shrink-0">
                      <i className="ri-database-2-line text-3xl text-white"></i>
                    </div>

                    <div className="text-left">
                      <h3 className="text-2xl font-bold text-white">
                        System Analyst
                      </h3>
                      <p className="text-blue-300 font-medium">
                        Sistem Informasi Dasawisma–PKK
                      </p>
                      <p className="text-cyan-300 text-sm">
                        Desa Silalahi Dolok · Final Project
                      </p>
                    </div>
                  </div>

                  <ul className="text-left text-gray-300 space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-0.5">•</span>
                      Analyzed system requirements and business processes.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-0.5">•</span>
                      Created system diagrams to represent system structure and workflows.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-0.5">•</span>
                      Developed use case scenarios based on system requirements.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-0.5">•</span>
                      Prepared system analysis and design documentation.
                    </li>
                  </ul>
                </div>

                {/* Experience 3 */}
                <div
                  className="bg-white/10 backdrop-blur-xl border border-blue-400/20 rounded-3xl p-8 hover:border-blue-400 transition-all duration-500 group"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="flex items-center gap-5 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl shrink-0">
                      <i className="ri-search-eye-line text-3xl text-white"></i>
                    </div>

                    <div className="text-left">
                      <h3 className="text-2xl font-bold text-white">
                        Data Analyst & Software Tester
                      </h3>
                      <p className="text-blue-300 font-medium">
                        Del Cafe Management and Service System
                      </p>
                      <p className="text-cyan-300 text-sm">
                        Academic Project
                      </p>
                    </div>
                  </div>

                  <ul className="text-left text-gray-300 space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-0.5">•</span>
                      Analyzed project requirements and system processes.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-0.5">•</span>
                      Designed all system diagrams to represent system structure, workflows, and interactions.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-0.5">•</span>
                      Prepared system analysis and design documentation.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-0.5">•</span>
                      Performed software testing using MARS to evaluate application functionality.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-0.5">•</span>
                      Identified and documented testing results based on application requirements.
                    </li>
                  </ul>
                </div>

                {/* Experience 4 */}
                <div
                  className="bg-white/10 backdrop-blur-xl border border-blue-400/20 rounded-3xl p-8 hover:border-blue-400 transition-all duration-500 group"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="flex items-center gap-5 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-sky-500 rounded-2xl flex items-center justify-center shadow-xl shrink-0">
                      <i className="ri-hospital-line text-3xl text-white"></i>
                    </div>

                    <div className="text-left">
                      <h3 className="text-2xl font-bold text-white">
                        Web Developer
                      </h3>
                      <p className="text-blue-300 font-medium">
                        Apotek Nauli Farma
                      </p>
                      <p className="text-cyan-300 text-sm">
                        Academic Project
                      </p>
                    </div>
                  </div>

                  <ul className="text-left text-gray-300 space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-0.5">•</span>
                      Developed a pharmacy website as part of an academic project.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-0.5">•</span>
                      Implemented website features and user interface components.
                    </li>
                  </ul>
                </div>

                {/* Experience 5 */}
                <div
                  className="bg-white/10 backdrop-blur-xl border border-blue-400/20 rounded-3xl p-8 hover:border-blue-400 transition-all duration-500 group md:col-span-2 md:max-w-[calc(50%-1rem)] md:w-full md:mx-auto"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="flex items-center gap-5 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl shrink-0">
                      <i className="ri-bar-chart-box-line text-3xl text-white"></i>
                    </div>

                    <div className="text-left">
                      <h3 className="text-2xl font-bold text-white">
                        Data Analyst
                      </h3>
                      <p className="text-blue-300 font-medium">
                        Global Country Data Analytics & Visualization
                      </p>
                      <p className="text-cyan-300 text-sm">
                        Academic Project
                      </p>
                    </div>
                  </div>

                  <ul className="text-left text-gray-300 space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-0.5">•</span>
                      Performed data cleaning and preprocessing.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-0.5">•</span>
                      Conducted exploratory data analysis (EDA).
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-0.5">•</span>
                      Analyzed data using SQL and PostgreSQL.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-0.5">•</span>
                      Created an interactive dashboard using Looker Studio.
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </section>

          
          
          {/* ===== CERTIFICATIONS & ACHIEVEMENTS SECTION ===== */}
          <section
            className="py-20 px-6 bg-gradient-to-b from-blue-950/20 to-transparent"
            id="sertifikat"
          >
            <div className="max-w-7xl mx-auto text-center">

              <h2
                className="text-4xl md:text-5xl font-black text-white mb-6"
                data-aos="fade-up"
              >
                Certifications & Achievements
              </h2>

              <p
                className="text-gray-300 mb-12 max-w-2xl mx-auto"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Certificates, professional training, and achievements
                that represent my learning journey and experiences.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

                {[
                  {
                    title: "Advanced Quality and Capstone Project",
                    issuer: "Board Infinity · Coursera",
                    category: "Professional Certificate",
                    image: "/assets/achievment/Advance%20Quality%20and%20Capstone%20Project.jpg"
                  },
                  {
                    title: "Automation and Modern Testing Tools",
                    issuer: "Board Infinity · Coursera",
                    category: "Professional Certificate",
                    image: "/assets/achievment/Automation%20and%20Modern%20Testing%20Tools.jpg"
                  },
                  {
                    title: "Practical Software Testing",
                    issuer: "Board Infinity · Coursera",
                    category: "Professional Certificate",
                    image: "/assets/achievment/Practical%20Software%20Testing.jpg"
                  },
                  {
                    title: "Fundamental SQL: GROUP BY and HAVING",
                    issuer: "DQLab",
                    category: "Data Analytics",
                    image: "/assets/achievment/Fundamental%20SQL%20Group%20By%20and%20Having.jpg"
                  },
                  {
                    title: "Fundamental SQL Using Function and GROUP BY",
                    issuer: "DQLab",
                    category: "Data Analytics",
                    image: "/assets/achievment/Fundamental%20SQL%20Using%20Function%20and%20Group%20By.jpg"
                  },
                  {
                    title: "Fundamental SQL Using INNER JOIN and UNION",
                    issuer: "DQLab",
                    category: "Data Analytics",
                    image: "/assets/achievment/Fundamental%20SQL%20Using%20INNER%20JOIN%20and%20UNION.jpg"
                  },
                  {
                    title: "Fundamental SQL Using SELECT Statement",
                    issuer: "DQLab",
                    category: "Data Analytics",
                    image: "/assets/achievment/Fundamental%20SQL%20Using%20Select%20Statement.jpg"
                  },
                  {
                    title: "Memanfaatkan Operator Logika di MySQL",
                    issuer: "DQLab",
                    category: "Data Analytics",
                    image: "/assets/achievment/Memanfaatkan%20Operator%20Logika%20di%20MySQL.jpg"
                  },
                  {
                    title: "Menggunakan ORDER BY untuk Mengurutkan Data",
                    issuer: "DQLab",
                    category: "Data Analytics",
                    image: "/assets/achievment/Menggunakan%20ORDER%20BY%20untuk%20Mengurutkan%20Data.jpg"
                  },
                  {
                    title: "Mengolah Data Teks Dasar pada MySQL",
                    issuer: "DQLab",
                    category: "Data Analytics",
                    image: "/assets/achievment/Mengolah%20Data%20Teks%20Dasar%20Pada%20MySQL.jpg"
                  },
                  {
                    title: "TOEFL ITP Certificate of Achievement",
                    issuer: "The TOEFL Program",
                    category: "Language Certificate",
                    image: "/assets/achievment/TOEFL.jpg"
                  },
                  {
                    title: "Junior IT Support & Network Internship",
                    issuer: "Internship Certificate",
                    category: "Internship",
                    image: "/assets/achievment/Magang.jpg"
                  },
                  {
                    title: "Certificate of Membership",
                    issuer: "Del Robotic Club",
                    category: "Organizational Achievement",
                    image: "/assets/achievment/ROBOTIC.jpg"
                  },
                  {
                    title: "Certificate of Appreciation",
                    issuer: "Institut Teknologi Del",
                    category: "Achievement",
                    image: "/assets/achievment/Escort.jpg"
                  },
                  {
                    title: "Certificate of Appreciation – English Assistant",
                    issuer: "Institut Teknologi Del",
                    category: "Academic Achievement",
                    image: "/assets/achievment/English%20Assisten.jpg"
                  },
                  {
                    title: "Department of Social Service Membership",
                    issuer: "Student Executive Board",
                    category: "Organizational Achievement",
                    image: "/assets/achievment/Depagsos.jpg"
                  }
                ].map((certificate, index) => (
                  <a
                    key={index}
                    href={certificate.image}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-white/10 backdrop-blur-xl border border-blue-400/20 rounded-3xl p-5 hover:border-blue-400 hover:-translate-y-2 transition-all duration-500 group text-left"
                    data-aos="fade-up"
                    data-aos-delay={(index % 3) * 100}
                  >
                    <div className="bg-white rounded-2xl p-2 mb-5 overflow-hidden">
                      <img
                        src={certificate.image}
                        alt={certificate.title}
                        loading="lazy"
                        className="w-full h-52 object-contain group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <p className="text-cyan-300 text-xs font-medium mb-2 uppercase tracking-wider">
                      {certificate.category}
                    </p>

                    <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                      {certificate.title}
                    </h3>

                    <p className="text-blue-300 text-sm mt-2">
                      {certificate.issuer}
                    </p>

                    <p className="text-gray-400 text-xs mt-4 flex items-center gap-2">
                      <i className="ri-eye-line"></i>
                      View Certificate
                    </p>
                  </a>
                ))}

              </div>
            </div>
          </section>

          
          {/* ===== SKILLS & EXPERTISE SECTION ===== */}
          <section
            className="py-20 px-6 bg-gradient-to-b from-blue-950/20 to-transparent"
            id="skills"
          >
            <div className="max-w-7xl mx-auto text-center">

              <h2
                className="text-4xl md:text-5xl font-black text-white mb-6"
                data-aos="fade-up"
              >
                Skills & Expertise
              </h2>

              <p
                className="text-gray-300 mb-12 max-w-2xl mx-auto"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Technical skills and expertise developed through academic projects,
                internship experience, and continuous learning.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

                {/* Skill 1 */}
                <div
                  className="bg-white/10 backdrop-blur-xl border border-blue-400/20 rounded-3xl p-8 hover:border-blue-400 transition-all duration-500 group"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl">
                      <i className="ri-code-s-slash-line text-3xl text-white"></i>
                    </div>

                    <h3 className="text-xl font-bold text-white text-left">
                      Programming & Development
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {["HTML", "CSS", "JavaScript", "React.js", "PHP", "Laravel", "Tailwind CSS"].map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-blue-400/10 border border-blue-400/20 rounded-xl text-blue-200 text-sm hover:bg-blue-400/20 hover:border-blue-400 transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Skill 2 */}
                <div
                  className="bg-white/10 backdrop-blur-xl border border-blue-400/20 rounded-3xl p-8 hover:border-blue-400 transition-all duration-500 group"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-sky-500 rounded-2xl flex items-center justify-center shadow-xl">
                      <i className="ri-bug-line text-3xl text-white"></i>
                    </div>

                    <h3 className="text-xl font-bold text-white text-left">
                      Software Testing & QA
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {["Manual Testing", "Functional Testing", "Test Case Design", "Application Testing", "Testing Documentation"].map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-blue-400/10 border border-blue-400/20 rounded-xl text-blue-200 text-sm hover:bg-blue-400/20 hover:border-blue-400 transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Skill 3 */}
                <div
                  className="bg-white/10 backdrop-blur-xl border border-blue-400/20 rounded-3xl p-8 hover:border-blue-400 transition-all duration-500 group"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl">
                      <i className="ri-database-2-line text-3xl text-white"></i>
                    </div>

                    <h3 className="text-xl font-bold text-white text-left">
                      Database & Data Analysis
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {["SQL", "MySQL", "PostgreSQL", "Data Preprocessing", "Looker Studio", "Microsoft Excel"].map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-blue-400/10 border border-blue-400/20 rounded-xl text-blue-200 text-sm hover:bg-blue-400/20 hover:border-blue-400 transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Skill 4 */}
                <div
                  className="bg-white/10 backdrop-blur-xl border border-blue-400/20 rounded-3xl p-8 hover:border-blue-400 transition-all duration-500 group"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-sky-500 rounded-2xl flex items-center justify-center shadow-xl">
                      <i className="ri-flow-chart text-3xl text-white"></i>
                    </div>

                    <h3 className="text-xl font-bold text-white text-left">
                      System Analysis & Design
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {["Requirement Analysis", "Use Case Diagram", "Activity Diagram", "Sequence Diagram", "Class Diagram", "BPMN", "ERD", "System Documentation"].map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-blue-400/10 border border-blue-400/20 rounded-xl text-blue-200 text-sm hover:bg-blue-400/20 hover:border-blue-400 transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Skill 5 */}
                <div
                  className="bg-white/10 backdrop-blur-xl border border-blue-400/20 rounded-3xl p-8 hover:border-blue-400 transition-all duration-500 group"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl">
                      <i className="ri-tools-line text-3xl text-white"></i>
                    </div>

                    <h3 className="text-xl font-bold text-white text-left">
                      Tools & Platforms
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {["Visual Studio Code", "Git", "GitHub", "Figma", "Looker Studio", "Microsoft Office", "MikroTik"].map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-blue-400/10 border border-blue-400/20 rounded-xl text-blue-200 text-sm hover:bg-blue-400/20 hover:border-blue-400 transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Skill 6 */}
                <div
                  className="bg-white/10 backdrop-blur-xl border border-blue-400/20 rounded-3xl p-8 hover:border-blue-400 transition-all duration-500 group"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-sky-500 rounded-2xl flex items-center justify-center shadow-xl">
                      <i className="ri-user-heart-line text-3xl text-white"></i>
                    </div>

                    <h3 className="text-xl font-bold text-white text-left">
                      Soft Skills
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {["Analytical Thinking", "Problem-Solving", "Attention to Detail", "Communication", "Teamwork", "Critical Thinking", "Adaptability", "Time Management"].map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-blue-400/10 border border-blue-400/20 rounded-xl text-blue-200 text-sm hover:bg-blue-400/20 hover:border-blue-400 transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </section>


          {/* KONTAK SECTION */}
          <section
            className="py-20 px-6 bg-gradient-to-b from-blue-950/20 to-transparent"
            id="contact"
          >
            <div className="max-w-7xl mx-auto text-center">
              <h2
                className="text-4xl md:text-5xl font-black text-white mb-6"
                data-aos="fade-up"
              >
                Get In Touch
              </h2>

              <p
                className="text-gray-400 max-w-2xl mx-auto mb-14 text-lg"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Feel free to reach out for opportunities, collaborations, or just to
                connect. I'm always open to discussing new projects and ideas.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Email */}
                <a
                  href="mailto:natasyasiahaan93@gmail.com"
                  className="bg-white/10 backdrop-blur-xl border border-blue-400/20 rounded-3xl p-8 hover:border-blue-400 hover:-translate-y-2 transition-all duration-500 group"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-mail-line text-3xl text-white"></i>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Email</h3>
                  <p className="text-blue-300 break-all">
                    natasyasiahaan93@gmail.com
                  </p>
                </a>

                {/* Phone */}
                <a
                  href="tel:081263173249"
                  className="bg-white/10 backdrop-blur-xl border border-blue-400/20 rounded-3xl p-8 hover:border-blue-400 hover:-translate-y-2 transition-all duration-500 group"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-phone-line text-3xl text-white"></i>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Phone</h3>
                  <p className="text-blue-300">0812 6317 3249</p>
                </a>

                {/* Location */}
                <div
                  className="bg-white/10 backdrop-blur-xl border border-blue-400/20 rounded-3xl p-8 hover:border-blue-400 hover:-translate-y-2 transition-all duration-500 group"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-map-pin-line text-3xl text-white"></i>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Location</h3>
                  <p className="text-blue-300">
                    Medan, North Sumatra, Indonesia
                  </p>
                </div>

              </div>
            </div>
          </section>
          </>
            );
          }

export default App;