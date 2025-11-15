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
                title="AR Based Robot Teleoperation System"
                subtitle="By leveraging mobile AR, we aim to provide an accessible and low-friction interface for teleoperation, supporting both non-expert users and collaborative robotic systems in dynamic real-world environments."
                role="Group Leader"
                team="2 group members"
                duration="February – June 2025"
                impacts="Researches, Sketches, Design and Implement"
                src="./pictures/Franka3/WelcomePage.png"
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
                                      Human-robot collaboration (HRC) is becoming increasingly common in fields like manufacturing, healthcare, and teleoperation. However, current robot operating systems—especially those based on Linux/ROS—remain overly complex and inaccessible to non-expert users. These systems often require advanced technical skills, causing high cognitive load and operational frustration (Smith & Kennedy, 2025).
                                        <br></br>
                                        Prior research has shown that traditional teleoperation tools such as 3D SpaceMouses or kinesthetic teaching devices, although effective in controlled lab settings, are often unintuitive and physically demanding, especially for inexperienced users (Gradmann et al., 2018; Smith & Kennedy, 2025). Moreover, the setup and use of these systems usually involve significant startup costs and hardware requirements, limiting their scalability beyond expert use cases.
                                        <br></br>
                                        Our project focuses on how mobile AR interfaces can reduce these barriers and enhance the user experience in terms of safety, usability, and efficiency—especially for teleoperation. Literature highlights that AR-based robot interfaces can provide users with intuitive spatial awareness, preview of robot operations, and reduced task load (Gradmann et al., 2018). Moreover, such interfaces support experience goals like trust, control, and stimulation, which are essential for positive human-robot collaboration—particularly when working without safety barriers (Chowdhury et al., 2020).
                                        <br></br>
                                        By leveraging mobile AR, we aim to provide an accessible and low-friction interface for teleoperation, supporting both non-expert users and collaborative robotic systems in dynamic real-world environments.
                                 </div>
                             </section>
                     
                             <div id="video" className="content-section">
                                <iframe 
                                    width="1200"
                                    height="600" 
                                    src="https://www.youtube.com/embed/VQl7zcWEnfs?si=-3sZlfEm6vqRMI7d" 
                                    title="YouTube video player" 
                                    frameborder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                    referrerpolicy="strict-origin-when-cross-origin" 
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