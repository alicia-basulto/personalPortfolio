import { Col, Row, Container, Tab, Nav } from "react-bootstrap";
import caleidoscopioNew from "../assets/img/caleidoscopioNew.png"
import caleidoscopioOld from "../assets/img/caleidoscopioOld.png"
import photographyShop from "../assets/img/photographyShop.png"
import dslrlive from "../assets/img/dslrlive.png"
import nttdata from "../assets/img/nttdata.png"
import etsit from "../assets/img/etsit.png"

import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';
export const Projects = () => {
  const personalProjects = [
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
    {
      title: "DSLR Live",
      description: "Design & Development",
      description2: "",
      imgUrl: dslrlive,
      link:"https://www.youtube.com/watch?v=PwuJhHQZlXA&ab_channel=EscuelaT%C3%A9cnicaSuperiordeIngenierosdeTelecomunicaci%C3%B3n.UniversidaddeValladolid",
    },
    {
      title: "Photography Shop",
      description: "Design & Development",
      description2: "Practice for the TAW university course",
      imgUrl: photographyShop,
      link:"",
    }
  ];

  const workExperience = [
    {
      title: "Bachelor's Degree in Specific Telecommunication Technologies Engineering",
      description: "Sep. 2016 - June 2021",
      description2: "Valladolid, Spain",
      imgUrl: etsit,
      link:"https://www.tel.uva.es/docencia/grados/itesp.htm",
    },
    {
      title: "NTT Data - Internship",
      description: "Oct. 2020 - June 2021",
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
      title: "NTT Data - Solutions Analyst ",
      description: "Sep. 2022 - Sep. 2023",
      description2: "Barcelona",
      imgUrl: nttdata,
      link:"",
    },
    {
      title: "NTT Data - Solutions Specific Knowledge Analyst ",
      description: "Sep. 2023 - Nov. 2023",
      description2: "Barcelona",
      imgUrl: nttdata,
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