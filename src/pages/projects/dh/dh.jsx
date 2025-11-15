import Header from "../../../components/Header/Header.jsx";
import Particles from "../../../components/CanvasBackground/Particles.jsx";
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import ProjectCard from "../../../components/Card/ProjectCard.jsx";
import { useState } from "react";
import ContentCard from "../../../components/Card/ContentCard.jsx";
import Sidebar from "../../../components/Card/Sidebar.jsx";
import ProjectScroll from "../ProjectScroll.jsx";
import "../project.css";

export default function Pinball(){
    return(
        <>
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
                <ProjectCard 
                    title="TELESKIN"
                    subtitle="By adopting the FHIR standard to ensure interoperability, and combining
                    AI analysis with clinical judgment, the platform will provide efficient, safe, and sustainable
                    dermatological care."
                    role="Design"
                    team="2 group members"
                    duration="February – June 2025"
                    impacts="Researches, Figma Design"
                    src="/pictures/DH/Prototype-Video.mp4"
                    mediaType="video"
                />
            </div>

            <div>
                     <div className="project-container">
                         <div className="content-column">
                             {/* Overview */}
                             <section id="overview" className="content-section">
                                 <div className="section-title">Overview</div>
                                 <div>
                                     By adopting the FHIR standard to ensure interoperability, and combining
                                    AI analysis with clinical judgment, the platform will provide efficient, safe, and sustainable
                                    dermatological care. It will also offer a convenient channel for general practitioners to obtain
                                    specialist dermatological opinions, thereby enhancing diagnostic and treatment capabilities.
                                 </div>
                             </section>
                     
                             <div id="overview" className="content-section">
                                <iframe 
                                    width="1200" 
                                    height="600" 
                                    src="https://www.youtube.com/embed/4WT58Kc5dhc?si=zgXRpFy3HstsPvc4" 
                                    title="YouTube video player" 
                                    frameborder="0" 
                                    allowfullscreen>
                                </iframe>
                            </div>  
 
                         </div> 
                         
                         {/* Sidebar */}
                         {/* <div className="sidebar-column">
                             <Sidebar items={sidebarItems} activeIndex={activeIndex} setActive={setActive} />
                         </div>    */}
                     </div>
                 </div>     
        </>
    )    
}