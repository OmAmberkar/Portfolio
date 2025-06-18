import React from 'react';

const Skills: React.FC = () => {
  const skills = ["React", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS", "Git", "Figma"];

  return (
    <section id="skills" className="py-20 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-4">Skills</h2>
      <ul className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, idx) => (
          <li key={idx} className="bg-white shadow-md p-2 px-4 rounded-md">{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
