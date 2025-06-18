import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 h-18 left-0 w-full bg-tarnsparent backdrop-blur-xl text-blue-50 shadow-md z-50 rounded-b-xl ">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center mt-2">
        <motion.h1
          className="text-2xl font-extrabold"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          MyPortfolio
        </motion.h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-18 ">
          {navItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.3 }}
            >
              <Link
                to={item.id}
                smooth
                duration={500}
                className="text-blue-100 font-medium hover:text-yellow-200 cursor-pointer transition "
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <motion.button
            onClick={toggleMenu}
            className="text-blue-100 focus:outline-none"
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>
      </div>

      {/* Animated Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gradient-to-t from-blue-900 to-black  shadow-sm px-6 overflow-hidden"
          >
            <ul className="flex flex-col gap-4 py-4">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i }}
                >
                  <Link
                    to={item.id}
                    smooth
                    duration={500}
                    onClick={closeMenu}
                    className="block text-blue-200 font-medium hover:text-blue-600 cursor-pointer transition"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
