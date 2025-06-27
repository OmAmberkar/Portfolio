import { motion } from "framer-motion";
import {
  FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaGithub, FaAws,
} from "react-icons/fa";
import {
  SiExpress, SiJavascript, SiTypescript, SiAngular, SiFirebase,
  SiMongodb, SiPython, SiMysql
} from "react-icons/si";

import SkillsBackgroundScene from "../components/3DBackground";

const skills = [
  { name: "React", icon: <FaReact className="text-cyan-400 animate-spin" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-300" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { name: "Express", icon: <SiExpress className="text-gray-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-600" /> },
  { name: "GitHub", icon: <FaGithub className="text-white" /> },
  { name: "Angular", icon: <SiAngular className="text-red-600" /> },
  { name: "AWS", icon: <FaAws className="text-orange-400" /> },
  { name: "Python", icon: <SiPython className="text-blue-400" /> },
  { name: "SQL", icon: <SiMysql className="text-blue-700" /> },
];

export default function SkillMarquee() {
  return (
    <section className="relative min-h-[50vh] bg-gradient-to-b from-black to-blue-800 overflow-hidden py-16 px-4 md:px-10">
      {/* 🔵 3D Background Layer */}
      <div className="absolute inset-0 -z-10">
        <SkillsBackgroundScene />
      </div>

      {/* 🔵 Section Header */}
      <h2 className="text-4xl pb-4 font-bold text-center bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 text-transparent bg-clip-text mb-20">
        🛠️ Tech Stack & Skills
      </h2>

      {/* 🔵 Marquee Row 1 (left to right) */}
      <div className="overflow-hidden w-full h-24">
        <motion.div
          className="flex gap-12 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          {[...skills, ...skills].map((skill, idx) => (
            <div
              key={`forward-${idx}`}
              className="text-6xl md:text-7xl hover:scale-125 hover:animate-bounce transition-transform duration-300 cursor-pointer"
              title={skill.name}
            >
              {skill.icon}
            </div>
          ))}
        </motion.div>
      </div>

      {/* 🔵 Marquee Row 2 (right to left) */}
      <div className="overflow-hidden w-full h-24 mt-6">
        <motion.div
          className="flex gap-12 w-max"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          {[...skills, ...skills].map((skill, idx) => (
            <div
              key={`reverse-${idx}`}
              className="text-6xl md:text-7xl hover:scale-125 hover:animate-bounce transition-transform duration-300 cursor-pointer"
              title={skill.name}
            >
              {skill.icon}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
