import { useRef, Ref } from 'react';
import { PointLight, PointLightHelper } from 'three';
import {
  OrbitControls,
  PresentationControls,
  SpotLight,
  Stars,
  useHelper,
} from '@react-three/drei';
import CoffeeShop from './CoffeeShop';

const Scene = () => {
  const pointLight = useRef() as Ref<PointLight>;
  //   useHelper(pointLight, PointLightHelper, 0.5, 'cyan');

  return (
    <>
      {/* Controls */}
      <OrbitControls />

      {/* Objects */}
      <CoffeeShop />
      {/* <PresentationControls
        snap
        global
        zoom={0.9}
        rotation={[0, Math.PI * 2, 0]}
        polar={[0, Math.PI]}
        azimuth={[-Math.PI / 4, Math.PI / 4]}
      >
        <CoffeeShop />
      </PresentationControls> */}
      <Stars
        radius={120}
        depth={50}
        count={4000}
        factor={5}
        saturation={0}
        fade
        speed={2}
      />

      {/* Lights */}
      {/* <ambientLight /> */}
      <SpotLight
        // target={target}
        castShadow
        color='#f0ebc5'
        position={[9, 15, -8]}
        penumbra={0.1}
        radiusTop={0.4}
        radiusBottom={50}
        distance={120}
        angle={0.45}
        attenuation={20}
        anglePower={5}
        intensity={1}
        opacity={0.5}
      />
      <pointLight
        ref={pointLight}
        color='#f0ebc5'
        // position={[-3, 7, 3]}
        position={[-5, 6, 5]}
        intensity={2.5}
      />
      {/* <directionalLight
        intensity={1}
        position={[-5, 15, -15]}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      /> */}
      {/* <directionalLight
        intensity={1}
        position={[5, 20, -3]}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      /> */}
    </>
  );
};

export default Scene;
