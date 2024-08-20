import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Float, OrbitControls, ScrollControls } from '@react-three/drei';
import { FractureBox } from './components/FractureBox';

export const App = () => {
  return (
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
  );
};

