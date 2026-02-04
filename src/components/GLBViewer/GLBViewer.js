import React, { useRef, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';
import * as THREE from 'three';
import './GLBViewer.css';

function Model({ url, ...props }) {
  const { scene } = useGLTF(url);
  const meshRef = useRef();

  // Ajustar escala e posição do modelo
  useEffect(() => {
    if (scene) {
      const box = new THREE.Box3().setFromObject(scene);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());
      
      // Centralizar o modelo
      scene.position.x = -center.x;
      scene.position.y = -center.y;
      scene.position.z = -center.z;
      
      // Escalar para caber na cena (ajustar conforme necessário)
      const maxDim = Math.max(size.x, size.y, size.z);
      if (maxDim > 0) {
        const scale = 2 / maxDim; // Ajustar escala conforme necessário
        scene.scale.set(scale, scale, scale);
      }
    }
  }, [scene]);

  // Rotação automática opcional (descomente se quiser)
  // useFrame((state, delta) => {
  //   if (meshRef.current) {
  //     meshRef.current.rotation.y += delta * 0.1;
  //   }
  // });

  return <primitive ref={meshRef} object={scene} {...props} />;
}

// Componente de loading
function Loading() {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff'
    }}>
      <p>Carregando modelo 3D...</p>
    </div>
  );
}

function GLBViewer({ modelPath, className = '' }) {
  const containerRef = useRef(null);

  if (!modelPath) {
    return (
      <div className={`glb-viewer-container ${className}`}>
        <div className="glb-viewer-placeholder">
          <p>Nenhum modelo 3D carregado</p>
          <p style={{ fontSize: '0.85rem', color: '#999', marginTop: '8px' }}>
            Coloque arquivos .glb em public/models/
          </p>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className={`glb-viewer-container ${className}`}>
      <Suspense fallback={<Loading />}>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 50 }}
          style={{ width: '100%', height: '100%' }}
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} intensity={0.5} />
          
          <Model url={modelPath} />
          
          <OrbitControls
            enableZoom={true}
            enablePan={true}
            enableRotate={true}
            minDistance={2}
            maxDistance={10}
          />
          
          <Environment preset="city" />
        </Canvas>
      </Suspense>
    </div>
  );
}

export default GLBViewer;
