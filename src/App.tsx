import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from './components/Loader';
import Scene from './components/Scene';

const App = () => {
  return (
    <Canvas shadows camera={{ position: [14, 12, 25], fov: 50 }}>
      {/* <axesHelper scale={30} /> */}
      <color attach='background' args={['#000000']} />
      <Suspense fallback={<Loader />}>
        <Scene />
      </Suspense>
    </Canvas>
  );
};

export default App;
