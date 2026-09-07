'use client';
import { Canvas } from '@react-three/fiber';
import { Environment, Float, Lightformer, Sparkles } from '@react-three/drei';
import LogoModel from './LogoModel';

export default function OrbitScene() {
  return <div className="scene" aria-hidden="true">
    <Canvas camera={{position:[0,0,5],fov:45}} dpr={[1,1.5]}>
      <ambientLight intensity={1.8}/>
      <pointLight position={[3,3,4]} intensity={22} color="#f4d25a"/>
      <pointLight position={[-4,-2,1]} intensity={10} color="#2869bb"/>
      {/* Metallic surfaces need reflections; this local studio leaves the hero background transparent. */}
      <Environment resolution={128}>
        <color attach="background" args={['#50505b']}/>
        <Lightformer position={[0,2,5]} scale={[5,3,1]} intensity={2} color="#fffdf9"/>
        <Lightformer position={[-4,0,2]} rotation={[0,Math.PI / 3,0]} scale={[3,5,1]} intensity={1.5} color="#aee6ed"/>
        <Lightformer position={[3,1,-3]} rotation={[0,-Math.PI / 2,0]} scale={[3,4,1]} intensity={2} color="#f4d25a"/>
      </Environment>
      <Float speed={2} rotationIntensity={0} floatIntensity={.6}><LogoModel size={3}/></Float>
      <Sparkles count={36} scale={5} size={2} speed={.25} color="#f4d25a"/>
    </Canvas>
  </div>;
}
