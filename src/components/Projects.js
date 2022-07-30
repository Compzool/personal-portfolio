import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import pokedex from "../assets/img/pokedex.png";
import twitch from "../assets/img/twitch.png";
import letsStudy from "../assets/img/lets-study.png";
import tiktok from "../assets/img/tiktok.png";
import mingle from "../assets/img/mingle.png";
import smartgas from "../assets/img/smartgas.png";
import licensePlate from "../assets/img/license-plate.png";
import flappy from "../assets/img/flappybird-1.png";
import flappy2 from "../assets/img/flappybird-2.png";
import popcorn from "../assets/img/popcorn.png";
import travel from "../assets/img/travel.png";
import colorSharp2 from "../assets/img/color-sharp2.png";



export const Projects = () => {

  const projects = [
    {
      title: "Pokedex",
      description: "provide information regarding the various species of Pokémon.",
      imgUrl: pokedex,
    },
    {
      title: "Twitch Clone",
      description: "Live Stream and Chat.",
      imgUrl: twitch,
    },
    {
      title: "Let's Study",
      description: "Online studying-teaching and meeting rooms.",
      imgUrl: letsStudy,
    },
    {
      title: "Tiktok Clone",
      description: "Upload videos - like, share, comment and follow.",
      imgUrl: tiktok,
    },
    {
      title: "Let's mingle",
      description: "Dating app - match, chat, videocall, send images...",
      imgUrl: mingle,
    },
    {
      title: "Smart Gas",
      description: "Monitor fuel consumption, gas prices, paying history...",
      imgUrl: smartgas,
    },
  ];

  const projects2 = [
    {
      title: "ALPR",
      description: "Artificial Intelligence - Automatic license plate recognizer & Plate-Number recorder.",
      imgUrl: licensePlate,
    },
    {
      title: "Flappy Bird",
      description: "Full-Stack flappy bird built with C++.",
      imgUrl: flappy,
    },
    {
      title: "Flappy Bird - Neural Networks",
      description: "Deep learning flappy bird using neuroevolution of augmenting topologies.",
      imgUrl: flappy2,
    },
  ];

  const projects3 = [
    {
      title: "Popcorn Heaven",
      description: "Front-end movie on demand website - altogether database.",
      imgUrl: popcorn,
    },
    {
      title: "KAM - Travel Agency",
      description: "Front-end travel agency website - check available flights, book...",
      imgUrl: travel,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            
              
                <h2>Projects</h2>
                <p>Below you'll find a plethora of the stupefying projects I made.
                  <br/>All are found in my github repository.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          projects3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              
            
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background"></img>
    </section>
  )
}