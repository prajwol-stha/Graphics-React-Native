
import React, { useRef } from 'react'
// import { useGLTF } from '@react-three/drei'
import { useGLTF } from '@react-three/drei/native'

export default function Model(props) {
  const { nodes, materials } = useGLTF(require('./Model.glb'))
  return (
    <group {...props} dispose={null} scale={1}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002.geometry}
        material={materials['Material.002']}
        position={[-0.104, 1.976, 0.044]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials['Material.002']}
        position={[-0.38, 1.153, 0.361]}
        rotation={[Math.PI / 2, 0, 1.423]}
        scale={0.37}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001.geometry}
          material={materials['Material.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002.geometry}
          material={materials['Material.002']}
          rotation={[0, 0, -3.142]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={materials['Material.002']}
        position={[1.17, 1.159, 2.834]}
        rotation={[0, -0.01, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder003.geometry}
        material={materials['Material.002']}
        position={[-1.389, 1.155, 2.834]}
        rotation={[0, 0.006, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder050.geometry}
        material={materials['Material.002']}
        position={[-0.104, 1.976, -0.494]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder051.geometry}
        material={materials['Material.002']}
        position={[1.17, 1.159, 2.834]}
        rotation={[0.099, -0.01, 0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder053.geometry}
        material={materials['Material.002']}
        position={[1.17, 1.159, 2.834]}
        rotation={[0, -0.01, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder054.geometry}
          material={materials['Material.002']}
          rotation={[Math.PI, -0.019, Math.PI]}
        />
      </mesh>
    </group>
  )
}