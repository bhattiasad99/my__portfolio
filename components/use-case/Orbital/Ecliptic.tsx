import * as THREE from "three";
import { EclipticProps } from "./types";

export function Ecliptic({ xRadius = 1, zRadius = 1 }: EclipticProps) {
  const points: THREE.Vector3[] = [];
  for (let index = 0; index < 64; index++) {
    const angle = (index / 64) * 2 * Math.PI;
    const x = xRadius * Math.cos(angle);
    const z = zRadius * Math.sin(angle);
    points.push(new THREE.Vector3(x, 0, z));
  }

  points.push(points[0]);

  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);

  return (
    <line>
      {/* Pass the geometry explicitly */}
      <bufferGeometry attach="geometry" {...lineGeometry} />
      <lineBasicMaterial attach="material" color="#BFBBDA" linewidth={10} />
    </line>
  );
}
