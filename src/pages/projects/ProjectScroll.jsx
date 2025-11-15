import { useMemo, useRef, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

export default function ProjectScroll(){
    const { camera } = useThree()
    const parameters = {
        materialColor: '#ffeded'
    }
    
      /**
       * Sizes
       */
      const sizes = {
          width: window.innerWidth,
          height: window.innerHeight
      }
    
      const topDistance = -4
      const objectsDistance = 7
    
      const cameraGroup = useRef()
    
      const scroll = useRef(0)
      // 监听滚动事件
      useEffect(() => {
        const onScroll = () => {
          scroll.current = window.scrollY
        }
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
      }, [])
    
      const clock = new THREE.Clock()
      let previousTime = 0
    
      useFrame(({ camera }) =>
      {  
          const elapsedTime = clock.getElapsedTime()
          const deltaTime = elapsedTime - previousTime
          previousTime = elapsedTime
    
          const scrollOffset = scroll.current / sizes.height
          cameraGroup.current.position.y = -scrollOffset * objectsDistance
    
          const parallaxX = cursor.x
          const parallaxY = - cursor.y
          camera.position.x += (parallaxX - camera.position.x) * 5 * deltaTime
          camera.position.y += (parallaxY - camera.position.y) * 5 * deltaTime
      })
    
      /**
       * Scroll
       */
      let scrollY = window.scrollY
    
      window.addEventListener('scroll', () =>
      {
          scrollY = window.scrollY
    
          // console.log(scrollY)
      })
    
      /**
       * Cursor
       */
      const cursor = {}
      cursor.x = 0
      cursor.y = 0
    
      window.addEventListener('mousemove', (event) =>
      {
          cursor.x = event.clientX / sizes.width - 0.5
          cursor.y = event.clientY / sizes.height - 0.5
    
          // console.log(cursor)
      })
      return (
        <group ref={cameraGroup}>
        </group>
        )
}