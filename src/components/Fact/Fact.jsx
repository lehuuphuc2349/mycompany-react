import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import icon1 from "../../images/icon-4.png";
import icon2 from "../../images/icon-1.png";
import icon3 from "../../images/icon-8.png";
import icon4 from "../../images/icon-6.png";
import "./Fact.css";
function Fact() {
  return (
    <div className="fact">
      <Container>
        <Row className="align-items-center">
          <Col lg={3} md={6}>
            <div className="fact-item">
              <img src={icon1} alt="" />
              <h2>Qualified Team</h2>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="fact-item">
              <img src={icon2} alt="" />
              <h2>Individual Approach</h2>
            </div>
          </Col>

          <Col lg={3} md={6}>
            <div className="fact-item">
              <img src={icon3} alt="" />
              <h2>100% Success</h2>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="fact-item">
              <img src={icon4} alt="" />
              <h2>100% Satisfaction</h2>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Fact;
