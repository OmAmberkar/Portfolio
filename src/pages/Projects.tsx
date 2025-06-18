import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    { title: "Portfolio Website", desc: "My personal portfolio built with React and Tailwind CSS.", tech: "React, Tailwind", link: "https://github.com/yourname/portfolio" },
    { title: "E-commerce App", desc: "An e-commerce site with shopping cart, Stripe integration.", tech: "React, Node.js", link: "#" },
  ];

  return (
    <section id="projects" className="py-20 text-center">
      <h2 className="text-4xl font-bold mb-4">Projects</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {projects.map((proj, idx) => (
          <div key={idx} className="border p-4 rounded-md shadow-md max-w-xs">
            <h3 className="text-xl font-bold">{proj.title}</h3>
            <p>{proj.desc}</p>
            <p className="italic">{proj.tech}</p>
            <a href={proj.link} target="_blank" className="text-blue-600 underline">View</a>
          </div>
        ))}
      </div>
      
    </section>
  );
};

export default Projects;
