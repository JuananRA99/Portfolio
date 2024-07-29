import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import galactic from "../assets/3d/galactic.glb";

const InspectGLTF = () => {
  const { scene, animations } = useGLTF(galactic);

  useEffect(() => {
    console.log("Scene:", scene);
    console.log("Animations:", animations);
  }, [scene, animations]);

  return null;
};

export default InspectGLTF;