/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useForm } from "@formspree/react";


// Success message component
const InnovativeMessage = () => (
  <div className="relative max-w-md mx-auto p-6 bg-black/70 border border-cyan-400 rounded-2xl shadow-lg text-cyan-400 text-xl font-mono text-center pointer-events-auto">
    <span className="inline-block animate-pulse mr-3 text-4xl">🚀</span>
    <br />
    Thanks for your message! I’ll connect with you shortly.
  </div>
);

// Overlay with either form or message, enhanced with email MX-check and phone-country picker
const ContactOverlay = ({ onSubmit, state }: any) => {
  const [emailError, setEmailError] = useState("");
  const [phone, setPhone] = useState("");

  // Email MX-record lookup via Google DNS-over-HTTPS
  const handleEmailBlur = async (e: React.FocusEvent<HTMLInputElement>) => {
    const input = e.target.value.trim();
    if (!input) return setEmailError("");
    const [_, domain] = input.split("@");
    if (!domain) return setEmailError("Invalid email format.");

    try {
      const res = await fetch(
        `https://dns.google/resolve?name=${domain}&type=MX`
      );
      const data = await res.json();
      if (!data.Answer || data.Answer.length === 0) {
        setEmailError("❌ Email provider not found.");
      } else {
        setEmailError("");
      }
    } catch (err) {
      setEmailError("⚠️ Verification service unavailable.");
    }
  };

  return (
    <div className="relative inset-0 flex flex-col items-center justify-center pointer-events-none">
      <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 bg-clip-text text-transparent">
        🌐 Contact Me
      </h2>

      {state.succeeded ? (
        <InnovativeMessage />
      ) : (
        <form
          onSubmit={onSubmit}
          className="bg-white/5 backdrop-blur-md text-black p-6 rounded-lg w-80 shadow-lg space-y-4 pointer-events-auto z-10"
        >
          {/* Name */}
          <div>
            <label className="block text-blue-200 font-semibold mb-1">
              Your Name
            </label>
            <input
              name="name"
              type="text"
              required
              className="w-full px-3 py-2 rounded-r-2xl border border-gray-300 text-blue-200 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email with MX check */}
          <div>
            <label className="block text-blue-200 font-semibold mb-1">
              Your Email
            </label>
            <input
              name="email"
              type="email"
              required
              onBlur={handleEmailBlur}
              className="w-full px-3 py-2 rounded-r-2xl border border-gray-300 text-blue-200 focus:ring-2 focus:ring-blue-500"
            />
            {emailError && (
              <p className="mt-1 text-sm text-red-400">{emailError}</p>
            )}
          </div>

          {/* Phone with country flags */}
          <div>
            <label className="block text-blue-200 font-semibold mb-1 rounded-b-sm">
              Your Number
            </label>
            <PhoneInput
              country="in"
              value={phone}
              onChange={setPhone}
              enableSearch
              inputProps={{ name: "number", required: true }}
              containerClass="!w-full"
              inputClass="!w-full !h-10 px-3 !hover:bg-transparent py-2 !rounded-r-2xl !border !border-gray-300 !text-blue-200 !bg-transparent !focus:ring-2 !focus:ring-blue-500"
              buttonClass=" !bg-transparent !hover:bg-transparent !text-blue-200 !focus:ring-2 !focus:ring-blue-500"
              dropdownClass="!bg-blue-950 !hover:bg-transparent !text-blue-200 !rounded-b-2xl"
              searchClass="!bg-blue-950 !hover:bg-transparent !text-blue-100 !rounded-t-2xl"
              searchStyle={{ borderRadius: "1rem" }}
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-blue-200 font-semibold mb-1">
              Message
            </label>
            <textarea
              name="message"
              rows={4}
              required
              className="w-full px-3 py-2 rounded-r-2xl border border-gray-300 text-blue-200 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full py-2 px-4 rounded-lg font-medium border border-blue-300 text-blue-100 hover:bg-blue-100 hover:text-black transition bg-transparent"
          >
            {state.submitting ? "Sending..." : "Send"}
          </button>
        </form>
      )}
    </div>
  );
};

// Model component
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

// Main Contact component
const Contact = () => {
  const [state, handleSubmit] = useForm("mldnagon");
  const [shouldRotate, setShouldRotate] = useState(true);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleSubmit(e);
    setShouldRotate(false);
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-t from-blue-500 to-black py-10 px-4 flex items-center"
    >
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
