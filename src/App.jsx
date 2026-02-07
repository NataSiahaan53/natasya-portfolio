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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-neutral-900 to-slate-900 px-6 pt-24 pb-12">
  <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,transparent_25%,black)] opacity-10"></div>

  <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 grid-cols-1 gap-10 lg:gap-16 items-center z-10">
    <div className="text-center lg:text-left space-y-6 lg:space-y-8">

      {/* Quote Card */}
      <div
        className="group relative bg-white/5 backdrop-blur-xl border border-slate-400/20 rounded-3xl p-6 mx-auto lg:mx-0 max-w-md shadow-2xl hover:shadow-slate-400/30 transition-all duration-500 hover:scale-105"
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

      {/* Nama & Deskripsi */}
      <div className="space-y-5" data-aos="fade-up" data-aos-delay="200">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-white">
          Hi, I'm <br />
          <span className="bg-gradient-to-r from-white via-slate-200 to-blue-300 bg-clip-text text-transparent">
            Natasya Dian<br />Elena Siahaan.
          </span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed">
          I have a strong interest in the field of{" "}
          <span className="text-slate-200 font-semibold">UI/UX Design</span>, particularly in creating wireframes,
          prototypes, and user interface designs using{" "}
          <span className="text-slate-300 font-semibold">Figma</span> and{" "}
          <span className="text-slate-300 font-semibold">Balsamiq</span>.
          <br className="hidden sm:block" /><br className="hidden sm:block" />
          My experience continues to grow through various projects that I have worked on.
        </p>

      </div>

      {/* Tombol CTA */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" data-aos="fade-up" data-aos-delay="400">
          <a
            href="/assets/Natasya-Siahaan-resume.pdf"
            download="Natasya-Siahaan-Resume.pdf"
            type="application/pdf"
            className="group relative inline-flex items-center justify-center gap-3 bg-neutral-800 px-8 py-5 rounded-2xl font-bold text-white shadow-xl hover:bg-neutral-700 transition-all hover:-translate-y-1.5">
            <i className="ri-download-2-line text-2xl group-hover:animate-bounce"></i>
            Download CV
          </a>

        <a
          href="#proyek"
          className="inline-flex items-center justify-center gap-2 px-8 py-5 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl font-semibold text-gray-200 hover:bg-white/10 transition-all hover:-translate-y-1"
        >
          View Project
          <i className="ri-arrow-right-line text-xl"></i>
        </a>
      </div>
    </div>

    {/* KANAN — FOTO DENGAN GLOW TIPIS */}
    <div className="flex justify-center" data-aos="fade-up" data-aos-delay="600">
      <div className="relative group">
        <div className="absolute -inset-5 bg-blue-400/20 rounded-full blur-3xl animate-aura-glow"></div>

        <img
          src={DataImage.HeroImage}
          alt="Natasya"
          className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 object-cover rounded-full shadow-2xl border-4 border-slate-400/40 group-hover:scale-105 transition-all duration-700"
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
              I am a Diploma student in Information Technology at Institut Teknologi Del with a strong interest in UI/UX Design.
              I am accustomed to analyzing user needs and understanding the fundamentals of creating user flows, wireframes, and prototypes 
              using Figma, Canva, and Balsamiq. I continuously develop my skills in designing intuitive, well-structured, and user-friendly 
              interfaces and experiences. With strong enthusiasm and a commitment to learning, I am ready to contribute as a UI/UX Designer 
              focused on usability, consistency, and user comfort.
            </p>


            <div className="mt-12 grid grid-cols-2 gap-8 text-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-black text-blue-400">5<span className="text-blue-200">+</span></h1>
                <p className="text-gray-300 mt-2">Complete Project</p>
              </div>
              <div>
                <h1 className="text-5xl md:text-6xl font-black text-blue-200">2<span className="text-blue-400">+</span></h1>
                <p className="text-gray-300 mt-2">Years of Experience</p>
              </div>
            </div>
          </div>
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
                  data-aos-delay="100">
                  <div className="flex items-center gap-5 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl">
                      <i className="ri-graduation-cap-line text-3xl text-white"></i>
                    </div>
                    <div className="text-left">
                      <h3 className="text-2xl font-bold text-white">Active Student</h3>
                      <p className="text-blue-300 font-medium">D3 Information Technology</p>
                      <p className="text-cyan-300 text-sm">Institut Teknologi Del</p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">2023 – Present</p>
                  <p className="text-gray-300 mt-4 text-left">
                    Currently pursuing a Diploma 3 in Information Technology at Institut
                    Teknologi Del, Laguboti. Focused on UI/UX Design, Quality Assurance, and
                    web development.
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

                  <p className="text-gray-400 text-sm mb-4">2023 – Present</p>

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

                  <p className="text-gray-400 text-sm mb-4">2023 – Present</p>

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

          {/* Tools */}
          <div className="mt-20 md:mt-32">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center md:text-left" data-aos="fade-up">
              Tools I Use
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {listTools.map((tool) => (
                <div
                  key={tool.id}
                  className=" rounded-2xl p-6 text-center hover:bg-blue-500/10 hover:border-blue-400 transition-all group"
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
        <section
          className="py-20 px-6 bg-gradient-to-b from-transparent "
          id="proyek"
        >
          <div className="max-w-7xl mx-auto text-center">
            <h2
              className="text-4xl md:text-5xl font-black text-white mb-6"
              data-aos="fade-up"
            >
              My Projects
            </h2>

            <p
              className="text-gray-300 mb-12 max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200">
              Here are some projects that I have worked on
            </p>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {listProyek.map((proyek) => (
                <div
                  key={proyek.id}
                  className="bg-white/10 backdrop-blur-xl border border-blue-400/20 rounded-3xl overflow-hidden group hover:border-blue-400 transition-all duration-500"
                  data-aos="fade-up"
                  data-aos-delay={proyek.dad}
                >
                  <div className="overflow-hidden">
                    <img
                      src={proyek.gambar}
                      alt={proyek.nama}
                      className="w-full h-48 object-cover group-hover:scale-110 transition duration-700"
                    />
                  </div>

                  <div className="p-6 text-left">
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {proyek.nama}
                    </h3>

                    <p className="text-gray-300 text-sm mb-6">
                      {proyek.desk}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {proyek.tools.map((tool, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 bg-blue-500/20 text-blue-300 text-xs font-medium rounded-full border border-blue-400/30"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    <a
                      href={proyek.link || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold tracking-wide transition-all duration-300 hover:from-blue-400 hover:to-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-transparent">
                      View Project
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
              <h2
                className="text-4xl md:text-5xl font-black text-white mb-6"
                data-aos="fade-up"
              >
                Contact
              </h2>
              <p
                className="text-gray-300 mb-12"
                data-aos="fade-up"
                data-aos-delay="200"
              ></p>

              <form
                action="https://formsubmit.co/c3f13f4a0eaef609362de6fe251080ec"
                method="POST"
                className="bg-white/10 backdrop-blur-xl border border-blue-400/30 rounded-3xl p-10 space-y-8"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <input type="hidden" name="_captcha" value="false" />
                <input
                  type="hidden"
                  name="_subject"
                  value="Pesan Baru dari Portfolio Natasya"
                />

                <input
                  type="text"
                  name="nama"
                  placeholder="Full Name"
                  className="w-full bg-white/10 border border-blue-400/30 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition"
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full bg-white/10 border border-blue-400/30 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition"
                  required
                />

                <textarea
                  name="pesan"
                  placeholder="Write your message here...”"
                  rows="6"
                  className="w-full bg-white/10 border border-blue-400/30 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition resize-none"
                  required
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-5 rounded-2xl hover:from-blue-400 hover:to-blue-400 transition transform hover:-translate-y-1 shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </div>
          </section>
          </>
            );
          }

export default App;