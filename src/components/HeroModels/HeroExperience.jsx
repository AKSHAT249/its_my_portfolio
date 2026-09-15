import React, { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive'
import { Room } from './Room'
import HeroLights from './HeroLights'
import Particles from './Particles'
import { useInView } from '../../hooks/useInView'

const HeroExperience = () => {
  const wrapperRef = useRef(null)
  const isVisible = useInView(wrapperRef)
  const isTablet = useMediaQuery({ maxWidth: 1024 })
  const isMobile = useMediaQuery({ maxWidth: 768 })

  return (
    <div ref={wrapperRef} className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 45 }}
        dpr={[1, 1.5]}
        frameloop={isVisible ? 'always' : 'never'}
        gl={{
          antialias: !isMobile,
          powerPreference: 'high-performance',
          alpha: true,
        }}
        performance={{ min: 0.5 }}
      >
        <HeroLights simplified={isMobile} />
        <Particles count={isMobile ? 40 : 80} />

        <OrbitControls
          enablePan={false}
          enableZoom={!isTablet}
          maxDistance={20}
          minDistance={5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 5}
        />

        <group
          scale={isMobile ? 0.7 : 1}
          position={[0, -3.5, 0]}
          rotation={[0, -Math.PI / 4, 0]}
        >
          <Room enableBloom={!isMobile} />
        </group>
      </Canvas>
    </div>
  )
}

export default HeroExperience
