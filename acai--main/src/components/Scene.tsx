'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, ContactShadows, Sparkles, PerspectiveCamera } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const PURPLE = '#63407B';
const DARK_PURPLE = '#1A0B2E';
const GREEN = '#00C853';
const YELLOW = '#FFD600';

function AcaiBowl({ position, scale, rotation, id }: any) {
  const bowlRef = useRef<THREE.Group>(null);
  
  return (
    <group ref={bowlRef} position={position} scale={scale} rotation={rotation} name={id}>
      {/* Bowl Base */}
      <mesh position={[0, -0.5, 0]}>
        <cylinderGeometry args={[1.5, 1, 1, 32]} />
        <meshPhysicalMaterial color={DARK_PURPLE} roughness={0.1} metalness={0.8} />
      </mesh>
      {/* Acai contents */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[1.45, 1.45, 1.05, 32]} />
        <meshPhysicalMaterial color={PURPLE} roughness={0.4} metalness={0.1} />
      </mesh>
      {/* Banana slice */}
      <mesh position={[0.5, 0.55, 0.5]} rotation={[0.2, 0.4, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 0.1, 16]} />
        <meshStandardMaterial color="#fffacd" />
      </mesh>
      <mesh position={[-0.4, 0.55, -0.6]} rotation={[-0.1, -0.2, 0.1]}>
        <cylinderGeometry args={[0.3, 0.3, 0.1, 16]} />
        <meshStandardMaterial color="#fffacd" />
      </mesh>
      {/* Strawberry */}
      <mesh position={[-0.5, 0.55, 0.5]} rotation={[0.5, 0, 0.2]}>
        <sphereGeometry args={[0.25, 16, 16]} />
        <meshStandardMaterial color="#e63946" />
      </mesh>
    </group>
  );
}

function ChristTheRedeemer({ position, scale = 1 }: any) {
  return (
    <group position={position} scale={scale}>
      {/* Pedestal */}
      <mesh position={[0, -2, 0]}>
        <boxGeometry args={[1.5, 1, 1.5]} />
        <meshStandardMaterial color="#888" />
      </mesh>
      {/* Body/Robes */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.5, 0.7, 3, 32]} />
        <meshStandardMaterial color="#ddd" />
      </mesh>
      {/* Arms Span */}
      <mesh position={[0, 1, 0]}>
        <boxGeometry args={[4, 0.3, 0.4]} />
        <meshStandardMaterial color="#ddd" />
      </mesh>
      {/* Head */}
      <mesh position={[0, 1.8, 0]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial color="#ddd" />
      </mesh>
    </group>
  );
}

function SugarloafMountain({ position, scale = 1 }: any) {
  return (
    <mesh position={position} scale={scale}>
      <sphereGeometry args={[2, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2.5]} />
      <meshStandardMaterial color="#2E7D32" roughness={0.8} />
    </mesh>
  );
}

function RioLandmarks() {
  return (
    <group>
      {/* Distant Mountains Silhouette */}
      <SugarloafMountain position={[-10, -5, -15]} scale={[3, 4, 2]} />
      <SugarloafMountain position={[-15, -6, -20]} scale={[2, 3, 1.5]} />
      
      {/* The Redeemer on a distant hill */}
      <Float speed={1} rotationIntensity={0} floatIntensity={0.5}>
        <ChristTheRedeemer position={[12, 2, -12]} scale={1.5} />
      </Float>

      {/* Tropical Atmosphere bits */}
      <Float speed={2}>
         <mesh position={[8, -3, -5]} rotation={[0.4, 0.5, 0]}>
            <coneGeometry args={[0.2, 3, 4]} />
            <meshStandardMaterial color="#00C853" />
         </mesh>
      </Float>
    </group>
  );
}

function SceneManager() {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  const heroBowlRef = useRef<THREE.Group>(null);
  const ingredientsRef = useRef<THREE.Group>(null);
  const showcaseGroupRef = useRef<THREE.Group>(null);
  
  useEffect(() => {
    if (!cameraRef.current || !heroBowlRef.current) return;
    
    // Scene 1: Initial state
    cameraRef.current.position.set(0, 2, 8);
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".scroll-container",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      }
    });

    // Scene 1 -> 2: Camera pans, bowl disappears
    tl.to(cameraRef.current.position, { z: 4, y: 1 }, 0);
    tl.to(heroBowlRef.current.position, { x: 4, y: -2, z: -5 }, 0);
    
    // Show ingredients for Scene 2
    tl.call(() => {
        if (ingredientsRef.current) ingredientsRef.current.visible = true;
    }, [], 0.1);

    // Scene 2 -> 3: Move over to Brazil abstract scene
    tl.to(cameraRef.current.position, { x: -5, z: 2 }, 0.2);
    tl.to(ingredientsRef.current?.position || {}, { y: 5 }, 0.2);
    
    // Scene 3 -> 4: Product showcase
    tl.to(cameraRef.current.position, { x: 0, y: 0, z: 6 }, 0.4);
    if(showcaseGroupRef.current) {
        tl.fromTo(showcaseGroupRef.current.position, { y: -10 }, { y: 0 }, 0.4);
    }

    // Scene 4 -> 5: Build your bowl
    tl.to(cameraRef.current.position, { y: 4, z: 4, x: 0 }, 0.6);
    tl.to(cameraRef.current.rotation, { x: -Math.PI / 4 }, 0.6);
    
    // Scene 5 -> 6: CTA
    tl.to(cameraRef.current.position, { y: 0, z: 10 }, 0.8);
    tl.to(cameraRef.current.rotation, { x: 0 }, 0.8);

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (heroBowlRef.current) {
      heroBowlRef.current.rotation.y = t * 0.2;
    }
    if (showcaseGroupRef.current) {
      showcaseGroupRef.current.rotation.y = t * 0.1;
    }
  });

  return (
    <>
      <PerspectiveCamera ref={cameraRef} makeDefault fov={50} />
      
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} color="#FEDD00" />
      <directionalLight position={[-10, 10, -5]} intensity={1.5} color="#00C853" />
      <pointLight position={[0, 5, 5]} intensity={1} color="#0047AB" />
      
      <Environment preset="forest" />

      {/* Primary Hero Bowl */}
      <group ref={heroBowlRef}>
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
          <AcaiBowl position={[0, 0, 0]} scale={1.5} id="hero-bowl" />
        </Float>
      </group>

      {/* Rio de Janeiro Landmarks Atmosphere */}
      <RioLandmarks />

      {/* Background mountains always visible */}
      <group position={[0, -10, -30]}>
         <SugarloafMountain position={[-20, 0, 0]} scale={[8, 12, 5]} />
         <SugarloafMountain position={[20, -5, -5]} scale={[6, 10, 4]} />
      </group>

      <Sparkles count={100} scale={10} size={4} speed={0.4} color={GREEN} opacity={0.5} />
      
      <ContactShadows position={[0, -2, 0]} opacity={0.4} scale={20} blur={2} far={10} />
    </>
  );
}

export default function Scene() {
  return (
    <Canvas dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
      <SceneManager />
    </Canvas>
  );
}
