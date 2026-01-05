import { StaticImageData } from "next/image";

export interface EclipticProps {
  xRadius?: number;
  zRadius?: number;
}

export interface PlanetComponentProps {
  planet: PlanetProps;
}

export interface PlanetProps {
  id?: number;
  color: string;
  xRadius: number;
  zRadius: number;
  size: number;
  image: StaticImageData | string;
  place: number;
}
