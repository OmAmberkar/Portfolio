import React from "react";
import {
  FaInstagram,
  FaWhatsapp,
  FaGithub,
  FaDiscord,
  FaLinkedin,
} from "react-icons/fa";

const Footer: React.FC = () => {
  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-blue-500 to-black text-center py-8 text-sm text-gray-300">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-4 mb-4 md:mb-0">
          <img
            src="/logo_colored.png"
            alt="Aryan Shetty Logo"
            className="h-10"
          />
          <span className="text-2xl font-semibold text-cyan-400">
            Om Amberkar
          </span>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a
            onClick={(e) => {
              e.preventDefault();
              scrollToId("hero");
            }}
            className="text-cyan-400 hover:text-white cursor-pointer transition-colors duration-300"
          >
            Home
          </a>
          <a
            onClick={(e) => {
              e.preventDefault();
              scrollToId("experience");
            }}
            className="text-cyan-400 hover:text-white cursor-pointer transition-colors duration-300"
          >
            Experience
          </a>
          <a
            onClick={(e) => {
              e.preventDefault();
              scrollToId("projects");
            }}
            className="text-cyan-400 hover:text-white cursor-pointer transition-colors duration-300"
          >
            Projects
          </a>
          <a
            onClick={(e) => {
              e.preventDefault();
              scrollToId("contact");
            }}
            className="text-cyan-400 hover:text-white cursor-pointer transition-colors duration-300"
          >
            Contact
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-6 mb-4 md:mb-0 text-cyan-400">
          <a
            href="https://wa.me/919082386362"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="hover:text-white transition-colors duration-300"
          >
            <FaWhatsapp size={20} />
          </a>
          <a
            href="https://github.com/OmAmberkar"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-white transition-colors duration-300"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="https://linkedin.com/in/om-amberkar-09a5362a5"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-white transition-colors duration-300"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://instagram.com/abt.omi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-white transition-colors duration-300"
          >
            <FaInstagram size={20} />
          </a>

          <div className="flex items-center space-x-2 text-cyan-400">
            <FaDiscord size={20} />
            <span>omi0223</span>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <span className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Om Amberkar. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
