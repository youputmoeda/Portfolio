
import React, { useRef } from 'react'
import { SkeletonUtils } from 'three-stdlib'
import { useGLTF } from '@react-three/drei'
import { useGraph } from '@react-three/fiber';

useGLTF.preload('./models/mccree.glb')

export default function Mcree(props) {
    const group = useRef();
    const { scene } = useGLTF('./models/mccree.glb')
    const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
    const { nodes, materials } = useGraph(clone)
    return (
        <group ref={group} {...props} dispose={null}>
            <group name='Scene' rotation={[-Math.PI / 2, 0, 0]}>
                <group name='Armature' position={[-0.006, 0.011, 0.131]} scale={0.186}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.mccree_0.geometry}
                        material={materials['Material.001']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.mccree_1.geometry}
                        material={materials.light}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.mccree_2.geometry}
                        material={materials.goldmetal}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.mccree_3.geometry}
                        material={materials.goldmetaldark}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.mccree_4.geometry}
                        material={materials.pants}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.mccree_5.geometry}
                        material={materials.hair}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.mccree_6.geometry}
                        material={materials.chaps}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.mccree_7.geometry}
                        material={materials.leather}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.mccree_8.geometry}
                        material={materials.shirt}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.mccree_9.geometry}
                        material={materials.skin}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.mccree_10.geometry}
                        material={materials['skin.002']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.mccree_11.geometry}
                        material={materials['skin.001']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.mccree_12.geometry}
                        material={materials.metal}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.mccree_13.geometry}
                        material={materials.glowyblue}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.mccree_14.geometry}
                        material={materials['shirt.001']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.mccree_15.geometry}
                        material={materials['metal.001']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.mccree_16.geometry}
                        material={materials['metal.002']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.mccree_17.geometry}
                        material={materials.FIRE}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.mccree_18.geometry}
                        material={materials.WHITE}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.mccree_19.geometry}
                        material={materials['goldmetal.shen']}
                    />
                </group>
                <group
                    position={[-0.014, 0.055, 2.017]}
                    rotation={[0.207, 0.076, -0.052]}
                    scale={[0.241, 0.169, 0.054]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder001_0.geometry}
                        material={materials.PONCHO}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder001_1.geometry}
                        material={materials.light}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder001_2.geometry}
                        material={materials['PONCHO.001']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder001_3.geometry}
                        material={materials['light.001']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder001_4.geometry}
                        material={materials['light.002']}
                    />
                </group>
                <group
                    position={[-0.008, 0.084, 2.267]}
                    rotation={[2.755, 0, 3.075]}
                    scale={[-0.288, 0.288, 0.011]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder_0.geometry}
                        material={materials.chaps}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder_1.geometry}
                        material={materials.leather}
                    />
                </group>
                <group
                    position={[0.28, -0.007, 1.398]}
                    rotation={[3.132, 0.245, 0.091]}
                    scale={[-0.04, 0.04, 0.136]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder002_0.geometry}
                        material={materials.Spot}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder002_1.geometry}
                        material={materials.glowyblue}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder002_2.geometry}
                        material={materials['metal.002']}
                    />
                </group>
                <group
                    position={[0.252, 0.109, 1.365]}
                    rotation={[-2.941, 0.191, 0.171]}
                    scale={[-0.04, 0.04, 0.136]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder003_0.geometry}
                        material={materials.Spot}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder003_1.geometry}
                        material={materials.glowyblue}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder003_2.geometry}
                        material={materials['metal.002']}
                    />
                </group>
                <group
                    position={[0.183, 0.179, 1.34]}
                    rotation={[-2.941, 0.191, 0.171]}
                    scale={[-0.04, 0.04, 0.136]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder004_0.geometry}
                        material={materials.Spot}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder004_1.geometry}
                        material={materials.glowyblue}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder004_2.geometry}
                        material={materials['metal.002']}
                    />
                </group>
                <group
                    position={[0.498, -0.389, 1.927]}
                    rotation={[-2.857, 0.84, 0.723]}
                    scale={[-0.039, 0.086, 0.022]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube001_0.geometry}
                        material={materials.Area}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube001_1.geometry}
                        material={materials.FIRE}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube001_2.geometry}
                        material={materials['FIRE.001']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube001_3.geometry}
                        material={materials['hair.002']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube001_4.geometry}
                        material={materials.WHITE}
                    />
                </group>
                <group
                    position={[-0.441, -0.164, 0.956]}
                    rotation={[-0.182, 0.024, -1.538]}
                    scale={[-0.024, 0.024, 0.024]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.GUN_0.geometry}
                        material={materials.metal}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.GUN_1.geometry}
                        material={materials['metal.002']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.GUN_2.geometry}
                        material={materials['metal.001']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.GUN_3.geometry}
                        material={materials.chaps}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.GUN_4.geometry}
                        material={materials.glowyblue}
                    />
                </group>
            </group>
        </group>
    )
}