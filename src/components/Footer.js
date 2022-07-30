import { Col, Container, Row } from "react-bootstrap"
import logo from '../assets/img/dark-matter3.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end" style={{paddingTop:20}}>
          <div className="social-icon">
              <a href="https://www.linkedin.com/in/compengyassin" rel="noreferrer" target="_blank"><img src={navIcon1} alt="Linkedin" /></a>
              <a href="https://www.github.com/Compzool" rel="noreferrer" target="_blank"><img src={navIcon2} alt="Github" /></a>
              <a href="https://www.instagram.com/iamohammadyassin/" rel="noreferrer" target="_blank"><img src={navIcon3} alt="Instagram" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}