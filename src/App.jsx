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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-950 via-emerald-900 to-teal-950 px-6 pt-24 pb-12">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] opacity-20"></div>

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 grid-cols-1 gap-10 lg:gap-16 items-center z-10">
          {/* Kiri — Teks */}
          <div className="text-center lg:text-left space-y-6 lg:space-y-8">
            {/* Quote Card */}
            <div
              className="group relative bg-white/10 backdrop-blur-xl border border-pink-300/30 rounded-3xl p-6 mx-auto lg:mx-0 max-w-md shadow-2xl hover:shadow-pink-400/40 transition-all duration-500 hover:scale-105"
              data-aos="fade-up"
            >
              <div className="flex items-start gap-4">
                <img src={DataImage.HeroImage} alt="Natasya" className="w-12 h-12 rounded-xl object-cover ring-4 ring-pink-400 shadow-lg flex-shrink-0" />
                <blockquote className="text-base sm:text-lg italic text-pink-100">
                  “When something is important enough, you do it even if the odds are not in your favor.”
                  -Elon Musk
                </blockquote>
              </div>
            </div>

            {/* Nama & Deskripsi */}
            <div className="space-y-5" data-aos="fade-up" data-aos-delay="200">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                Hi, Saya <br />
                <span className="bg-gradient-to-r from-pink-400 via-rose-400 to-emerald-400 bg-clip-text text-transparent">
                  Natasya Dian<br />Elena Siahaan!
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
                Saya memiliki ketertarikan dalam bidang{" "}
                <span className="text-pink-300 font-bold">UI/UX Design</span>, khususnya dalam membuat wireframe,
                prototype, dan desain antarmuka menggunakan{" "}
                <span className="text-emerald-300 font-bold">Figma</span> dan{" "}
                <span className="text-emerald-300 font-bold">Balsamiq</span>.
                <br className="hidden sm:block" /><br className="hidden sm:block" />
                Pengalaman saya terus berkembang melalui berbagai proyek yang saya kerjakan.
              </p>
            </div>

            {/* Tombol CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" data-aos="fade-up" data-aos-delay="400">
              <a
                href="/Natasya Dian Elena Siahaan-resume.pdf"
                download
                className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-500 to-green-500 px-8 py-5 rounded-2xl font-bold text-white shadow-xl hover:shadow-emerald-400/60 transition-all hover:-translate-y-1.5"
              >
                <i className="ri-download-2-line text-2xl group-hover:animate-bounce"></i>
                Download CV
              </a>

              <a
                href="#proyek"
                className="inline-flex items-center justify-center gap-2 px-8 py-5 bg-pink-500/20 backdrop-blur-md border border-pink-400/50 rounded-2xl font-semibold text-pink-100 hover:bg-pink-500/30 hover:border-pink-300 transition-all hover:-translate-y-1"
              >
                Lihat Project
                <i className="ri-arrow-right-line text-xl"></i>
              </a>
            </div>
          </div>

          {/* KANAN — FOTO BLINK-BLINK + AURA GLOW (TANPA TULISAN SPARKLES) */}
          <div className="flex justify-center" data-aos="fade-up" data-aos-delay="600">
            <div className="relative group">
              <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-r from-pink-400/40 via-emerald-400/40 to-pink-400/40 rounded-full blur-3xl animate-aura-glow"></div>
              <div className="absolute -inset-2 sm:-inset-3 bg-gradient-to-r from-emerald-400 via-pink-500 to-rose-500 rounded-full blur-3xl opacity-80 animate-border-spin"></div>

              <img
                src={DataImage.HeroImage}
                alt="Natasya"
                className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 object-cover rounded-full shadow-2xl border-8 border-white animate-blink-glow group-hover:scale-105 transition-all duration-800"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== TENTANG SECTION ===== */}
      <section className="py-20 px-6" id="tentang">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-xl border border-pink-300/20 rounded-3xl p-8 md:p-12 shadow-2xl" data-aos="fade-up">
            <p className="text-gray-200 text-base md:text-lg leading-relaxed">
              Saya adalah mahasiswa D3 Teknologi Informasi di Institut Teknologi Del dengan ketertarikan kuat dalam UI/UX Design. Saya terbiasa mempelajari 
              kebutuhan pengguna serta memahami dasar-dasar pembuatan user flow, wireframe, dan prototipe menggunakan Figma, Canva, dan Balsamiq. Saya terus mengembangkan 
              kemampuan dalam merancang tampilan dan pengalaman pengguna yang intuitif, rapi, dan mudah dipahami. Dengan minat yang besar dan komitmen untuk belajar, saya 
              siap berkontribusi sebagai UI/UX Designer yang berfokus pada kemudahan, konsistensi, dan kenyamanan pengguna.            </p>

            <div className="mt-12 grid grid-cols-2 gap-8 text-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-black text-pink-400">5<span className="text-emerald-400">+</span></h1>
                <p className="text-gray-300 mt-2">Proyek Selesai</p>
              </div>
              <div>
                <h1 className="text-5xl md:text-6xl font-black text-emerald-400">2<span className="text-pink-400">+</span></h1>
                <p className="text-gray-300 mt-2">Tahun Pengalaman</p>
              </div>
            </div>
          </div>
                {/* ===== PENGALAMAN SECTION ===== */}
      <section className="py-20 px-6 bg-gradient-to-b from-emerald-950/20 to-transparent" id="pendidikan">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6" data-aos="fade-up">
            Pendidikan
          </h2>
          <p className="text-gray-300 mb-12 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Pendidikan 1 - Mahasiswa IT Del */}
            <div
              className="bg-white/10 backdrop-blur-xl border border-pink-300/20 rounded-3xl p-8 hover:border-pink-400 transition-all duration-500 group"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="flex items-center gap-5 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-xl">
                  <i className="ri-graduation-cap-line text-3xl text-white"></i>
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-white">Mahasiswa Aktif</h3>
                  <p className="text-pink-300 font-medium">D3 Teknologi Informasi</p>
                  <p className="text-emerald-300 text-sm">Institut Teknologi Del</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">2023 – Sekarang</p>
              <p className="text-gray-300 mt-4 text-left">
                Sedang menempuh pendidikan Diploma 3 Teknologi Informasi di Institut Teknologi Del, Laguboti. 
                Fokus pada UI/UX Design, Quality Assurance, dan pengembangan web.
              </p>
            </div>

            {/* Pendidikan 2 - Alumni SMA */}
            <div
              className="bg-white/10 backdrop-blur-xl border border-pink-300/20 rounded-3xl p-8 hover:border-pink-400 transition-all duration-500 group"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="flex items-center gap-5 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center shadow-xl">
                  <i className="ri-school-line text-3xl text-white"></i>
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-white">Alumni SMA</h3>
                  <p className="text-pink-300 font-medium">IPA</p>
                  <p className="text-emerald-300 text-sm">SMA Negeri 4 Pematangsiantar</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">2020 – 2023</p>
              <p className="text-gray-300 mt-4 text-left">
                Lulus dari jurusan IPA. 
                Aktif dalam organisasi sekolah dan mengembangkan minat di bidang teknologi sejak SMA.
              </p>
            </div>
          </div>
        </div>
      </section>

            {/* ===== ORGANISASI SECTION ===== */}
      <section className="py-20 px-6 bg-gradient-to-b from-emerald-950/20 to-transparent" id="organisasi">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6" data-aos="fade-up">
            Pengalaman Organisasi
          </h2>
          <p className="text-gray-300 mb-12 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">

            {/* Organisasi 1: BEM IT Del - Divisi Visualisasi */}
            <div
              className="bg-white/10 backdrop-blur-xl border border-pink-300/20 rounded-3xl p-8 hover:border-pink-400 transition-all duration-500 group"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="flex items-center gap-5 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center shadow-xl">
                  <i className="ri-palette-line text-3xl text-white"></i>
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-white">Divisi Visualisasi</h3>
                  <p className="text-pink-300 font-medium">Departemen Agama & Sosial</p>
                  <p className="text-emerald-300 text-sm">BEM Institut Teknologi Del</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-4">2023 – Sekarang</p>
              <ul className="text-left text-gray-300 space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">•</span>
                  Mendesain poster, flyer, dan banner untuk acara keagamaan & sosial kampus
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">•</span>
                  Membuat presentasi PowerPoint untuk ibadah minggu & retreat rohani
                </li>
              </ul>
            </div>

            {/* Organisasi 2: UKM Del Robotic Club */}
            <div
              className="bg-white/10 backdrop-blur-xl border border-pink-300/20 rounded-3xl p-8 hover:border-pink-400 transition-all duration-500 group"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="flex items-center gap-5 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-2xl flex items-center justify-center shadow-xl">
                  <i className="ri-robot-line text-3xl text-white"></i>
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-white">Anggota Aktif</h3>
                  <p className="text-emerald-300 font-medium">UKM Del Robotic Club</p>
                  <p className="text-pink-300 text-sm">Institut Teknologi Del</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-4">2023 – Sekarang</p>
              <ul className="text-left text-gray-300 space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-pink-400 mt-0.5">•</span>
                  Mempelajari pemrograman robot menggunakan Arduino & Python
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-400 mt-0.5">•</span>
                  Mendesain komponen mekanik robot menggunakan SolidWorks
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

          {/* Tools */}
          <div className="mt-20 md:mt-32">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center md:text-left" data-aos="fade-up">
              Tools yang Saya Gunakan
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {listTools.map((tool) => (
                <div
                  key={tool.id}
                  className="bg-white/5 backdrop-blur-md border border-pink-300/20 rounded-2xl p-6 text-center hover:bg-pink-500/10 hover:border-pink-400 transition-all group"
                  data-aos="fade-up"
                  data-aos-delay={tool.id * 100}
                >
                  <img src={tool.gambar} alt={tool.nama} className="w-16 mx-auto mb-4 group-hover:scale-110 transition" />
                  <h4 className="font-bold text-white text-lg">{tool.nama}</h4>
                  <p className="text-sm text-gray-400 mt-1">{tool.ket}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROYEK SECTION ===== */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-emerald-950/30" id="proyek">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6" data-aos="fade-up">My Projects</h2>
          <p className="text-gray-300 mb-12 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Berikut beberapa project yang telah saya kerjakan
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {listProyek.map((proyek) => (
              <div
                key={proyek.id}
                className="bg-white/10 backdrop-blur-xl border border-pink-300/20 rounded-3xl overflow-hidden group hover:border-pink-400 transition-all duration-500"
                data-aos="fade-up"
                data-aos-delay={proyek.dad}
              >
                <div className="overflow-hidden">
                  <img src={proyek.gambar} alt={proyek.nama} className="w-full h-48 object-cover group-hover:scale-110 transition duration-700" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">{proyek.nama}</h3>
                  <p className="text-gray-300 text-sm mb-6">{proyek.desk}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {proyek.tools.map((tool, i) => (
                      <span key={i} className="px-4 py-2 bg-pink-500/20 text-pink-300 text-xs font-medium rounded-full border border-pink-400/30">
                        {tool}
                      </span>
                    ))}
                  </div>
                  <a
                    href={proyek.link || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold py-3 rounded-2xl hover:from-emerald-400 hover:to-green-400 transition"
                  >
                    Lihat Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== KONTAK SECTION ===== */}
      <section className="py-20 px-6" id="kontak">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6" data-aos="fade-up">Kontak</h2>
          <p className="text-gray-300 mb-12" data-aos="fade-up" data-aos-delay="200">
          </p>

          <form
            action="https://formsubmit.co/c3f13f4a0eaef609362de6fe251080ec"
            method="POST"
            className="bg-white/10 backdrop-blur-xl border border-pink-300/30 rounded-3xl p-10 space-y-8"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="Pesan Baru dari Portfolio Natasya" />

            <input
              type="text"
              name="nama"
              placeholder="Nama Lengkap"
              className="w-full bg-white/10 border border-pink-300/30 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-pink-400 transition"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full bg-white/10 border border-pink-300/30 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-pink-400 transition"
              required
            />
            <textarea
              name="pesan"
              placeholder="Tulis pesan kamu di sini..."
              rows="6"
              className="w-full bg-white/10 border border-pink-300/30 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-pink-400 transition resize-none"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-rose-500 text-white font-bold py-5 rounded-2xl hover:from-green-400 hover:to-rose-400 transition transform hover:-translate-y-1 shadow-xl"
            >
              Kirim Pesan
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default App;