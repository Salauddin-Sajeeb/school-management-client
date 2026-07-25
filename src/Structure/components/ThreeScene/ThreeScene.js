import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.position.z = 7;
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.7));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);
    const material = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.18,
      roughness: 0.2,
      metalness: 0.05,
      transmission: 0.3,
      wireframe: true,
    });
    const shapes = [
      new THREE.IcosahedronGeometry(1.35, 1),
      new THREE.TorusGeometry(0.85, 0.22, 18, 64),
      new THREE.OctahedronGeometry(0.78),
    ];
    shapes.forEach((geometry, index) => {
      const mesh = new THREE.Mesh(geometry, material.clone());
      mesh.position.set(index === 0 ? 0 : index === 1 ? 2.4 : -2.3, index === 0 ? 0 : index === 1 ? -1.7 : 1.7, 0);
      mesh.scale.setScalar(index === 0 ? 1 : 0.75);
      group.add(mesh);
    });
    scene.add(new THREE.AmbientLight(0xffffff, 2));

    let frame;
    const animate = () => {
      frame = requestAnimationFrame(animate);
      group.children.forEach((mesh, index) => {
        mesh.rotation.x += 0.0025 + index * 0.001;
        mesh.rotation.y += 0.004 + index * 0.001;
      });
      renderer.render(scene, camera);
    };
    animate();
    const resize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      shapes.forEach((shape) => shape.dispose());
      material.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="tw-absolute tw-inset-0" aria-hidden="true" />;
};

export default ThreeScene;
