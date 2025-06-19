/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaDatabase } from 'react-icons/fa';
import { SiMongodb, SiFirebase, SiTailwindcss, SiExpress } from 'react-icons/si';

const projects = [
  {
    title: "MovieWeb",
    desc: "A movie browser built using Firebase backend and Tailwind UI.",
    tech: ["React", "Firebase", "Tailwind"],
    link: "https://github.com/yourname/movieweb",
    icon: <SiFirebase className="text-blue-400 text-3xl" />,
  },
  {
    title: "Query Tracker",
    desc: "Track Mongo queries visually with full MERN integration.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    link: "https://github.com/yourname/query-tracker",
    icon: <FaDatabase className="text-green-400 text-3xl" />,
  },
  {
    title: "Login Form",
    desc: "A basic login form styled with custom HTML/CSS.",
    tech: ["HTML", "CSS"],
    link: "https://github.com/yourname/login-form",
    icon: <FaHtml5 className="text-orange-400 text-3xl" />,
  },
];

const badgeColors: Record<string, string> = {
  React: 'bg-blue-600',
  Firebase: 'bg-yellow-500',
  Tailwind: 'bg-cyan-500',
  MongoDB: 'bg-green-600',
  Express: 'bg-gray-700',
  'Node.js': 'bg-green-700',
  HTML: 'bg-orange-600',
  CSS: 'bg-blue-500',
};

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="bg-gradient-to-t from-blue-900 to-black py-20 px-4 antialiased"
    >
      <h2 className="text-4xl pb-4 font-bold text-center bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 text-transparent bg-clip-text mb-12">
        Projects
      </h2>

      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="bg-white/10 border border-white/20 backdrop-blur-md text-white p-6 rounded-xl shadow-xl hover:scale-[1.02] transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">{proj.title}</h3>
              <div>{proj.icon}</div>
            </div>
            <p className="text-sm text-gray-200 mb-4">{proj.desc}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {proj.tech.map((tech, techIdx) => (
                <span
                  key={techIdx}
                  className={`text-xs px-2 py-1 rounded-full text-white ${badgeColors[tech]}`}
                >
                  #{tech}
                </span>
              ))}
            </div>
            <a
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-blue-400 hover:text-blue-200 underline"
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
