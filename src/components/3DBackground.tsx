import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

export default function SkillsBackgroundScene() {
  return (
    <div className="absolute inset-0 -z-10 ">
      <Canvas camera={{ position: [0, 0, 1] }}>
        {/* Add lighting if needed */}
        <ambientLight intensity={0.5} />
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={1} // Full color instead of grayscale
          fade
          speed={1}
        />
      </Canvas>
    </div>
  );
}
