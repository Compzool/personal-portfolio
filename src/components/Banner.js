import { useState, useEffect} from "react"
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../assets/img/header-img.svg"
import 'animate.css';
export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "Mobile Developer", "Computer Engineer", "Gamer"]
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    },delta)//delta is the interval

    return () => {clearInterval(ticker)};
  },[text])//run everytime the text gets updated

  const tick = () => {
    let i = loopNum % toRotate.length
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);


    setText(updatedText);

    if(isDeleting){
      setDelta(prevDelta => prevDelta/2)
    }

    if(!isDeleting && updatedText === fullText){
      setIsDeleting(true);
      setDelta(period);

    }else if(isDeleting && updatedText === ''){
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }

  }

//https://youtu.be/iik25wqIuFo
  return (
    <section className="banner" id="home">
      <Container>
        
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>{`Hi I'm Mohammad`}<br/><span className="wrap">{text}</span></h1>
            <p>Welcome to my humble website, I am a software engineer with an extensive experience in mobile and web development.</p>
           <a href="https://youtu.be/iik25wqIuFo" target="_blank" style={{textDecoration: 'none'}}>
             <button onClick={() => console.log("Connect")}>Take this portal<ArrowRightCircle size={25}></ArrowRightCircle></button>
           </a>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img"/>
          </Col>
        </Row>
      </Container>
    </section>
  )
}