/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";


interface Repo {
  name: string;
  description: string;
  html_url: string;
  language: string;
}

const languageColors: Record<string, string> = {
  JavaScript: "bg-yellow-500",
  TypeScript: "bg-blue-600",
  HTML: "bg-orange-500",
  CSS: "bg-cyan-500",
  Python: "bg-green-600",
  Java: "bg-red-600",
  null: "bg-gray-600",
};

const Projects: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch(`https://api.github.com/users/OmAmberkar/repos?sort=updated`);
        const data = await res.json();
        // Optional: Filter out forked/private repos
        const filtered = data.filter((repo: any) => !repo.fork && !repo.private);
        setRepos(filtered);
      } catch (err) {
        console.error("GitHub fetch failed", err);
      }
    }

    fetchRepos();
  }, []);

  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-blue-900 to-black py-20 px-4 text-white"
    >
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 bg-clip-text text-transparent">
        🚀 Projects
      </h2>

      <div className="grid gap-14 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {repos.slice(0, 9).map((repo, idx) => (
          <motion.div
            key={repo.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/50 backdrop-blur-3xl text-white p-8 -mx-2 rounded-xl shadow-xl hover:scale-[1.2] transition-all duration-700"
          >
            <h3 className="text-xl font-bold mb-2">{repo.name}</h3>
            <p className="text-sm text-gray-300 mb-4">{repo.description || "No description provided."}</p>
            <span
              className={`text-xs px-2 py-1 rounded-full text-white ${
                languageColors[repo.language] || "bg-gray-600"
              }`}
            >
              #{repo.language || "Unknown"}
            </span>
            <div className="mt-4">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-200 underline text-sm"
              >
                View Repository →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
