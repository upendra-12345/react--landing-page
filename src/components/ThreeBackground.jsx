import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import styles from './ThreeBackground.module.css';

const ThreeBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    camera.position.set(0, 0, 10);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);

    const canvas = renderer.domElement;
    if (mountRef.current) {
      mountRef.current.appendChild(canvas);
    }

    const particleCount = 1200;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i += 1) {
      const i3 = i * 3;
      const radius = 3 + Math.random() * 3;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i3] = Math.sin(phi) * Math.cos(theta) * radius;
      positions[i3 + 1] = Math.sin(phi) * Math.sin(theta) * radius;
      positions[i3 + 2] = Math.cos(phi) * radius;

      colors[i3] = 0.6 + Math.random() * 0.4;
      colors[i3 + 1] = 0.2 + Math.random() * 0.3;
      colors[i3 + 2] = 0.7 + Math.random() * 0.3;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.08,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      depthWrite: false,
      sizeAttenuation: true,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const resizeRenderer = () => {
      if (!mountRef.current) return;
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', resizeRenderer);

    let frameId;
    const animate = () => {
      particles.rotation.y += 0.0015;
      particles.rotation.x += 0.0007;
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', resizeRenderer);
      if (mountRef.current && mountRef.current.contains(canvas)) {
        mountRef.current.removeChild(canvas);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className={styles.background} />;
};

export default ThreeBackground;
