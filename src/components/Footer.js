/* eslint-disable no-unused-vars */
import { Container, Row, Col } from "react-bootstrap";

import logo from "../assets/img/logo.svg";
import navIconLikedIn from '../assets/img/nav-icon1.svg'
import navIconGitHub from '../assets/img/nav-icon2.svg'
import navIconInstagram from '../assets/img/nav-icon3.svg'

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://es.linkedin.com/in/aliciabasulto" target="_blank" rel="noreferrer"><img src={navIconLikedIn} alt="LinkedIN" /></a>
                            <a href="https://github.com/alicia-basulto" target="_blank" rel="noopener noreferrer"><img className="github-icon" src={navIconGitHub} alt="https://github.com/alicia-basulto" /></a>
                            <a href="https://www.instagram.com/orbitphotos/?hl=es" target="_blank" rel="noopener noreferrer"><img src={navIconInstagram} alt="" /></a>
                        </div>
                        <p>Copyright 2022-2023 Alicia Basulto</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}