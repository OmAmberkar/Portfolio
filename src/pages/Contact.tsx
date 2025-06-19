import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 text-center bg-gray-50">
      <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
      <p>Let's work together! Reach me at <a href="mailto:yourname@example.com" className="text-blue-600 underline">yourname@example.com</a></p>
      <div className="flex justify-center gap-4 mt-4">
        <a href="https://github.com/yourname" target="_blank">GitHub</a>
        <a href="https://linkedin.com/in/yourname" target="_blank">LinkedIn</a>
      </div>
    </section>
  );
};

export default Contact;
