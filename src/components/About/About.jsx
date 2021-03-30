import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import about1 from "../../images/about-2.jpg";
import about2 from "../../images/about-1.jpg";
import "./About.css";
function About() {
  return (
    <div className="about">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <div className="about-img">
              <div className="about-img-1">
                <img src={about1} alt="" />
              </div>
              <div className="about-img-2">
                <img src={about2} alt="" />
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="section-header">
              <p>Learn About Us</p>
              <h2>25 Years Experience</h2>
            </div>
            <div className="about-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec pretium mi. Curabitur facilisis ornare velit non
                vulputate. Aliquam metus tortor, auctor id gravida condimentum,
                viverra quis sem.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec pretium mi. Curabitur facilisis ornare velit non
                vulputate. Aliquam metus tortor, auctor id gravida condimentum,
                viverra quis sem. Curabitur non nisl nec nisi scelerisque
                maximus. Aenean consectetur convallis porttitor. Aliquam
                interdum at lacus non blandit.
              </p>
              <a href="" className="btn">
                Learn More
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
