import { useMemo, useRef, useEffect } from 'react'

export default function Particles(){
  const points = useRef()
  const objectsDistance = 7

  /**
   * Particles
   */
  // Geometry
  const particlesCount = 200
  const positions = useMemo(() => {
    const arr = new Float32Array(particlesCount * 3)
    for (let i = 0; i < particlesCount * 3; i++) {
      arr[i * 3 + 0] = (Math.random() - 0.5) * 10
      arr[i * 3 + 1] = objectsDistance * 0.5 - Math.random() * objectsDistance * 5
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return arr
  }, [])

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#ffeded"
        size={0.05}
        sizeAttenuation
        transparent
        opacity={0.8}
      />
    </points>
  )
}