'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, PresentationControls, Text } from '@react-three/drei';
import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';

const PURPLE = '#63407B';
const DARK_PURPLE = '#1A0B2E';

function IngredientMesh({ type, isSelected }: { type: string, isSelected: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    if (isSelected && meshRef.current && !hasEntered) {
      // Simulate physics drop
      gsap.fromTo(meshRef.current.position, 
        { y: 5 }, 
        { y: 0.5 + Math.random() * 0.5, ease: 'bounce.out', duration: 1.5, delay: Math.random() * 0.2 }
      );
      gsap.fromTo(meshRef.current.rotation,
        { x: Math.random() * Math.PI, y: Math.random() * Math.PI },
        { x: 0, y: 0, duration: 1.5 }
      );
      setHasEntered(true);
    } else if (!isSelected && meshRef.current && hasEntered) {
      // Remove
      gsap.to(meshRef.current.position, { y: -5, duration: 0.5, ease: 'power2.in' });
      setHasEntered(false);
    }
  }, [isSelected, hasEntered]);

  if (!isSelected && !hasEntered) return null;

  // Render different shapes based on type
  if (type === 'Banana') {
    return (
      <mesh ref={meshRef} position={[(Math.random()-0.5)*1.5, 0, (Math.random()-0.5)*1.5]}>
        <cylinderGeometry args={[0.3, 0.3, 0.1, 16]} />
        <meshStandardMaterial color="#fffacd" />
      </mesh>
    );
  }
  if (type === 'Strawberry') {
    return (
      <mesh ref={meshRef} position={[(Math.random()-0.5)*1.5, 0, (Math.random()-0.5)*1.5]}>
        <sphereGeometry args={[0.25, 16, 16]} />
        <meshStandardMaterial color="#e63946" />
      </mesh>
    );
  }
  if (type === 'Granola' || type === 'Chia Seeds') {
    return (
      <group ref={meshRef as any} position={[(Math.random()-0.5)*1.5, 0, (Math.random()-0.5)*1.5]}>
        {Array.from({ length: 5 }).map((_, i) => (
          <mesh key={i} position={[(Math.random()-0.5)*0.5, Math.random()*0.2, (Math.random()-0.5)*0.5]}>
            <dodecahedronGeometry args={[0.05]} />
            <meshStandardMaterial color="#d4a373" />
          </mesh>
        ))}
      </group>
    );
  }
  if (type === 'Coconut') {
    return (
      <mesh ref={meshRef} position={[(Math.random()-0.5)*1.5, 0, (Math.random()-0.5)*1.5]}>
        <boxGeometry args={[0.4, 0.05, 0.2]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
    );
  }
  
  // Default abstract ingredient
  return (
    <mesh ref={meshRef} position={[(Math.random()-0.5)*1.5, 0, (Math.random()-0.5)*1.5]}>
      <octahedronGeometry args={[0.15]} />
      <meshStandardMaterial color="#a7c957" />
    </mesh>
  );
}

function BowlBase() {
  const bowlRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (bowlRef.current) {
      bowlRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
    }
  });

  return (
    <group ref={bowlRef}>
      <mesh position={[0, -0.5, 0]}>
        <cylinderGeometry args={[2.5, 1.5, 1.5, 64]} />
        <meshPhysicalMaterial color={DARK_PURPLE} roughness={0.1} metalness={0.8} />
      </mesh>
      <mesh position={[0, 0.25, 0]}>
        <cylinderGeometry args={[2.4, 2.4, 0.2, 64]} />
        <meshPhysicalMaterial color={PURPLE} roughness={0.4} metalness={0.1} />
      </mesh>
    </group>
  );
}

export default function BuildScene3D({ selectedIngredients }: { selectedIngredients: string[] }) {
  const possibleIngredients = ['Banana', 'Strawberry', 'Granola', 'Chia Seeds', 'Coconut', 'Kiwi'];

  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 5, 8], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 5]} intensity={1.5} color="#ffffff" />
      <directionalLight position={[-5, 5, -5]} intensity={1} color={PURPLE} />
      
      <Environment preset="city" />
      
      <PresentationControls
        global={true}
        cursor={true}
        snap={true}
        speed={1}
        zoom={1}
        rotation={[0.2, 0, 0]}
        polar={[-0.2, 0.4]}
        azimuth={[-Math.PI/4, Math.PI/4]}
      >
        <group position={[0, -1, 0]}>
          <BowlBase />
          {possibleIngredients.map(ing => (
            <IngredientMesh key={ing} type={ing} isSelected={selectedIngredients.includes(ing)} />
          ))}
        </group>
      </PresentationControls>
    </Canvas>
  );
}
