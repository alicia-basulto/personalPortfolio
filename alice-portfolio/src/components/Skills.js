import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Col, Row, Container } from "react-bootstrap";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
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
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
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
                                            strokeDashoffset="200.9px" /* porcentaje*/
                                        ></circle>
                                        {/* Añadir número de porcentaje en el centro */}
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
                                            strokeDashoffset="200.9px" /* porcentaje*/
                                        ></circle>
                                        {/* Añadir número de porcentaje en el centro */}
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
                                            strokeDashoffset="200.9px" /* porcentaje*/
                                        ></circle>
                                        {/* Añadir número de porcentaje en el centro */}
                                        <text x="50%" y="50%" textAnchor="middle" dy="0.3em" fontWeight="bold" fontSize="1.5em" fill="#fff">
                                            80%
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
                                            strokeDashoffset="200.9px" /* porcentaje*/
                                        ></circle>
                                        {/* Añadir número de porcentaje en el centro */}
                                        <text x="50%" y="50%" textAnchor="middle" dy="0.3em" fontWeight="bold" fontSize="1.5em" fill="#fff">
                                            75%
                                        </text>
                                    </svg>
                                    <h5>Web Development</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
    )
}