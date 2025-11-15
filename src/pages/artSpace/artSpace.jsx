import React from "react";
import "./artSpace.css";
import Header from "../../components/Header/Header.jsx";
import Particles from "../../components/CanvasBackground/Particles.jsx";
import ProjectScroll from "../projects/ProjectScroll";
import { Canvas, useFrame, useThree } from '@react-three/fiber'

export default function artSpace(){
   const images = [
    "./pictures/Draws/guitar.png",
    "./pictures/Draws/zhulong.png",
    "./pictures/Draws/long.png",
    "./pictures/Draws/coffee.png",
    "./pictures/Draws/cake.png",
    "./pictures/Draws/Cactus.png",
    "./pictures/Draws/fishandbird.png",
    "./pictures/Draws/grasshouse.png",
    "./pictures/Draws/appleturtleOwl.png",
    "./pictures/Draws/cat.png",
  ];

  return (
    <div className="artSpace">
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
      {/* Main Content */}
      <main>
        <h1>Art Space</h1>
        <div className="gallery">
          {images.map((src, index) => (
            <div key={index} className="gallery-item">
              <img src={src} alt={`Art ${index + 1}`} />
            </div>
          ))}

          {/* PDF iframe */}
          <div className="gallery-item">
            <iframe
              src="./pictures/Draws/Assignment 1-Design Novel Interactions-Ninghao Zhu-1446180.pdf"
              title="PDF Document"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      </main>

      <div>
         {/* <Footer></Footer> */}
      </div>
    </div>
  ); 
}