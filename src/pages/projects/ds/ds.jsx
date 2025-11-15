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
                    title="Distributed Systems and Applications"
                    subtitle="The projects effectively demonstrate core concepts of distributed systems in a practical and user-friendly environment, striking a balance between functionality and performance."
                    role="Design and Implement"
                    team="me"
                    duration="February – June 2025"
                    impacts="Sockets and Threads, Client-Server architecture, GUI, Java RMI and a Multi-Threaded architecture, GUI)"
                    src="/pictures/DS/WhiteBoard.png"
                    mediaType="image"
                />
            </div>

            <div>
                     <div className="project-container">
                         <div className="content-column">
                             {/* Overview */}
                             <section id="overview-1" className="content-section">
                                 <div className="section-title">Overview for NetDictionary</div>
                                 <div>
                                      This report aims to illustrate the design and implementation of a dictionary system called
                                        NetDictionary, which adopts a client-server architecture. Built upon two fundamental
                                        technologies, Sockets and Threads, NetDictionary was developed step by step to support a
                                        multi-threaded server. It allows multiple clients to concurrently search for word meanings, add
                                        new words, remove existing words, add additional meanings, and update word meanings through
                                        a graphical user interface (GUI). Additionally, the server GUI can display active client connections
                                        and their operations in real time.
                                 </div>
                             </section>
                     
                             <div id="overview" className="content-section">
                                <iframe
                                    width="1200" 
                                    height="600" 
                                    src="./pictures/DS/Assignment1-1446180-Ninghao Zhu.pdf"
                                    title="PDF Document"
                                ></iframe>
                            </div>  

                            <section id="overview-2" className="content-section">
                                 <div className="section-title">Overview for WeDraw</div>
                                 <div>
                                      The task for Assignment 2 is to design and develop an online whiteboard system that allows
                                        multiple users to draw on the same whiteboard simultaneously and chat with each other via text.
                                        In addition, it also requires the design and development of user management and file
                                        management features, enabling manager to manage users and the file.
                                 </div>
                             </section>
                     
                             <div id="overview" className="content-section">
                                <iframe
                                    width="1200" 
                                    height="600" 
                                    src="./pictures/DS/Assignment2-1446180-Ninghao Zhu.pdf"
                                    title="PDF Document"
                                ></iframe>
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