/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Col, Row, Container } from "react-bootstrap";
import colorSharp from "../assets/img/color-sharp.png";
import logoAngular from "../assets/img/angular.svg";
import logoAws from "../assets/img/aws.svg";
import logoPython from "../assets/img/python.svg";
import logoGit from "../assets/img/git.svg";
import logoMicroservice from "../assets/img/microservice.svg";
import logoNetwork from "../assets/img/network.svg";
import logoTesting from "../assets/img/testing.svg";




import logoDockerKubernetes from "../assets/img/docker.svg";



export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>Here are some of my skills applied throughout my experience. Always evolving and learning!</p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={logoAws} alt="aws logo" />
                                    <h5>Amazon Web Services</h5>
                                </div>
                                <div className="item">
                                    <img src={logoPython} alt="python logo" />
                                    <h5>Python</h5>
                                </div>
                                <div className="item">
                                    <img src={logoDockerKubernetes} alt="docker and kubernetes logos" />
                                    <h5>Containerization and Orchestration with Docker and Kubernetes</h5>
                                </div>
                                <div className="item">
                                    <img src={logoGit} alt="git logo" />
                                    <h5>Version Control with Git</h5>
                                </div>
                                <div className="item">
                                    <img src={logoMicroservice} alt="microservices logo" />
                                    <h5>Microservices with Spring Boot, Java, Kotlin, Jenkins</h5>
                                </div>
                                {/*
                                /*<div className="item">
                                    <svg width="160" height="160" viewBox="0 0 160 160" style={{ transform: 'rotate(-1deg)' }}>
                                        <circle r="70" cx="80" cy="80" fill="transparent" stroke="#e0e0e0" strokeWidth="12px"></circle>
                                        <defs>
                                            <linearGradient id="gradiente" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" style={{ stopColor: '#FFC300', stopOpacity: 1 }} />
                                                <stop offset="100%" style={{ stopColor: '#760FAA', stopOpacity: 1 }} />
                                            </linearGradient>
                                        </defs>


                                        <circle
                                            r="70"
                                            cx="80"
                                            cy="80"
                                            fill="transparent"
                                            stroke="url(#gradiente)"
                                            strokeLinecap="round"
                                            strokeWidth="12px"
                                            strokeDasharray="439.6px"
                                            strokeDashoffset="200.9px"  //porcentaje
                                        ></circle>
                                        ></circle>
                                        
                                        <text x="50%" y="50%" textAnchor="middle" dy="0.3em" fontWeight="bold" fontSize="1.5em" fill="#fff">
                                            75%
                                        </text>
                                    </svg>
                                    <h5>Web Development</h5>
                                </div>

                                <div className="item">
                                    <svg width="160" height="160" viewBox="0 0 160 160" style={{ transform: 'rotate(-1deg)' }}>
                                        <circle r="70" cx="80" cy="80" fill="transparent" stroke="#e0e0e0" strokeWidth="12px"></circle>
                                        <defs>
                                            <linearGradient id="gradiente" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" style={{ stopColor: '#FFC300', stopOpacity: 1 }} />
                                                <stop offset="100%" style={{ stopColor: '#760FAA', stopOpacity: 1 }} />
                                            </linearGradient>
                                        </defs>


                                        <circle
                                            r="70"
                                            cx="80"
                                            cy="80"
                                            fill="transparent"
                                            stroke="url(#gradiente)"
                                            strokeLinecap="round"
                                            strokeWidth="12px"
                                            strokeDasharray="439.6px"
                                            strokeDashoffset="200.9px"  //porcentaje
                                        ></circle>
                                        ></circle>
                                  
                                        <text x="50%" y="50%" textAnchor="middle" dy="0.3em" fontWeight="bold" fontSize="1.5em" fill="#fff">
                                            75%
                                        </text>
                                    </svg>
                                    <h5>Web Development</h5>
                                </div>

                                <div className="item">
                                    <svg width="160" height="160" viewBox="0 0 160 160" style={{ transform: 'rotate(-1deg)' }}>
                                        <circle r="70" cx="80" cy="80" fill="transparent" stroke="#e0e0e0" strokeWidth="12px"></circle>
                                        <defs>
                                            <linearGradient id="gradiente" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" style={{ stopColor: '#FFC300', stopOpacity: 1 }} />
                                                <stop offset="100%" style={{ stopColor: '#760FAA', stopOpacity: 1 }} />
                                            </linearGradient>
                                        </defs>


                                        <circle
                                            r="70"
                                            cx="80"
                                            cy="80"
                                            fill="transparent"
                                            stroke="url(#gradiente)"
                                            strokeLinecap="round"
                                            strokeWidth="12px"
                                            strokeDasharray="439.6px"
                                            strokeDashoffset="200.9px" //porcentaje
                                        ></circle>
                                        
                                        <text x="50%" y="50%" textAnchor="middle" dy="0.3em" fontWeight="bold" fontSize="1.5em" fill="#fff">
                                            80%
                                        </text>
                                    </svg>
                                    <h5>Web Development</h5>
                                </div>*/ }
                                <div className="item">
                                    <img src={logoTesting} alt="Testing logo" />
                                    <h5>Issue Tracking and Software Testing(QA) with Jira, Confluence and Postman</h5>
                                </div>
                                
                                <div className="item">
                                    <img src={logoAngular} alt="Angular logo" />
                                    <h5>Web development: Angular, React, Node.js, MySQL</h5>
                                </div>
                                <div className="item">
                                    <img src={logoNetwork} alt="Network logo" />
                                    <h5>Networking Knowledge</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} />
        </section>
    )
}