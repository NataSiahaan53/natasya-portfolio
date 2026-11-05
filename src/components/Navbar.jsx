
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#beranda" },
    { name: "Education", href: "#pendidikan" },
    { name: "Organization", href: "#organisasi" },
    { name: "Experience", href: "#experience" },
    { name: "Certifications", href: "#sertifikat" },
    { name: "Skill", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-500">
      {/* Backdrop Blur */}
      <div
        className={`absolute inset-0 -z-10 transition-all duration-500 ${
          isOpen || isScrolled
            ? "bg-black/40 backdrop-blur-xl border-b border-blue-400/20"
            : "bg-transparent"
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a href="#beranda" className="flex-shrink-0">
            <h1 className="text-lg sm:text-xl font-black text-sky-400">
              Natasya Dian Elena Siahaan
            </h1>
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-4 lg:gap-5 font-medium text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative text-white/80 hover:text-blue-300 transition group whitespace-nowrap"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white text-2xl focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <i className="ri-close-line"></i>
            ) : (
              <i className="ri-menu-3-line"></i>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-[500px] opacity-100 py-4" : "max-h-0 opacity-0 py-0"
          }`}
        >
          <ul className="flex flex-col gap-3 text-base font-medium text-center">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-white hover:text-blue-300 transition"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Garis bawah saat scroll */}
      {isScrolled && !isOpen && (
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50"></div>
      )}
    </nav>
  );
};

export default Navbar;
