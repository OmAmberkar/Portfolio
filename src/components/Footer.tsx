import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-center py-4 text-sm bg-gray-200">
      &copy; {new Date().getFullYear()} Your Name. All rights reserved.
    </footer>
  );
};

export default Footer;
