import React from "react";
import Header from "../../components/Header/Header.jsx";
import Particles from "../../components/CanvasBackground/Particles.jsx";
import ProjectScroll from "../projects/ProjectScroll";
import { Canvas, useFrame, useThree } from '@react-three/fiber'

export default function Games() {
    return (
        <>
            <div className="games">
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
                        <ProjectScroll />
                     </Canvas>
                            
                   <div>
                        <Header />
                   </div>   
                <iframe
                    src="/games/prototype-1/index.html"
                    style={{ width: "100%", height: "100vh", border: "none" }}
                />
                <iframe
                    src="/games/prototype-2/index.html"
                    style={{ width: "100%", height: "100vh", border: "none" }}
                />
                <iframe
                    src="/games/prototype-3/index.html"
                    style={{ width: "100%", height: "100vh", border: "none" }}
                />
                <iframe
                    src="/games/prototype-4/index.html"
                    style={{ width: "100%", height: "100vh", border: "none" }}
                />
                <iframe
                    src="/games/prototype-5/index.html"
                    style={{ width: "100%", height: "100vh", border: "none" }}
                />
                <iframe
                    src="/games/BounceBall/index.html" 
                    style={{ width: "100%", height: "100vh", border: "none" }}
                />
                <iframe
                    src="/games/RunningDeer/index.html"
                    style={{ width: "100%", height: "100vh", border: "none" }}
                />
                <div>
                    {/* <Footer></Footer> */}
                </div>
            </div>
        </>
    )
}
