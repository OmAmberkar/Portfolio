"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  description: string;
  tech: string[];
  link?: string;
}

const experiences: ExperienceItem[] = [
  {
    company: "Intellectsia AI Services Pvt. Ltd.",
    role: "Software Development & Deployment Intern",
    duration: "November 2024 – April 2025",
    description: `
      Worked across the full stack to deliver production-grade features. 
      Built responsive UI components with React and Angular using Tailwind CSS. 
      Integrated RESTful APIs and optimized modularity by 30%. 
      Deployed scalable applications on Heroku with zero downtime and automated workflows.
    `,
    tech: ["AWS", "Angular", "Tailwind", "REST API", "Git", "Heroku"],
    link: "https://intellectsia.ai/",
  },
  // Future entries can go here...
];

const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="bg-gradient-to-b from-black to-blue-900 py-20 px-4 text-white min-h-screen"
    >
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 bg-clip-text text-transparent">
        💼 Professional Experience
      </h2>

      <div className="max-w-5xl mx-auto space-y-10">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: idx * 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)" }}
            className="bg-white/5 border-2 border-transparent bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-lg p-8 rounded-2xl shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">
                {exp.company}
              </h3>
              {exp.link && (
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:text-blue-100 text-md flex items-center gap-2 transition-colors duration-200"
                >
                  Explore <FaExternalLinkAlt className="text-sm transform hover:scale-110 transition-transform" />
                </a>
              )}
            </div>
            <p className="text-sm text-gray-300 font-medium italic mb-3 tracking-wide">
              {exp.role} • {exp.duration}
            </p>
            <p className="text-base text-gray-100 mb-6 leading-relaxed whitespace-pre-line">
              {exp.description}
            </p>
            <div className="flex flex-wrap gap-3">
              {exp.tech.map((t, i) => (
                <motion.span
                  key={i}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="text-xs px-3 py-1.5 rounded-full bg-blue-600/80 text-white font-medium hover:bg-blue-500 transition-colors duration-200"
                >
                  #{t}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;