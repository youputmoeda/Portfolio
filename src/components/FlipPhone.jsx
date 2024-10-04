import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'
import { useGraph } from '@react-three/fiber';

useGLTF.preload('./models/FlipPhone.glb')

export default function FlipPhone(props) {
  const group = useRef();
  const { scene } = useGLTF('./models/FlipPhone.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)

  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Scene' rotation={[-1.757, 0, 0]}>
        <group name='Armature' rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.antenna_low_flipPhone_0.geometry}
            material={materials.flipPhone}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.bottomPhone_low_flipPhone_0.geometry}
            material={materials.flipPhone}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane_Stickers_0.geometry}
            material={materials.Stickers}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane001_Stickers_0.geometry}
            material={materials.Stickers}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane002_Stickers_0.geometry}
            material={materials.Stickers}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane003_Stickers_0.geometry}
            material={materials.Stickers}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane004_Stickers_0.geometry}
            material={materials.Stickers}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane005_Stickers_0.geometry}
            material={materials.Stickers}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane006_Stickers_0.geometry}
            material={materials.Stickers}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane007_Stickers_0.geometry}
            material={materials.Stickers}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane008_Stickers_0.geometry}
            material={materials.Stickers}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane009_Stickers_0.geometry}
            material={materials.Stickers}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane010_Stickers_0.geometry}
            material={materials.Stickers}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane011_Stickers_0.geometry}
            material={materials.Stickers}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane012_Stickers_0.geometry}
            material={materials.Stickers}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane013_Stickers_0.geometry}
            material={materials.Stickers}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane014_Stickers_0.geometry}
            material={materials.Stickers}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane015_Stickers_0.geometry}
            material={materials.Stickers}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane016_Stickers_0.geometry}
            material={materials.Stickers}
          />
        </group>
      </group>
    </group>
  )
}
