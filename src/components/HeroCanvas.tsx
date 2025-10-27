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
import * as THREE from "three";

interface ElectronProps {
  radius: number;
  speed: number;
  tilt: [number, number];
}

function Electron({ radius, speed, tilt }: ElectronProps) {
  const mesh = useRef<THREE.Mesh>(null!);
  const theta = useRef(0);

  useFrame((_, delta) => {
    theta.current += delta * speed;
    const x = radius * Math.cos(theta.current);
    const z = radius * Math.sin(theta.current);
    mesh.current.position.set(x, 0, z);
    mesh.current.rotation.set(tilt[0], tilt[1], 0);
  });

  return (
    <Trail
      width={0.015}
      length={3}
      decay={0.7}
      color="#00ffff"
      attenuation={(t) => t * t}
    >
      <mesh ref={mesh}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial
          color="#00ffff"
          wireframe
          emissive="#00ccff"
          emissiveIntensity={1.5}
          transparent
          opacity={0.7}
        />
      </mesh>
    </Trail>
  );
}

function OrbitRing({ radius, tilt, speed }: ElectronProps) {
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame((_, delta) => {
    mesh.current.rotation.y += delta * speed * 0.3;
  });

  return (
    <mesh ref={mesh} rotation={[tilt[0] + Math.PI / 2, tilt[1], 0]}>
      <torusGeometry args={[radius, 0.003, 4, 360]} />
      <meshStandardMaterial
        color="#ffffff"
        emissive="#ffffff"
        emissiveIntensity={0.4}
        transparent
        opacity={0.15}
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
      {/* Glowing, pulsating, interactive nucleus */}
      <mesh
        ref={nucleus}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial
          color="#ffff00"
          emissive="#ffeb3b"
          emissiveIntensity={1.8}
          metalness={0.8}
          roughness={0.15}
        />
      </mesh>

      {/* Electrons & rings */}
      {electrons.map((e, i) => (
        <React.Fragment key={i}>
          <OrbitRing {...e} />
          <Electron {...e} />
        </React.Fragment>
      ))}

      {/* Energy sparkles */}
      <Sparkles
        count={80}
        size={1}
        speed={0.005}
        color="#88ccff"
        scale={[3, 3, 3]}
        opacity={0.7}
      />

      {/* Lights */}
      <ambientLight intensity={0.4} />
      <pointLight position={[2, 2, 2]} intensity={1.4} />
      <pointLight position={[-2, -2, -2]} intensity={0.5} />

      {/* Interaction: camera and glow */}
      <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={1.2} />
      <EffectComposer>
        <Bloom intensity={1.3} luminanceThreshold={0} luminanceSmoothing={0.9} />
        <ChromaticAberration offset={[0.0004, 0.0008]} />
      </EffectComposer>
    </>
  );
}

export default function AtomCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 3], fov: 45 }} style={{ height: 400 , border:"2px solid blue", borderRadius:"10px", background:"black"}} >
      <Float speed={0.5} rotationIntensity={0.1} floatIntensity={1}>
        <AtomScene />
      </Float>
    </Canvas>
  );
}
