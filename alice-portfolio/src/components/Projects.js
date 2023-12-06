import { Col, Row, Container, Tab, Nav } from "react-bootstrap";
import caleidoscopioNew from "../assets/img/caleidoscopioNew.png"
import caleidoscopioOld from "../assets/img/caleidoscopioOld.png"
import photographyShop from "../assets/img/photographyShop.png"
import dslrlive from "../assets/img/dslrlive.png"
import nttdata from "../assets/img/nttdata.png"
import etsit from "../assets/img/etsit.png"
import localNews from '../assets/img/localNews.jpg'
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';
import virtualCloset from '../assets/img/virtualCloset.jpg'
import adventOfCode from '../assets/img/adventofcode.jpg'
import handson from '../assets/img/handson.jpg'
export const Projects = () => {
  const personalProjects = [
    {
      title: "DSLR Live",
      description: "Design & Development",
      description2: "",
      imgUrl: dslrlive,
      link:"https://www.linkedin.com/pulse/dslr-live-unleashing-innovation-intersection-alicia-basulto-qjbbc%3FtrackingId=GnoPGt7HnU0K2ARx2EXleQ%253D%253D/?trackingId=GnoPGt7HnU0K2ARx2EXleQ%3D%3D",
    },
    {
      title: "Photography Shop",
      description: "Design & Development",
      description2: "Practice for the TAW university course",
      imgUrl: photographyShop,
      link:"",
    },
    {
      title: "Local News Bot",
      description: "Design & Development & Maintenance",
      description2: "Bot alerts on new local headlines.",
      imgUrl: localNews,
      link:"https://github.com/alicia-basulto/LocalNews-bot",
    },
    {
      title: "Caleidoscopio Atelier Actual Website",
      description: "Design & Development & Maintenance",
      description2: "",
      imgUrl: caleidoscopioNew,
      link:"https://caleidoscopioatelier.com/",
    },
    {
      title: "Caleidoscopio Atelier Previous Website",
      description: "Design & Development & Maintenance",
      description2: "",
      imgUrl: caleidoscopioOld,
      link:"",
    },
   
  ];

  const workExperience = [    
    {
      title: "NTT Data - Solutions Specific Knowledge Analyst ",
      description: "Sep. 2023 - Nov. 2023",
      description2: "Barcelona",
      imgUrl: nttdata,
      link:"",
    },
    {
      title: "NTT Data - Solutions Analyst ",
      description: "Sep. 2022 - Sep. 2023",
      description2: "Barcelona",
      imgUrl: nttdata,
      link:"",
    },
     {
      title: "NTT Data - Solutions Assistant ",
      description: "Sep. 2021 - Sep. 2022",
      description2: "Barcelona",
      imgUrl: nttdata,
      link:"",
    },
     {
      title: "NTT Data - Internship",
      description: "Oct. 2020 - June 2021",
      description2: "Barcelona",
      imgUrl: nttdata,
      link:"",
    },
    {
      title: "Bachelor's Degree in Specific Telecommunication Technologies Engineering",
      description: "Sep. 2016 - June 2021",
      description2: "Valladolid, Spain",
      imgUrl: etsit,
      link:"https://www.tel.uva.es/docencia/grados/itesp.htm",
    },
  ];
  const actualProjects = [    
    {
      title: "Virtual Closet",
      description: "Currently developing",
      description2: "Application to automatically tag and categorise clothes in the wardrobe",
      imgUrl: virtualCloset,
      link:"",
    },
    {
      title: "Advent of Code",
      description: "",
      description2: "",
      imgUrl: adventOfCode,
      link:"",
    },
    {
      title: "Hands-on Challenge AWS",
      description: "Solutions Architect Associate Level",
      description2: "",
      imgUrl: handson,
      link:"",
    },
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>These endeavors showcase some of my skills and expertise in technology, demonstrating a diverse range of accomplishments. From crafting impactful solutions to collaborating on dynamic team projects, each entry reflects my curiosity to technology. Explore the snapshots of my journey, where I've applied my skills to deliver successful outcomes and contribute to meaningful initiatives.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Personal Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Experience</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Current Projects</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            personalProjects.map((project, index) => {
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
                            
                            workExperience.map((project, index) => {
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
                            
                            actualProjects.map((project, index) => {
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
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )

}