import { useEnterXR, NonImmersiveCamera } from "@coconut-xr/natuerlich/react";
import {
  XRCanvas,
  Hands,
  Controllers,
  Grabbable
} from "@coconut-xr/natuerlich/defaults";
import { Gltf } from "@react-three/drei";

const sessionOptions: XRSessionInit = {
  requiredFeatures: ["local-floor"],
  optionalFeatures: ["hand-tracking"]
};

export default function Index() {
  const enterAR = useEnterXR("immersive-ar", sessionOptions);
  const enterVR = useEnterXR("immersive-vr", sessionOptions);
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column"
      }}
    >
      <button onClick={enterAR}>Enter AR</button>
      <button onClick={enterVR}>Enter VR</button>
      <XRCanvas>
        <directionalLight position={[1, 1, 1]} />
        <ambientLight />
        <NonImmersiveCamera
          position={[0.3, 0.3, 0.7]}
          rotation={[-Math.PI / 8, Math.PI / 8, 0, "YXZ"]}
        />
        <Grabbable>
          <Gltf position-x={0} position-z={0.1} scale={1} src="rubiks_cube.glb" />
        </Grabbable>
        {/* <Grabbable>
          <Gltf scale={0.01} src="Triceratops.glb" />
        </Grabbable>
        <Grabbable>
          <Gltf position-x={-0.2} scale={0.01} src="Stegosaurus.glb" />
        </Grabbable> */}
        <Hands type="grab" />
        <Controllers type="grab" />
      </XRCanvas>
    </div>
  );
}
