import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Bubbles() {
  const count = 50;
  const mesh = useRef<THREE.InstancedMesh>(null);
  const light = useRef<THREE.PointLight>(null);

  const dummy = useMemo(() => new THREE.Object3D(), []);
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const position = new THREE.Vector3(
        Math.random() * 20 - 10,
        Math.random() * 20 - 10,
        Math.random() * 20 - 10
      );
      const speed = 0.01 + Math.random() * 0.01;
      const rotation = Math.random() * Math.PI;
      const scale = 0.1 + Math.random() * 0.3;
      temp.push({ position, speed, rotation, scale });
    }
    return temp;
  }, []);

  useFrame((state) => {
    if (!mesh.current) return;

    if (light.current) {
      light.current.position.x = Math.sin(state.clock.elapsedTime * 0.3) * 8;
      light.current.position.y = Math.sin(state.clock.elapsedTime * 0.2) * 8;
      light.current.position.z = Math.cos(state.clock.elapsedTime * 0.3) * 8;
    }

    particles.forEach((particle, i) => {
      particle.position.y += Math.sin(state.clock.elapsedTime * particle.speed) * 0.01;
      particle.rotation += 0.01;
      particle.position.x += Math.cos(particle.rotation) * 0.01;
      particle.position.z += Math.sin(particle.rotation) * 0.01;

      if (particle.position.y > 10) particle.position.y = -10;

      dummy.position.copy(particle.position);
      dummy.rotation.set(particle.rotation, particle.rotation, particle.rotation);
      dummy.scale.setScalar(particle.scale);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    });

    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <>
      <pointLight ref={light} distance={15} intensity={10} color="#0066ff" />
      <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial
          color="#0066ff"
          transparent
          opacity={0.6}
          shininess={100}
        />
      </instancedMesh>
    </>
  );
}

function Stars() {
  const ref = useRef<any>();
  
  const positions = useMemo(() => {
    const positions = new Float32Array(5000 * 3);
    const radius = 1.5;
    
    for (let i = 0; i < positions.length; i += 3) {
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);
      const r = radius * Math.cbrt(Math.random());
      
      positions[i] = r * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = r * Math.cos(phi);
    }
    
    return positions;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function BinaryRain() {
  useEffect(() => {
    const canvas = document.getElementById('binaryCanvas') as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = new Array(columns).fill(1);

    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0f0';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = Math.random() > 0.5 ? '1' : '0';
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    }

    const interval = setInterval(draw, 33);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drops.length = Math.floor(canvas.width / fontSize);
      drops.fill(1);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      id="binaryCanvas"
      className="fixed top-0 left-0 w-full h-full opacity-20 pointer-events-none"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}

export default function Background() {
  return (
    <div className="fixed inset-0 w-full h-full">
      <div className="absolute inset-0 bg-black">
        <Canvas camera={{ position: [0, 0, 15], fov: 75 }}>
          <color attach="background" args={['#000']} />
          <ambientLight intensity={0.2} />
          <Stars />
          <Bubbles />
        </Canvas>
      </div>
      <BinaryRain />
    </div>
  );
}