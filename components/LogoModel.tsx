'use client';

import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

type LogoModelProps = {
  size?: number;
};

const MODEL_PATH = '/models/Logo.glb';

export default function LogoModel({
  size = 2.7,
}: LogoModelProps) {
  const group = useRef<THREE.Group>(null);
  const { scene } = useGLTF(MODEL_PATH);
  const model = useMemo(() => scene.clone(true), [scene]);

  const { center, scale } = useMemo(() => {
    model.updateMatrixWorld(true);
    const box = new THREE.Box3().setFromObject(model);
    const modelCenter = box.getCenter(new THREE.Vector3());
    const dimensions = box.getSize(new THREE.Vector3());
    const largestDimension = Math.max(dimensions.x, dimensions.y, dimensions.z) || 1;

    return {
      center: modelCenter,
      scale: size / largestDimension,
    };
  }, [model, size]);

  useFrame((state) => {
    if (!group.current) return;
    const animationTime = Math.max(0, state.clock.elapsedTime - 1.25);
    group.current.rotation.y = animationTime * 0.35;
    group.current.rotation.x = Math.sin(animationTime * 0.45) * 0.06;
  });

  return (
    <group ref={group}>
      <group scale={scale} rotation={[Math.PI / 2, 0, 0]}>
        <primitive
          object={model}
          position={[-center.x, -center.y, -center.z]}
        />
      </group>
    </group>
  );
}

useGLTF.preload(MODEL_PATH);
