'use client'
import { Html } from "@react-three/drei";
import { Ecliptic } from "./Ecliptic";
import { useRef } from "react";
import * as THREE from "three";
import { getStyles } from "./styles";
import { useFrame } from "@react-three/fiber";
import { PlanetComponentProps } from "./types";
import ImageComponent from "@/components/common/ImageComponent";

export function Planet({
  planet: { xRadius, zRadius, size, image, place },
}: Readonly<PlanetComponentProps>) {
  const planetRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (planetRef.current) {
      const t = clock.getElapsedTime() + place;
      const x = xRadius * Math.sin(t);
      const z = zRadius * Math.cos(t);
      planetRef.current.position.x = x;
      planetRef.current.position.z = z;
    }
  });
  console.log("place", place);

  return (
    <>
      <mesh ref={planetRef}>
        {/* <sphereGeometry args={[size, 32, 32]} /> */}
        <Html position={[size, 3, 0]} style={{ pointerEvents: "none" }}>
          <div
            className="w-[25px] h-[25px] shrink-0 rounded-full"
            style={{
              background:
                "linear-gradient(180deg, rgba(48, 16, 128, 0.60) 0%, rgba(120, 64, 173, 0.36) 100%)",
            }}
          >
            <ImageComponent altText="planet" source={image} className={"w-5 h-5 shrink-0"} width={30} height={30} />
          </div>
        </Html>

        {/* <meshStandardMaterial color={color} /> */}
      </mesh >
      <Ecliptic xRadius={xRadius} zRadius={zRadius} />
    </>
  );
}
