import React from "react";
import HeaderTypewriter from "../components/HeaderTypewriter";
import HeroCanvas from "../components/HeroCanvas";

const Hero: React.FC = () => (
  <section
    id="hero"
    className="min-h-screen bg-gradient-to-t from-blue-950 to-black text-blue-200 flex items-center px-6"
  >
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
      <div>
        <h1 className="text-xl md:text-2xl font-bold mb-4">I am Om Amberkar</h1>

        <h4 className="text-2xl md:text-4xl lg:text-4xl font-semibold mb-4">
          <HeaderTypewriter />
        </h4>

        <p className="text-lg md:text-xl leading-relaxed mt-6">
          I’m a lifelong learner who thrives on translating innovation into
          action—whether that’s architecting elegant web applications,
          experimenting with cutting-edge technologies, or validating
          early-stage business ideas. I embrace complexity, think systemically,
          and combine creativity with practical problem-solving to deliver
          clean, scalable solutions. Let’s collaborate to bring bold ideas to
          life.
        </p>

        <a
          href="https://drive.google.com/file/d/1NmW5iOda9E8kU-II1wcTxBPH9WcGSpia/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 bg-transparent border-2 border-blue-300 text-blue-100 py-2 px-4 rounded-lg font-medium hover:bg-blue-100 hover:text-black transition"
        >
          Download Resume
        </a>
      </div>

      <div className="hidden lg:block">
        <HeroCanvas />
      </div>
    </div>
  </section>
);

export default Hero;
