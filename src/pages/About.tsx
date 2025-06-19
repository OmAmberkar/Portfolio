import React from "react";
import {
  SparklesIcon, // Leadership
  AcademicCapIcon, // Lifelong Learner
  ChatBubbleLeftRightIcon, // Good Communicator
  UsersIcon, // Team Player
  PuzzlePieceIcon, // Problem Solver
  LightBulbIcon, // Creative Thinking
} from "@heroicons/react/24/outline";

const qualities = [
  {
    label: "Leadership",
    icon: <SparklesIcon className="h-6 w-6 text-yellow-500" />,
  },
  {
    label: "Creative Thinking",
    icon: <LightBulbIcon className="h-6 w-6 text-orange-500" />,
  },
  {
    label: "Lifelong Learner",
    icon: <AcademicCapIcon className="h-6 w-6 text-blue-500" />,
  },
  {
    label: "Good Communicator",
    icon: <ChatBubbleLeftRightIcon className="h-6 w-6 text-green-500" />,
  },
  {
    label: "Team Player",
    icon: <UsersIcon className="h-6 w-6 text-indigo-500" />,
  },
  {
    label: "Problem Solver",
    icon: <PuzzlePieceIcon className="h-6 w-6 text-purple-500" />,
  },
];

const About: React.FC = () => (
  <section id="about" className="py-20 antialiased bg-gradient-to-b from-blue-900 to-black">
    <div className="max-w-6xl mx-auto px-6 lg:flex lg:items-center lg:gap-12">
      {/* Image Panel */}
      <div className="lg:w-1/2 mb-8 lg:mb-0 flex justify-center lg:justify-start">
        <img
          src="/om-avatar.png"
          alt="Om Amberkar"
          className="w-68 rounded-xl shadow-lg"
        />
      </div>

      {/* Text Panel */}
      <div className="lg:w-1/2 text-center lg:text-left text-pink-100">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 text-transparent bg-clip-text mb-4">
          About Me
        </h2>
        <p className="mb-4">
          I’m Om Amberkar, a final-year Information Technology engineering
          student with a strong focus on full-stack web development, backend
          systems, and cloud infrastructure. I specialize in building clean,
          scalable, and production-ready applications that solve real-world
          problems through thoughtful architecture and robust code.
        </p>
        <p className="mb-6">
          Outside of coding, I actively explore emerging tech stacks, experiment
          with DevOps workflows, and dive deeper into AWS services. I’m driven
          by curiosity, challenges, and the opportunity to blend creative
          thinking with engineering precision to build impactful solutions.
        </p>

        {/* Qualities List */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {qualities.map((q) => (
            <div key={q.label} className="flex items-center space-x-2">
              <span className="text-2xl">{q.icon}</span>
              <span className="text-lg font-semibold">{q.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
