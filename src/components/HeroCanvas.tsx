"use client";

import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Sparkles,
  Trail,
  Float,
  useCursor,
} from "@react-three/drei";
import {
  EffectComposer,
  Bloom,
  ChromaticAberration,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import * as THREE from "three";

interface ElectronProps {
  radius: number;
  speed: number;
  tilt: [number, number];
}

function Electron({ radius, speed, tilt }: ElectronProps) {
  const mesh = useRef<THREE.Mesh>(null!);
  const glow = useRef<THREE.Mesh>(null!);
  const lightRef = useRef<THREE.PointLight>(null!);
  const theta = useRef(0);

  useFrame((_, delta) => {
    theta.current += delta * speed;
    const x = radius * Math.cos(theta.current);
    const z = radius * Math.sin(theta.current);

    // update positions
    mesh.current.position.set(x, 0, z);
    mesh.current.rotation.set(tilt[0], tilt[1], 0);
    glow.current.position.set(x, 0, z);
    if (lightRef.current) lightRef.current.position.set(x, 0, z);
  });

  return (
    <>
      {/* Main electron */}
      <mesh ref={mesh}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial
          color="#00ffff"
          emissive="#00ffff"
          emissiveIntensity={5}
          transparent
          opacity={1}
          toneMapped={false}
        />
      </mesh>

      {/* Glow */}
      <mesh ref={glow}>
        <sphereGeometry args={[0.18, 16, 16]} />
        <meshBasicMaterial
          color="#00ffff"
          transparent
          opacity={0.25}
          toneMapped={false}
        />
      </mesh>

      {/* Light for glow */}
      <pointLight ref={lightRef} color="#00ffff" intensity={3} distance={1.2} decay={2} />

      {/* Trail */}
      <Trail
        width={0.02}
        length={4}
        decay={0.8}
        color="#00ffff"
        attenuation={(t) => t * t}
      >
        <mesh />
      </Trail>
    </>
  );
}

function OrbitRing({ radius, tilt, speed }: ElectronProps) {
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame((_, delta) => {
    mesh.current.rotation.y += delta * speed * 0.3;
  });

  return (
    <mesh ref={mesh} rotation={[tilt[0] + Math.PI / 2, tilt[1], 0]}>
      <torusGeometry args={[radius, 0.006, 8, 360]} />
      <meshStandardMaterial
        color="#4dd0e1"
        emissive="#00bcd4"
        emissiveIntensity={2}
        transparent
        opacity={0.6}
        toneMapped={false}
      />
    </mesh>
  );
}

function AtomScene() {
  const nucleus = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);
  useCursor(hovered);

  useFrame(({ clock }) => {
    const scale = hovered
      ? 1.2 + Math.sin(clock.elapsedTime * 3) * 0.03
      : 1 + Math.sin(clock.elapsedTime * 2) * 0.05;
    nucleus.current.scale.set(scale, scale, scale);
  });

  const electrons = [
    { radius: 0.5, speed: 2.1, tilt: [0.5, 0.2] as [number, number] },
    { radius: 0.7, speed: 1.5, tilt: [1.0, -0.4] as [number, number] },
    { radius: 0.9, speed: 0.7, tilt: [0.2, 1.0] as [number, number] },
    { radius: 1.1, speed: 0.4, tilt: [0.8, -0.2] as [number, number] },
  ];

  return (
    <>
      {/* Nucleus */}
      <mesh
        ref={nucleus}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[0.25, 32, 32]} />
        <meshStandardMaterial
          color="#ffff00"
          emissive="#ffeb3b"
          emissiveIntensity={6}
          metalness={0.8}
          roughness={0.1}
          toneMapped={false}
        />
      </mesh>

      {/* Nucleus outer glow */}
      <mesh>
        <sphereGeometry args={[0.35, 32, 32]} />
        <meshBasicMaterial
          color="#ffff00"
          transparent
          opacity={0.15}
          toneMapped={false}
        />
      </mesh>

      {/* Nucleus light */}
      <pointLight position={[0, 0, 0]} color="#ffeb3b" intensity={4} distance={2} decay={2} />

      {/* Electrons and rings */}
      {electrons.map((e, i) => (
        <React.Fragment key={i}>
          <OrbitRing {...e} />
          <Electron {...e} />
        </React.Fragment>
      ))}

      {/* Sparkles */}
      <Sparkles
        count={100}
        size={2}
        speed={0.01}
        color="#88ccff"
        scale={[3, 3, 3]}
        opacity={0.9}
      />

      {/* Lights */}
      <ambientLight intensity={0.3} />
      <pointLight position={[2, 2, 2]} intensity={1} />
      <pointLight position={[-2, -2, -2]} intensity={0.5} />

      {/* Controls */}
      <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={1.2} />

      {/* Postprocessing */}
      <EffectComposer>
        <Bloom
          intensity={0.7}
          luminanceThreshold={0}
          luminanceSmoothing={0.9}
          blendFunction={BlendFunction.ADD}
          mipmapBlur
        />
        <ChromaticAberration offset={[0.001, 0.002]} />
      </EffectComposer>
    </>
  );
}

export default function AtomCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 3], fov: 45 }}
      style={{ height: 400, background: "transparent" }}
      gl={{
        alpha: true,
        premultipliedAlpha: false,
        antialias: true,
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.5,
      }}
      onCreated={({ gl }) => {
        gl.setClearColor(new THREE.Color(0, 0, 0), 0);
        gl.autoClear = true;
      }}
    >
      <Float speed={0.5} rotationIntensity={0.1} floatIntensity={1}>
        <AtomScene />
      </Float>
    </Canvas>
  );
}
