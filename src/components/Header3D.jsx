"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Torus } from "@react-three/drei";

export default function Header3D() {
  return (
    <div className="w-full h-64 mb-6">
      <Canvas camera={{ position: [0, 0, 5] }}>
        {/* Lights */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        {/* Floating torus */}
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
          <Torus args={[1, 0.4, 16, 100]}>
            <meshStandardMaterial
              color="#3b82f6"
              metalness={0.7}
              roughness={0.2}
            />
          </Torus>
        </Float>

        {/* Orbit controls (optional) */}
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
