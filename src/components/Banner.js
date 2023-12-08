/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import {useState, useEffect} from "react";
import {Container, Row, Col} from "react-bootstrap"
import {ArrowRightCircle} from "react-bootstrap-icons"
import imageHeader from "../assets/img/header-img.svg"
import headerImg from "../assets/img/header-img.svg";

import TrackVisibility from 'react-on-screen';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(100 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "software engineer", "Network engineer", "Photographer" ];
  const period = 800;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  const handleEmailButtonClick = () => {
    window.location.href = 'mailto:alicia.basulto.c@gmail.com';
  };
  
  
    return(
     
      <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Alicia`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Software engineer", "Network engineer", "Photographer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Graduated in Engineering of Specific Telecommunications Technologies specializing in Telematics. Currently as Solutions Specific Knowledge in NTTDATA since October 2020. Tech enthusiast developing cloud projects for AWS Solutions Architect certification.</p>
                  <button onClick={handleEmailButtonClick}>Let’s Connect <ArrowRightCircle size={40} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
    )
}