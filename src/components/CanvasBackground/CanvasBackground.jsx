import Header from "../Header/Header.jsx";
import Banner from "../Banner/Banner.jsx";
import './CanvasBackground.css'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import { useMemo, useRef, useEffect } from 'react'
import * as THREE from 'three'
import Card from "../Card/Card.jsx"
import Particles from "./Particles.jsx"

function ScrollBackground() {
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

  // Texture
  const textureLoader = new THREE.TextureLoader()
  const gradientTexture = textureLoader.load('textures/gradients/3.jpg')
  gradientTexture.magFilter = THREE.NearestFilter
  // console.log(gradientTexture)

  const topDistance = -4
  const objectsDistance = 7

  const cameraGroup = useRef()
  const dodeRef= useRef()
  const boxRef = useRef()
  const octaRef = useRef();
  const torusRef = useRef()
  const coneRef = useRef()
  const torusKnotRef = useRef()
  const sphereRef = useRef()

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
      dodeRef.current.rotation.x += 0.001
      dodeRef.current.rotation.y += 0.0012
      boxRef.current.rotation.x += 0.001
      boxRef.current.rotation.y += 0.0012
      octaRef.current.rotation.x += 0.001
      octaRef.current.rotation.y += 0.0012
      torusRef.current.rotation.x += 0.001
      torusRef.current.rotation.y += 0.0012
      coneRef.current.rotation.x += 0.001
      coneRef.current.rotation.y += 0.0012
      torusKnotRef.current.rotation.x += 0.001
      torusKnotRef.current.rotation.y += 0.0012
      sphereRef.current.rotation.x += 0.001
      sphereRef.current.rotation.y += 0.0012

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
    <>
      {/* <canvas className="webgl"></canvas> */}
      <group ref={cameraGroup}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      </group>

      <directionalLight color="#ffffff" intensity={3} position={[5, 5, 5]}/>
      <mesh ref={dodeRef} rotation={[0.5, 0.5, 0]} position-x = {2} position-y = {topDistance - objectsDistance * 0}>
        <dodecahedronGeometry args={[1]} />
        <meshToonMaterial color={parameters.materialColor} gradientMap={gradientTexture}/>
      </mesh>
      <mesh ref={boxRef} rotation={[0.5, 0.5, 0]} position-x = {-2} position-y = {topDistance - objectsDistance * 1}>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshToonMaterial color={parameters.materialColor} gradientMap={gradientTexture}/>
      </mesh>
      <mesh ref={octaRef} rotation={[0.5, 0.5, 0]} position-x = {2} position-y = {topDistance - objectsDistance * 2}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color={parameters.materialColor} gradientMap={gradientTexture}/>
      </mesh>
        <mesh ref={sphereRef} rotation={[0.5, 0.5, 0]} position-x = {-2} position-y = {topDistance - objectsDistance * 3}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshToonMaterial color={parameters.materialColor} gradientMap={gradientTexture}/>
      </mesh>
      <mesh ref={torusRef} rotation={[0.5, 0.5, 0]} position-x = {2} position-y = {topDistance - objectsDistance * 4}> 
        <torusGeometry args={[1, 0.4, 16, 100]} /> 
        <meshToonMaterial color={parameters.materialColor} gradientMap={gradientTexture}/> 
      </mesh>
      <mesh ref={coneRef} rotation={[0.5, 0.5, 0]} position-x = {-2} position-y = {topDistance - objectsDistance * 5}>
        <coneGeometry args={[1, 2, 32]}/>
        <meshToonMaterial color={parameters.materialColor} gradientMap={gradientTexture}/> 
      </mesh>
      <mesh ref={torusKnotRef} rotation={[0.5, 0.5, 0]} position-x = {2} position-y = {topDistance - objectsDistance * 6}>
        <torusKnotGeometry args={[0.8, 0.35, 100, 16]}/>
        <meshToonMaterial color={parameters.materialColor} gradientMap={gradientTexture}/> 
      </mesh>
    </>
  );
}

