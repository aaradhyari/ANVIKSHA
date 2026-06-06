import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Shape({ geometry, color, position, scale, speed, opacity }) {
  const ref = useRef();

  useFrame((_, delta) => {
    ref.current.rotation.x += delta * speed * 0.3;
    ref.current.rotation.y += delta * speed * 0.5;
  });

  return (
    <Float speed={speed * 0.5} rotationIntensity={0.4} floatIntensity={1.5}>
      <mesh ref={ref} position={position} scale={scale}>
        {geometry}
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={opacity}
          distort={0.3}
          speed={1.5}
          roughness={0.2}
          metalness={0.1}
        />
      </mesh>
    </Float>
  );
}

function Shapes() {
  const shapes = useMemo(() => {
    const geo = [
      new THREE.IcosahedronGeometry(1, 0),
      new THREE.OctahedronGeometry(1, 0),
      new THREE.TorusGeometry(0.8, 0.3, 16, 32),
      new THREE.TetrahedronGeometry(1, 0),
      new THREE.DodecahedronGeometry(0.9, 0),
      new THREE.TorusKnotGeometry(0.6, 0.2, 64, 8),
    ];
    const colors = ['#42E89B', '#E89A73', '#DDFBE7', '#42E89B', '#E89A73', '#DDFBE7'];
    const positions = [
      [-4, 2, -5],
      [4, -1, -4],
      [-3, -3, -2],
      [3.5, 3, -6],
      [-5, -2, -7],
      [5, 0.5, -8],
    ];
    const scales = [1.2, 0.9, 0.7, 1.0, 0.8, 0.6];
    const speeds = [0.6, 1.0, 0.8, 0.5, 1.2, 0.7];
    const opacities = [0.25, 0.3, 0.35, 0.2, 0.28, 0.3];

    return geo.map((g, i) => (
      <Shape
        key={i}
        geometry={g}
        color={colors[i]}
        position={positions[i]}
        scale={scales[i]}
        speed={speeds[i]}
        opacity={opacities[i]}
      />
    ));
  }, []);

  return <group>{shapes}</group>;
}

function CameraController() {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });

  useFrame((_, delta) => {
    camera.position.x += (mouse.current.x * 2 - camera.position.x) * delta * 0.3;
    camera.position.y += (-mouse.current.y * 2 - camera.position.y) * delta * 0.3;
    camera.lookAt(0, 0, 0);
  });

  useEffect(() => {
    const handleMouse = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return null;
}

export default function ThreeScene() {
  return (
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#42E89B" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#E89A73" />
        <Shapes />
        <CameraController />
      </Canvas>
    </div>
  );
}
