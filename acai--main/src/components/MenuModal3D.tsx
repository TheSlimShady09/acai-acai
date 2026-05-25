'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, Sparkles, PresentationControls } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

const PURPLE = '#63407B';
const DARK_PURPLE = '#1A0B2E';

function ModalBowl({ scale = 1 }: any) {
  const bowlRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (bowlRef.current) {
      bowlRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <group ref={bowlRef} scale={scale}>
      <mesh position={[0, -0.5, 0]}>
        <cylinderGeometry args={[2, 1.2, 1.5, 32]} />
        <meshPhysicalMaterial color={DARK_PURPLE} roughness={0.05} metalness={0.9} />
      </mesh>
      <mesh position={[0, 0.25, 0]}>
        <cylinderGeometry args={[1.9, 1.9, 0.2, 32]} />
        <meshPhysicalMaterial color={PURPLE} roughness={0.3} metalness={0.1} />
      </mesh>
      {/* Some abstract fruits on top */}
      {Array.from({ length: 8 }).map((_, i) => (
        <mesh key={i} position={[
            Math.sin(i) * 1.2,
            0.4,
            Math.cos(i) * 1.2
        ]} rotation={[Math.random(), Math.random(), 0]}>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshStandardMaterial color={i % 2 === 0 ? '#FFD600' : '#e63946'} />
        </mesh>
      ))}
    </group>
  );
}

export default function MenuModal3D() {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 3, 6], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 5]} intensity={1.5} color="#ffffff" />
      <directionalLight position={[-5, 5, -5]} intensity={1} color={PURPLE} />
      
      <Environment preset="city" />
      
      <PresentationControls
        global={false}
        cursor={true}
        snap={true}
        speed={1}
        zoom={1}
        rotation={[0.2, 0, 0]}
        polar={[-0.2, 0.4]}
        azimuth={[-Math.PI/4, Math.PI/4]}
      >
        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
          <ModalBowl scale={1} />
        </Float>
      </PresentationControls>

      <Sparkles count={50} scale={5} size={3} speed={0.2} color="#FFD600" opacity={0.6} />
    </Canvas>
  );
}
