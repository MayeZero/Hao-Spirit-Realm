import Header from "../../../components/Header/Header.jsx";
import Particles from "../../../components/CanvasBackground/Particles.jsx";
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import ProjectCard from "../../../components/Card/ProjectCard.jsx";
import { useState } from "react";
import ContentCard from "../../../components/Card/ContentCard.jsx";
import Sidebar from "../../../components/Card/Sidebar.jsx";
import ProjectScroll from "../ProjectScroll.jsx";
import "../project.css";

export default function Queen(){
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
                  title="Queen Victoria Market"
                  subtitle="Conducting fieldwork in design at a unique third place: the iconic Queen Victoria Market"
                  role="Design"
                  team="4 group members"
                  duration="February – June 2024"
                  impacts="Interview, Persona, Team Collaboration, Accessibility, Ethical and Privacy concerns"
                  src="./pictures/QueenVictoriaMarket/AIpersona.png"
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
                                      Queen Victoria Market, Melbourne's cultural heart, attracts millions annually. With ongoing redevelopment, mobility is crucial for shoppers and tourists, but navigating over 600 stalls can be overwhelming. Our fieldwork showed many visitors struggle to locate stores, amenities, and product information, with unclear signage adding to the confusion. To address these issues, we propose a mobile app featuring AR navigation and a personalized recommendation system to simplify market navigation, product discovery, and access to real-time information. Key features include interactive AR guidance, a recommendation engine, and clear onboarding. Despite challenges like accessibility, privacy, and compatibility, we will refine the design to enhance the market experience for all users.
                                 </div>
                             </section>
                     
                                {/* YouTube iframe */}
                                <iframe
                                    width="1200"
                                    height="600"
                                    src="https://www.youtube.com/embed/HEAAwXNjoQ4"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>

                                {/* 第一张图片 */}
                                <div>
                                    <img
                                    src="./pictures/QueenVictoriaMarket/persona-customer.png"
                                    alt="persona customer"
                                    style={{ width: "1200px", height: "1080px", objectFit: "contain" }}
                                    />
                                </div>

                                {/* 第二张图片 */}
                                <div>
                                    <img
                                    src="./pictures/QueenVictoriaMarket/persona-stalkholder.png"
                                    alt="persona stakeholder"
                                    style={{ width: "1200px", height: "1080px", objectFit: "contain" }}
                                    />
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