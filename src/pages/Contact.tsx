/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useEffect, useRef, useState, useMemo } from "react";
import { useForm } from "@formspree/react";

// Words background component
// const techWords = [ "AI", "Blockchain", "Cloud", "Cybersecurity", "Quantum", "IoT", , "VR", "AR", "DevOps",
//   "5G", "API", "ML", ];

// const FloatingWordsBg = () => {
//   const words = useMemo(() => techWords.map(w => ({
//     word: w,
//     top: `${Math.random() * 90}%`,
//     left: `${Math.random() * 90}%`,
//     duration: `${6 + Math.random() * 8}s`,
//     delay: `${Math.random() * 4}s`,
//   })), []);

//   return (
//     <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
//       {words.map(({ word, top, left, duration, delay }, i) => (
//         <span
//           key={i}
//           style={{ top, left, animationDelay: delay, animationDuration: duration }}
//           className="absolute text-blue-200 text-base font-mono opacity-10 animate-floating"
//         >{word}</span>
//       ))}
//       <style>{`
//         @keyframes floating {
//           0%,100%{transform:translateY(0);opacity:0.3;}
//           50%{transform:translateY(-15px);opacity:0.7;}
//         }
//         .animate-floating {
//           animation-name: floating;
//           animation-timing-function: ease-in-out;
//           animation-iteration-count: infinite;
//           animation-direction: alternate;
//           position: absolute;
//         }
//       `}</style>
//     </div>
//   );
// };

// Message shown after submit
const InnovativeMessage = () => (
  <div className="relative max-w-md mx-auto p-6 bg-black/70 border border-cyan-400 rounded-2xl shadow-lg text-cyan-400 text-xl font-mono text-center pointer-events-auto">
    <span className="inline-block animate-pulse mr-3 text-4xl">🚀</span><br/>
    Thanks for your message! I’ll connect with you shortly.
  </div>
);

// Overlay with either form or message
const ContactOverlay = ({ onSubmit, state }: any) => (
  <div className="relative inset-0 flex flex-col items-center justify-center pointer-events-none">
    <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 bg-clip-text text-transparent">
      🌐 Contact Me
    </h2>
    {state.succeeded ? (
      <>
        {/* <FloatingWordsBg />*/}
        <InnovativeMessage />
      </>
    ) : (
      <form
        onSubmit={onSubmit}
        className="bg-white/5 backdrop-blur-md text-black p-6 rounded-lg w-80 shadow-lg space-y-4 pointer-events-auto z-10"
      >
        {/* Your form fields */}
        <div>
          <label className="block text-blue-200 font-semibold mb-1">Your Name</label>
          <input name="name" type="text" required className="w-full px-3 py-2 rounded-2xl border border-gray-300 text-blue-200 focus:ring-2 focus:ring-blue-500"/>
        </div>
        <div>
          <label className="block text-blue-200 font-semibold mb-1">Your Email</label>
          <input name="email" type="email" required className="w-full px-3 py-2 rounded-2xl border border-gray-300 text-blue-200 focus:ring-2 focus:ring-blue-500"/>
        </div>
        <div>
          <label className="block text-blue-200 font-semibold mb-1">Your Number</label>
          <input name="number" type="text" required className="w-full px-3 py-2 rounded-2xl border border-gray-300 text-blue-200 focus:ring-2 focus:ring-blue-500"/>
        </div>
        <div>
          <label className="block text-blue-200 font-semibold mb-1">Message</label>
          <textarea name="message" rows={4} required className="w-full px-3 py-2 rounded-2xl border border-gray-300 text-blue-200 focus:ring-2 focus:ring-blue-500"/>
        </div>
        <button type="submit" disabled={state.submitting}
          className="w-full py-2 px-4 rounded-lg font-medium border border-blue-300 text-blue-100 hover:bg-blue-100 hover:text-black transition bg-transparent"
        >
          {state.submitting ? "Sending..." : "Send"}
        </button>
      </form>
    )}
  </div>
);

// Model component, rotating only after submit
function RotatingModel({ shouldRotate }: { shouldRotate: boolean }) {
  const group = useRef<any>(null);
  const { scene } = useGLTF("/model3.glb");

  useEffect(() => {
    scene.traverse((child: any) => {
      if (child.isMesh) {
        child.castShadow = child.receiveShadow = true;
        if (child.name.toLowerCase().includes("plane")) child.visible = false;
      }
    });
  }, [scene]);

  useFrame(() => {
    if (shouldRotate && group.current) {
      group.current.rotation.y += 0.001;
    }
  });

  return (
    <group ref={group} scale={0.01} position={[0, -1.5, 0]}>
      <primitive object={scene} />
    </group>
  );
}

const Contact = () => {
  const [state, handleSubmit] = useForm("mldnagon");
  const [shouldRotate, setShouldRotate] = useState(true);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleSubmit(e);
    setShouldRotate(false);
  };

  return (
    <section id="contact" className="min-h-screen bg-gradient-to-t from-blue-500 to-black py-10 px-4 flex items-center">
      <div className="mx-auto w-full max-w-7xl flex flex-col lg:flex-row gap-10 items-center justify-center">
        <div className="w-full lg:w-1/2 h-80 lg:h-[500px]">
          <Canvas shadows camera={{ position: [0, 1, 6], fov: 45 }}>
            <ambientLight intensity={0.7} />
            <directionalLight position={[5, 5, 5]} intensity={0.3} />
            <OrbitControls enableZoom={false} />
            <RotatingModel shouldRotate={shouldRotate} />
          </Canvas>
        </div>
        <div className="w-full lg:w-1/2">
          <ContactOverlay onSubmit={onSubmit} state={state} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
