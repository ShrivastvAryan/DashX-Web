"use client";

import * as React from "react";

type ThreeModule = any;

function waitForThree(timeoutMs = 5000): Promise<ThreeModule | null> {
  return new Promise((resolve) => {
    const start = performance.now();
    const tick = () => {
      const three = (window as Window & { THREE?: ThreeModule }).THREE;
      if (three) return resolve(three);
      if (performance.now() - start > timeoutMs) return resolve(null);
      requestAnimationFrame(tick);
    };
    tick();
  });
}

export default function HeroThree() {
  const containerRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    if (prefersReducedMotion) return;

    let destroyed = false;
    let rafId: number | null = null;
    let resizeObserver: ResizeObserver | null = null;

    const isCoarsePointer =
      window.matchMedia?.("(pointer: coarse)").matches ?? false;
    const isMobile =
      isCoarsePointer || Math.min(window.innerWidth, window.innerHeight) < 820;

    const pointer = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };

    const onPointerMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      target.x = nx;
      target.y = ny;
    };

    const onTouchPulse = () => {
      // Gentle “breath” boost on tap (mobile-friendly interactivity).
      target.x = 0.2;
      target.y = -0.15;
      window.setTimeout(() => {
        target.x = 0;
        target.y = 0;
      }, 420);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("touchstart", onTouchPulse, { passive: true });

    const run = async () => {
      const THREE = await waitForThree();
      if (!THREE || destroyed) return;

      const renderer = new THREE.WebGLRenderer({
        antialias: !isMobile,
        alpha: true,
        powerPreference: "high-performance",
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isMobile ? 1.5 : 2));
      renderer.setClearColor(0x000000, 0);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.05;
      renderer.physicallyCorrectLights = true;
      if (typeof THREE.SRGBColorSpace !== "undefined") {
        renderer.outputColorSpace = THREE.SRGBColorSpace;
      }
      renderer.domElement.style.width = "100%";
      renderer.domElement.style.height = "100%";
      renderer.domElement.style.display = "block";

      container.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
      camera.position.set(0, 0.6, 9);

      const group = new THREE.Group();
      scene.add(group);

      const ambient = new THREE.AmbientLight(0xffffff, 0.55);
      scene.add(ambient);

      const key = new THREE.DirectionalLight(0xffffff, 1.2);
      key.position.set(4, 6, 6);
      scene.add(key);

      const rim = new THREE.PointLight(0x4166fb, 0.9, 40);
      rim.position.set(-6, 2.5, 10);
      scene.add(rim);

      const warm = new THREE.PointLight(0xffd7a8, 0.55, 30);
      warm.position.set(6, -1.5, 9);
      scene.add(warm);

      const blobGeom = new THREE.IcosahedronGeometry(2.35, 4);
      const blobMat = new THREE.MeshStandardMaterial({
        color: 0xe9f0ff,
        metalness: 0.25,
        roughness: 0.18,
        emissive: 0x4166fb,
        emissiveIntensity: 0.18,
      });
      const blob = new THREE.Mesh(blobGeom, blobMat);
      blob.position.set(2.2, 0.25, 0);
      group.add(blob);

      const glowGeom = new THREE.SphereGeometry(2.55, 64, 64);
      const glowMat = new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        uniforms: {
          uColor: { value: new THREE.Color(0x4166fb) },
          uPower: { value: 2.0 },
          uIntensity: { value: 0.75 },
        },
        vertexShader: `
          varying vec3 vNormal;
          varying vec3 vWorldPos;
          void main() {
            vNormal = normalize(normalMatrix * normal);
            vec4 worldPos = modelMatrix * vec4(position, 1.0);
            vWorldPos = worldPos.xyz;
            gl_Position = projectionMatrix * viewMatrix * worldPos;
          }
        `,
        fragmentShader: `
          uniform vec3 uColor;
          uniform float uPower;
          uniform float uIntensity;
          varying vec3 vNormal;
          varying vec3 vWorldPos;
          void main() {
            vec3 viewDir = normalize(cameraPosition - vWorldPos);
            float fresnel = pow(1.0 - max(0.0, dot(vNormal, viewDir)), uPower);
            float a = fresnel * uIntensity;
            gl_FragColor = vec4(uColor, a);
          }
        `,
      });
      const glow = new THREE.Mesh(glowGeom, glowMat);
      glow.position.copy(blob.position);
      group.add(glow);

      const ringGeom = new THREE.TorusGeometry(3.05, 0.06, 18, 220);
      const ringMat = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        metalness: 0.9,
        roughness: 0.22,
        opacity: 0.7,
        transparent: true,
      });
      const ring = new THREE.Mesh(ringGeom, ringMat);
      ring.rotation.set(0.65, 0.15, 0.3);
      ring.position.set(2.2, 0.25, 0.1);
      group.add(ring);

      // A subtle “awe” field: tiny, slow parallax specks.
      const count = isMobile ? 420 : 900;
      const positions = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        const r = 7 + Math.random() * 7;
        const theta = Math.random() * Math.PI * 2;
        const phi = (Math.random() * 0.9 + 0.05) * Math.PI;
        positions[i * 3 + 0] = r * Math.cos(theta) * Math.sin(phi);
        positions[i * 3 + 1] = (r * Math.cos(phi)) * 0.85;
        positions[i * 3 + 2] = r * Math.sin(theta) * Math.sin(phi) - 2.5;
      }

      const starsGeom = new THREE.BufferGeometry();
      starsGeom.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      const starsMat = new THREE.PointsMaterial({
        color: 0xffffff,
        size: isMobile ? 0.016 : 0.02,
        transparent: true,
        opacity: 0.7,
        depthWrite: false,
      });
      const stars = new THREE.Points(starsGeom, starsMat);
      scene.add(stars);

      const setSize = (width: number, height: number) => {
        renderer.setSize(width, height, false);
        camera.aspect = Math.max(1e-6, width / Math.max(1, height));
        camera.updateProjectionMatrix();
      };

      resizeObserver = new ResizeObserver((entries) => {
        const entry = entries[0];
        if (!entry) return;
        const { width, height } = entry.contentRect;
        setSize(width, height);
      });
      resizeObserver.observe(container);
      setSize(container.clientWidth || window.innerWidth, container.clientHeight || window.innerHeight);

      const clock = new THREE.Clock();

      const animate = () => {
        if (destroyed) return;
        rafId = requestAnimationFrame(animate);

        const t = clock.getElapsedTime();

        // Luxurious motion: slower, weighted.
        pointer.x += (target.x - pointer.x) * 0.045;
        pointer.y += (target.y - pointer.y) * 0.045;

        const parallaxX = pointer.x * 0.65;
        const parallaxY = -pointer.y * 0.45;

        group.rotation.y = parallaxX * 0.35 + t * 0.08;
        group.rotation.x = parallaxY * 0.28 + Math.sin(t * 0.6) * 0.05;
        group.position.y = Math.sin(t * 0.55) * 0.08;

        blob.rotation.y += 0.003;
        blob.rotation.x += 0.0018;
        blob.scale.setScalar(1 + Math.sin(t * 0.9) * 0.015);
        glow.scale.setScalar(1.02 + Math.sin(t * 0.8) * 0.02);

        ring.rotation.z += 0.0025;

        stars.rotation.y = t * 0.02 + parallaxX * 0.06;
        stars.rotation.x = t * 0.015 + parallaxY * 0.05;

        camera.position.x = parallaxX * 0.55;
        camera.position.y = 0.6 + parallaxY * 0.35;
        camera.lookAt(0.8, 0, 0);

        renderer.render(scene, camera);
      };

      animate();

      const cleanup = () => {
        destroyed = true;
        if (rafId) cancelAnimationFrame(rafId);
        resizeObserver?.disconnect();

        starsGeom.dispose();
        starsMat.dispose();
        blobGeom.dispose();
        blobMat.dispose();
        glowGeom.dispose();
        glowMat.dispose();
        ringGeom.dispose();
        ringMat.dispose();
        renderer.dispose();

        if (renderer.domElement.parentNode) {
          renderer.domElement.parentNode.removeChild(renderer.domElement);
        }
      };

      return cleanup;
    };

    let cleanupFn: (() => void) | undefined;
    run().then((maybeCleanup) => {
      cleanupFn = typeof maybeCleanup === "function" ? maybeCleanup : undefined;
    });

    return () => {
      destroyed = true;
      cleanupFn?.();
      resizeObserver?.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("touchstart", onTouchPulse);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="absolute inset-0 z-[12] pointer-events-none opacity-80 [mix-blend-mode:screen] [mask-image:radial-gradient(circle_at_65%_45%,black,transparent_62%)]"
    />
  );
}
