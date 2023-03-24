import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Loader from './components/Loader';
import Scene from './components/Scene';

const App = () => {
  return (
    <Canvas shadows camera={{ position: [14, 9, 25], fov: 50 }}>
      <Suspense fallback={<Loader />}>
        <Scene />
      </Suspense>
    </Canvas>
  );
};

export default App;
