import React, { useEffect, useRef } from 'react'
import { Float, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import { useInView } from '../../../hooks/useInView'

const TechIconScene = ({ model }) => {
  const scene = useGLTF(model.modelPath)

  useEffect(() => {
    if (model.name === 'Interactive Developer') {
      scene.scene.traverse((child) => {
        if (child.isMesh && child.name === 'Object_5') {
          child.material = new THREE.MeshStandardMaterial({ color: 'white' })
        }
      })
    }
  }, [scene, model.name])

  return (
    <Canvas
      dpr={[1, 1.25]}
      gl={{ antialias: false, powerPreference: 'high-performance' }}
      performance={{ min: 0.5 }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <OrbitControls enableZoom={false} />
      <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
        <group scale={model.scale} rotation={model.rotation}>
          <primitive object={scene.scene} />
        </group>
      </Float>
    </Canvas>
  )
}

const TechIcon = ({ model }) => {
  const wrapperRef = useRef(null)
  const inView = useInView(wrapperRef, { initial: false })

  return (
    <div ref={wrapperRef} className="w-full h-full">
      {inView ? <TechIconScene model={model} /> : null}
    </div>
  )
}

export default TechIcon
