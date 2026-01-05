'use client'
import { Canvas } from "@react-three/fiber";
import planetData from "./planetData";

import { Sun } from "./Sun";
import { Planet } from "./Planet";

// Define types for the planet data

export const Orbital = () => {
  return (
    <Canvas
      // style={{ width: "30vw", height: "30vh" }}
      camera={{ position: [0, 22, 35], fov: 40 }}
    >
      <Sun />
      {planetData.map((planet) => (
        <Planet planet={planet} key={planet.id} />
      ))}
    </Canvas>
  );
};