{/* <section className="section">
        <Canvas className="webgl"> 
          <directionalLight color="#ffffff" intensity={3} position={[5, 5, 5]} />
          <mesh rotation={[0.5, 0.5, 0]}> 
            <torusGeometry args={[1, 0.4, 16, 100]} /> 
            <meshStandardMaterial color={parameters.materialColor} /> 
          </mesh> 
        </Canvas>
        <h3>My Portfolio</h3>
      </section>

      <section className="section">
        <h3>My Projects</h3>
        <Canvas className="webgl"> 
          <directionalLight color="#ffffff" intensity={3} position={[5, 5, 5]} />
          <mesh rotation={[0.5, 0.5, 0]}> 
            <coneGeometry args={[1, 2, 32]} /> 
            <meshStandardMaterial color={parameters.materialColor} /> 
          </mesh> 
        </Canvas>
      </section>

      <section className="section">
        <Canvas className="webgl"> 
          <directionalLight color="#ffffff" intensity={3} position={[5, 5, 5]} />
          <mesh rotation={[0.5, 0.5, 0]}> 
            <torusKnotGeometry args={[0.8, 0.35, 100, 16]} /> 
            <meshStandardMaterial color={parameters.materialColor} /> 
          </mesh> 
        </Canvas>
        <h3>Contact Me</h3>
      </section> */}

export default function CanvasBackgound() {
  return (
    <>
      {/* Canvas 作为背景层 */}
      <Canvas
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      >
        <Particles />
        <ScrollBackground />
      </Canvas>

      <div>
        <Header />
        <Banner />
      </div>

      <section className="section">
        <Card
          to="/robot"
          title="AR Based Robot Teleoperation System"
          text="By leveraging mobile AR, we aim to provide an accessible and low-friction interface for teleoperation, supporting both non-expert users and collaborative robotic systems in dynamic real-world environments."
        >
          <img 
            className="cardContent"
            src={"/pictures/Franka3/WelcomePage.png"} 
            alt="Project 1 Image" 
           />
        </Card>
      </section>

      <section className="section">
        <Card
          to="/ds"
          title="Distributed Systems and Applications"
          text="The projects effectively demonstrate core concepts of distributed systems in a practical and user-friendly environment, striking a balance between functionality and performance."
        >
          <img 
            className="cardContent"
            src={"/pictures/DS/WhiteBoard.png"} 
            alt="Project 2 Image" 
           />
        </Card>
      </section>

      <section className="section">
        <Card
          to="/dh"
          title="Teleskin"
          text="By adopting the FHIR standard to ensure interoperability, and combining
          AI analysis with clinical judgment, the platform will provide efficient, safe, and sustainable
          dermatological care."
        >
           <video 
            className="cardContent" 
            src={"/pictures/DH/Prototype-Video.mp4"} 
            alt="Project 2 Video" 
            autoPlay
            loop
            muted
            playsInline
          />
        </Card>
      </section>

      <section className="section">
        <Card
          to="/pinball"
          title="Pinball Arcade"
          text="Pinball Arcade recreates the classic pinball game through sensors and multiplayer modes."
        >
          <img 
            className="cardContent" 
            src={"/pictures/PinballArcade/MainGame.png"} 
            alt="Project 4 Image"
          />
        </Card>
      </section>

      <section className="section">
        <Card
          to="/pufferfish"
          title="Pufferfish Prototypes and Scenarios"
          text="Creating Pufferfish Prototypes and Scenarios Using Pneumatic Devices and 3D Printing Technology: Helping People Feel the Impact of the Anthropocene on Nature"
        >
          <img 
            className="cardContent"
            src={"/pictures/PufferFish/Octopus-3.png"} 
            alt="Project 1 Image" 
           />
        </Card>
      </section>

      <section className="section">
        <Card
          to="/social"
          title="Life footprint social application prototypes"
          text="Trails as a Subject and a Springboard for discussion in social media"
        >
          <video 
            className="cardContent" 
            src={"/videos/lifefootprint-video.mp4"} 
            alt="Project 2 Video" 
            autoPlay
            loop
            muted
            playsInline
          />
        </Card>
      </section>

      <section className="section">
        <Card
          to="/queen"
          title="Queen Victoria Market"
          text="Conducting fieldwork in design at a unique third place: the iconic Queen Victoria Market"
        >
          <img 
            className="cardContent" 
            src={"/pictures/QueenVictoriaMarket/AIpersona.png"} 
            alt="Project 3 Image" 
          />
        </Card>
      </section>

      <div>
        {/* <Footer></Footer> */}
      </div>
    </>
  )
}