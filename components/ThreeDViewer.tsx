import React, { useState, useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useFBX, OrbitControls, Stage, useProgress, Html } from "@react-three/drei";
import { motion, useScroll, useTransform, AnimatePresence, MotionValue } from "framer-motion";
import { Maximize2, X, Loader2, Rotate3D } from "lucide-react";
import * as THREE from "three";

// Helper function to setup material with custom orange plastic
const setupMaterial = (child: THREE.Mesh) => {
  child.castShadow = true;
  child.receiveShadow = true;

  // Create a shiny orange plastic material
  const orangePlasticMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color(0xff6b00), // Vibrant orange color matching the barrier
    metalness: 0.1, // Low metalness for plastic look
    roughness: 0.3, // Some roughness but still shiny
    side: THREE.DoubleSide,
  });

  child.material = orangePlasticMaterial;
};

// Model Component for Preview
const Model = ({ scrollRotation }: { scrollRotation: MotionValue<number> }) => {
  const fbx = useFBX("/models/barrier.fbx");
  const groupRef = useRef<THREE.Group>(null);

  useEffect(() => {
    if (fbx) {
      fbx.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          setupMaterial(child as THREE.Mesh);
        }
      });
    }
  }, [fbx]);

  // Rotate based on scroll if provided
  useFrame(() => {
    if (groupRef.current && scrollRotation) {
       const rotationValue = scrollRotation.get();
       groupRef.current.rotation.y = rotationValue * Math.PI * 2;
    }
  });

  return (
    <group ref={groupRef}>
      <primitive 
        object={fbx} 
        scale={3} 
        position={[0, -2, 0]}
      />
    </group>
  );
};

// Model Component for Modal (No scroll rotation)
const ModalModel = () => {
    const fbx = useFBX("/models/barrier.fbx");
    
    useEffect(() => {
        if (fbx) {
            fbx.traverse((child) => {
                if ((child as THREE.Mesh).isMesh) {
                    setupMaterial(child as THREE.Mesh);
                }
            });
        }
    }, [fbx]);

    return (
        <primitive 
            object={fbx} 
            scale={2.5}
            position={[0, -2, 0]}
        />
    );
};

// Preload the FBX model
useFBX.preload("/models/barrier.fbx");

// Loading Spinner with Progress
const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center text-orange-600 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg">
        <Loader2 className="w-8 h-8 animate-spin mb-2" />
        <p className="text-sm font-bold whitespace-nowrap">{progress.toFixed(0)}% yüklendi</p>
      </div>
    </Html>
  );
};

export const ThreeDViewer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const containerRef = useRef(null);
  
  // Scroll based rotation for the preview
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Map scroll progress to rotation - continuous rotation as you scroll
  const rotation = useTransform(scrollYProgress, [0, 1], [0, Math.PI * 0.5]);

  return (
    <section ref={containerRef} className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Side: 3D Viewer */}
          <div className="w-full lg:w-1/2 relative group">
             <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-orange-300 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
             <div className="relative h-[500px] w-full bg-zinc-50 rounded-2xl border border-zinc-200 overflow-hidden shadow-xl">
                
                <div className="absolute top-4 right-4 z-10 flex gap-2">
                    <div className="bg-white/80 backdrop-blur p-2 rounded-lg shadow-sm text-zinc-500">
                        <Rotate3D className="w-5 h-5" />
                    </div>
                </div>

                <Canvas 
                  shadows 
                  dpr={[1, 2]} 
                  camera={{ position: [0, 0, 15], fov: 45 }} 
                  gl={{ 
                    preserveDrawingBuffer: true,
                    antialias: true,
                    alpha: true
                  }}
                >
                  <color attach="background" args={['#fafafa']} />
                  <Suspense fallback={<Loader />}>
                    <Stage environment="city" intensity={0.6} adjustCamera={false}>
                      <Model scrollRotation={rotation} />
                    </Stage>
                  </Suspense>
                  <OrbitControls 
                    enableZoom={false} 
                    autoRotate={false} 
                    enablePan={false}
                    minPolarAngle={Math.PI / 3}
                    maxPolarAngle={Math.PI / 1.5}
                  />
                </Canvas>

                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white/90 to-transparent flex justify-center pointer-events-none">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-full font-bold text-sm shadow-lg hover:bg-orange-700 transition-transform transform hover:scale-105 pointer-events-auto"
                  >
                    <Maximize2 className="w-4 h-4" />
                    3D İNCELE
                  </button>
                </div>
             </div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-3 py-1 mb-4 border border-orange-200 rounded-full bg-orange-50 text-orange-600 text-xs font-bold tracking-widest uppercase">
                3D Teknoloji
              </div>
              <h2 className="text-4xl font-bold text-zinc-900 mb-6 leading-tight">
                Ürünümüzü Her Açıdan <br />
                <span className="text-orange-600">Detaylı İnceleyin</span>
              </h2>
              <p className="text-zinc-600 text-lg mb-8 leading-relaxed">
                Sel bariyerimizin her detayını 3 boyutlu olarak keşfedin. 
                Özel tasarım kilit mekanizması, sızdırmaz conta yapısı ve 
                dayanıklı gövde tasarımını yakından görün.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                 <div className="border-l-4 border-orange-200 pl-4">
                    <h4 className="font-bold text-zinc-900 mb-1">Modüler Yapı</h4>
                    <p className="text-sm text-zinc-500">İstediğiniz yüksekliğe kolayca ulaşın.</p>
                 </div>
                 <div className="border-l-4 border-orange-200 pl-4">
                    <h4 className="font-bold text-zinc-900 mb-1">Hafif Tasarım</h4>
                    <p className="text-sm text-zinc-500">Tek kişi tarafından taşınabilir paneller.</p>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Full Screen Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-zinc-900/95 backdrop-blur-lg flex items-center justify-center p-4 md:p-10"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setIsModalOpen(false);
              }
            }}
          >
            <div className="relative w-full h-full max-w-7xl bg-zinc-800 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 z-50 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="absolute top-6 left-6 z-50 text-white pointer-events-none">
                <h3 className="text-2xl font-bold">3D Görüntüleme Modu</h3>
                <p className="text-white/60 text-sm">Çevirmek için sürükleyin, yakınlaştırmak için kaydırın</p>
              </div>

              <Canvas 
                shadows 
                dpr={[1, 2]} 
                camera={{ position: [0, 0, 15], fov: 45 }}
                gl={{ 
                  preserveDrawingBuffer: true,
                  antialias: true
                }}
              >
                <color attach="background" args={['#27272a']} />
                <Suspense fallback={<Loader />}>
                  <Stage environment="studio" intensity={0.5} adjustCamera={false}>
                    <ModalModel />
                  </Stage>
                </Suspense>
                <OrbitControls 
                  makeDefault 
                  minDistance={5}
                  maxDistance={25}
                />
              </Canvas>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
