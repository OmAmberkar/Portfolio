// components/Loader.tsx
import React from 'react';
import { motion } from 'framer-motion';

const Loader: React.FC = () => {
  return (
    <motion.div
      className="fixed inset-0 backdrop-blur-xl bg-black/60 flex items-center justify-center z-[9999]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative w-32 h-32 flex items-center justify-center">
        {/* Gradient Ring */}
        <motion.div
          className="absolute w-full h-full rounded-full border-4 border-t-blue-400 border-b-transparent border-l-transparent border-r-blue-600"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
        />

        {/* Logo Pulse */}
        <motion.img
          src="/logo_colored.png"
          alt="OMi"
          className="w-16 h-16 z-10"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
        />
      </div>

      {/* Branding text */}
      <motion.div
        className="absolute bottom-10 text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Om Amberkar | Building Experiences
      </motion.div>
    </motion.div>
  );
};

export default Loader;
