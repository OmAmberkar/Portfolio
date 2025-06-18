"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

const HeaderTypewriter: React.FC = () => (
  <span className="font-bold bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 text-transparent bg-clip-text">
    <Typewriter
      words={[
        "Full-Stack Software Engineer",
        "Backend Systems Developer",
        "Cloud-Native Application Builder",
        "DevOps and Infrastructure Intern",
        "MERN Stack Engineer",
        "Node.js API Specialist",
        "AWS Cloud Practitioner",
        "Agile-Focused Developer",
      ]}
      loop={0} // continuously loop
      cursor={true} // show cursor
      cursorStyle="#" // pipe cursor
      cursorBlinking={true} // blinking effect
      typeSpeed={80}
      deleteSpeed={50}
      delaySpeed={1500}
    />
  </span>
);

export default HeaderTypewriter;
