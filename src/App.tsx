import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Float, OrbitControls, ScrollControls } from '@react-three/drei';
import { FractureBox } from './components/FractureBox';

const Overlay = () => {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
      <div style={{ position: 'absolute', top: 40, left: 40, fontSize: '20px', fontFamily: 'Meslo', lineHeight: '1.6em', whiteSpace: 'pre' }}>
        &gt; explosion effect
        <br />
        &gt; scroll for experience 
      </div>
      <div style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '14px' }}>21/08/2024</div>
    </div>
  )
};

export const App = () => {
  return (
    <>
      <Canvas gl={{ antialias: true }} dpr={[1, 2]} camera={{fov: 75}}>
        <directionalLight position={[-5, -5, 5]} intensity={2} />
        <OrbitControls enableZoom={false} makeDefault />
        <Suspense fallback={null}>
          <ScrollControls pages={4}>
            <Float floatIntensity={2} speed={3}>
              <FractureBox />
            </Float>
          </ScrollControls>
        </Suspense>
        <Environment background preset='forest' backgroundBlurriness={0.5} />
      </Canvas>
      <Overlay />
    </>
  );
};

