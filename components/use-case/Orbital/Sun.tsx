import { Html } from "@react-three/drei";
import { getStyles } from "./styles";
import ImageComponent from "@/components/common/ImageComponent";

export function Sun() {
  const style = getStyles();
  return (
    <mesh>
      {/* <sphereGeometry args={[2.5, 32, 32]} /> */}
      <Html position={[-2, 3, 0]} style={{ pointerEvents: "none" }}>
        <div className="w-[25px] h-[25px] shrink-0 rounded-full"
          style={{
            background:
              "linear-gradient(180deg, rgba(48, 16, 128, 0.60) 0%, rgba(120, 64, 173, 0.36) 100%)",
          }}>
          <ImageComponent altText="sun" source={"/HomePage/LogoBig.png"} className={"w-5 h-5 shrink-0"}
            height={30}
            width={30}
          />
        </div>
      </Html>
    </mesh>
  );
}
