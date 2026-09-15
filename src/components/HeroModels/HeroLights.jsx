import { useMemo } from 'react';
import * as THREE from 'three';

const HeroLights = ({ simplified = false }) => {
    const rectLight = useMemo(() => {
        const light = new THREE.RectAreaLight('#A259FF', 15, 3, 2);
        light.position.set(1, 3, 4);
        light.rotation.set(-Math.PI / 4, Math.PI / 4, 0);
        return light;
    }, []);

    if (simplified) {
        return (
            <>
                <ambientLight intensity={0.35} color="#1a1a40" />
                <spotLight
                    position={[2, 5, 6]}
                    intensity={80}
                    angle={0.3}
                    penumbra={1}
                    color="white"
                />
                <pointLight position={[0, 1, 0]} intensity={8} color="#7209b7" />
            </>
        )
    }

    return (
        <>
            <spotLight 
                position={[2,5,6]}
                intensity={100}
                angle={0.15}
                penumbra={2}
                color="white"
            />

            <spotLight 
                position={[4,5,4]}
                intensity={40}
                angle={0.3}
                penumbra={0.5}
                color="#4cc9f0"
            />

            <spotLight 
                position={[-3,5,5]}
                angle={0.4}
                intensity={60}
                penumbra={1}
                color="#9d4edd"
            />

            <primitive object={rectLight} />

            <pointLight 
                position={[0,1,0]}
                intensity={10}
                color="#7209b7"
            />

            <pointLight 
                position={[1,2,-2]}
                intensity={10}
                color="#0d00a4"
            />
        </>

    )
}

export default HeroLights;