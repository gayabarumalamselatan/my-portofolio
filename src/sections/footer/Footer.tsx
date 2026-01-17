import { useEffect, useState } from "react";
import {
  FaHeart,
  FaCode,
  FaCoffee,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isAtHome, setIsAtHome] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Cek jika scroll position > 500px, tampilkan tombol
      const scrolled = window.scrollY > 500;
      setShowBackToTop(scrolled);

      // Cek jika berada di section home
      const homeSection = document.getElementById("home");
      if (homeSection) {
        const rect = homeSection.getBoundingClientRect();
        // Jika home section masih terlihat di viewport
        const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;
        setIsAtHome(isInViewport);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-sky-900 text-white pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand/About */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">
              FSH<span className="text-secondary">.</span>
            </h2>
            <p className="text-sky-200">
              Web Designer & Fullstack Developer passionate about creating
              beautiful and functional web experiences.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/febri"
                className="text-sky-300 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/febri"
                className="text-sky-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/febri"
                className="text-sky-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="h-5 w-5" />
              </a>
              <a
                href="mailto:febri@example.com"
                className="text-sky-300 hover:text-white transition-colors"
                aria-label="Email"
              >
                <FaEnvelope className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-sky-300 hover:text-white transition-colors hover:underline"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about-me"
                  className="text-sky-300 hover:text-white transition-colors hover:underline"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-sky-300 hover:text-white transition-colors hover:underline"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#me-works"
                  className="text-sky-300 hover:text-white transition-colors hover:underline"
                >
                  Me Works
                </a>
              </li>
              <li>
                <a
                  href="#contact-me"
                  className="text-sky-300 hover:text-white transition-colors hover:underline"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-3">
              <li className="text-sky-300">Web Design</li>
              <li className="text-sky-300">Frontend Development</li>
              <li className="text-sky-300">Backend Development</li>
              <li className="text-sky-300">Fullstack Solutions</li>
              <li className="text-sky-300">UI/UX Design</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Contact Info
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FaEnvelope className="h-5 w-5 text-secondary mt-0.5" />
                <span className="text-sky-300">soerjahartono22@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <FaPhone className="h-5 w-5 text-secondary mt-0.5" />
                <span className="text-sky-300">+62 812 9029 2368</span>
              </li>
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="h-5 w-5 text-secondary mt-0.5" />
                <span className="text-sky-300">Jakarta, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-sky-700 mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <p className="text-sky-300">
              &copy; {currentYear} Febri. All rights reserved.
            </p>
          </div>
        </div>

        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-secondary text-white p-3 rounded-full hover:animate-bounce shadow-lg hover:bg-secondary-dark hover:cursor-pointer transition-all z-50 group"
            aria-label="Back to top"
          >
            <svg
              className="h-5 w-5 group-hover:-translate-y-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
        )}
      </div>
    </footer>
  );
};

export default Footer;
