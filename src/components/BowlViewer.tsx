'use client';

import { Canvas } from '@react-three/fiber';
import { useGLTF, Stage, PresentationControls } from '@react-three/drei';
import { Suspense } from 'react';

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} scale={1.5} />;
}

export default function BowlViewer() {
  return (
    <div style={{ width: '100%', height: '70vh', position: 'relative', marginTop: '20px' }}>
      <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }}>
        <color attach="background" args={['transparent']} />
        <Suspense fallback={null}>
          <PresentationControls speed={1.5} global zoom={0.7} polar={[-0.1, Math.PI / 4]}>
            <Stage environment="city" intensity={0.6} shadows={false}>
              <Model url="/acai-bowl.glb" />
            </Stage>
          </PresentationControls>
        </Suspense>
      </Canvas>
      
      <div style={{
        position: 'absolute',
        bottom: '50px',
        left: '50%',
        transform: 'translateX(-50%)',
        textAlign: 'center',
        width: '100%',
        pointerEvents: 'none'
      }}>
        <h2 className="samba-pulse" style={{ 
          fontFamily: 'var(--font-brazil)', 
          fontSize: '3rem', 
          color: 'var(--color-highlight)',
          textShadow: '0 0 20px rgba(254, 221, 0, 0.4)'
        }}>THE ULTIMATE RIO BOWL</h2>
        <p style={{ color: 'white', opacity: 0.8, fontSize: '1.2rem', marginTop: '10px' }}>
          Interactive 3D Experience — Drag to rotate
        </p>
      </div>
    </div>
  );
}
