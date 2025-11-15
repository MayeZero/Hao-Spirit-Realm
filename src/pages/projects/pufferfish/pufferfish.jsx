import Header from "../../../components/Header/Header.jsx";
import Particles from "../../../components/CanvasBackground/Particles.jsx";
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import ProjectCard from "../../../components/Card/ProjectCard.jsx";
import { useState } from "react";
import ContentCard from "../../../components/Card/ContentCard.jsx";
import Sidebar from "../../../components/Card/Sidebar.jsx";
import ProjectScroll from "../ProjectScroll.jsx";
import "../project.css";

export default function Pufferfish(){
  const [activeIndex, setActive] = useState(null);
  
  const sidebarItems = [
      { label: "Overview", href: "#overview" },
      { label: "Problem / Solution", href: "#problem-statement" },
      { label: "User Challenge", href: "#user-challenge" },
      { label: "Technical Challenge", href: "#technical-challenge" },
      { label: "Design and Implementation", href: "#design-implementation" },
      { label: "User Experience", href: "#user-experience" },
      { label: "Next Steps", href: "#next-steps" },
  ];
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
                  title="Pufferfish Prototypes and Scenarios"
                  subtitle="Creating Pufferfish Prototypes and Scenarios Using Pneumatic Devices and 3D Printing Technology: Helping People Feel the Impact of the Anthropocene on Nature"
                  role="Design and Implement"
                  team="2 group members"
                  duration="February – June 2024"
                  impacts="Design and Implementation, User Testing and Feedback Analysis, Raising Environmental Awareness, Team Collaboration and Cross-disciplinary Integration, Future-Oriented Design Improvements"
                  src="/pictures/PufferFish/Octopus-3.png"
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
                            During my Design Novel Interactions subject in 2024 Semester 1, I conducted research and related studies, and iteratively designs and implement pufferfish prototypes and scenarios using pneumatic devices and 3D printing technology. Theoretical testing was also executed and six participants were invited to participate in user testing. They are exhibited in a showcase in Melbourne Connect.
                          </div>
                        </section>
                
                        {/* Problem Statement Card */}
                        <ContentCard
                          title="Problem Statement"
                          mainTitle="Potential reef degradation and climate change"
                          description={`Due to the potential impacts of coral reef degradation and climate
                                        change, species such as pufferfish are threatened by habitat loss. These factors 
                                        are increasingly affecting the global biodiversity, food security, and other related ecosystem services on which we
                                        rely for survival, and their long-term consequences remain to be determined.`}
                          img="./pictures/PufferFish/Climate.png"
                        />
                
                        {/* User Challenge */}
                        <section id="user-challenge" className="content-section">
                          <div className="section-title">User Challenge</div>
                          <div className="main-heading">
                            How can we engage users into the scenario where pufferfish are affected by Anthropocene?
                          </div>
                        </section>
                
                        {/* First Version Sketch */}
                        <ContentCard
                          title="Prototype Design"
                          mainTitle="First Version sketch"
                          description="In the first version of the sketch, it intends for the participant to
                                      imagine that he or she is a puffer fish, experiencing the journey of a puffer 
                                      fish's life from birth to death in the natural world, and for
                                      the participant to interact with it. The participant can pick up a
                                      spherical puffer fish with their hands and place it in the game box. 
                                      When the pufferfish ball is placed in, the pufferfish ball will have many experiences in the game box as it rolls from top to bottom. Participants can decide which way the puffer ball rolls by rotating
                                      the stopper. When it reaches the area of predation, the pufferfish
                                      inflates and grows larger, and when it reaches the area of its natural 
                                      predators, the pufferfish glows and releases toxins or sprays water. I thought about the design of the game box, the
                                      inflatable device, and the LED lights as an interactive device."
                          img="./pictures/PufferFish/sketch1.png"
                        />
                
                        {/* Technical Challenge */}
                        <section id="technical-challenge" className="content-section">
                          <div className="section-title">Technical Challenge</div>
                          <div className="main-heading">
                            How can we make pufferfish become interactive?
                          </div>
                        </section>
                
                        {/* Pneumatic Principle */}
                        <ContentCard
                          title="Prototype Design"
                          mainTitle="The principle of pneumatic device"
                          description="As shown in the picture is the principle of a pneumatic device, the whole pneumatic device consists of a supply, vacuum, 2
                                        valves, a balloon, and a pipe, where the supply can deliver gas to
                                        the balloon and the pipe, the vacuum can output gas (Yao et al., 2013). The two valves are 3-port, 2-position. Through the
                                        combination of pipes, two valves can form three different states to
                                        control the flow of gas."
                          img="./pictures/PufferFish/The principle of pneumatic device.png"
                        />
                
                        {/* Valve Principle */}
                        <ContentCard
                          title="Prototype Design"
                          mainTitle="The principle of valve"
                          description="As shown in the diagram, the principle of the valve is that by
                                        energising and de-energising the valve, the coil inside will move, causing the valve to open or close"
                          img="./pictures/PufferFish/The principle of valve.png"
                        />
                
                        {/* Implementation */}
                        <ContentCard
                          title="Prototype Implementation"
                          mainTitle="Implementation of the peumatic device"
                          description="During the implementation of the pneumatic device for pufferfish, difficulties were encountered with the device being too
                                      large. It was found that the pufferfish ball with its pneumatic device could not fit into the game box, and that part of the game's
                                      interaction was cancelled."
                          img="./pictures/PufferFish/Implementation of the peumatic device.png"
                        />
                
                        {/* 3D printing */}
                        <ContentCard
                          title="Prototype Implementation"
                          mainTitle="Second Version Sketch and Implementation"
                          description="The design was then changed and became the second version of
                                      the scene of the house of the puffer fish with the ocean. 
                                      In this version of the design, due to the decline in the number of coral reefs, 
                                      the puffer fish has no place to live and is adrift in the ocean. 
                                      The pneumatic device can be placed in the base of a wooden box, 
                                      exposing only the pufferfish balloon to show its expansion and
                                      contraction. The ultrasonic sensors and the power plugs needed
                                      for the pneumatic device can also be placed through small holes. 
                                      The pufferfish can expand and glow when they feel dangerous, 
                                      and return to its original shape when they safe again (Patel, 2021). 
                                      The design also plans to use 3D printing technology to create sea
                                      creatures and add LED lights for decoration."
                          img="./pictures/PufferFish/Second Version Sketch and Implementation.png"
                        />
                
                        <ContentCard
                          title="Prototype Implementation"
                          mainTitle="Implementation of the 3D printings and drawings"
                          description="In the final third version, models of starfish, octopus, etc. were drawn in order to bring the participants into the scenario better, and the objects were enriched by using 3d printing. Watercolours were used to add colours and expressions to the models."
                          img="./pictures/PufferFish/Implementation of the 3D printings and drawings.png"
                        />
                
                        {/* User Experience */}
                        <section id="user-experience" className="content-section">
                          <div className="section-title">User Experience</div>
                          <div className="main-heading">How can we evaluate user experience and make improvements?</div>
                        </section>
                
                        <ContentCard
                          title="SYSTEM EVALUATION"
                          mainTitle="Theoretical Evaluation / User Evaluation"
                          description="After connecting the whole model to the power supply and the USB port of the computer, turn on the power switch of the LED
                                      light chain and conduct a manual test. The test steps were to
                                      approach and move away from the ultrasonic sensor by hand, turn
                                      the power switch on and off, test the running code, and observe
                                      and analyse the operation of the circuitry as well as the pneumatics. Problems that users encountered during the engagement process were unable to detect distance effectively and not knowing how to
                                            interact with it. The time for inflating and deflating the puffer fish was fixed and used to control the size of the puffer fish."
                          img="./pictures/PufferFish/pufferfish.png"
                        />
                
                        {/* Next Steps */}
                        <section id="next-steps" className="content-section">
                          <div className="section-title">Next Steps</div>
                          <ol className="section-ol">
                            <li>Expand Scope: Add more behaviors beyond defense.</li>
                            <li>Add Sensors: Use additional sensors for richer interactions.</li>
                            <li>Improve Feedback: Enhance danger-safety cues with lights and sounds.</li>
                            <li>Optimize Hardware: Make components more portable.</li>
                            <li>Personalize: Offer scenarios to match user preferences.</li>
                            <li>Modular Design: Make parts easily upgradable.</li>
                          </ol>
                        </section>
                
                      </div>
                
                      {/* Sidebar */}
                      <div className="sidebar-column">
                        <Sidebar items={sidebarItems} activeIndex={activeIndex} setActive={setActive} />
                      </div>
                    </div>    
              </div>
              <div>
                {/* <Footer></Footer> */}
              </div>
            </>
    )   
}