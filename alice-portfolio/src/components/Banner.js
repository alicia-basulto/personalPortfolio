import {useState, useEffect} from "react";
import {Container, Row, Col} from "react-bootstrap"
import {ArrowRightCircle} from "react-bootstrap-icons"
import imageHeader from "../assets/img/header-img.svg"

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(100 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "software engineer", "Network engineer", "photographer" ];
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
  
    return(
        <section className="banner" id="home"> 
            <Container>
                <Row className="align-itms-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome</span>
                        <h1>{`Hi! I'm Alicia`} <span className="txt-rotate" dataPeriod="10" data-rotate='[ "software engineer", "Network engineer", "photographer" ]'><span className="wrap">{text}</span></span></h1>
                        <p>description</p>
                        <button onClick={()=> console.log('connect')}>Let's connect <ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}></Col>
                    <img src={imageHeader} alt="Header image">

                    </img>
                </Row>
            </Container>
        </section>
    )
}