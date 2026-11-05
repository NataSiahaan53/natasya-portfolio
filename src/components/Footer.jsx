
const Footer = () => {
  const footerLinks = [
    { name: "Home", href: "#beranda" },
    { name: "Education", href: "#pendidikan" },
    { name: "Organization", href: "#organisasi" },
    { name: "Experience", href: "#experience" },
    { name: "Certifications", href: "#sertifikat" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="mt-24 border-t border-blue-400/20 bg-gradient-to-b from-blue-950/20 to-black">

      <div className="max-w-7xl mx-auto px-6 pt-14 pb-8">

        {/* Footer Main */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12">

          {/* Brand */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-black text-sky-400 mb-4">
              Natasya Dian Elena Siahaan
            </h2>

            <p className="text-gray-400 leading-relaxed text-sm max-w-sm mx-auto md:mx-0">
              Information Technology Graduate with an interest in Data
              Analytics, Quality Assurance, Web Development, and System
              Analysis.
            </p>

            <div className="flex items-center justify-center md:justify-start gap-4 mt-6">
              <a
                href="https://github.com/NataSiahaan53"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-xl bg-white/5 border border-blue-400/20 flex items-center justify-center text-gray-300 hover:text-white hover:bg-blue-500/20 hover:border-blue-400 transition-all duration-300"
              >
                <i className="ri-github-fill text-xl"></i>
              </a>

              <a
                href="mailto:natasyasiahaan93@gmail.com"
                aria-label="Email"
                className="w-10 h-10 rounded-xl bg-white/5 border border-blue-400/20 flex items-center justify-center text-gray-300 hover:text-white hover:bg-blue-500/20 hover:border-blue-400 transition-all duration-300"
              >
                <i className="ri-mail-fill text-xl"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-lg font-bold text-white mb-5">
              Quick Links
            </h3>

            <div className="grid grid-cols-2 gap-x-6 gap-y-3 max-w-xs mx-auto">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 text-sm hover:text-blue-300 transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-bold text-white mb-5">
              Get In Touch
            </h3>

            <div className="flex flex-col gap-4 text-sm text-gray-400">
              <a
                href="mailto:natasyasiahaan93@gmail.com"
                className="flex items-center justify-center md:justify-end gap-3 hover:text-blue-300 transition"
              >
                <i className="ri-mail-line text-lg text-sky-400"></i>
                natasyasiahaan93@gmail.com
              </a>

              <a
                href="tel:081263173249"
                className="flex items-center justify-center md:justify-end gap-3 hover:text-blue-300 transition"
              >
                <i className="ri-phone-line text-lg text-sky-400"></i>
                0812 6317 3249
              </a>

              <p className="flex items-center justify-center md:justify-end gap-3">
                <i className="ri-map-pin-line text-lg text-sky-400"></i>
                Medan, North Sumatra, Indonesia
              </p>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6">

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">

            <p className="text-gray-500 text-sm">
              © 2026 Natasya Dian Elena Siahaan. All rights reserved.
            </p>

            <a
              href="#beranda"
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-sky-400 transition"
            >
              Back to Top
              <i className="ri-arrow-up-line"></i>
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
