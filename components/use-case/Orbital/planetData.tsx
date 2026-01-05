'use client'
import { StaticImageData } from "next/image";
import { PlanetProps } from "./types";
// Utility functions with types
const random = (a: number, b: number): number => a + Math.random() * b;
const randomInt = (a: number, b: number): number => Math.floor(random(a, b));

// Generate a random color
const randomColor = (): string =>
  `rgb(${randomInt(80, 50)}, ${randomInt(80, 50)}, ${randomInt(80, 50)})`;

// Define the type for a planet
export interface Planet {
  id: number;
  color: string;
  xRadius: number;
  zRadius: number;
  size: number;
  image: StaticImageData | string;
  place: number;
}

// Generate planet data
const totalPlanets: number = 6;
const planetData: PlanetProps[] = [];

const planetImages: StaticImageData | string[] = [
  "/SkillsIcon/ReactIcon.png",
  "/SkillsIcon/reactnative.png",
  "/SkillsIcon/Next.png",
  "/SkillsIcon/node.png",
  "/SkillsIcon/nest-icon.png",
  "/SkillsIcon/express.png",
];

for (let index = 0; index < totalPlanets; index++) {
  planetData.push({
    id: index,
    color: randomColor(),
    xRadius: (index + 1.5) * 4,
    zRadius: (index + 1.5) * 2,
    size: random(0.5, 1),
    image: planetImages[index % planetImages.length],
    place: 10 * (index + 1),
  });
}

export default planetData;
