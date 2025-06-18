import React from 'react';
import { Link } from 'react-scroll';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center p-4 bg-white shadow-md z-50">
      <h1 className="text-xl font-bold">MyPortfolio</h1>
      <nav>
        <ul className="flex gap-4 cursor-pointer  ">
          <li><Link to="about" smooth duration={500}>About</Link></li>
          <li><Link to="projects" smooth duration={500}>Projects</Link></li>
          <li><Link to="skills" smooth duration={500}>Skills</Link></li>
          <li><Link to="contact" smooth duration={500}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
