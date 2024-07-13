import logo from './logo.svg';
import './App.css';
import * as THREE from "three";
import { Canvas } from "@react-three/fiber"

import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import Scene from './Scene'

function App() {
  return (
    <Canvas>
      <ambientLight intensity={4}/>
      <OrbitControls />
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
      <Environment preset="sunset" />
    </Canvas>
  );
}

export default App;
