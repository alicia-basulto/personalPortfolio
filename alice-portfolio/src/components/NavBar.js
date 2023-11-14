import { useEffect, useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import logo from '../assets/img/logo.svg'
import navIconLikedIn from '../assets/img/nav-icon1.svg'
import navIconGitHub from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            if (window.scrollY > 0) {
                // Calculate new position 
                var newPositionTop = window.scrollY + "px";
                // Apply the new position
                document.getElementById('canvas').style.top = newPositionTop;
            }

        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const handleEmailButtonClick = () => {
        const subject = encodeURIComponent('Portfolio: Request for Full CV');
        const bodyText = encodeURIComponent('Hello Alicia!\n\n My name is [YOUR NAME] and I am reaching out to express my interest in your profile. I would greatly appreciate it if you could provide me with your full CV for further consideration.\n\nThank you in advance for your time.\n\nBest regards,');

        window.location.href = `mailto:alicia.basulto.c@gmail.com?subject=${subject}&body=${encodeURIComponent(bodyText)}`;
    };

    const onUpdateActiveLink = (value) => {
        window.
            setActiveLink(value);
    }

    return (

        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toogler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" onClick={() => onUpdateActiveLink('home')} className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}>Home</Nav.Link>
                        <Nav.Link href="#skills" onClick={() => onUpdateActiveLink('skills')} className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}>Skills</Nav.Link>
                        <Nav.Link href="#projects" onClick={() => onUpdateActiveLink('projects')} className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}>Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://es.linkedin.com/in/aliciabasulto" target="_blank"><img src={navIconLikedIn} alt="LinkedIN" /></a>
                            <a href="https://github.com/alicia-basulto" target="_blank" rel="noopener noreferrer"><img className="github-icon" src={navIconGitHub} alt="https://github.com/alicia-basulto" /></a>
                            <a href="#"><img src={navIcon3} alt="" /></a>

                        </div>
                        <button className="contact-button" onClick={handleEmailButtonClick}><span>Full CV</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>)
}