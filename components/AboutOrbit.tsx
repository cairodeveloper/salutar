'use client';

import { Float, Sparkles } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

type VesselProps = {
  points: [number, number, number][];
  radius: number;
  color?: string;
};

function Vessel({ points, radius, color = '#9d1717' }: VesselProps) {
  const curve = useMemo(
    () => new THREE.CatmullRomCurve3(points.map((point) => new THREE.Vector3(...point))),
    [points],
  );

  return (
    <mesh>
      <tubeGeometry args={[curve, 32, radius, 12, false]} />
      <meshPhysicalMaterial color={color} roughness={0.32} clearcoat={0.75} />
    </mesh>
  );
}

function Heart() {
  const heart = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!heart.current) return;
    heart.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.65) * 0.38;
    heart.current.rotation.z = 0.1 + Math.sin(state.clock.elapsedTime * 0.42) * 0.035;
  });

  const tissue = {
    color: '#8f1519',
    emissive: '#310305',
    emissiveIntensity: 0.28,
    metalness: 0.12,
    roughness: 0.3,
    clearcoat: 0.9,
    clearcoatRoughness: 0.18,
  };

  return (
    <group ref={heart} scale={0.94} position={[0, -0.12, 0]} rotation={[-0.08, 0, 0.1]}>
      <mesh position={[-0.08, -0.28, 0]} scale={[0.84, 1.15, 0.68]}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshPhysicalMaterial {...tissue} />
      </mesh>
      <mesh position={[-0.47, 0.26, -0.02]} scale={[0.56, 0.72, 0.58]} rotation={[0, 0, -0.22]}>
        <sphereGeometry args={[1, 48, 48]} />
        <meshPhysicalMaterial {...tissue} color="#a51d21" />
      </mesh>
      <mesh position={[0.43, 0.24, 0.01]} scale={[0.53, 0.7, 0.56]} rotation={[0, 0, 0.2]}>
        <sphereGeometry args={[1, 48, 48]} />
        <meshPhysicalMaterial {...tissue} color="#771015" />
      </mesh>

      <Vessel radius={0.2} color="#a82628" points={[[0.02, 0.35, 0], [0.02, 0.88, -0.02], [0.32, 1.16, 0], [0.78, 1.08, 0.02]]} />
      <Vessel radius={0.16} color="#b62b2c" points={[[0.02, 0.38, 0.4], [0.36, 0.65, 0.48], [0.95, 0.63, 0.35]]} />
      <Vessel radius={0.15} color="#711015" points={[[0.48, 0.32, -0.12], [0.72, 0.67, -0.1], [1.02, 0.72, -0.06]]} />
      <Vessel radius={0.16} color="#741116" points={[[ -0.48, 0.35, -0.08], [-0.68, 0.78, -0.04], [-0.72, 1.18, 0]]} />
      <Vessel radius={0.105} color="#b62b2c" points={[[0.17, 1.08, 0], [0.14, 1.4, 0.01]]} />
      <Vessel radius={0.1} color="#a32125" points={[[0.43, 1.1, 0], [0.5, 1.43, 0.02]]} />
      <Vessel radius={0.095} color="#8d191d" points={[[0.68, 1.04, 0], [0.84, 1.33, 0.02]]} />

      <Vessel radius={0.026} color="#ef3438" points={[[0.08, 0.54, 0.67], [-0.02, 0.15, 0.72], [-0.13, -0.35, 0.67], [-0.2, -0.9, 0.46]]} />
      <Vessel radius={0.022} color="#d9282e" points={[[-0.05, 0.18, 0.7], [-0.4, 0.02, 0.63], [-0.64, -0.35, 0.45]]} />
      <Vessel radius={0.02} color="#ef3438" points={[[0.02, 0.12, 0.7], [0.37, -0.04, 0.62], [0.56, -0.5, 0.43]]} />
      <Vessel radius={0.016} color="#ef3438" points={[[-0.12, -0.35, 0.67], [0.16, -0.5, 0.64], [0.34, -0.76, 0.48]]} />
    </group>
  );
}

export default function AboutOrbit() {
  return (
    <div className="about-scene">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 42 }} dpr={[1, 1.5]}>
        <ambientLight intensity={1.8} />
        <pointLight position={[3, 3, 4]} intensity={24} color="#ff8a68" />
        <pointLight position={[-3, -2, 2]} intensity={12} color="#3939ff" />
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.7}>
          <Heart />
        </Float>
        <Sparkles count={28} scale={4} size={2} speed={0.2} color="#f2bb05" />
      </Canvas>
    </div>
  );
}
