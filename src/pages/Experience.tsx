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
    tech: ["React", "Angular", "Tailwind", "REST API", "Git", "Heroku"],
    link: "https://intellectsia.ai/",
  },
  // Future entries can go here...
];

const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="bg-gradient-to-b from-black to-blue-900 py-20 px-4 text-white"
    >
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 bg-clip-text text-transparent">
        💼 Experience
      </h2>

      <div className="max-w-5xl mx-auto space-y-8">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="bg-white/10 border border-white/20 backdrop-blur-md p-6 rounded-xl shadow-xl"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-2xl font-semibold">{exp.company}</h3>
              {exp.link && (
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-200 text-sm flex items-center gap-1"
                >
                  Visit <FaExternalLinkAlt className="inline-block text-xs" />
                </a>
              )}
            </div>
            <p className="text-sm text-gray-300 italic mb-2">{exp.role} • {exp.duration}</p>
            <p className="text-sm text-gray-200 mb-4 whitespace-pre-line">{exp.description}</p>
            <div className="flex flex-wrap gap-2">
              {exp.tech.map((t, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 rounded-full bg-blue-700 text-white"
                >
                  #{t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
