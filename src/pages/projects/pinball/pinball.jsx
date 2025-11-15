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
                title="Pinball Arcade"
                subtitle="Pinball Arcade recreates the classic pinball game through sensors and multiplayer modes"
                role="Design and Implement"
                team="6 group members"
                duration="February – June 2024"
                impacts="UI/UX Design, Game Scene Development, Debugging and Testing, Audio and Visual Enhancements，Team Collaboration, Future-Oriented Design Improvements"
                src="./pictures/PinballArcade/MainGame-radius.png"
                mediaType="image"
                />
            </div>

            <div>
                     <div className="project-container">
                         <div className="content-column">
                             {/* Overview */}
                             <section id="overview" className="content-section">
                                 <div className="section-title">Overview</div>
                                 <div>
                                      Pinball Arcade implements a real-time multiplayer mode that allows players to entertain and socialize, making it competitive in the market. We also integrated microphone, screen touch pressure and gyroscope sensors into the game mechanics which makes gameplay unique in the same genre.
                                 </div>
                             </section>
                     
                             <div id="overview" class="content-section">
                                <iframe 
                                    width="1200" 
                                    height="600" 
                                    src="https://www.youtube.com/embed/Lp3jr2XvRpg" 
                                    title="YouTube video player" 
                                    frameborder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
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