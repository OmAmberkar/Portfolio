// components/Loader.tsx
import React from 'react';
import { motion } from 'framer-motion';

const Loader: React.FC = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-white flex items-center justify-center z-[9999]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="text-3xl font-bold text-blue-600"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
      >
       <img src="/logo_colored.png" alt="OMi" />
      </motion.div>
    </motion.div>
  );
};

export default Loader;
