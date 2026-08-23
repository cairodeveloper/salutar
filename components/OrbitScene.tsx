'use client';
import { Canvas } from '@react-three/fiber';
import { Float, Sparkles } from '@react-three/drei';
import LogoModel from './LogoModel';

export default function OrbitScene(){return <div className="scene" aria-hidden="true"><Canvas camera={{position:[0,0,5],fov:45}} dpr={[1,1.5]}><ambientLight intensity={1.8}/><pointLight position={[3,3,4]} intensity={22} color="#f4d25a"/><pointLight position={[-4,-2,1]} intensity={10} color="#2869bb"/><Float speed={2} rotationIntensity={0} floatIntensity={.6}><LogoModel size={3}/></Float><Sparkles count={36} scale={5} size={2} speed={.25} color="#f4d25a"/></Canvas></div>;}
