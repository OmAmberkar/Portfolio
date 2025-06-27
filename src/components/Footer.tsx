// import React from 'react';

// const Footer: React.FC = () => {
//   return (
//     <footer className="bg-black text-center py-8 text-sm text-gray-300">
//       <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4">
//         <div className="flex items-center space-x-6">
//           <a href="#hero" className="text-cyan-400 hover:text-white">Home</a>
//           <a href="#experience" className="text-cyan-400 hover:text-white">Experience</a>
//           <a href="#projects" className="text-cyan-400 hover:text-white">Projects</a>
//           <a href="#contact" className="text-cyan-400 hover:text-white">Contact</a>
//         </div>
//         <div className="text-xs text-gray-500">
//           &copy; {new Date().getFullYear()} Om Amberkar. All Rights Reserved.
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';

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
          <img src="/logo_colored.png" alt="Aryan Shetty Logo" className="h-10" />
          <span className="text-2xl font-semibold text-cyan-400">Om Amberkar</span>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a  onClick={(e) => {e.preventDefault(); scrollToId("hero");}} className="text-cyan-400 hover:text-white">Home</a>
          <a  onClick={(e) => {e.preventDefault(); scrollToId("experience");}} className="text-cyan-400 hover:text-white">Experience</a>
          <a  onClick={(e) => {e.preventDefault(); scrollToId("projects");}} className="text-cyan-400 hover:text-white">Projects</a>
          <a  onClick={(e) => {e.preventDefault(); scrollToId("contact");}} className="text-cyan-400 hover:text-white">Contact</a>
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
