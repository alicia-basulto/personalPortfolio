import { useEffect, useState } from "react";
import {Container, Navbar, Nav} from "react-bootstrap";
import logo from '../assets/img/logo.svg'
import navIconLikedIn from '../assets/img/nav-icon1.svg'
import navIconGitHub from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'
/*import {
    BrowserRouter as Router
  } from "react-router-dom";
  */
export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] =useState(false);
    useEffect(()=>{
        const onScroll =()=>{
            if(window.scrollY > 50){
                setScrolled(true);
            }else{
                setScrolled(false);
            }
            
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    },[])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
        <Container>
            <Navbar.Brand href="#home">
                <img src={logo} alt="Logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toogler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#home" onClick={ ()=> onUpdateActiveLink('home')}className={activeLink === 'home' ? 'active navbar-link': 'navbar-link'}>Home</Nav.Link>
                    <Nav.Link href="#skills" onClick={ ()=> onUpdateActiveLink('skills')}className={activeLink === 'skills' ? 'active navbar-link': 'navbar-link'}>Skills</Nav.Link>
                    <Nav.Link href="#projects" onClick={ ()=> onUpdateActiveLink('projects')}className={activeLink === 'projects' ? 'active navbar-link': 'navbar-link'}>Projects</Nav.Link>
                </Nav>
                <span className="navbar-text">
                    <div className="social-icon">
                        <a href="https://es.linkedin.com/in/aliciabasulto"><img src={navIconLikedIn} alt="LinkedIN"/></a>
                        <a  href="https://github.com/alicia-basulto"><img className ="github-icon" src={navIconGitHub} alt="https://github.com/alicia-basulto"/></a>
                        <a href="#"><img src={navIcon3} alt=""/></a>

                    </div>
            <button className="contact-button" onClick={() => console.log('connect')}><span>Let's Connect</span></button>
                </span>
            </Navbar.Collapse>
        </Container>
    </Navbar>)
}