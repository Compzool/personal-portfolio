import { Col,Row,Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg"
import meter2 from "../assets/img/meter2.svg"
import meter3 from "../assets/img/meter3.svg"
import colorSharp from "../assets/img/color-sharp.png"
export const Skills = () => {
  const responsive = {
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
    <section className='skill' id='skills'>
      <Container>
        <Row>
          <Col>
            <div className='skill-bx'>
              <h2>
                Skills
              </h2>
              <p>My current knowledge statistics and areas of expertise.<br></br></p>
              <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                <div className="item">
                  <img src={meter2} alt={"webdev-percent"}/>
                  <h5>Web Development</h5>
                </div>
                <div className="item" >
                  <img src={meter1} alt={"mobiledev-percent"} />
                  <h5>Mobile Development</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt={"hardware-percent"}/>
                  <h5>Hardware</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt={"gamiing-percent"}/>
                  <h5>Gaming</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt={"color-sharp"}/>
    </section>
  )
}