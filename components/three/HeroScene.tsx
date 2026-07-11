'use client';

import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float, Stars } from '@react-three/drei';
import * as THREE from 'three';
import { useMousePosition } from '@/hooks/useMousePosition';

// ── Floating distorted sphere (the hero centerpiece) ──────────
function DistortedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { normalized } = useMousePosition();

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = t * 0.1 + normalized.y * 0.1;
    meshRef.current.rotation.y = t * 0.15 + normalized.x * 0.1;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={[2.5, 0, 0]} castShadow>
        <sphereGeometry args={[1.4, 64, 64]} />
        <MeshDistortMaterial
          color="#7c3aed"
          attach="material"
          distort={0.45}
          speed={2}
          roughness={0.1}
          metalness={0.8}
          emissive="#3b0080"
          emissiveIntensity={0.3}
        />
      </mesh>
    </Float>
  );
}

// ── Rotating wireframe globe ───────────────────────────────────
function WireframeGlobe() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.1;
  });

  return (
    <Float speed={1} floatIntensity={0.3}>
      <mesh ref={meshRef} position={[-2.5, 0.5, -1]}>
        <sphereGeometry args={[1.1, 20, 20]} />
        <meshBasicMaterial
          color="#06b6d4"
          wireframe
          opacity={0.25}
          transparent
        />
      </mesh>
    </Float>
  );
}

// ── Interactive particle field ─────────────────────────────────
function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);
  const { normalized } = useMousePosition();

  const { positions, colors } = useMemo(() => {
    const count = 1500;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10 - 2;

      // Purple-cyan color palette
      const t = Math.random();
      colors[i * 3] = 0.48 + t * 0.28;      // R
      colors[i * 3 + 1] = 0.23 + t * 0.48;  // G
      colors[i * 3 + 2] = 0.93 - t * 0.1;   // B
    }
    return { positions, colors };
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const t = state.clock.getElapsedTime();
    pointsRef.current.rotation.y = t * 0.02 + normalized.x * 0.05;
    pointsRef.current.rotation.x = normalized.y * 0.03;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
      />
    </points>
  );
}

// ── Floating geometric cubes ───────────────────────────────────
function FloatingCube({ position, size, speed }: { position: [number, number, number]; size: number; speed: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime() * speed;
    meshRef.current.rotation.x = t * 0.5;
    meshRef.current.rotation.y = t * 0.3;
    meshRef.current.position.y = position[1] + Math.sin(t) * 0.3;
  });

  return (
    <Float speed={speed} floatIntensity={0.4}>
      <mesh ref={meshRef} position={position} castShadow>
        <boxGeometry args={[size, size, size]} />
        <meshStandardMaterial
          color="#3b82f6"
          wireframe
          opacity={0.3}
          transparent
        />
      </mesh>
    </Float>
  );
}

// ── Camera rig that responds to mouse ─────────────────────────
function CameraRig() {
  const { normalized } = useMousePosition();
  const { camera } = useThree();

  useFrame(() => {
    camera.position.x += (normalized.x * 0.3 - camera.position.x) * 0.03;
    camera.position.y += (normalized.y * 0.2 - camera.position.y) * 0.03;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

// ── Main Hero Scene ────────────────────────────────────────────
export function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 60 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.5]} // Cap pixel ratio for performance
      aria-hidden="true"
    >
      <Suspense fallback={null}>
        {/* Lighting */}
        <ambientLight intensity={0.2} />
        <pointLight position={[5, 5, 5]} intensity={1} color="#7c3aed" />
        <pointLight position={[-5, -5, 3]} intensity={0.8} color="#06b6d4" />
        <pointLight position={[0, 5, -5]} intensity={0.5} color="#3b82f6" />

        {/* Scene elements */}
        <ParticleField />
        <DistortedSphere />
        <WireframeGlobe />

        {/* Floating cubes */}
        <FloatingCube position={[-3.5, 1.5, -2]} size={0.25} speed={0.5} />
        <FloatingCube position={[3.5, -1.5, -2]} size={0.18} speed={0.7} />
        <FloatingCube position={[-1.5, -2.5, -1]} size={0.15} speed={0.9} />
        <FloatingCube position={[4, 2, -3]} size={0.2} speed={0.6} />

        {/* Stars background */}
        <Stars radius={50} depth={30} count={800} factor={2} fade speed={0.5} />

        {/* Camera rig */}
        <CameraRig />
      </Suspense>
    </Canvas>
  );
}
