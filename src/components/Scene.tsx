import { useRef } from 'react';
import { PointLightHelper } from 'three';
import { OrbitControls, SpotLight, Stars, useHelper } from '@react-three/drei';
import CoffeeShop from './CoffeeShop';

const Scene = () => {
  const pointLight = useRef();
  //   useHelper(pointLight, PointLightHelper, 0.5, 'cyan');

  return (
    <>
      <Stars
        radius={120}
        depth={50}
        count={4000}
        factor={5}
        saturation={0}
        fade
        speed={2}
      />
      <OrbitControls />
      <CoffeeShop />
      <SpotLight
        // target={target}
        castShadow
        position={[9, 14, -8]}
        penumbra={0.1}
        radiusTop={0.4}
        radiusBottom={40}
        distance={120}
        angle={0.45}
        attenuation={20}
        anglePower={5}
        intensity={1}
        opacity={0.5}
      />
      <pointLight
        ref={pointLight}
        color='whitesmoke'
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
      <ambientLight />
    </>
  );
};

export default Scene;
