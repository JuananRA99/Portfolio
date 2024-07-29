import { useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef, useState, useEffect } from "react";
import { AnimationMixer } from 'three';
import galactic from "../assets/3d/galactic.glb";

const Space = ({ scale, position, rotationX, rotationY }) => {
  const spaceRef = useRef();
  const { scene, animations } = useGLTF(galactic);
  const mixer = useRef();

  useEffect(() => {
    if (scene && animations.length) {
      mixer.current = new AnimationMixer(scene);
      const action = mixer.current.clipAction(animations[0]);
      action.play();
    }
  }, [scene, animations]);

  useFrame((state, delta) => {
    if (mixer.current) mixer.current.update(delta);
  });

  return (
    <primitive 
      ref={spaceRef} 
      object={scene} 
      position={position} 
      scale={scale} 
      rotation={[rotationX, rotationY, 0]} 
    />
  );
};

const SpaceCanvas = () => {
  const [rotationX, setRotationX] = useState(0);
  const [rotationY, setRotationY] = useState(0);
  const [scale, setScale] = useState([-2, 2, 2]);
  const [position, setPosition] = useState([22, -0.7, 0]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const rotationXValue = scrollTop * 11243.001;
      const rotationYValue = scrollTop * -0.003;
      setRotationX(rotationXValue);
      setRotationY(rotationYValue);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScale([1, 1, 1]);
        setPosition([0.2, -0.1, 0]);
      } else if (window.innerWidth < 1024) {
        setScale([1.33, 1.33, 1.33]);
        setPosition([0.2, -0.3, 0]);
      } else if (window.innerWidth < 1280) {
        setScale([1.5, 1.5, 1.5]);
        setPosition([0.2, -0.4, 0]);
      } else if (window.innerWidth < 1536) {
        setScale([1.66, 1.66, 1.66]);
        setPosition([0.2, -0.5, 0]);
      } else {
        setScale([2, 2, 2]);
        setPosition([0.2, -0.7, 0]);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Canvas 
      className="space-canvas" 
      camera={{ near: 0.1, far: 1000 }}
    >
      <Suspense fallback={null}>
        <directionalLight position={[1, 1, 1]} intensity={2} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 5, 10]} intensity={2} />
        <spotLight position={[0, 10, 10]} angle={0.15} penumbra={1} intensity={2} />
        <hemisphereLight skyColor={"#b1e1ff"} groundColor={"#000000"} intensity={1} />
        <Space rotationX={rotationX} rotationY={rotationY} scale={scale} position={position} />
      </Suspense>
    </Canvas>
  );
};

export default SpaceCanvas;