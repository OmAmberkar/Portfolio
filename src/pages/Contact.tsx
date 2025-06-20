import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-t from-blue-500 to-black text-white py-20 px-6 text-center"
    >
      <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-500 text-transparent bg-clip-text">
        👋🏽 Contact Me
      </h2>

      <p className="text-lg text-gray-300 mb-8">
        Let's build something together —{" "}
        <a
          href="mailto:omamberkar@gmail.com"
          className="text-blue-300 hover:text-white underline transition"
        >
          omamberkar@gmail.com
        </a>
      </p>

      <div className="flex justify-center gap-6 text-3xl">
        <a
          href="https://github.com/OmAmberkar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-400 transition transform hover:scale-110"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/OmAmberkar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-400 transition transform hover:scale-110"
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
};

export default Contact;
