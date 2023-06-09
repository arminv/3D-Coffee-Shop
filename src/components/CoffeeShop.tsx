/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/models/Coffee-Shop-Tutorial.gltf
*/
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

type CoffeShopProps = {};

const CoffeeShop = (props: CoffeShopProps) => {
  const { nodes, materials } = useGLTF(
    './models/Coffee-Shop-Tutorial.gltf'
  ) as GLTF & { nodes: Record<string, any>; materials: Record<string, any> };

  return (
    <group {...props} dispose={null}>
      <group position={[-3.02, 0.95, 3.06]} scale={0.79}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_1.geometry}
          material={materials['Material.009']}
        />
        <mesh
          castShadow
          geometry={nodes.Circle001_2.geometry}
          material={materials['Material.006']}
        />
      </group>
      <mesh
        receiveShadow
        geometry={nodes.Plane011.geometry}
        material={materials['Material.001']}
        scale={50}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials['Material.002']}
        scale={4}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials['Material.003']}
        scale={4}
      />
      <mesh
        castShadow
        geometry={nodes.Plane008.geometry}
        material={materials['Material.009']}
        scale={4}
      />
      <mesh
        castShadow
        geometry={nodes.Plane009.geometry}
        material={materials['Material.009']}
        scale={4}
      />
      {/* House */}
      <mesh
        castShadow
        geometry={nodes.Text001.geometry}
        material={materials['Material.005']}
        position={[-3.23, 6.12, 1.74]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.84}
      >
        {/* Cup handle */}
        <mesh
          castShadow
          geometry={nodes.Plane003_1.geometry}
          material={materials['Material.007']}
          position={[3.86, -2.08, 7.31]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={4.78}
        >
          <mesh
            castShadow
            geometry={nodes.Plane010_1.geometry}
            material={nodes.Plane010_1.material}
          />
        </mesh>
        <mesh
          castShadow
          geometry={nodes.Plane005.geometry}
          material={materials['Material.008']}
          position={[3.86, -2.08, 7.31]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={4.78}
        >
          {/* Walls */}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane002.geometry}
            material={nodes.Plane002.material}
            scale={0.25}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane004.geometry}
            material={materials['Material.003']}
          />
          {/* Window Frames */}
          <mesh
            castShadow
            geometry={nodes.Plane006.geometry}
            material={materials['Material.005']}
          />
          {/* Door Frame */}
          <mesh
            castShadow
            geometry={nodes.Plane007.geometry}
            material={materials['Material.005']}
          />
          {/* Purple Floorboard */}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane019_1.geometry}
            material={materials['Material.004']}
          />
          {/* Door & Windows Glass */}
          <mesh
            geometry={nodes.Plane020.geometry}
            material={materials['Material.006']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane021.geometry}
            material={materials['Material.003']}
            scale={0.25}
          />
        </mesh>
        <mesh
          castShadow
          geometry={nodes.Plane013.geometry}
          material={materials['Material.003']}
          position={[0, 0.17, -0.03]}
        />
        <mesh
          castShadow
          geometry={nodes.Text002.geometry}
          material={materials['Material.005']}
          position={[1.31, 0, 0]}
        >
          <mesh
            castShadow
            geometry={nodes.Plane014.geometry}
            material={materials['Material.003']}
            position={[0, 0.17, -0.03]}
          />
        </mesh>
        <mesh
          castShadow
          geometry={nodes.Text003.geometry}
          material={materials['Material.005']}
          position={[2.63, 0, 0]}
        >
          <mesh
            castShadow
            geometry={nodes.Plane015.geometry}
            material={materials['Material.003']}
            position={[0, 0.17, -0.03]}
          />
        </mesh>
        <mesh
          castShadow
          geometry={nodes.Text004.geometry}
          material={materials['Material.005']}
          position={[3.94, 0, 0]}
        >
          <mesh
            castShadow
            geometry={nodes.Plane016.geometry}
            material={materials['Material.003']}
            position={[0, 0.17, -0.03]}
          />
        </mesh>
        <mesh
          castShadow
          geometry={nodes.Text005.geometry}
          material={materials['Material.005']}
          position={[5.26, 0, 0]}
        >
          <mesh
            castShadow
            geometry={nodes.Plane017.geometry}
            material={materials['Material.003']}
            position={[0, 0.17, -0.03]}
          />
        </mesh>
        <mesh
          geometry={nodes.Text006.geometry}
          material={materials['Material.005']}
          position={[6.57, 0, 0]}
        >
          <mesh
            castShadow
            geometry={nodes.Plane018.geometry}
            material={materials['Material.003']}
            position={[0, 0.17, -0.03]}
          />
        </mesh>
      </mesh>
    </group>
  );
};

export default CoffeeShop;
useGLTF.preload('./models/Coffee-Shop-Tutorial.gltf');
