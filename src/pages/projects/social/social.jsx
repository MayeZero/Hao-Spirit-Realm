import Header from "../../../components/Header/Header.jsx";
import Particles from "../../../components/CanvasBackground/Particles.jsx";
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useMemo, useRef, useEffect } from 'react'
import * as THREE from 'three'
import ProjectCard from "../../../components/Card/ProjectCard.jsx";
import { useState } from "react";
import ContentCard from "../../../components/Card/ContentCard.jsx";
import Sidebar from "../../../components/Card/Sidebar.jsx";
import "../project.css";
import ProjectScroll from "../ProjectScroll.jsx";

export default function Social(){
    const [activeIndex, setActive] = useState(null);
  
    const sidebarItems = [
        { label: 'Overview', href: '#overview' },
        { label: 'Problem / Solution', href: '#problem-statement' },
        { label: 'Prototype n°1', href: '#Prototype n°1' },
        { label: 'Prototype n°2', href: '#Prototype n°2' },
        { label: 'Prototype n°3', href: '#Prototype n°3' },
        { label: 'User-interactions', href: '#user-interactions' },
        { label: 'Evaluation', href: '#evaluation' },
        { label: 'Product', href: '#product' }
    ];

    return (
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
                  title="Life footprint social application prototypes"
                  subtitle="Trails as a Subject and a Springboard for discussion in social media"
                  role="Designer"
                  team="3 group members"
                  duration="July – October 2024"
                  impacts="Research, Sketches, Low-fidelity prototypes, High-fidelity prototypes, Evaluation and Feedback Analysis, Design itarations, Team Collaboration"
                  src="/videos/lifefootprint-video.mp4"
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
                                     Life Footprint  aims to enhance user interaction and social sharing by allowing users to display their trails on a map for intuitive viewing and management. Users can edit and personalize others' trails, creating unique iterations that enrich the shared experience. The platform is open to all users, encouraging them to share their daily paths and experiences, fostering a community-driven, social environment.
                                </div>
                            </section>
                    
                            {/* Research Conclusion Card */}
                            <ContentCard
                                title="Research Conclusion"
                                mainTitle="Related Work"
                                description={`<ol>
                                                    <li>Go Take a Hike: 
                                                        <div>Online Hiking Resources (kennesaw.edu)
                                                            This resource provides a comprehensive database of tens of thousands of trail guides for users preparing for upcoming hikes. It is community-driven, with over 60,000 trail maps and 50,000 outdoor trails available, along with filtering options. GPX files are also available, allowing users to track routes without cell service.</div>
                                                    </li>
                                                    <div class="horizontal-line-project"></div>
                                                    <li> Sharing Life Experiences Based on GPS Trajectories (psu.edu)
                                                        <div>This study explores the use of GPS and Wi-Fi to record location history as timestamped "trajectories." Users can share life experiences through these trajectories and receive travel, friend, and location recommendations. Features include spatio-temporal queries, transportation mode learning based on GPS data, user-generated trajectory interactions, and social feedback.</div>
                                                    </li>
                                                    <div class="horizontal-line-project"></div>
                                                    <li> “Like” is More than Just a Thumbs up: The Role of Feedback and Sociability in SNS Usage
                                                        <div>This work discusses the role of feedback mechanisms like "likes" on social networking sites, highlighting the importance of sociability in users' engagement with social platforms.</div>
                                                    </li>
                                                    <div class="horizontal-line-project"></div>
                                                    <li>Like it! Maps as a Subject and a Springboard for Discussion in Social Media (Nieścioruk, K.)
                                                        <div>This research examines the use of maps as a topic for social media discussions, demonstrating how maps can facilitate social interaction and engagement.</div>
                                                    </li>
                                                </ol>`}
                            />
                    
                            {/* BrainStorm */}
                            <div className="content-section">
                                    <div className="section-title">BrainStorm</div>
                                    <div className="image-content">
                                        <img src="./pictures/LifeFootprint/brainstorm.png" alt="sketch1.png" className="mockup-image" />
                                    </div>
                                    <div className="section-title">Conclusion of BrainStorm</div>
                                    <div className="image-content">
                                        <img src="./pictures/LifeFootprint/conclusion.png" alt="sketch1.png" className="mockup-image" />
                                    </div>
                            </div>
                            <div id="problem-statement" className="content-section">
                                <div className="section-title">Problem Statement</div>
                                <img src="./pictures/LifeFootprint/problem.png" alt="The principle of pneumatic device.png" className="mockup-image" />
                            </div>
                            <div id="technical-challenge" className="content-section">
                                <div className="section-title">solution</div>
                                <img src="./pictures/LifeFootprint/solution.png" alt="The principle of pneumatic device.png" className="mockup-image" />
                            </div>

                            {/* Prototype n°1 */}
                            <ContentCard
                                title="System Design"
                                mainTitle="Prototype n°1"
                                description={`The first prototype 1 outlines the main concepts we aimed to develop for our platform.
                                            We proposed four core features: allowing users to create their own trails, enabling users
                                            to have multiple iterations of trails and maps, providing options for users to manage their
                                            trails and follow or be followed by others, and offering users the ability to receive feedback
                                            through comments, thumbs-ups, and likes. The sketches are rough and may be unclear
                                            without further explanation; however, this prototype was essential in the development
                                            process of the subsequent iterations.`}
                                img="./pictures/LifeFootprint/Original Sketch.png"
                            />

                            {/* Prototype n°2 */}
                            <div id="Prototype n°2" className="content-section">
                                <div className="section-title">Prototype n°2</div>
                                <div>The second version of the prototype builds on the original sketches to form the framework
                                    for several of the main basic pages of the system. The content that should be included in
                                    these pages is further designed in Figma in the form of a low-fidelity prototype. It also
                                    defines the form in which the functionality possessed by the system will be presented to
                                    the user. Finally, the design style of the whole system was designed and defined.
                                </div>
                            </div>

                            {/* Prototype n°2-Home page */}
                            <ContentCard
                                title="System Design"
                                mainTitle="Prototype n°2-Home page"
                                description={`The main page consists of a search box, a trail catalog, and a bottom navigation bar.
                                            Through this page, users can use the search box to find the tracks that exist in the
                                            system or that they are interested in. The trail catalog in the middle presents the user
                                            with information about the track in the form of cards, including sharers and images. The
                                            bottom navigation bar allows the user to go to the home page, the creation page, and the
                                            user profile page.`}
                                img="./pictures/LifeFootprint/homepage.png"
                            />

                            {/* Prototype n°2-Trail viewing and iterations */}
                            <ContentCard
                                title="System Design"
                                mainTitle="Prototype n°2-Trail viewing and iterations"
                                description={`By clicking on the trail catalog the user can view a detailed page of trails created by
                                            others. At the top of all pages, there is a back arrow that allows the user to go back to
                                            the previous page. There is also an avatar of the sharer next to it. In the trail page, the
                                            user can browse the trail points created by the sharer on the map. In the middle of the
                                            page, you can see the description and feelings written by the sharer. And the user can
                                            leave a comment at the bottom. Users can access the track details page by clicking on the
                                            track point on the map. Here they can see the images added by the sharer. And finally,
                                            there is the track iteration page where users can create iterations of the sharer’s track on
                                            the map.`}
                                img="./pictures/LifeFootprint/trailviewinganditerations.png"
                            />

                            {/* Prototype n°2-Trail creation */}
                            <ContentCard
                                title="System Design"
                                mainTitle="Prototype n°2-Trail creation"
                                description={`Users can access the track creation page by clicking the Add button in the bottom nav-
                                            igation bar. On this page, users will add their track points by clicking anywhere on the
                                            map. These track points will be connected in a sequential order at the bottom of the
                                            page. Users can also click into each track point to add their picture and feelings to it.`}
                                img="./pictures/LifeFootprint/trailcreation.png"
                            />

                            {/* Design styles of system */}
                            <ContentCard
                                title="System Design"
                                mainTitle="Design styles of system"
                                description={`Here the design style of the whole system is defined. This includes three different color
                                            schemes and gradient colors. The size, color, and font of the main header, subheader, and
                                            text. There are also mouse hover animations, button color schemes and sizes, avatar box
                                            sizes, and back arrows.`}
                                img="./pictures/LifeFootprint/designstyles.png"
                            />

                            {/* Prototype n°3 */}
                            <div id="Prototype n°3" className="content-section">
                                <div className="section-title">Prototype n°3</div>
                                <div>This prototype is a high-fidelity representation of the social application we are
                                    developing. We did not include all of the visual elements in this version of our platform;
                                    in fact, we created around fifty visuals in total. Including all of them in this report would
                                    lead to redundancy and lack of relevance. However, we have selected the key visuals that
                                    best illustrate the functionality of the application while avoiding unnecessary repetition.
                                </div>
                            </div>

                            {/* USER INTERACTIONS */}
                            <ContentCard
                                title="USER INTERACTIONS"
                                mainTitle="Feed page"
                                description={`The goal is to promote interactions between users, so the main page of our application is
                                            a feed displaying a continuous stream of posts and recommendations. On this page, users
                                            can easily access a profile by clicking on the profile picture`}
                                img="./videos/Feed.mp4"
                                mediaType="video"
                            />

                            {/* USER INTERACTIONS */}
                            <ContentCard
                                title="USER INTERACTIONS"
                                mainTitle="User profile"
                                description={`The structure of a profile contains essential information such as the number of followers,
                                            followings, and likes. Additionally, all of the user’s posts and metadata about these posts
                                            are available on this page. This mechanism is inspired by successful social platforms like
                                            Instagram`}
                                img="./videos/profile.mp4"
                                mediaType="video"
                            />

                            {/* USER INTERACTIONS */}
                            <ContentCard
                                title="USER INTERACTIONS"
                                mainTitle="Trail exploration and improvement"
                                description={`A key feature of our platform is the visualization of paths created by other users. These
                                            paths are displayed on a map, similar to a route on Google Maps. Aside from the route
                                            itself, additional information is provided on this page, such as the name of the user who
                                            created the path. Users can also interact with the post by liking, loving, or commenting on
                                            it. Comments are displayed at the bottom of the screen, with each commenter identified
                                            by their name and profile picture. Lastly, anyone viewing the post can react to other
                                            users’ comments by giving them a heart.`}
                                img="./videos/trailviewanditerations.mp4"
                                mediaType="video"
                            />

                            {/* USER INTERACTIONS */}
                            <ContentCard
                                title="USER INTERACTIONS"
                                mainTitle="Path manipulations and publications"
                                description={`While building their path, the user can add stops at key points along their route. To do
                                            this, they need to select the stop they want to add to the map and drag it to the desired
                                            location. Repeating this action allows the user to create paths of varying complexity.
                                            After carefully designing their route, users can proceed to publish it. To do so, they need
                                            to enter a title and a description that explains the path. This information is intended for
                                            future users who might be interested in following this route.`}
                                img="./videos/path.mp4"
                                mediaType="video"
                            />

                            {/* USER INTERACTIONS */}
                            <ContentCard
                                title="USER INTERACTIONS"
                                mainTitle="Path manipulations and publications"
                                description={`The user has the option to attach photos and videos to the various stops they have
                                            placed on the map. This feature allows those who view the route to better visualize and
                                            understand the path they are about to follow.`}
                                img="./videos/picturespub.mp4"
                                mediaType="video"
                            />

                            <div id="next-steps" className="content-section">
                                <div>
                                    Qualitative and Quantitative Analysis
                                </div>
                                <div className="section-title">
                                    Tasks
                                </div>
                                <div className="image-content">
                                    <img src="./pictures/LifeFootprint/tasks.png" alt="sketch1.png" className="mockup-image" />
                                </div>
                            </div>
                            <div id="evaluation" className="content-section">
                                <div className="section-title">Evaluation Results</div>
                                <div className="main-heading">The scale ranged from 1 to 5, with 1 for "strongly disagree," 2 for "disagree," 3 for "neutral," 4 for "agree," and 5 for "strongly agree.</div>
                                <div className="image-content">
                                    <img src="./R/Linecharts.png" alt="sketch1.png" className="mockup-image" />
                                </div>
                            </div>
                                    
                            <div className="content-section">
                                <div className="section-title">Key Findings</div>
                                    <div className="section-ol">
                                        <ol>
                                            <li>Profile interactions need clearer visual cues: users expressed a need for clearer visual
                                                cues when interacting with other users’ profiles to make navigation and engagement
                                                more intuitive.</li>
                                                <div className="horizontal-line-project"></div>
                                            <li>Challenges in creating new tracks: many participants found the process of creating
                                                new tracks difficult. The drag-and-drop feature for placing points was not intuitive
                                                and the interaction with the map was glitchy. Users felt uncertain when select-
                                                ing and dragging points and noted that clearer feedback during the process would
                                                significantly improve their experience.</li>
                                                <div className="horizontal-line-project"></div>
                                            <li>Smooth interactions with comments and feedback elements: Users reported that
                                                interactions with comments, likes, and reviews were smooth and intuitive, making
                                                this aspect of the interface user-friendly.</li>
                                                <div className="horizontal-line-project"></div>
                                            <li>Difficulty Viewing and Comparing Trail Iterations: Participants found it challenging
                                                to view and compare different iterations of user-created trails. It was often unclear
                                                which trails belonged to whom, especially when there were multiple trails on the
                                                map.</li>
                                                <div className="horizontal-line-project"></div>
                                            <li>User-friendly interface with some usability challenges: While participants generally
                                                found the interface to be user-friendly and intuitive, they had challenges creating
                                                trails, especially with the drag-and-drop functionality. Many expressed a preference
                                                for displaying routes as continuous lines rather than disconnected points.</li>
                                        </ol>
                                    </div>
                            </div>

                            {/* <div className="content-card">
                                <iframe
                                    style={{ border: "1px solid rgba(0, 0, 0, 0.1)", width: "100%", height: "100%" }}
                                    src={"https://embed.figma.com/proto/DW9uBQU3uTHt7XpyfMvZbE/life-footprint-final?page-id=0%3A1&node-id=1-42&node-type=frame&viewport=1916%2C751%2C0.14&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A819&embed-host=share"}
                                    allowFullScreen
                                />
                            </div> */}
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