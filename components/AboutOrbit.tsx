'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshWobbleMaterial, Sparkles } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function Sculpture(){const group=useRef<THREE.Group>(null);useFrame(state=>{if(group.current){group.current.rotation.x=state.clock.elapsedTime*.22;group.current.rotation.y=state.clock.elapsedTime*.34;}});return <group ref={group}><mesh rotation={[.5,.2,.2]}><torusKnotGeometry args={[.72,.2,128,24,2,3]}/><MeshWobbleMaterial color="#ff7040" factor={.18} speed={1.5} metalness={.6} roughness={.18}/></mesh><mesh rotation={[1.2,0,.4]}><torusGeometry args={[1.3,.025,8,96]}/><meshBasicMaterial color="#3939ff" transparent opacity={.8}/></mesh><mesh rotation={[0,.8,1.2]}><torusGeometry args={[1.05,.018,8,96]}/><meshBasicMaterial color="#f2bb05" transparent opacity={.8}/></mesh></group>}
export default function AboutOrbit(){return <div className="about-scene"><Canvas camera={{position:[0,0,4.5],fov:42}} dpr={[1,1.5]}><ambientLight intensity={1.6}/><pointLight position={[3,3,4]} intensity={20} color="#ff7040"/><pointLight position={[-3,-2,2]} intensity={14} color="#3939ff"/><Float speed={1.5} rotationIntensity={.25} floatIntensity={.7}><Sculpture/></Float><Sparkles count={28} scale={4} size={2} speed={.2} color="#f2bb05"/></Canvas></div>}
